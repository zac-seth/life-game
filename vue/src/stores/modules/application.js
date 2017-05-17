import names from "@/stores/names"

const mutation = {
    ADD_LAYER_TO_STACK: "ADD_LAYER_TO_STACK",
    REMOVE_LAYER_FROM_STACK: "REMOVE_LAYER_FROM_STACK",
    SET_LAYER_VISIBILITY: "SET_LAYER_VISIBILITY"
}

const layerTypes = Object.freeze({
    DIALOG: "DIALOG",
    MODAL: "MODAL",
    WINDOW: "WINDOW"
})

function getTopLayer(layers) {
    return layers[layers.length - 1]
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

export default {
    namespaced: true,

    state: {
        layers: [],
        types: {
            modal: {
                createHabit: false
            },
            window: {
                habits: false
            }
        }
    },

    getters: {
        LAYER_TYPES() {
            return layerTypes
        }
    },

    actions: {
        [names.action.DISPLAY_LAYER]({ commit, state }, layer) {
            console.log("display layer invoked")
            if (state.layers.length) {
                let topLayer = getTopLayer(state.layers)

                if (!canStackLayer(layer, topLayer)) {
                    return Promise.reject({ message: `Attempted to add a ${layer.type.toLowerCase()} on top of a ${topLayer.type.toLowerCase()}.`})
                }
            }

            commit(mutation.ADD_LAYER_TO_STACK, { type: layerTypes.WINDOW, name })
            console.log(layer.type.toLowerCase())
            commit(mutation.SET_LAYER_VISIBILITY, { name: layer.name, show: true, type: layer.type.toLowerCase() })

            return Promise.resolve()
        },
        [names.action.REMOVE_LAYER]({ commit, state }) {
            if (state.layers.length) {
                let topLayer = getTopLayer(state.layers)

                commit(mutation.SET_LAYER_VISIBILITY, { name: topLayer.name, show: false, type: topLayer.type.toLowerCase() })
                commit(mutation.REMOVE_LAYER_FROM_STACK)
            }
            
            return Promise.resolve()
        }
    },

    mutations: {
        [mutation.ADD_LAYER_TO_STACK](state, cancelable) {
            state.layers = [...state.layers, cancelable]
        },
        [mutation.REMOVE_LAYER_FROM_STACK](state) {
            state.layers = state.layers.slice(0, -1)
        },
        [mutation.SET_LAYER_VISIBILITY](state, layer) {
            let type = Object.assign({}, state.types[layer.type])
            type[layer.name] = layer.show

            state.types[layer.type] = type
        },
    }
}