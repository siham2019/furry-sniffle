import Vue from 'vue'
import VueRouter from 'vue-router'


import TypesAndBinding from '../components/TypesAndBinding.vue'
import HelloWorld from '../components/HelloWorld.vue'
import EventsAndDirective from '../components/EventsAndDirective.vue'
import ClassAndStyleBinding from '../components/ClassAndStyleBinding.vue'
import EventModifier from '../components/EventModifier.vue'
import ComputeWatch from '../components/ComputeWatch.vue'
import RouterTuto from '../components/RouterTuto.vue'
import DollaRoute from "../components/DollaRoute.vue"
import DynamicRoutes from '../components/DynamicRoutes.vue'
import User from '../components/User.vue'
import F404 from "../components/404.vue"
import ProgramaticNavigation from "../components/ProgramaticNavigation.vue"
import NamedRouter from '../components/NamedRouter.vue'
import Baz from '../components/Baz.vue'
import Faz from '../components/Faz.vue'
import NamedView from '../components/NamedView.vue'



Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    component: HelloWorld,
    alias:"/b"
 },
   {
     path:"/type_bind",
     component : TypesAndBinding
   },
   {
     path:"/props",
     component : HelloWorld,
     props:{
       name:"smith",
       vegetable : "popcorn"
     }
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
   },
   {
     path:"/route_tuto",
     component:RouterTuto,
     children:[
         {
           path:"/router",
           component:DollaRoute
         },  {
          path:"/named/:id",
          component:NamedRouter,
          name:"named",
          props:true
        },{
          path:"/namedv",
          components:{
            default : NamedView,
            a: Baz,
            b:Faz
          },
          
        },
        {
           path:"/p",
           redirect:"/dynamic"
        },
       
         {
           path:"/dynamic",
            component:DynamicRoutes,
            children:[
              {
                path:"/user/:id",
                component:User
              }
            ]
         },
         {
          path:"/programatic",
          component:ProgramaticNavigation
        },
     ]
   },
 
   {
     path:"*",
     component:F404
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
