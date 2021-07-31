

<template>
  
  <div>
     <p>-------------------------</p>
        
        <h3> event modifier </h3>  

      <p>-----------------------</p>  
     <!-- stop propagation -->
     <div class="red" v-on:mouseover="changeme">
          <div class="green" v-on:mouseover.stop="changeme2"> </div>
     </div>
    <p>****************************</p>
    <!-- self -->
   <div class="red" v-on:mouseover.self="changeme">
          <div class="green" v-on:mouseover="changeme2"> </div>
     </div>
        <p>****************************</p>
    <!-- capture -->
   <div class="red" v-on:mouseover.capture="changeme">
          <div class="green" v-on:mouseover="changeme2"> </div>
     </div>

         <p>****************************</p>
            <!-- once -->
          
          <div class="red" v-on:mouseover.once="changeme">
          </div> 
        
        <p>****************************</p>
            <!-- prevent -->
          
          <form v-on:submit.prevent="submit($event)">
              <input type="text" >
              <button type="submit">v</button>
          </form>
          

  </div>


</template>




<script>

export default {
    methods :{
        changeme(){
            console.log("div1")
        },
        changeme2(){
            console.log("div2");
        },
        submit(event){
            console.log(event);
        }
    }
}


</script>



<style>
  
  .red{
      background-color: red;
      width: 200px;
      height: 200px;
  }

  .green{
         background-color: green;
      width: 50px;
      height: 50px;
  }

</style>