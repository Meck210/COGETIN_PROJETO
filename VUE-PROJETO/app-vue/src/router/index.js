import Dashboard from '@/pages/dashboard.vue';
import master from '@/pages/layout/master.vue';


import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:[

    {
      path: '/',
      name: 'master',
      component: master,
      redirect: '/dashboard',
      children: [
        {
          name: 'dashboard',
          path: '/dashboard',
          component: Dashboard
        }
      ]
    }
    

    
  ]
})

export default router

