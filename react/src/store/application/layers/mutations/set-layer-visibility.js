export default (previousState, type, name) => ({
    stack: [...previousState.stack],
    types: {
        ...previousState.types,
        [type]: {
            ...previousState.types[type],
            [name]: !previousState.types[type][name]
        }
    }
})