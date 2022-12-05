import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import( '../views/About.vue')
  },
  {
    path: '/professions',
    name: 'Professions',
    component: () => import( '../views/Professions.vue')
  },
  {
    path: '/intro-resume',
    name: 'Intro-resume',
    component: () => import( '../views/Introresume.vue')
  },
  {
    path: '/trainings',
    name: 'Trainings',
    component: () => import( '../views/Trainings.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
