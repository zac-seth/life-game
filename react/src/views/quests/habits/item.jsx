import React from "react"
import { Text, QuestListItem } from "@/elements"

const HabitItem = ({ habit, expanded }) => (
    <QuestListItem>
        <Text>{habit.name}</Text>
        {expanded && <Text>{habit.desc}</Text>}
    </QuestListItem>
)

export default HabitItem