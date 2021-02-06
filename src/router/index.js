import { createRouter, createWebHistory } from '@ionic/vue-router';
import Tabs from '../views/Tabs.vue'

const routes= [
  {
    path: '/',
    redirect: '/tabs/communes'
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/communes'
      },
      {
        path: 'communes',
        component: () => import('@/views/Commune.vue')
      },
      {
        path: 'departements',
        component: () => import('@/views/Departement.vue')
      },
      {
        path: 'regions',
        component: () => import('@/views/Region.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
