import { createReducer } from "@/utils/store"
import ActionType from "@/store/action-type"
import initialState from "./initial-state"

export default createReducer({
    [ActionType.ADD_LAYER_TO_STACK]({ stack, types }, layer) {
        return {
            stack: [...stack, layer],
            types
        }
    },

    [ActionType.BRING_LAYER_TO_TOP_OF_STACK]({ stack, types }, layer) {
        const filteredStack = removeLayerFromStack(stack, layer)
        const sliceIndex = stack.lastIndexOf(stack.find(item => item.type === layer.type))

        return {
            stack: [
                ...filteredStack.slice(0, sliceIndex - 1),
                layer,
                ...filteredStack.slice(sliceIndex + 1)
            ],
            types
        }
    },

    [ActionType.REMOVE_LAYER_FROM_STACK]({ stack, types }, layer) {
        return {
            stack: removeLayerFromStack(stack, layer),
            types
        }
    },

    [ActionType.SET_LAYER_VISIBILITY]({ stack, types }, { type, name }) {
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