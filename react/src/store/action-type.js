import deepFreeze from "deep-freeze"

export default deepFreeze({
    // achievements
    SET_OBSERVED_ACHIEVEMENT: "SET_OBSERVED_ACHIEVEMENT",
    SET_SELECTED_ACHIEVEMENT: "SET_SELECTED_ACHIEVEMENT",
    UNSET_OBSERVED_ACHIEVEMENT: "UNSET_OBSERVED_ACHIEVEMENT",
    UNSET_SELECTED_ACHIEVEMENT: "UNSET_SELECTED_ACHIEVEMENT",

    // application/layers
    ADD_LAYER_TO_STACK: "ADD_LAYER_TO_STACK",
    BRING_LAYER_TO_TOP_OF_STACK: "BRING_LAYER_TO_TOP_OF_STACK",
    REMOVE_LAYER_FROM_STACK: "REMOVE_LAYER_FROM_STACK",
    SET_LAYER_VISIBILITY: "SET_LAYER_VISIBILITY",

    // application/habits
    SET_EXPANDED_HABITS: "SET_EXPANDED_HABITS",
    SET_SCALE_FILTER: "SET_SCALE_FILTER",

    // disciplines/list
    SET_DISCIPLINES: "SET_DISCIPLINES",

    // habits/create
    CLEAR_CREATE_STATE: "CLEAR_CREATE_STATE",
    SET_INVALID_HABIT_NAME: "SET_INVALID_HABIT_NAME",
    SET_INVALID_HABIT_SCALE: "SET_INVALID_HABIT_SCALE",
    SET_VALID_HABIT_DESC: "SET_VALID_HABIT_DESC",
    SET_VALID_HABIT_NAME: "SET_VALID_HABIT_NAME",
    SET_VALID_HABIT_SCALE: "SET_VALID_HABIT_SCALE",

    // habits/list
    INSERT_HABIT: "INSERT_HABIT",
    SET_HABITS: "SET_HABITS",

    // wallpapers
    SET_WALLPAPER_INDEX: "SET_WALLPAPER_INDEX"
})