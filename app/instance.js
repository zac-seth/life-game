import Vue from 'vue';
import HabitSummary from './views/habit-summary';

/* eslint-disable no-new */
new Vue({
    el: "#you-quest",
    components: {
        "habit-summary": HabitSummary
    },
    beforeCreate() {
        console.log("Before Create")
    },
    created() {
        console.log("Created")
    },
    beforeMount() {
        console.log("Before Mount")
    },
    mounted() {
        console.log("Mounted")
    },
    beforeUpdate() {
        console.log("Before Update")
    },
    updated() {
        console.log("Updated")
    },
    beforeDestroy() {
        console.log("Before Destroy")
    },
    destroyed() {
        console.log("Destroyed")
    }
});