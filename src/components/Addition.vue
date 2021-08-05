

<template>
  
    <div>
         <h2>addition operation</h2>
         <p>-----------------------</p>
              <p>{{counter}}</p>
         <p>------------------------</p>
         
         <button v-on:click="increment"> increment </button>
         <button @click="increase2">increase by 2</button>
         <button @click="increaseN">increase by n </button>
   
    </div>

</template>


<script>

export default {
   computed:{
      counter(){
           return this.$store.state.count
      }
   },  
   methods:{
        increment(){
             this.$store.commit("increment")
/*            this.$store.state.count++
 */        },
        increase2(){
          this.$store.commit("increase2",2)
        },
        increaseN(){
               this.$store.commit({
                    type:"increaseN",
                    data:5
               })
        }
   } 
}

</script>