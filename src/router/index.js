import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/ExplorerView2.vue')
    },
    {
      path: '/home',
      name: 'Root',
      component: () => import('@/views/ExplorerView2.vue')
    },
    {
      path: '/explore',
      name: 'Explore',
      component: () => import('@/views/ExploreView.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/auth/LoginView.vue')
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('@/views/auth/RegisterView.vue')
    },
    {
      path: '/verify-email',
      name: 'VerifyEmail',
      component: () => import('@/views/auth/VerifyEmailView.vue')
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
