
<template>
    <div>

        dynamic component
        
        <component v-bind:is="currentTab"></component>
         
         <button v-on:click=" profile()">profile</button>
         <button v-on:click="dashboard()">dashboard</button>

    </div>
</template>


<script>
import Profile from './Profile.vue'
import Dashboard from './Dashboard.vue'
export default {
    data() {
        return {
            currentTab:null
        }
    },
    methods: {
        profile(){
         this.currentTab=Profile
        },
        dashboard(){
          this.currentTab=Dashboard
        }
    },
}
</script>


