


<template>
  
    <div>
         <button v-on:click="goFor()">go forward</button>
          <button @click="goBack()">go back</button>
    </div>

</template>




<script>
export default {
    methods:{
        goFor(){
            console.log("for");
            this.$router.go(1)
        },
        goBack(){
            this.$router.go(-1)
          console.log("back");
        }
    },
        mounted() {
            console.log(window.history.length);
        },
}
</script>