import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../views/LandingPage.vue';
import StatesGame from '../views/StatesGame.vue';
import EuropeGame from '../views/EuropeGame.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/statesGame',
      name: 'StatesGame',
      component: StatesGame
    },
    {
      path: '/europeGame',
      name: 'EuropeGame',
      component: EuropeGame
    },
    {
      path: '/*',
      name: 'index',
      redirect: '/'
    }
  ]
});

export default router;
