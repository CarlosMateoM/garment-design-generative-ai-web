import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/ExplorerView.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/auth/LoginView.vue')
    },
    {
      path: '/generacion-de-prendas',
      name: 'GarmentDesign',
      preserveScrollPosition: true,
      component: () => import('@/views/ImageGenerationView.vue')
      
    },
    {
      path: '/perfil',
      name: 'Profile',
      component: () => import('@/views/ProfileView.vue')
      
    },
    
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      
    }
  ]
})

export default router
