<template>
    <h3>somthing</h3>
</template>


<script>

export default {
   beforeRouteEnter: (to, from, next) => {
       if(sessionStorage.getItem("login")) next()
   }    
}

</script>