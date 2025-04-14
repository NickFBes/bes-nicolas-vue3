import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CollectionView from '@/views/CollectionView.vue'
import CardDetailsView from '@/views/CardDetailsView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        { 
            path: '/collection',
            name: 'collection',
            component: () => import('../views/CollectionView.vue') 
        },
        {
            path: '/card/:id',
            name: 'BookDetails',
            component: () => import('../views/DetailBooks.vue')
        }
        
    ] 
  })
  
  

  export default router