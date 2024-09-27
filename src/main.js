import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import { pinia } from './store';  // Import the pinia instance

const app = createApp(App);

app.use(router);

// Use pinia instance created in store/index.js
app.use(pinia);

app.mount('#app');
