import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import LoginHome from '@/components/LoginHome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: LoginHome,
      children: [
        {path: '', component: Client},
        {path: 'Waiter', component: Login}
      ]
    }
  ]
})
