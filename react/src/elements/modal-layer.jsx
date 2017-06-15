import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { styled } from "styletron-react"
import { toggleLayerVisibility } from "@/store/application/layers/actions"
import LayerType from "@/store/application/layers/layer-types"
import Panel from "@/elements/panel"
import Text from "@/elements/text"
import TitleBar from "@/elements/title-bar"

const ModalLayerBackdrop = styled("div", {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 10000,
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)"
})

const ModalLayerFrame = styled("div", {
    backgroundColor: "#FFF",
    flex: "0 0 480px",
    width: "480px",
    height: "270px"
})

let ModalLayer = ({ children, settings, title, onClose }) => {
    if (!settings.show) {
        return null
    }

    return (
        <ModalLayerBackdrop onClick={onClose}>
            <ModalLayerFrame onClick={evnt => evnt.stopPropagation()}>
                <TitleBar>
                    <Text header>{title}</Text>
                </TitleBar>
                <Panel>
                    {children}
                </Panel>
            </ModalLayerFrame>
        </ModalLayerBackdrop>
    )
}

ModalLayer.propTypes = {
    settings: PropTypes.shape({
        show: PropTypes.bool.isRequired
    }).isRequired,
    title: PropTypes.string.isRequired,

    onClose: PropTypes.func.isRequired
}

const mapStateToProps = (state, { title, name }) => ({
    title,
    settings: {
        show: state.application.layers.types.modal[name]
    }
})

const mapDispatchToProps = (dispatch, { name }) => ({
    onClose: () => dispatch(toggleLayerVisibility({ name, type: LayerType.MODAL }))
})

ModalLayer = connect(mapStateToProps, mapDispatchToProps)(ModalLayer)

ModalLayer.propTypes = {
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

export default ModalLayer