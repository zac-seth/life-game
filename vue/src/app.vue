<template>
    <div class="app" id="you-quest">
        <h1 class="title">Welcome to YouQuest</h1>
        <router-view class="primary-window"></router-view>
        <layer-shortcuts class="layer-shortcuts"></layer-shortcuts>
        <div class="layers">

        </div>
        <div class="modals">
            <modal-create-habit></modal-create-habit>
        </div>
        <div class="dialogs">

        </div>
    </div>
</template>

<script>
import store from "@/stores"
import names from "@/stores/names"
import layerShortcuts from "@/views/layer-shortcuts"
import createHabitModal from "@/views/quests/habits/modal/create-habit"

const actions = {
    REMOVE_LAYER: `${names.module.APPLICATION}/${names.action.REMOVE_LAYER}`
}

export default {
    name: 'you-quest',

    store,

    components: {
        "layer-shortcuts": layerShortcuts,
        "modal-create-habit": createHabitModal
    },

    created() {
        window.addEventListener("keyup", (evt) => {
            if (evt.keyCode === 27) {
                this.$store.dispatch(actions.REMOVE_LAYER)
            }
        })
    }
}
</script>

<style>
.app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 800px;
    margin: 60px auto;
}
</style>