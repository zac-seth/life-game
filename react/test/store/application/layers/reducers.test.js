import test from "ava"
import testReducer from "test/helpers/_reducer-test"
import ActionType from "store/action-type"
import { addLayerToStack } from "store/application/layers/actions"
import reducer from "store/application/layers/reducer"
import LayerType from "store/application/layers/layer-types"

test("When adding the first layer to the stack", testReducer(
    { stack: [], types: {} },
    { stack: [{ type: LayerType.WINDOW, name: "window" }], types: {} },
    reducer,
    addLayerToStack({ type: LayerType.WINDOW, name: "window" }),
    "The layer stack should contain a single layer"
))