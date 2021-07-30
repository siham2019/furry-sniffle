
<template>

   <div>
                <h3>types</h3>
                <p>------------</p>
             
                <p> {{name}} </p>
                <p> {{age}}   </p>
                <p> {{yes}}   </p>
                 <p> {{ posts[0] }}   </p>
                <p>{{getFullInfo()}}</p>
                 <p>----------------</p>
                <h3>binding</h3>
                <p>---------------</p>

                <p v-bind:class="className"> ddddddddd </p> 
                <img :src="src" alt="">    

                <p>------------------</p>
                <h3>event</h3>
                <p>-----------------</p>
<!-- 

                <p>
                    number : {{ number }}
                </p>

               <button type="button" v-on:click="increment()">
                   increment
               </button>

               <button type="button" v-on:click="decrement()">
                   decrement
               </button> -->
                
                <p>
                    number : {{ number }}
                </p>

               <button type="button" v-on:click="number++">
                   increment
               </button>

               <button type="button" v-on:click="number--">
                   decrement
               </button>
   </div>

</template>


<script>
export default {
    name:"TypesAndBinding",
    data(){
        return{
            name:"ahmed",
            posts : ["dz","eg","us"],
            age : 33,
            yes:true,
            number : 0,
            className : "f",
            src : "https://st.depositphotos.com/1428083/2946/i/600/depositphotos_29460297-stock-photo-bird-cage.jpg"
        }
    },
    methods:{
        getFullInfo(){
            return this.name+" "+this.age
        },
        increment(){
            return this.number++
        },
        decrement(){
            return this.number--
        }
    }
}
</script>




<style>
  .f{
     color: blue;
  }

</style>