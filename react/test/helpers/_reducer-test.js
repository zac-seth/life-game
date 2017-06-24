import deepfreeze from "deep-freeze"

export default function(initialState, expectedState, reducer, action, assertion) {
    return t => {
        const frozenInitialState = deepfreeze(initialState)
        const frozenExpectedState = deepfreeze(expectedState)

        t.deepEqual(reducer(frozenInitialState, action), frozenExpectedState, assertion)
    }
}