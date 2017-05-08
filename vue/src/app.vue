<template>
    <div class="app" id="you-quest">
        <h1 class="title">Welcome to YouQuest</h1>
        <router-view class="primary-window"></router-view>
      <create-habit></create-habit>
    </div>
</template>

<script>
import store from "@/stores"
import createHabit from "@/views/quests/habits/create-habit"

export default {
    name: 'you-quest',

    store,

    components: {
        "create-habit": createHabit
    },

    created() {
        window.addEventListener("keyup", (evt) => {
            if (evt.keyCode === 27) {
                this.$store.dispatch("view/cancelView")
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