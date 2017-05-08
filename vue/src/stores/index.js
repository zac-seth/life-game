import Vue from "vue"
import Vuex from "vuex"
import habits from "@/stores/modules/habits"
import view from "@/stores/modules/view"

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== "production"

export default new Vuex.Store({
    modules: {
        habits,
        view
    },
    
    strict: debug,
})