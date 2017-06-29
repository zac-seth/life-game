import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import List from "elements/list"
import ListItem from "elements/list-item"
import Gallery from "elements/layout/gallery/grid"
import GalleryItem from "elements/layout/gallery/item"
import Text from "elements/text"

const formatRequirements = habits => requirement => ({
    ...requirement,
    content: habits.find(habit => habit.id === requirement.ref.id)
})

const formatDisciplines = habits => discipline => ({
    ...discipline,
    reqs: discipline.reqs.map(formatRequirements(habits))
})

const renderRequirements = requirement => (
    <GalleryItem key={requirement.ref.id}>
        <Text>{requirement.content.name}</Text>
    </GalleryItem>
)

const renderDisciplines = discipline => (
    <ListItem key={discipline.id}>
        <Text>{discipline.name}</Text>
        <Text>{discipline.desc}</Text>
        <Text>Pre-Requirements:</Text>
        <Gallery cols={12}>
            {discipline.reqs.map(renderRequirements)}
        </Gallery>
    </ListItem>
)

let DisciplineList = ({ disciplines }) => (
    <List>
        {disciplines.map(renderDisciplines)}
    </List>
)

DisciplineList.propTypes = {
    disciplines: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    })).isRequired
}

DisciplineList = connect(({ disciplines, habits }, ownProps) => ({
    disciplines: disciplines.list.map(formatDisciplines(habits.list))
}))(DisciplineList)

export default DisciplineList