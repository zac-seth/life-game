import React from "react"
import { styled } from "styletron-react"
import deepFreeze from "deep-freeze"

const Form = styled("div", {

})

const FormButtonStrip = styled("div", {
    marginTop: "10px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end"
})

FormButtonStrip.buttonStyles = {
    marginLeft: "10px"
}

Form.ButtonStrip = FormButtonStrip

export const FormInputMessageType = deepFreeze({
    INFO: "INFO",
    SUCCESS: "SUCCESS",
    ERROR: "ERROR"
})

export default Form