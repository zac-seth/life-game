import React from "react"
import { connect } from "react-redux"
import Panel from "elements/panel"
import Text from "elements/text"

let AchievementDetail = ({ achievement }) => {
    if (achievement) {
        return (
            <Panel>
                <Text>{achievement.name}</Text>
                <Text>{achievement.desc}</Text>
            </Panel>
        )
    }
    
    return <Panel><Text>Select an achievement to view its details.</Text></Panel>
}

AchievementDetail = connect(({ achievements }) => {
    const {
        observed,
        selected
    } = achievements
    
    return {
        achievement: observed || selected || false
    }
})(AchievementDetail)

export default AchievementDetail