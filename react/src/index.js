import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter} from "react-router-dom"
import StyletronClient from "styletron-client"
import {StyletronProvider} from "styletron-react"
import App from "@/app"

import "minireset.css"

const styletron = new StyletronClient(document.getElementById("styles"))

const YouQuest = class extends React.Component {
    render() {
        return (
            <StyletronProvider styletron={styletron}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </StyletronProvider>
        )
    }
}

ReactDOM.render(<YouQuest />, document.getElementById("you-quest"))