import { createAction } from "utils/store"
import ActionType from "store/action-type"
import layerTypes from "./layer-types"

export function addLayerToStack(layer) {
    return createAction(ActionType.ADD_LAYER_TO_STACK, layer)
}

export function bringLayerToTopOfStack(layer) {
    return createAction(ActionType.BRING_LAYER_TO_TOP_OF_STACK, layer)
}

export function removeLayerFromStack(layer) {
    return createAction(ActionType.REMOVE_LAYER_FROM_STACK, layer)
}

export function bringLayerToTop(layer) {
    return async (dispatch, getState) => {
        const layers = getState().application.layers
        
        if (isLayerShown(layers, layer.type, layer.name)) {
            dispatch(bringLayerToTopOfStack(layer))
        }

        return await Promise.resolve()
    }
}

export function toggleLayerVisibility(layer) {
    return async (dispatch, getState) => {
        const layers = getState().application.layers,
            stack = layers.stack

        if (!isLayerShown(layers, layer.type, layer.name)) {
            if (stack.length) {
                const topLayer = getTopLayerFromStack(stack)

                if (!canStackLayer(layer, topLayer)) {
                    return await Promise.reject({ message: `Attempted to add a ${layer.type} layer over of a ${topLayer.type} layer.` })
                }
            }

            dispatch(addLayerToStack(layer))
            dispatch(createAction(ActionType.SET_LAYER_VISIBILITY, layer))
        } else if (stack.length) {
            dispatch(createAction(ActionType.SET_LAYER_VISIBILITY, layer))
            dispatch(removeLayerFromStack(layer))
        }

        return await Promise.resolve()
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