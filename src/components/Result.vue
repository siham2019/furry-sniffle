
<template>

  <div>

      <p>result : </p>
      <p>{{this.$store.getters.stateInfo}}</p>
         <div class="t">
       
           <p v-for="num in this.$store.getters.oddNumber(3)" :key="num.id" >{{num}}</p>
        
         </div>
      <p>{{counter}}</p>
      <Addition/>
  </div>


</template>



<script>

  import Addition from './Addition.vue'

export default { 
    computed:{
     
        counter(){
           return this.$store.state.count
        }
     },
    components:{
        Addition
    }
}

</script>


<style>

.t{
  border: 2px solid black;
}

</style>

