<template>
  <div id="app">

 <div id="nav">
    
      <router-link to="/type_bind">types of data & attribute binding</router-link>  |
      <router-link to="/props"> props </router-link>  |
      <router-link to="/event_modifier"> event modifier </router-link>  |
      <router-link to="/class_style_bind">class style binding</router-link>    |
      <router-link to="/compute_watch"> compute watch </router-link>
        |
      <router-link to="/event_directive"> event directive </router-link>      |
       <router-link to="/route_tuto"> router tuto </router-link>
    
  </div>
  
    <router-view/> 
    


  </div>
</template>

<script>



export default {
  name:"App",

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
