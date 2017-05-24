import React from "react"
import ReactDOM from "react-dom"
import StyletronClient from "styletron-client"
import {StyletronProvider} from "styletron-react"
import App from "@/app"

const styletron = new StyletronClient(
    document.getElementById("you-quest")
)

ReactDOM.render(
    React.createElement(
        StyletronProvider,
        {styletron},
        React.createElement(App, {
            path: window.location.pathname
        })
    ),
    document.getElementById("you-quest")
)