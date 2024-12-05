import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/views/design/Index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/generations',
      name: 'generations',
      component: Index
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
      path: '/perfil',
      name: 'Profile',
      component: () => import('@/views/auth/ProfileView.vue')
    },
    {
      path: '/diseno/:id',
      name: 'design.show',
      component: () => import('@/views/design/Design.vue')
    },
    {
      path: '/diseno/procesando',
      name: 'design.processing',
      component: () => import('@/views/design/DesignProcessing.vue')
    }
  ]
});

export default router
