import React from "react"
import {
    Home,
    NotFound
} from "@/app/windows"

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