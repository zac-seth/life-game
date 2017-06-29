import React from "react"
import { styled } from "styletron-react"
import Wallpaper from "./wallpaper"
import PageFrame from "elements/page-frame"

// Widgets
import ShortcutsWidget from "views/widgets/shortcuts"

// Modals
import CreateHabitModal from "views/quests/habits/create/modal"

// Windows
import AbilitiesWindow from "views/abilities/manage/overview/window"
import AchievementsWindow from "views/achievements/window"
import DisciplinesWindow from "views/disciplines/manage/overview/window"
import HabitListWindow from "views/quests/habits/list/window"
import LessonsWindow from "views/lessons/manage/overview/window"
import ProfileWindow from "views/user/profile/window"

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
        <ShortcutsWidget snap="bottom-right" />

        {/* Windows */}
        <ProfileWindow />
        <DisciplinesWindow />
        <HabitListWindow />
        <AbilitiesWindow />
        <LessonsWindow />
        <AchievementsWindow />

        {/* Modals */}
        <CreateHabitModal />
    </AppContainer>
)

export default App