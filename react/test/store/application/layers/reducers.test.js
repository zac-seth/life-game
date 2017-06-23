import test from "ava"
import deepfreeze from "deep-freeze"
import ActionType from "store/action-types"
import reducer from "store/application/layers/reducer"
import LayerType from "store/application/layers/layer-types"

test("When adding the first layer to the stack", t => {
    const stateBefore = deepfreeze({
        stack: [],
        types: {}
    })

    const stateAfter = deepfreeze({
        stack: [{
            type: LayerType.WINDOW,
            name: "window"
        }],
        types: {}
    })

    t.deepEqual(
        reducer(stateBefore, { type: ActionType.ADD_LAYER_TO_STACK, payload: { type: LayerType.WINDOW, name: "window" } }), 
        stateAfter,
        "A single layer should be added to the stack"
    )

    t.end()
})