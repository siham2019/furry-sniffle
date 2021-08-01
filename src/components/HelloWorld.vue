<template>

  <div>
     mr {{name}} eat {{ vegetable }}
     <button v-on:click="login()">login</button>
     <button v-on:click="logout()">logout</button>
     <button v-on:click="goHome()">go to home </button>
  </div>



</template>


<script>

import vueRouter from 'vue-router'

let {isNavigationFailure,NavigationFailureType} = vueRouter;

export default {
  name: 'HelloWorld',
  props: {
    name: String,
    vegetable:String
  },
  methods:{
    login(){
       sessionStorage.setItem('login',true)
    },
    logout(){
       sessionStorage.removeItem('login')
     
    },
    goHome(){

      this.$router.push("/props").catch((failure)=>{
       
       if(isNavigationFailure(failure,NavigationFailureType.duplicated))
         console.log(failure.to);

      })

    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
