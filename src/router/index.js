import Vue from 'vue'
import VueRouter from 'vue-router'


import HelloWorld from '../components/HelloWorld.vue'
import Dashboard from '../components/Dashboard.vue'
import Product from '../components/Product.vue'
import Transition from '../components/Transition.vue'
import FetchBefore from '../components/FetchBefore.vue'
import FetchAfter from '../components/FetchAfter.vue'
import Scroll from '../components/Scroll.vue'

import F404 from "../components/404.vue"



Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    component: HelloWorld,
    props:{
       name:"jiji",
       vegetable:"nana"
    },
    alias:"/b"
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
     path:"/route_tuto",
     component:()=>import("../components/RouterTuto.vue"),
     children:[  
       {
           path:"/dashboard",
           component:Dashboard,
           meta:{
             required_auth :true
            }
  
        },
        {
        path:"/profile",
        component: ()=>import('../components/Profile.vue'),
        meta:{
          required_auth :true
        }
      },{
        path:"/something",
         component: ()=>import('../components/Something.vue'),
       
      },{
        path:"/transition",
         component:Transition,
       
      },{
        path:"/scroll",
         component:Scroll,
       name:"scroll"
      }
      ,{
        path:"/after",
         component:FetchAfter,
       
      },
      {
        path:"/before",
         component:FetchBefore,
       
      },
      {
        path:"/product",
        component:Product,
        beforeEnter: (to, from, next) => {
          if(sessionStorage.getItem("login"))
          next()
          else 
          next("/")
        }
      }
      ]
    },
   {
     path:"*",
     component:F404
   }

]

/** Grouping Components in the Same Chunk

 *  const Foo = () => import(*//* webpackChunkName: "group-foo" */  /* './Foo.vue')
*/


 const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to,from,savedPosition) {
    if(to.hash){
      return {
        selector:to.hash,
        behavior:"smooth"
      }
    }
    else if(savedPosition){
      return savedPosition
    }
    else 
    return {x:0,y:0}
  }
})

router.beforeEach((to,from,next)=>{
    
      if (to.matched.some(record=> record.meta.required_auth)) {
       
         if (sessionStorage.getItem("login")) {
            next()
          }else{
             next("/")
            }

     }
     else 
       next()
})



export default router
