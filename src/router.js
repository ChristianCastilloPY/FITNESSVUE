import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Contact from './views/Contact.vue'
import User from './views/User.vue'
import Explore from './views/Explore.vue'
import Yourfitnessbet from './views/YourFitnessBet.vue'
import Product from './views/Product.vue'
import Category from './views/Category.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      // name: 'home',
      component: Home
    },
    {
      path: '/about',
      // name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/contact',
      // name: 'contact',
      component: Contact
    },
    {
      path: '/product',
      // name: 'contact',
      component: Product
    },
    {
      path: '/category',
      // name: 'contact',
      component: Category
    },
    {
      path: '/Yourfitnessbet',
      // name: 'explore',
      component: Yourfitnessbet
    },
    {
      path: '/explore',
      // name: 'explore',
      component: Explore
    },
    // dynamic segments start with a colon
    {
      path: '/user/:id',
      component: User
    }
  ]
})
