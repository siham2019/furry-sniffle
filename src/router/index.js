import Vue from 'vue'
import VueRouter from 'vue-router'



import F404 from "../components/404.vue"


Vue.use(VueRouter)

const routes = [

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
