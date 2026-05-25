import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from "@/layout/MainLayout.vue";
import ModuleLayout from '@/layout/ModuleLayout.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      component: MainLayout,
      children: [
        {
          path: '',
          name: 'home-page',
          component: () => import('@/pages/HomePage.vue'),
        },
        {
          path: '/cvsnp',
          name: 'MainLayout',
          component: ModuleLayout,
          children: [
            {
              name: 'case',
              path: 'case',
              component: () => import('@/pages/CasePage.vue'),
            }
          ]
        }
      ]
    },
  ],
})

export default router
