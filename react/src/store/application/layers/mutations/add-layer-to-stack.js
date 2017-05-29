export default (previousState, layer) => ({
    stack: [...previousState.stack, layer],
    types: {...previousState.types}
})