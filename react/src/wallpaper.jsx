import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { styled } from "styletron-react"

let Wallpaper = styled("div", ({ image }) => ({
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 1,
    background: `url(${image}) no-repeat center center fixed`,
    backgroundSize: "fixed",
    transition: "3s"
}))

Wallpaper.propTypes = {
    image: PropTypes.string.isRequired
}

const mapStateToProps = ({ wallpapers }, ownProps) => ({
    image: wallpapers.images[wallpapers.selectedIndex]
})

Wallpaper = connect(mapStateToProps)(Wallpaper)

export default Wallpaper