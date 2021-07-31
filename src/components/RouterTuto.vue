


<template>

        <div>

               <router-link to="/router"> $router </router-link>  |
               <router-link to="/dynamic"> dynamic router </router-link>  |
               <router-link to="/programatic"> programatic navigation </router-link>
               |
               <router-link :to="{name:'named',params:{id:34}}"> named route </router-link>  
                            |
               <router-link to="/namedv"> named view </router-link>

              <router-view/> 
               
               <router-view name="a"/> 
<!--                <router-view name="b"/> 
 -->
        </div>


</template>


<script>
export default {
    
}
</script>



<style>

</style>