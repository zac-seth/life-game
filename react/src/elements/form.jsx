import React from "react"
import { styled } from "styletron-react"
import deepFreeze from "deep-freeze"

const Form = styled("div", {

})

export const FormInputMessageType = deepFreeze({
    INFO: "INFO",
    SUCCESS: "SUCCESS",
    ERROR: "ERROR"
})

export default Form