import React from "react"
import {
    Home,
    NotFound
} from "@/views/windows"

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