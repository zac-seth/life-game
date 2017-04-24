<template>
    <h4 class="name">{{habit.name}}</h4>
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
.name { 
    color: #F00;
}
</style>