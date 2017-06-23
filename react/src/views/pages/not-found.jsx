import React from "react"
import Text from "elements/text"
import Page from "elements/page"

const NotFound = props => (
    <Page>
        <Text header>Hello? Are you lost?</Text>
        <Text>There's nothing to see here. You should leave. Now. <br /><br />How did you find this place anyway?</Text>
    </Page>
)

NotFound.propTypes = {}

export default NotFound