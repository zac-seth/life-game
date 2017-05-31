import { createReducer } from "@/utils/store"
import names from "@/store/names"
import initialState from "./initial-state"

const { mutations } = names

export default createReducer({
    [mutations.ADD_LAYER_TO_STACK]({ stack, types }, layer) {
        return {
            stack: [...stack, layer],
            types: { ...types }
        }
    },

    [mutations.REMOVE_LAYER_FROM_STACK]({ stack, types }, { type, name }) {
        return {
            stack: stack.filter(layer => layer.type !== type || layer.name !== name),
            types: { ...types }
        }
    },

    [mutations.SET_LAYER_VISIBILITY]({ stack, types }, { type, name }) {
        return {
            stack: [...stack],
            types: {
                ...types,
                [type]: {
                    ...types[type],
                    [name]: !types[type][name]
                }
            }
        }
    }
}, initialState)