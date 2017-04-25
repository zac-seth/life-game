<template>
    <section class="habits">
        <h1 class="title">Habits</h1>
        <input class="expander" type="checkbox" name="expanded" v-model="expanded" /> <label for="expanded">Show expanded quest info.</label>
        <habit-summary v-for="habit in habits" :key="habit.id" :habit="habit" :expanded="expanded"></habit-summary>
    </section>
</template>

<script>
import Summary from "@/views/quests/habits/habit-summary"

export default {
    data() {
        return {
            expanded: false,
            habits: [{
                id: 1,
                name: "Habit 1",
                desc: "This is the first habit."
            }, {
                id: 2,
                name: "Habit 2",
                desc: "I really want this one to happen."
            }, {
                id: 3,
                name: "Habit 3",
                desc: "This will change my life!"
            }]
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