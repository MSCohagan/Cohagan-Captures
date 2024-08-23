import { createApp } from 'vue';
import Buefy from 'buefy-next';
import 'buefy/dist/buefy.css';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(Buefy);
app.use(router);

app.mount('#app');
