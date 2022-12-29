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
    component: () => import( '../views/About.vue'),


  },
  {
    path: '/professions',
    name: 'Professions',
    component: () => import( '../views/Professions.vue')
  },
  {
    path: '/professions/:id',
    name: 'Professions',
    component: () => import( '../views/professionsSingle')
  },
  {
    path: '/universities',
    name: 'Professions',
    component: () => import( '../views/universities')
  },
  {
    path: '/universities/:id',
    name: 'Professions',
    component: () => import( '../views/universitiesSingle')
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
    path: '/calculator',
    name: 'Trainings',
    component: () => import( '../views/Calculator.vue')
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
    component: () => import( '../views/Auth/ProfileStudent/index'),
    meta: {
      requiresAuth: true
    },

  },

  {
    path: '/test-result',
    name: 'TestResult',
    component: () => import( '../views/Auth/ProfileStudent/testresult.vue'),
    meta: {
      requiresAuth: true
    },

  },

  {
    path: '/tab/trainings',
    name: 'TestResult',
    component: () => import( '../views/Auth/ProfileStudent/trainings'),

  },
  {
    path: '/wishlist',
    name: 'TestResult',
    component: () => import( '../views/Auth/ProfileStudent/wishlist'),

  },
  {
    path: '/profile/email-verify',
    name: 'ProfileEmail',
    component: () => import( '../views/Auth/ProfileStudent/email-verify'),

  },
  {
    path: '/student/email-verify',
    name: 'ProfileEmail',
    component: () => import( '../views/Auth/ProfileStudent/student_reg'),

  },
  {
    path: '/teacher/email-verify',
    name: 'ProfileEmail',
    component: () => import( '../views/Auth/ProfileStudent/teacher_reg'),

  },

  {
    path: '/my-resume',
    name: 'TestResult',
    component: () => import( '../views/Auth/ProfileStudent/my-resume'),
    meta: {
      requiresAuth: true
    },

  },
  {
    path: '/start-test',
    name: 'TestResult',
    component: () => import( '../views/Quiz/start-test'),

  },
  {
    path: '/on-test',
    name: 'TestResult',
    component: () => import( '../views/Quiz/on-test'),
  },
  {
    path: '/settings',
    name: 'TestResult',
    component: () => import( '../views/Auth/ProfileStudent/settings'),
  },
  {
    path: '/to-test',
    name: 'TestResult',
    component: () => import( '../views/Quiz/to-test'),

  },
  {
    path: '/there-test',
    name: 'TestResult',
    component: () => import( '../views/Quiz/three'),

  },



]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!localStorage.getItem('reg_token')) {
      next({ name: 'Home' })

    } else {
      next() // go to wherever I'm going
    }
  } else {
    next() // does not require auth, make sure to always call next()!
  }
});
export default router
