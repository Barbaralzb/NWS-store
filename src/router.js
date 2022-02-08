import { createRouter , createWebHistory} from 'vue-router'
import ArticlePage from './views/ArticlePage.vue'
import Collections from './views/Collections.vue'

const routes = [
    {
        path: '/Article/:id',
        name: 'Article',
        component: ArticlePage,
        props: true
    },
    {
        path: '/',
        name: 'Collections',
        component: Collections
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;