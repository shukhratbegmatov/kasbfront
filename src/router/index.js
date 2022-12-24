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
  {
    path: '/login',
    name: 'Login',
    component: () => import( '../views/Auth/Login/Login')
  },
  {
    path: '/email-login',
    name: 'EmailLogin',
    component: () => import( '../views/Auth/Login/EmailForm')
  },
  {
    path: '/registration',
    name: 'EmailRegistration',
    component: () => import( '../views/Auth/Registration/Registration')
  },

    //Profile

  {
    path: '/profile',
    name: 'MainProfile',
    component: () => import( '../views/Auth/ProfileStudent/index')
  },

  {
    path: '/test-result',
    name: 'TestResult',
    component: () => import( '../views/Auth/ProfileStudent/testresult.vue')
  },

  {
    path: '/tab/trainings',
    name: 'TestResult',
    component: () => import( '../views/Auth/ProfileStudent/trainings')
  },
  {
    path: '/wishlist',
    name: 'TestResult',
    component: () => import( '../views/Auth/ProfileStudent/wishlist')
  },

  {
    path: '/my-resume',
    name: 'TestResult',
    component: () => import( '../views/Auth/ProfileStudent/my-resume')
  },
  {
    path: '/start-test',
    name: 'TestResult',
    component: () => import( '../views/Quiz/start-test')
  },
  {
    path: '/on-test',
    name: 'TestResult',
    component: () => import( '../views/Quiz/on-test')
  },
  {
    path: '/settings',
    name: 'TestResult',
    component: () => import( '../views/Auth/ProfileStudent/settings')
  },
  {
    path: '/to-test',
    name: 'TestResult',
    component: () => import( '../views/Quiz/to-test')
  },
  {
    path: '/there-test',
    name: 'TestResult',
    component: () => import( '../views/Quiz/three')
  },

    //Teachers page

  {
    path: '/teacher-login',
    name: 'TestResult',
    component: () => import( '../views/Teacher/login')
  },
  {
    path: '/teacher-dashboard',
    name: 'TestResult',
    component: () => import( '../views/Teacher/index')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
