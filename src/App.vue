<template>
  <div id="app">


    
    
    <h2> components basics </h2>
    
    <result/>
    <multiplication/>
    <router-view/> 
    


  </div>
</template>

<script>
import Multiplication from './components/Multiplication.vue'
import Result from './components/Result.vue'
 


export default {
  name:"App",
  components :{
    Result,
    Multiplication
    
  }
}
</script>


<style>

</style>
