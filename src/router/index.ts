import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/LandingPage.vue')
    },
    {
      path: '/statesGame',
      name: 'statesGame',
      component: () => import('../views/StatesGame.vue')
    },
    {
      path: '/europeGame',
      name: 'europeGame',
      component: () => import('../views/EuropeGame.vue')
    }
  ]
});

export default router;
