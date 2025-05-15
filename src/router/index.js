import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import HistoryView from '../views/HistoryView.vue'
import rulet from '../views/rulet.vue'
import ruleta from '../views/ruleta.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/history',
      name: 'history',
      component: HistoryView
    },
    {
      path: '/rulet',
      name: 'rulet',
      component: rulet
    },
    {
      path: '/ruleta',
      name: 'ruleta',
      component: ruleta
    }
  ]
})

export default router