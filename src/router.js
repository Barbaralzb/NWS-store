import { createRouter , createWebHistory} from 'vue-router'
import Home from './views/Home.vue'
import ArticlePage from './views/ArticlePage.vue'
import Collections from './views/Collections.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/Article',
        name: 'Article',
        component: ArticlePage,
        // props: true
    },
    {
        path: '/Collections',
        name: 'Collections',
        component: Collections
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;