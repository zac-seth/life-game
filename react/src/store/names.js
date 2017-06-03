import deepFreeze from "deep-freeze"

export default deepFreeze({
    mutations: {
        // Application
        ADD_LAYER_TO_STACK: "ADD_LAYER_TO_STACK",
        REMOVE_LAYER_FROM_STACK: "REMOVE_LAYER_FROM_STACK",
        SET_EXPANDED_HABITS: "SET_EXPANDED_HABITS",
        SET_LAYER_VISIBILITY: "SET_LAYER_VISIBILITY",
        SET_SCALE_FILTER: "SET_SCALE_FILTER",

        // Habits
        CREATE_HABIT: "CREATE_HABIT",
        SET_HABITS: "SET_HABITS"
    }
})