import React from "react"
import PropTypes from "prop-types"
import { styled } from "styletron-react"

const CheckBoxInput = styled("input", {
    
})

const CheckBox = ({ checked, onChange }) => <CheckBoxInput checked={checked} onChange={onChange} type="checkbox" />

CheckBox.propTypes = {
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired
}

export default CheckBox