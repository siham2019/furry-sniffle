<template>
  <div id="app">

  <!--   <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
    
    <h2>hello kamélia</h2>
     <HelloWorld name="smith" vegetable="tomato" />
      <TypeAndBinding/>
      <EventsAndDirective/>
  
  </div>
</template>

<script>
import EventsAndDirective from './components/EventsAndDirective.vue'

import HelloWorld from './components/HelloWorld.vue'
import TypeAndBinding from './components/TypesAndBinding.vue'

export default {
  name:"App",
  components:{
     HelloWorld,
     TypeAndBinding,
    EventsAndDirective
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
