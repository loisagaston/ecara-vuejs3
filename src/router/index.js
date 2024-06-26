import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '../layouts/MainLayout.vue';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView';

const routes = [
    {
        path: '/',
        component: MainLayout,
        children: [
            {
                path: '',
                name: 'home',
                component: HomeView,
              },
              {
                path: 'about',
                name: 'About',
                // This route is lazy-loaded when the route is visited.
                component: () => import('../views/AboutView.vue'),
              },
              {
                path: 'novedades',
                name: 'Novedades',
                component: () => import(/* webpackChunkName: "novedades" */ '../views/NovedadesView.vue'),
              },
              {
                path: 'precios',
                name: 'Precios',
                component: () => import(/* webpackChunkName: "novedades" */ '../views/precios/PreciosView.vue'),
              },
        ]

    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    }
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
