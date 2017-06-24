import test from "ava"
import testReducer from "test/helpers/_reducer-test"
import ActionType from "store/action-type"
import { 
    addLayerToStack,
    bringLayerToTopOfStack,
    removeLayerFromStack
} from "store/application/layers/actions"
import reducer from "store/application/layers/reducer"
import LayerType from "store/application/layers/layer-types"

test("When adding the first layer to the stack", testReducer(
    makeStackState(),
    makeStackState(makeWindow("window")),
    reducer,
    addLayerToStack(makeWindow("window")),
    "The layer stack should contain a single layer"
))

test("When adding the second layer to the stack", testReducer(
    makeStackState(makeWindow("window1")),
    makeStackState(makeWindow("window1"), makeWindow("window2")),
    reducer,
    addLayerToStack(makeWindow("window2")),
    "The stack should contain two layers with 'window2' on top"
))

test("When removing the only layer from the stack", testReducer(
    makeStackState(makeWindow("window")),
    makeStackState(),
    reducer,
    removeLayerFromStack(makeWindow("window")),
    "The layer stack should not contain any layers"
))

test("When removing the top layer from the stack", testReducer(
    makeStackState(makeWindow("window1"), makeWindow("window2")),
    makeStackState(makeWindow("window1")),
    reducer,
    removeLayerFromStack(makeWindow("window2")),
    "The layer stack should contain only 'window1'"
))

test("When removing the bottom layer from the stack", testReducer(
    makeStackState(makeWindow("window1"), makeWindow("window2")),
    makeStackState(makeWindow("window2")),
    reducer,
    removeLayerFromStack(makeWindow("window1")),
    "The layer stack should contain only 'window2'"
))

test("When bringing the first window on the stack to the top with two layers", testReducer(
    makeStackState(makeWindow("window1"), makeWindow("window2")),
    makeStackState(makeWindow("window2"), makeWindow("window1")),
    reducer,
    bringLayerToTopOfStack(makeWindow("window1")),
    "'window1' should be on top of the layer stack"
))

test("When bringing the first window on the stack to the top with three layers", testReducer(
    makeStackState(makeWindow("window1"), makeWindow("window2"), makeWindow("window3")),
    makeStackState(makeWindow("window2"), makeWindow("window3"), makeWindow("window1")),
    reducer,
    bringLayerToTopOfStack(makeWindow("window1")),
    "'window1' should be on top of the layer stack"
))

test("When bringing the second window on the stack to the top with three layers", testReducer(
    makeStackState(makeWindow("window1"), makeWindow("window2"), makeWindow("window3")),
    makeStackState(makeWindow("window1"), makeWindow("window3"), makeWindow("window2")),
    reducer,
    bringLayerToTopOfStack(makeWindow("window2")),
    "'window1' should be on top of the layer stack"
))

function makeStackState(...layers) {
    return { stack: layers, types: {} }
}

function makeWindow(name) {
    return { type: LayerType.WINDOW, name }
}