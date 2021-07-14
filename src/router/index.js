import Vue from 'vue'
import VueRouter from 'vue-router'
import SingUp from '@/views/SingUp'
import LogIn from '@/views/LogIn'
import Error from '@/views/Error'
import VerifyEmail from '@/views/VerifyEmail'
import User from '@/views/User'

Vue.use(VueRouter)

const routes = [
  {
    name: 'SignUp',
    component: SingUp,
    path: '/sign-up'
  },
  {
    name: 'VerifyEmail',
    component: VerifyEmail,
    path: '/verify'
  },
  {
    name: 'User',
    component: User,
    path: '/user/:id'
  },
  {
    name: 'LogIn',
    component: LogIn,
    path: '/'
  },
  {
    name: 'Error',
    component: Error,
    path: '*'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
