<template>
    <section class="habits">
        <h1 class="title">Habits</h1>
        <form class="filters">
            <div class="expansion">
                <input class="expander" type="checkbox" name="expanded" v-model="expanded" /> <label class="expander-label" for="expanded">Show expanded quest info.</label>
            </div>
            <div class="scale">
                <label class="scale-label" for="all">All</label>
                <input class="scale-value" type="radio" name="scale" v-model="scaleFilter" value="NONE" checked />
                <label class="scale-label" for="daily">Daily</label>
                <input class="scale-value" type="radio" name="scale" v-model="scaleFilter" value="DAILY" />
                <label class="scale-label" for="weekly">Weekly</label>
                <input class="scale-value" type="radio" name="scale" v-model="scaleFilter" value="WEEKLY" />
                <label class="scale-label" for="monthly">Monthly</label>
                <input class="scale-value" type="radio" name="scale" v-model="scaleFilter" value="MONTHLY" />
                <label class="scale-label" for="yearly">Yearly</label>
                <input class="scale-value" type="radio" name="scale" v-model="scaleFilter" value="YEARLY" />
            </div>
            <div class="create">
                <a class="create-button" @click="activateHabitCreation">Create New Habit Quest</a>
            </div>
        </form>
        <habit-summary v-for="habit in habits" :key="habit.id" :habit="habit" :expanded="expanded"></habit-summary>
    </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import store from "@/stores"
import names from "@/stores/names"
import * as scales from "@/stores/modules/scale-types"
import Summary from "@/views/quests/habits/habit-summary"

const actions = {
    DISPLAY_LAYER: `${names.module.APPLICATION}/${names.action.DISPLAY_LAYER}`,
    SET_SCALE_FILTER: `${names.module.APPLICATION}/${names.action.SET_SCALE_FILTER}`
}

const getters = {
    LAYER_TYPES: `${names.module.APPLICATION}/${names.getter.LAYER_TYPES}`
}

export default {
    store,
    
    data() {
        return { 
            expanded: false,
            scaleFilter: scales.NONE
        }
    },

    computed: {
        ...mapGetters("habits", {
            habits: names.getter.HABITS_FILTERED_BY_SCALE
        })
    },

    methods: {
        activateHabitCreation() {
            this.$store
                .dispatch(actions.DISPLAY_LAYER, { 
                    name: "createHabit", 
                    type: this.$store.getters[getters.LAYER_TYPES].MODAL 
                })
        }
    },

    watch: {
        scaleFilter(scaleFilter) {
            this.$store.dispatch(actions.SET_SCALE_FILTER, {
                scaleFilter: this.scaleFilter
            })
        }
    },

    components: {
        "habit-summary": Summary
    }
}
</script>

<style scoped>
.habits {
    margin: 10px;
    padding: 10px;
    border: 1px solid #006;
    border-radius: 5px;
}
.title {
    text-decoration: underline;
    margin-bottom: 10px;
}
.expander {

}
</style>