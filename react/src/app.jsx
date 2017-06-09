import React from "react"
import { styled } from "styletron-react"
import Wallpaper from "@/wallpaper"
import PageFrame from "@/elements/page-frame"
import Shortcuts from "@/views/widgets/shortcuts"

// Modals
import CreateHabitModal from "@/views/quests/habits/create/modal"

// Windows
import HabitListWindow from "@/views/quests/habits/list/window"

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

        {/* Widgets */}
        <Shortcuts snap="bottom-right" />

        {/* Windows */}
        <HabitListWindow  />

        {/* Modals */}
        <CreateHabitModal />
    </AppContainer>
)

export default App