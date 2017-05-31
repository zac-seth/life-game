export function createAction(type, payload) {
    return { type, payload }
}

export function createReducer(config, initialState) {
    initialState = initialState || {}

    const types = Object.keys(config)

    return function (previousState = initialState, action) {
        const type = types.find(type => type === action.type)

        if (!type) {
            return previousState
        } else {
            return config[type](previousState, action.payload)
        }
    }
}