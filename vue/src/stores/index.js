import Vue from "vue"
import Vuex from "vuex"
import habit from "@/stores/modules/habit"
import application from "@/stores/modules/application"

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== "production"

export default new Vuex.Store({
    modules: {
        application,
        habit
    },
    
    strict: debug,
})