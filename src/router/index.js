/* eslint-disable no-alert, no-console */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ContentPage from '@/components/ContentPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/content',
      name: 'ContentPage',
      component: ContentPage
    }
  ]
})
