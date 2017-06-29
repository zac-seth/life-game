import React from "react"
import LayerName from "store/application/layers/layer-names"
import WindowLayer from "elements/window-layer"
import DisciplineList from "./list"

const DisciplinesWindow = () => (
    <WindowLayer title="Disciplines" name={LayerName.DISCIPLINES}>
        <DisciplineList />
    </WindowLayer>
)

export default DisciplinesWindow