import React from "react"
import PropTypes from "prop-types"
import { styled } from "styletron-react"
import { MdKeyboardArrowDown } from "react-icons/lib/md"
import { buildCustomPropEnumValidator, buildFormInputModelShape } from "@/utils/props"
import Input from "./input"
import Text from "./text"

const DropDownContainer = styled("div", () => ({
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "stretch",
    alignItems: "stretch",
    minWidth: "120px",
    height: "24px",
    border: "2px solid #999",

    ":hover": {
        cursor: "pointer"
    }
}))

const DropDownArrowComponent = styled("span", {
    flex: "0",
    justifyContent: "center",
    alignItems: "center"
})

const DropDownArrow = () => <DropDownArrowComponent><MdKeyboardArrowDown /></DropDownArrowComponent>

const SelectedItem = styled("div", {
    paddingLeft: "5px",
    lineHeight: "24px"
})

const DropDownList = styled("ul", ({ isOpen }) => ({
    position: "absolute",
    left: 0,
    display: isOpen ? "block" : "none",
    top: "24px",
    zIndex: 1,
    minWidth: "120px",

    backgroundColor: "#DDD"
}))

const DropDownItem = styled("li", {
    padding: "5px",
    ":hover": {
        backgroundColor: "#4271B9",
        cursor: "pointer"
    }
})

class DropDown extends React.Component {
    constructor(props) {
        super(props)

        this.handleOutsideClick = this.handleOutsideClick.bind(this)
        this.handleToggleList = this.handleToggleList.bind(this)

        const formattedOptions = props.options.map(option => ({
            value: option.value,
            label: option.label ? option.label : option.value
        }))
        const selectedOption = formattedOptions[props.selectedIndex]

        this.state = {
            ...props,
            isOpen: false,
            options: formattedOptions,
            selectedOption
        }
    }

    componentWillMount() {
        window.addEventListener("click", this.handleOutsideClick)
    }

    componentWillUnmount() {
        window.removeEventListener("click", this.handleOutsideClick)
    }
    
    handleOutsideClick(evnt) {
        if (this.state.isOpen) {
            this.setState({
                isOpen: false
            })
        }
    }

    handleSelectionMade(option) {
        this.state
            .onSelectionMade(option)
            .then(() => {
                this.setState({
                    selectedOption: option,
                    isOpen: false
                })
            })
    }

    handleToggleList(e) {
        this.setState(state => ({
            isOpen: !state.isOpen
        }))

        e.nativeEvent.stopImmediatePropagation()
    }

    render() {
        return (
            <Input label={this.state.label} mode={this.state.mode} message={!!this.state.model && this.state.model.message}>
                <DropDownContainer onClick={this.handleToggleList}>
                    <SelectedItem><Text input>{this.state.selectedOption.label}</Text></SelectedItem>
                    <DropDownArrow />
                    <DropDownList isOpen={this.state.isOpen}>
                        {this.state.options.map(option =>
                            <DropDownItem key={option.value} onClick={() => this.handleSelectionMade(option)}>
                                <Text input>{option.label ? option.label : option.value}</Text>
                            </DropDownItem>
                        )}
                    </DropDownList>
                </DropDownContainer>
            </Input>
        )
    }
}

DropDown.propTypes = {
    label: PropTypes.string,
    mode: buildCustomPropEnumValidator("DropDown", Input.displayMode, false),
    model: buildFormInputModelShape("DropDown"),
    options: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.bool
        ])
    })),
    selectedIndex: PropTypes.number,
    onSelectionMade: PropTypes.func
}

export default DropDown