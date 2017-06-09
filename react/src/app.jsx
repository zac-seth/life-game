import React from "react"
import { styled } from "styletron-react"
import Wallpaper from "@/wallpaper"
import PageFrame from "@/elements/page-frame"
import Shortcuts from "@/views/overlays/shortcuts"
import CreateHabitModal from "@/views/layers/modals/create-habit"
import HabitsWindow from "@/views/layers/windows/habits"
import TestWindow from "@/views/layers/windows/test"

const AppContainer = styled("div", {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 1,
    backgroundColor: "#2B2B2B"
})

let App = () => (
    <AppContainer>
        <Wallpaper />
        <PageFrame />
        <Shortcuts snap="bottom-right" />
        <HabitsWindow  />
        <TestWindow />
        <CreateHabitModal />
    </AppContainer>
)

export default App