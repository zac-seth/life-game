import React from "react"
import PropTypes from "prop-types"
import { styled } from "styletron-react"
import { buildEnumValidator } from "@/utils/custom-prop-types"

const buttonTypes = Object.freeze({
    DEFAULT: "default",
    SHORTCUT: "shortcut",
    AFFIRMATIVE: "affirmative",
    NEGATIVE: "negative"
})

function buildTypedStyle(normalBG, activeBg) {
    return {
        backgroundColor: normalBG,
        ":active": {
            backgroundColor: activeBg
        }
    }
}

function setButtonType(type) {
    if (!type) {
        return buildTypedStyle("#F00", "#E11")
    }

    switch (type) {
        case buttonTypes.AFFIRMATIVE:
            return buildTypedStyle("#42B983", "#7CD0AA")
        case buttonTypes.NEGATIVE:
            return buildTypedStyle("#EC6C55", "#FE765E")
        case buttonTypes.DEFAULT:
        default:
            return buildTypedStyle("#42B983", "#7CD0AA")
    }
}

const Button = styled("button", ({type, styles}) => ({
    ...setButtonType(type),
    color: "#FFF",
    padding: "5px 10px",
    border: "none",
    borderRadius: 0,
    outline: "none",

    ":hover": {
        cursor: "pointer"
    },

    ...(styles || {})
}))

Button.propTypes = {
    type: buildEnumValidator("Button", buttonTypes),
    styles: PropTypes.object
}

export const ButtonType = buttonTypes

export default Button