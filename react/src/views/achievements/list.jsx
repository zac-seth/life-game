import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import List from "@/elements/list"
import ListItem from "@/elements/list-item"
import Text from "@/elements/text"

let AchievementsList = ({ achievements, onAchievementSelected }) => (
    <List>
        {achievements.map((achievement, index) => 
            <ListItem key={index} onClick={() => onAchievementSelected(achievement)}>
                <Text>{achievement.name}</Text>
            </ListItem>
        )}
    </List>
)

AchievementsList.propTypes = {
    achievements: PropTypes.array.isRequired,
    onAchievementSelected: PropTypes.func.isRequired
}

AchievementsList = connect(({ achievements }) => ({
    achievements
}), dispatch => ({
    onAchievementSelected(achievement) {
        console.log("AchievementList.onAchievementSelected: ", achievement)
    }
}))(AchievementsList)

export default AchievementsList