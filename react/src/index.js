import React from "react"
import ReactDOM from "react-dom"
import { Provider as ReduxProvider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import StyletronClient from "styletron-client"
import { StyletronProvider } from "styletron-react"
import App from "@/app"
import configureStore from "@/store"
import { loadHabits } from "@/store/habits/list/actions"
import { setSelectedWallpaperIndex } from "@/store/wallpapers/actions"

import "minireset.css"
import "@/assets/globals.css"
import "@/assets/fonts.css"

const store = configureStore()
store.dispatch(loadHabits())

setInterval(() => {
    store.dispatch(setSelectedWallpaperIndex())
}, 10000)

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