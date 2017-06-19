import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { styled } from "styletron-react"
import Draggable from "react-draggable"
import LayerType from "@/store/application/layers/layer-types"
import { bringLayerToTop } from "@/store/application/layers/actions"
import { randomId } from "@/utils/strings"
import { checkForPropChanges } from "@/utils/props"
import Panel from "@/elements/panel"
import Text from "@/elements/text"
import TitleBar from "@/elements/title-bar"

const WindowLayerFrame = styled("div", ({ layer }) => {
    const indent = ( layer + 1 ) * 100

    return {
        backgroundColor: "#FFF",
        flex: "0 0 640px",
        width: "720px",
        height: "480px",
        boxShadow: "3px 3px 3px 0 #BBB",
        position: "absolute",
        top: `50%`,
        left: `50%`,
        marginLeft: "-360px",
        marginTop: "-240px",
        zIndex: 1000 + indent
    }
})

class WindowLayer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            ...props,
            titleBarId: ""
        }

        this.handleLayerActivation = this.handleLayerActivation.bind(this)
    }

    handleLayerActivation() {
        if (!this.state.isTop) {
            this.state.onLayerActivated()
        }

        return true
    }

    componentWillMount() {
        this.setState({
            titleBarId: `window-title-${randomId()}`
        })
    }

    componentWillReceiveProps(nextProps) {
        const newState = checkForPropChanges(nextProps, this.state)

        if (newState) {
            this.setState(newState)
        }
    }
    
    render() {
        if (!this.state.show) {
            return null;
        }

        return (
            <Draggable
                axis="both"
                bounds="body"
                handle={`#${this.state.titleBarId}`}
                onStart={this.handleLayerActivation}>
                <WindowLayerFrame layer={this.state.layer} onClick={this.handleLayerActivation}>
                    <TitleBar id={this.state.titleBarId}>
                        <Text header>{this.state.title}</Text>
                    </TitleBar>
                    {this.state.children}
                </WindowLayerFrame>
            </Draggable>
        )
    }
}

WindowLayer.propTypes = {
    isTop: PropTypes.bool.isRequired,
    layer: PropTypes.number.isRequired,
    show: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired
}

const mapStateToProps = (state, { title, name }) => {
    const { layers } = state.application
    const show = layers.types.window[name]
    const layer = layers.stack.find(layer => layer.type === LayerType.WINDOW && layer.name === name)

    return {
        isTop: layer ? layers.stack[layers.stack.length - 1].name === name : false,
        show, 
        layer: layer ? layers.stack.indexOf(layer) : -1,
        title
    }
}

const mapDispatchToProps = (dispatch, { name }) => ({
    onLayerActivated: () => dispatch(bringLayerToTop({ name, type: LayerType.WINDOW }))
})

WindowLayer = connect(mapStateToProps, mapDispatchToProps)(WindowLayer)

WindowLayer.propTypes = {
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

export default WindowLayer