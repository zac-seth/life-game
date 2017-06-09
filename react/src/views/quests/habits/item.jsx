import React from "react"
import Text from "@/elements/text"
import QuestListItem from "@/views/quests/quest-list-item"

const HabitItem = ({ habit, expanded }) => (
    <QuestListItem>
        <Text>{habit.name}</Text>
        {expanded && <Text>{habit.desc}</Text>}
    </QuestListItem>
)

export default HabitItem