import { createAction } from "@/utils/store"
import names from "@/store/names"
import layerTypes from "./layer-types"

const { mutations } = names

export function toggleLayerVisibility(layer) {
    return function(dispatch, getState) {
        const layers = getState().application.layers,
            stack = layers.stack

        if (!isLayerShown(layers, layer.type, layer.name)) {
            if (stack.length) {
                const topLayer = getTopLayerFromStack(stack)

                if (!canStackLayer(layer, topLayer)) {
                    return Promise.reject({ message: `Attempted to add a ${layer.type} on top of a ${topLayer.type}.` })
                }
            }

            dispatch(createAction(mutations.ADD_LAYER_TO_STACK, layer))
            dispatch(createAction(mutations.SET_LAYER_VISIBILITY, layer))
        } else if (stack.length) {
            dispatch(createAction(mutations.SET_LAYER_VISIBILITY, layer))
            dispatch(createAction(mutations.REMOVE_LAYER_FROM_STACK, layer))
        }

        return Promise.resolve()
    }
}

function canStackLayer(newLayer, topLayer) {
    switch (newLayer.type) {
        case layerTypes.WINDOW:
        case layerTypes.MODAL:
            return topLayer.type === layerTypes.WINDOW
        case layerTypes.DIALOG:
            return topLayer.type !== layerTypes.DIALOG
    }
}

function getTopLayerFromStack(stack) {
    return stack[stack.length - 1]
}

function isLayerShown(layers, type, name) {
    return layers.types[type][name] === true
}