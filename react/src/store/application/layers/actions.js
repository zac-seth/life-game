import names from "@/store/names"

export function setLayerVisibility(layerType, name, ) {
    return {
        type: names.mutations.SET_LAYER_VISIBILITY,
        layerType,
        name
    }
}

export function setLayerVisibilityAsync(layerType, name, ) {
    return function (dispatch) {
        return Promise
            .resolve()
            .then(() => {
                dispatch(setLayerVisibility(layerType, name))
            })
    }
}