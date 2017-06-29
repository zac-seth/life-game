import React from "react"
import ReactDOM from "react-dom"
import { Provider as ReduxProvider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import StyletronClient from "styletron-client"
import { StyletronProvider } from "styletron-react"
import App from "./app"
import configureStore from "store"
import { loadDisciplines } from "store/disciplines/list/actions"
import { loadHabits } from "store/habits/list/actions"
import { setSelectedWallpaperIndex } from "store/wallpapers/actions"

import "minireset.css"
import "assets/globals.css"
import "assets/fonts.css"

async function createStore() {
    const store = configureStore()
    await store.dispatch(loadHabits())
    await store.dispatch(loadDisciplines())

    // setInterval(() => {
    //     store.dispatch(setSelectedWallpaperIndex())
    // }, 10000)

    // console.log("Loaded State: ", store.getState())

    return store
}

function renderReactApp(store, styletron) {
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
}

async function run() {
    const store = await createStore()
    const styletron = new StyletronClient(document.getElementById("styles"))

    renderReactApp(store, styletron)
}

run() // .then(() => console.log("App is running"))