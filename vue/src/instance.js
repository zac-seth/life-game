import Vue from "vue";
import App from "./app";
import Routes from "./routes";

Vue.config.productionTip = false;

/* eslint-disable no-new */
export default new Vue({
    el: "#you-quest",
    router: Routes,
    render: h => h(App)
});