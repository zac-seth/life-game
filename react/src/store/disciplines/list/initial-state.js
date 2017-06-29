import deepFreeze from "deep-freeze"
import RequirementType from "store/requirement-type"
import { randomId } from "utils/strings"

export function getLoadedDisciplines(habits) {
    return deepFreeze([{
        id: randomId(),
        name: "Basic Fitness",
        desc: "You maintain a basic level of physical fitness through regular light exercise.",
        reqs: [{
            type: RequirementType.HABIT,
            ref: {
                id: habits.find(habit => habit.name === "Basic Workout").id
            }
        }]
    }])
}

export default []