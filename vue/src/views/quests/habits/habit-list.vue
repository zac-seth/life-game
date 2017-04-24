<template>
    <section class="habits">
        <h1 class="title">Habits</h1>
        <habit-summary v-for="habit in habits" :key="habit.id" :habit="habit"></habit-summary>
    </section>
</template>

<script>
import Summary from "@/views/quests/habits/habit-summary"

export default {
    data() {
        return {
            habits: [{
                id: 1,
                name: "Habit 1"
            }, {
                id: 2,
                name: "Habit 2"
            }, {
                id: 3,
                name: "Habit 3"
            }]
        }
    },
    components: {
        "habit-summary": Summary
    }
}
</script>

<style scoped>
    
</style>