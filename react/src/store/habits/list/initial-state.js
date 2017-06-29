import deepFreeze from "deep-freeze"
import { randomId } from "utils/strings"
import * as habitScales from "../habit-scales"

const loadedHabits = deepFreeze([
    {
        id: randomId(),
        name: "Basic Workout",
        desc: "Perform a basic workout every day.",
        scale: habitScales.DAILY
    }, {
        id: randomId(),
        name: "Habit 2",
        desc: "I really want this one to happen.",
        scale: habitScales.WEEKLY
    }, {
        id: randomId(),
        name: "Habit 3",
        desc: "This will change my life!",
        scale: habitScales.DAILY
    }
])

export function getLoadedHabits() {
    return loadedHabits
}

export default deepFreeze([])