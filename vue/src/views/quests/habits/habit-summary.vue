<template>
    <div class="habit-summary">
        <h4 class="name">{{habit.name}}</h4>
        <p classs="desc" v-if="expanded">{{habit.desc}}</p>
    </div>
</template>

<script>
export default {
    props: ["expanded", "habit"]
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