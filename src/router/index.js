/* eslint-disable no-alert, no-console */
import Vue from 'vue'
import Router from 'vue-router'
import LoginHome from '@/components/LoginHome'
import Loginadmin from '@/components/Loginadmin'
import ContentPage from '@/components/ContentPage'
import admindashboard from '@/components/admindashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LoginHome',
      component: LoginHome
    },
      {
          path: '/loginadmin',
          name: 'Loginadmin',
          component: Loginadmin
      },
      {
          path: '/admindashboard',
          name: 'admindashboard',
          component: admindashboard
      },
      {
      path: '/content',
      name: 'ContentPage',
      component: ContentPage
    }
  ]
})
