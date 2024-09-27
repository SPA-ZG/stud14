import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/JournalEntries.vue';
import Editor from '../views/JournalEditor.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/editor', component: Editor, name: 'journalEditorN' },
    { path: '/editor/:id', component: Editor, name: 'journalEditor' },
    { path: '/:catchAll(.*)', component: NotFound },
  ];
  

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});


export default router;
