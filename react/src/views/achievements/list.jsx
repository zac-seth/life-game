import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { styled } from "styletron-react"
import {
    toggleObservedAchievement,
    toggleSelectedAchievement
} from "store/achievements/actions"
import GalleryGrid from "elements/layout/gallery/grid"
import GalleryItem from "elements/layout/gallery/item"
import Panel from "elements/panel"
import Text from "elements/text"

const AchievementPanel = styled(Panel, ({ active }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: active ? "#E5C600" : "#EEE",
    ":hover": {
        cursor: "pointer",
        backgroundColor: "#E5C600"
    }
}))

let AchievementsList = ({ achievements, selectedIndex, onAchievementObserved, onAchievementSelected }) => (
    <GalleryGrid cols={8}>
        {achievements.map((achievement, index) => 
            <GalleryItem 
                key={index} 
                onClick={async () => await onAchievementSelected(achievement)} 
                onMouseEnter={async () => await onAchievementObserved(achievement)}
                onMouseLeave={async () => await onAchievementObserved(false)}>
                <AchievementPanel active={index === selectedIndex}>
                    <Text>{achievement.name}</Text>
                </AchievementPanel>
            </GalleryItem>
        )}
    </GalleryGrid>
)

AchievementsList.propTypes = {
    achievements: PropTypes.array.isRequired,
    selectedIndex: PropTypes.number.isRequired,
    onAchievementSelected: PropTypes.func.isRequired
}

AchievementsList = connect(({ achievements }) => {
    const { 
        selected,
        items
    } = achievements
    
    return {
        achievements: items,
        selectedIndex: selected ? items.indexOf(items.find(item => item.name === selected.name)) : -1
    }
}, dispatch => ({
    async onAchievementObserved(achievement) {
        await dispatch(toggleObservedAchievement(achievement))
    },
    async onAchievementSelected(achievement) {
        await dispatch(toggleSelectedAchievement(achievement))
    }
}))(AchievementsList)

export default AchievementsList