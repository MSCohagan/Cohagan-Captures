import { createRouter, createWebHistory } from 'vue-router';

import StatesGame from '../views/StatesGame.vue';
import LandingPage from '../views/LandingPage.vue';
import EuropeGame from '@/views/EuropeGame.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingPage
    },
    {
      path: '/statesGame',
      name: 'statesGame',
      component: StatesGame
    },
    {
      path: '/europeGame',
      name: 'europeGame',
      component: EuropeGame
    }
  ]
});

export default router;
