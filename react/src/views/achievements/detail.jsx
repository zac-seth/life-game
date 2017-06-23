import React from "react"
import { connect } from "react-redux"
import Text from "elements/text"

let AchievementDetail = () => (
    <Text>Here goes the achievement detail.</Text>
)

AchievementDetail = connect()(AchievementDetail)

export default AchievementDetail