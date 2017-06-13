import deepFreeze from "deep-freeze"

export default deepFreeze({
    stack: [],
    types: {
        modal: {
            createHabit: false
        },
        window: {
            habits: false,
            blah: false
        }
    }
})