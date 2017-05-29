import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import rootReducers from "@/store/reducers"

export default function configureStore() {
    return createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)))
}