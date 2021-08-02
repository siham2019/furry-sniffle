<template>
  <div id="app">

 <div id="nav">
    
    
    <h2> components basics </h2>
   
    <router-link to="/child-event">Listening to Child Components Events</router-link> |
      <router-link to="/dynamic">dynamic component</router-link>
    

     <table>
        <tr is="Product"></tr>
     </table>
    
  </div>
  
    <router-view/> 
    


  </div>
</template>

<script>
 
 import Product from './components/Product.vue'


export default {
  name:"App",
  components :{
    Product
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
