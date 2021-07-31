<template>
    
    <div>

   <p>name : {{$route.params.id}}</p>
      <input type="text" v-model="name">
    </div>

</template>



<script>
export default {
    data() {
        return {
            name :""
        }
    },
    mounted() {
        console.log(this.$route.params);
    },
    watch:{
        $route(){
      /*       console.log(to);
            console.log(from); */
          this.name=""
        }
    }
}
</script>