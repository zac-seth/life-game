import React from "react"
import PropTypes from "prop-types"
import { styled } from "styletron-react"
import { 
    buildCustomPropEnumValidator,
    buildFormInputModelShape,
    checkForPropChanges
} from "@/utils/props"
import { randomId } from "@/utils/strings"
import Input from "./input"
import Text from "./text"

const listDirection = {
    HORIZONTAL: "horizontal",
    VERTICAL: "vertical"
}

const RadioListContainer = styled("ul", ({ direction }) => {
    const isRow = !direction || direction.HORIZONTAL
    const align = isRow ? "center" : "flex-start"

    return {
        display: "flex",
        flexDirection: isRow ? "row" : "column",
        justifyContent: "space-between",
        alignContent: align,
        alignItems: align
    }
})

const RadioItemContainer = styled("li", ({ direction }) => {
    const margin = !direction || direction.HORIZONTAL
        ? { marginRight: "5px" }
        : { marginBottom: "5px" }

    return {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        alignContent: "center",
        padding: "5px",
        ...margin,

        ":hover": {
            cursor: "pointer"
        }
    }
})

const RadioIndicatorOuter = styled("span", {
    display: "block",
    position: "relative",
    width: "24px",
    height: "24px",
    marginRight: "5px",
    borderRadius: "12px",
    border: "2px solid #999"
})

const RadioIndicatorInner = styled("span", ({ checked, hovered }) => {
    const backgroundColor = hovered
        ? (checked ? "#4271B9" : "#DDD")
        : (checked ? "#4271B9" : "transparent")   
    
    return {
        display: "block",
        position: "absolute",
        top: "4px",
        left: "4px",
        width: "12px",
        height: "12px",
        borderRadius: "6px",
        backgroundColor
    }
})

const RadioIndicator = ({ checked, hovered }) => {
    return (
        <RadioIndicatorOuter>
            <RadioIndicatorInner checked={checked} hovered={hovered} />
        </RadioIndicatorOuter>
    )
}

class RadioItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            ...props,
            displayLabel: !!props.label ? props.label : props.value,
            isHovered: false
        }

        this.handleChecked = this.handleChecked.bind(this)
        this.handleMouseOver = this.handleMouseOver.bind(this)
        this.handleMouseOut = this.handleMouseOut.bind(this)
    }

    handleChecked() {
        this.state.onSelectionMade({
            label: this.state.label,
            value: this.state.value
        })
    }

    handleMouseOver() {
        this.setState({
            isHovered: true
        })
    }

    handleMouseOut() {
        this.setState({
            isHovered: false
        })
    }

    componentWillReceiveProps(nextProps) {
        const newState = checkForPropChanges(nextProps, this.state)

        if (newState) {
            this.setState(newState)
        }
    }

    render() {
        return (
            <RadioItemContainer 
                key={this.state.value} 
                direction={this.state.direction} 
                onClick={this.handleChecked} 
                onMouseEnter={this.handleMouseOver} 
                onMouseLeave={this.handleMouseOut}>
                <RadioIndicator checked={this.state.isChecked} hovered={this.state.isHovered} />
                <Text label>{this.state.displayLabel}</Text>
            </RadioItemContainer>
        )
    }
}

class RadioList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            ...props,
            componentId: ""
        }
    }

    componentWillMount() {
        this.setState({
            componentId: randomId(),
            hasModel: !!this.state.model
        })
    }

    componentWillReceiveProps(nextProps) {
        const newState = checkForPropChanges(nextProps, this.state)

        if (newState) {
            this.setState(newState)
        }
    }
    
    render() {
        return (
            <Input mode={this.state.mode} label={this.state.label} message={!!this.state.model && this.state.model.message}>
                <RadioListContainer direction={this.state.direction}>
                    {this.state.options.map((option, index) => (
                        <RadioItem 
                            key={`radio_item_${this.state.componentId}_${index}`} 
                            label={option.label} 
                            value={option.value} 
                            isChecked={this.state.hasModel && this.state.model.value === option.value} 
                            direction={this.state.direction}
                            onSelectionMade={this.state.onSelectionMade} />)
                    )}
                </RadioListContainer>
            </Input>
        )
    }
}

RadioList.direction = listDirection

RadioList.propTypes = {
    direction: buildCustomPropEnumValidator("RadioList", listDirection, false),
    label: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.bool
        ])
    })),
    mode: buildCustomPropEnumValidator("RadioList", Input.displayMode, false),
    model: buildFormInputModelShape("RadioList"),
    onSelectionMade: PropTypes.func.isRequired
}

export default RadioList