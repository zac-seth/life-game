import { createAction } from "@/utils/store"
import ActionType from "@/store/action-type"

export function setSelectedWallpaperIndex() {
    return function(dispatch, getState) {
        const { images, selectedIndex } = getState().wallpapers

        let newIndex = selectedIndex + 1

        if (images.length <= newIndex) {
            newIndex = 0
        }

        dispatch(createAction(ActionType.SET_WALLPAPER_INDEX, newIndex))

        return Promise.resolve()
    }
}