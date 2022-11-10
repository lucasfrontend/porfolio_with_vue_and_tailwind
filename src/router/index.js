import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import SkillsView from '../views/SkillsView.vue'
import PortfolioView from '../views/PortfolioView.vue'
import VideosView from '../views/VideosView.vue'
import ContactoView from '../views/ContactoView.vue'
import Page404View from '../views/Page404View.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    component: AboutView,
    name: 'about'
  },
  {
    path: '/portfolio',
    component: PortfolioView,
    name: 'portfolio'
  },
  {
    path: '/skills',
    component: SkillsView,
    name: 'skills'
  },
  {
    path: '/videos',
    component: VideosView,
    name: 'videos'
  },
  {
    path: '/contacto',
    component: ContactoView,
    name: 'contacto'
  },
  {
    path: '/:pathMatch(.*)*',
    component: Page404View
  }
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
