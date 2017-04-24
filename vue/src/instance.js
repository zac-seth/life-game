import Vue from "vue";
import App from "./app";
import Routes from "./routes";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: "#you-quest",
    router: Routes,
    render: h => h(App),
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