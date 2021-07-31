

<template>

   <button @click="goDashboard()">go to dashbord</button>

</template>



<script>
export default {
    methods:{
        goDashboard(){
            this.$router.push("/")
        }
    }
}
</script>