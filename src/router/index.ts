import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('src/views/LandingPage.vue')
    },
    {
      path: '/statesGame',
      name: 'statesGame',
      component: () => import('src/views/StatesGame.vue')
    },
    {
      path: '/europeGame',
      name: 'europeGame',
      component: () => import('src/views/EuropeGame.vue')
    }
  ]
});

export default router;
