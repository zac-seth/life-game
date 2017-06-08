export function buildEnumValidator(componentName, enumObj) {
    return function(prop, propName) {
        const value = prop[propName]

        if (!value) {
            return Error(`No '${propName}' prop was supplied to an ${componentName} component.`)
        } else if (!Object.keys(enumObj).find(key => enumObj[key] === value)) {
            return Error(`An incorrect value was supplied to the '${propName}' prop of an ${componentName} component. Use one of the values defined by ${componentName}.${propName}.`)
        }

        return null
    }
}