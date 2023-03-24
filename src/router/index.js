import { createRouter, createWebHistory } from 'vue-router'
import NotFoundView from '../views/NotFoundView.vue'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import SignUpView from '../views/SignUpView.vue'
import WorkoutView from '../views/WorkoutView.vue'
import CustomProgramView from '../views/CustomProgramView.vue'
import AccountView from '../views/AccountView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUpView
    },
    {
      path: '/workout',
      name: 'workout',
      component: WorkoutView
    },
    {
      path: '/customProgram',
      name: 'customProgram',
      component: CustomProgramView
    },
    {
      path: '/account',
      name: 'account',
      component: AccountView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFoundView',
      component: NotFoundView
    }

  ]
})

export default router
