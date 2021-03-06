import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '../pages/home/Home.vue'
import Discover from '../pages/discover/Discover.vue'
import Order from '../pages/order/Order.vue'
import Mine from '../pages/mine/Mine.vue'
import Detail from '../pages/home/Detail.vue'



export default new Router({
  routes: [
    {
      path:'/home',
      alias:'/',   //别名
      component:Home,
      children:[
        {
          path:'detail',
          component:Detail
        }
      ]
    },
    {
      path:'/discover',
      component:Discover
    },
    {
      path:'/order',
      component:Order
    },
    {
      path:'/mine',
      component:Mine
    },
    {
      path:'**',
      redirect:'/home'
    }
  ]
})
