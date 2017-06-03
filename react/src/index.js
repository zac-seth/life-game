import React from "react"
import ReactDOM from "react-dom"
import { Provider as ReduxProvider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import StyletronClient from "styletron-client"
import { StyletronProvider } from "styletron-react"
import App from "@/app"
import configureStore from "@/store"
import { loadHabits } from "@/store/habits/actions"

import "minireset.css"

const store = configureStore()
store.dispatch(loadHabits())

const styletron = new StyletronClient(document.getElementById("styles"))

const YouQuest = class extends React.Component {
    render() {
        return (
            <ReduxProvider store={store}>
                <StyletronProvider styletron={styletron}>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </StyletronProvider>
            </ReduxProvider>
        )
    }
}

ReactDOM.render(<YouQuest />, document.getElementById("you-quest"))