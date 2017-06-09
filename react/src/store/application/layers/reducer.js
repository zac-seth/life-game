import { createReducer } from "@/utils/store"
import names from "@/store/names"
import initialState from "./initial-state"

const { mutations } = names

export default createReducer({
    [mutations.ADD_LAYER_TO_STACK]({ stack, types }, layer) {
        return {
            stack: [...stack, layer],
            types
        }
    },

    [mutations.BRING_LAYER_TO_TOP_OF_STACK]({ stack, types }, layer) {
        return {
            stack: [
                ...removeLayerFromStack(stack, layer),
                layer
            ],
            types
        }
    },

    [mutations.REMOVE_LAYER_FROM_STACK]({ stack, types }, { type, name }) {
        return {
            stack: removeLayerFromStack(stack, layer),
            types
        }
    },

    [mutations.SET_LAYER_VISIBILITY]({ stack, types }, { type, name }) {
        return {
            stack,
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

function removeLayerFromStack(stack, layer) {
    return stack.filter(item => item.type !== layer.type || item.name !== layer.name)
}