import Vue from 'vue'
import VueRouter from 'vue-router'
import TypesAndBinding from '../components/TypesAndBinding.vue'
import HelloWorld from '../components/HelloWorld.vue'
import EventsAndDirective from '../components/EventsAndDirective.vue'
import ClassAndStyleBinding from '../components/ClassAndStyleBinding.vue'
import EventModifier from '../components/EventModifier.vue'
import ComputeWatch from '../components/ComputeWatch.vue'



Vue.use(VueRouter)

const routes = [

   {
     path:"/type_bind",
     component : TypesAndBinding
   },
   {
     path:"/props",
     component : HelloWorld
   },
   {
     path:"/class_style_bind",
     component:ClassAndStyleBinding
   },

   {
     path:"/event_modifier",
     component:EventModifier
   }
   ,
   {
     path:"/compute_watch",
     component:ComputeWatch
   } ,
   {
     path:"/event_directive",
     component:EventsAndDirective
   }

/*   {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" '../views/About.vue') 
  } */
]

const router = new VueRouter({
/*   mode: 'history',
  base: process.env.BASE_URL, */
  routes
})

export default router
