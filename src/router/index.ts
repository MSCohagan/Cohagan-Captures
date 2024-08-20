import { createRouter, createWebHistory } from 'vue-router'

import StatesGame from '../views/StatesGame.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: StatesGame
    },
    {
      path: '/statesGame',
      name: 'statesGame',
      component: StatesGame
    }
  ]
})

export default router
