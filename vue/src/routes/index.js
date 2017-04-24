import Vue from 'vue'
import Router from 'vue-router'
import HabitList from '@/views/quests/habits/habit-list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'habit-list',
      component: HabitList
    }
  ]
})
