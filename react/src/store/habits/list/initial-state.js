import deepFreeze from "deep-freeze"
import * as habitScales from "../habit-scales"

export const loadedHabits = [
    {
        id: 1,
        name: "Habit 1",
        desc: "This is the first habit.",
        scale: habitScales.DAILY
    }, {
        id: 2,
        name: "Habit 2",
        desc: "I really want this one to happen.",
        scale: habitScales.WEEKLY
    }, {
        id: 3,
        name: "Habit 3",
        desc: "This will change my life!",
        scale: habitScales.DAILY
    }
]

export default deepFreeze([])