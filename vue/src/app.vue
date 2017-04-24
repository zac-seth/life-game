<template>
  <div class="app" id="you-quest">
    <h1 class="title">Welcome to YouQuest</h1>
    <router-view class="primary-window"></router-view>
  </div>
</template>

<script>
export default {
  name: 'you-quest'
}
</script>

<style>
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 800px;
  margin: 60px auto;
}
</style>