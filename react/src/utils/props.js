import PropTypes from "prop-types"
import { FormInputMessageType } from "elements/form"

export function buildCustomPropEnumValidator(componentName, enumObj, isRequired = true) {
    return function (prop, propName) {
        const value = prop[propName]

        if (!isRequired && !value) {
            return null
        }

        if (!value) {
            return Error(`No '${propName}' prop was supplied to an ${componentName} component.`)
        }
        
        if (!Object.keys(enumObj).find(key => enumObj[key] === value)) {
            return Error(`An incorrect value was supplied to the '${propName}' prop of an ${componentName} component. Use one of the values defined by ${componentName}.${propName}.`)
        }

        return null
    }
}

export function buildFormInputModelShape(componentName) {
    return PropTypes.shape({
        value: PropTypes.any.isRequired,
        isValid: PropTypes.bool.isRequired,
        message: buildValidationMessageShape(componentName)
    })
}

export function buildValidationMessageShape(componentName) {
    return PropTypes.oneOfType([
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            type: buildCustomPropEnumValidator(componentName, FormInputMessageType)
        }),
        PropTypes.bool
    ])
}

export function checkForPropChanges(nextProps, currentState, options = {}) {
    const {
        propsToIgnore = [],
        excludeCallbacks = true
    } = options

    const newState = Object.keys(nextProps).reduce((newState, key) => {
        if ((excludeCallbacks && key.indexOf("on") === 0) || propsToIgnore.find(prop => prop === key) || nextProps[key] === currentState[key]) {
            return newState
        }

        return {
            ...newState,
            [key]: nextProps[key]
        }
    }, {})

    return Object.keys(newState).length === 0 ? false : newState
}