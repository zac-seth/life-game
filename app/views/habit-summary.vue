<template>
    <h4 class="name" v-model="name"></h4>
</template>

<script>
export default {
    data(): {
        return {
            name: "Quest Name"
        }
    }
}
</script>

<style scoped>
.name { 
    color: #F00;
 }
</style>