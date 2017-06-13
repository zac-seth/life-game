import React from "react"
import { styled } from "styletron-react"
import WindowLayer from "@/elements/window-layer"
import Text from "@/elements/text"

const Blah = () => (
    <WindowLayer title="Blah" name="blah">
        <Text title>Hello</Text>
    </WindowLayer>
)

export default Blah