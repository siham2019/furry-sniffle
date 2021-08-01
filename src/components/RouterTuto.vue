


<template>

        <div>
          
          <!--- beforGuard  --->
       
             <router-link to="/dashboard">dashboard</router-link>   | 
             <router-link to="/profile">profile</router-link>
        
        <!--- pre route guard --->
 | 
             <router-link to="/product">product</router-link>
         | 
    
        <!--- in component guard --->
        
           <router-link to="/something">something</router-link>
        
        <!--- transition --->
                 | 
           <router-link to="/transition">transition</router-link>
  
       <!--- fetching after navigarion --->
                 | 
           <router-link to="/after">fetching after</router-link>
       
        <!--- fetching before navigarion --->
                 | 
           <router-link to="/before">fetching before</router-link>


       <!--- scroll behavior --->
                 | 
           <router-link :to="{name :'scroll',hash:'#heading'}">scroll behavior  with hash</router-link>
                            | 
           <router-link :to="{name :'scroll'}">scroll behavior</router-link>







            <transition name="transitionName" mode="out-in">
                 <router-view></router-view>
            </transition>
        </div>


</template>


<script>
export default {
    
}
</script>



<style>
.transitionName-enter-active{
        
   animation: custom 1s ease;
   opacity: 0;
}
.transitionName-enter-leave{
   animation: custom2 .1s ease;
   opacity: 1;
}


@keyframes custom {
        0%{
            transform: translateX(-56px);
        }
        100%{
           transform: translateX(0px);

        }
}
@keyframes custom2 {
        0%{
            transform: translateX(0px);
        }
        100%{
           transform: translateX(-50px);
           opacity: 0;
        }
}

</style>