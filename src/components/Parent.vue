

<!--<template>
    
    <Child info="tttt">{{info}}</Child>

</template>--->

<template>
    
    <div>
         <Child>
        
             tito

             <!--- named slot --->

          <template v-slot:head>bbbbb</template> 
          <template v-slot:footer>gggggg</template> 
          <template v-slot:main>zzzzzzzzzz</template> 
          
         <!-- 
              <template v-slot:product="slotProps">
                  <p> {{slotProps.product.name}} </p>
               </template>
        -->
        
       <!--    <template v-slot:product="product">
              <p> {{product.name}} </p>
          </template>
 -->
            <template #product="{ product }">
              <p> {{product.name}} </p>
           </template>
        
         <!--- dynamic slot name --->

             <template #[name]>
                 <p> ooooooooooo </p>
             </template>




         </Child>

    </div>

</template>

<script>

import Child from './Child.vue'

export default {
    data() {
        return {
            name:"ll"
        }
    },
    components:{
        Child
    }
}

</script>