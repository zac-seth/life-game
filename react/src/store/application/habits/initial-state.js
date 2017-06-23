import deepFreeze from "deep-freeze"
import * as habitScales from "store/habits/habit-scales"

export default deepFreeze({
    expanded: false,
    scaleFilter: habitScales.NONE
})