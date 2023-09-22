import { createRouter, createWebHistory} from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import CatalogView from '@/views/CatalogView.vue'
import ProductView from '@/views/ProductView.vue'
import UpdateView from '@/views/UpdateView.vue'
import SearchView from '@/views/SearchView.vue'

const router = createRouter ({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: { path: '/catalog' },
            name: 'home',
            component: HomeView
        },
        {
            path: '/catalog',
            name: 'catalog',
            component: CatalogView
        },
        {
            path: '/product/:id',
            name: 'product',
            component: ProductView
        },
        {
            path: '/update/:id',
            name: 'update',
            component: UpdateView
        },
        {
            path: '/search',
            name: 'search',
            component: SearchView
        }
    ]
})

export default router