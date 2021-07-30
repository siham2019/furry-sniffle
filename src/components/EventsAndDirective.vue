



<template>
    <div id="e">
         <h2>model binding</h2>

         <p>-----------------</p>


          <p>salary : {{salary}}</p>
         
          <input type="text" v-model="salary">
        
        
         <p>--------------------</p>
        

             <p>event</p>

         
         <p>-------------------</p>

          
           <button v-on:keyup.enter="enter">enter</button>
           <button v-on:keyup.space="space">space</button>
           <button v-on:keyup.right="right">right</button>

        <p>---------------------</p>

              <p>directive</p>

        <p>---------------------</p>
          
        <p v-show="false">show me</p>

        <p v-if="salary==3"> hello ! </p>
        <p v-else-if="salary==6"> dodooo </p>
        <p v-else>uuuuuu</p>
        
        <!-- ul li iteration -->

        <ul v-for="item in arr" :key="item.id">
            <li >{{item}}</li>
        </ul>
      
      <p>----------------------</p>

        <!-- li iteration -->
        
          <ul>
            <li v-for="item in arr" :key="item.id" >{{item}}</li>
         </ul>



     <p>----------------------</p>
       
      <!-- object iteration  -->

      <p v-for="(key,value) in o" :key="value.id"> {{value}}  {{key}} </p>

     <p>----------------------</p>
       
      <!-- array of objects iteration  -->

         <p v-for="(value,name,index) in arr1" :key="value.id"> {{value.name}} {{index}} {{name}}  </p>

      <p>--------------------</p>



    </div>


</template>




<script>

export default {
   data(){
       return{
           salary:0,
           arr : [43,56,3,33],
           o:{
               name: "rff gfg",
               age : 44,
               tt : "zern erozizi"
           },
           arr1 : [
               {
                   name:"zeralda",
                   age:34
               },
               {
                   name:"omar",
                   age:45
               }
           ]
       }
   },
   methods:{
          enter(){
             alert("enter key")
         }, 
        space(){
            alert("space key")
        },
       right(){
          alert("right key")
        }
   }
}

</script>

<style>
  
  #e{
      background-color: burlywood;
  }

</style>







