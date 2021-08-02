import Vue from 'vue'
import VueRouter from 'vue-router'


import HelloWorld from '../components/HelloWorld.vue'

import F404 from "../components/404.vue"
import Hihi from '../components/Hihi.vue'
import Dynamic from '../components/Dynamic.vue'

Vue.use(VueRouter)

const routes = [
    {
       path:"/",
       component: HelloWorld,
        props:{
            name:"jiji",
         }
    },
    {
      path:"/child-event",
      component: Hihi,
     
   },
    {
      path:"/dynamic",
      component: Dynamic,
     
   },
    {
     path:"*",
     component:F404
   }

]


 const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,routes
})


export default router
