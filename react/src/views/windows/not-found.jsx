import React from "react"
import Text from "@/elements/text"
import Window from "@/elements/window"

const NotFound = props => (
    <Window>
        <Text header>Hello? Are you lost?</Text>
        <Text>There's nothing to see here. You should leave. Now. <br /><br />How did you find this place anyway?</Text>
    </Window>
)

NotFound.propTypes = {}

export default NotFound