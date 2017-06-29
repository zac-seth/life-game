import deepFreeze from "deep-freeze"
import LayerName from "./layer-names"

export default deepFreeze({
    stack: [],
    types: {
        modal: {
            [LayerName.CREATE_HABIT]: false
        },
        window: {
            [LayerName.ABILITIES]: false,
            [LayerName.ACHIEVEMENTS]: false,
            [LayerName.DISCIPLINES]: false,
            [LayerName.HABITS]: false,
            [LayerName.LESSONS]: false,
            [LayerName.PROFILE]: false
        }
    }
})