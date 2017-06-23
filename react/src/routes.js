import React from "react"
import Home from "views/pages/home"
import NotFound from "views/pages/not-found"

export default [
    {
        exact: true,
        path: "/",
        component: Home
    },
    {
        path: "*",
        component: NotFound
    }
]