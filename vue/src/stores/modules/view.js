import * as types from "@/stores/mutation-types"

const cancelableTypes = Object.freeze({
    MODAL: "MODAL"
})

export default {
    namespaced: true,

    state: {
        cancelStack: [],
        modal: {
            show: {
                createHabit: false
            }
        }
    },

    getters: {

    },

    actions: {
        cancelView({commit, dispatch, state}) {
            let result = Promise.resolve()

            if (state.cancelStack.length) {
                let cancelable = state.cancelStack[state.cancelStack.length - 1]

                switch (cancelable.type) {
                    case cancelableTypes.MODAL: {
                        result = dispatch("closeModal", cancelable.name)
                        break;
                    }
                    // Add dialog and other non-modal cancelable views as necessary.
                }
            }

            return result
        }, 
        closeModal({commit}, name) {
            commit(types.SET_MODAL_VISIBILITY, {name, show: false})
            commit(types.CANCEL_TOP_OF_STACK)

            return Promise.resolve()
        },
        showModal({commit}, name) {
            commit(types.ADD_CANCELABLE, { type: cancelableTypes.MODAL, name: name })
            commit(types.SET_MODAL_VISIBILITY, {name, show: true})

            return Promise.resolve()
        }
    },

    mutations: {
        [types.ADD_CANCELABLE](state, cancelable) {
            state.cancelStack = [...state.cancelStack, cancelable]
        },
        [types.CANCEL_TOP_OF_STACK](state) {
            state.cancelStack = state.cancelStack.slice(0, -1)
        },
        [types.SET_MODAL_VISIBILITY](state, modal) {
            let newShow = Object.assign({}, state.modal.show)
            newShow[modal.name] = modal.show

            state.modal.show = newShow
        }
    }
}