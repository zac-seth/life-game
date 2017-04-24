<template>
    <div class="habit-summary">
        <h4 class="name">{{habit.name}}</h4>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // name: "Habit Name"
        }
    },
    props: ["habit"]
}
</script>

<style scoped>
.habit-summary {
    background-color: cornflowerblue;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 5px;
}
.name { 
    color: #FFF;
}
</style>