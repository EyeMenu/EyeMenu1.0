import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Client from '@/components/Client'
import LoginHome from '@/components/LoginHome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: LoginHome,
      children: [
        {path: 'Client', component: Client},
        {path: 'Waiter', component: Login}
      ]
    }
  ]
})
