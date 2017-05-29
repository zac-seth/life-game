import names from "@/store/names"
import initialState from "./initial-state"
import * as mutations from "./mutations"

export default function reducer(previousState = initialState, action) {
    switch (action.type) {
        case names.mutations.ADD_LAYER_TO_STACK:
            return mutations.addLayerToStack(previousState, action.layer)
        case names.mutations.REMOVE_LAYER_FROM_STACK:
            return mutations.removeLayerFromStack(previousState)
        case names.mutations.SET_LAYER_VISIBILITY:
            return mutations.setLayerVisibility(previousState, action.layerType.toLowerCase(), action.name)
        default:
            return previousState
    }
}