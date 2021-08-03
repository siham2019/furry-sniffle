<template>
   
  
     <div>
    
          <h3>somthing</h3>
          <p>{{checked}}</p>
          <somthinga v-model="checked" name-team="ant" id="h" :style="{color:'red'}" :age.sync="age" :is-old="true" :members="[4,5,55]" :edition="{name:'hiloo',tuto:'by karim'}"/>
          <p>{{age}}</p>
     </div>


</template>


<script>
import Somthinga from './Somthinga.vue'

export default {
     data() {
          return {
               checked:true,
               age:33
          }
     },
  components: { Somthinga }
}

</script>