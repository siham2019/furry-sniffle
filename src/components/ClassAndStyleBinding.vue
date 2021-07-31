

<template>

  <div>
      <!-- object -->

     <p :class="{red :true,big : active , decoration : true}">hello world !!!</p>
     
     <button @click="active=!active">toggle</button>

    
     <!-- array -->
         <p :class="classArr"> tttttt </p>
       <!--      <p :class="[a,b,c]"> tttttt </p>
       -->
      
      <!-- style binding -->

        <p :style="{color : green }"> style style </p>

        <p :style="[r,t,y]"> style style </p>


  </div>

</template>



<script>
export default {
    data() {
        return {
            active : true,
            a:"red",
            b:"big",
            c:"decoration",
            green :"green",
            r:{border:"1px solid red"},
            t:{fontWeight:"bolder"},
            y:{fontSize:"2em"}
        }
    },
    computed:{
        classArr : function () {
            return this.active?[this.a,this.b]:[this.a,this.b,this.c]
        }
    }
}
</script>


<style>
  
  .red{
    color: red;
  }
  
   .big{
      font-size: 3em;
   }

   .decoration{
      text-decoration: underline;
   }

</style>