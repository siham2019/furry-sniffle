<template>
    
    <div :style="{fontSize:fontSize+'px'}">
        <p>{{name}}</p>
        <p>hello hihi haha</p>
        <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, consequatur.</p>
        
        <ChildOfHihi v-on:e="enlarge()" />
        
        <inputt v-bind:value="name" v-on:input="name=$event">ggtehetethhethte hehrheehe</inputt>

<!--         <input type="text"  v-model="name">
 -->    
<!--        <input type="text" v-bind:value="name" v-on:input="name=$event.target.value ">
 -->    
    </div>

</template>

<script>

import ChildOfHihi from './ChildOfHihi.vue'
import Inputt from './Inputt.vue'

export default {
      data() {
          return {
              fontSize : 16,
              name:""
          }
      },
      methods: {
          enlarge(){
              this.fontSize++
          }
      },
      components:{
       ChildOfHihi,
            Inputt
      }
}

</script>