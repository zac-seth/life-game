export default previousState => ({
    stack: previousState.stack.slice(0, -1),
    types: {...previousState.types}
})