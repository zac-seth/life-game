import deepFreeze from "deep-freeze"

export default deepFreeze({
    stack: [],
    types: {
        modal: {
            createHabit: false
        },
        window: {
            achievements: false,
            habits: false,
            profile: false
        }
    }
})