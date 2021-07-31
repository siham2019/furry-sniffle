
<template>

   <div>
       <!-- computed -->
       
       <p>{{full_name}}</p>
       
       <!-- watch -->
       
       <p>{{l}}</p>
       <p v-show="t">hjjjj</p>
      <button v-on:click="l++">inc</button>
   </div>

</template>



<script>

export default {
    data() {
        return {
            firstName : "ahmed ",
            lastName : "silama",
            l:5,
            t:false,
        }
    },
    computed:{
        full_name : function () {
            return this.firstName+"  "+this.lastName
        }
    },
    watch:{
        l:function (value) {
            if (value == 6) {
                this.t=true
            }
            else
                this.t=false

        }
    }
}

</script>



<style>





</style>