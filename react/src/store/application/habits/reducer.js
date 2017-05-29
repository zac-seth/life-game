import names from "@/store/names"
import initialState from "./initial-state"
import * as mutations from "./mutations"

export default function reducer(previousState = initialState, action) {
    switch (action.type) {
        case names.mutations.SET_SCALE_FILTER:
            return mutations.setScaleFilter(previousState, action.scalefilter)
        default:
            return previousState
    }
}