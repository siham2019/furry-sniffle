
<template>

   <div>

      <p v-if="loading">loading ...</p>

      <p v-if="err">{{err}}</p>

      <p v-if="info">{{info}}</p>

   </div>


</template>



<script>
import getPost from '../scripts/getPost.js'
export default {
    data() {
        return {
            loading:true,
            err : null,
            info : null
        }
    },
    created() {
        getPost((err,info)=>{
            if(err) this.err = err 
            else {
                this.loading =false
                this.info = info 
            }  
        });
    },
}
</script>
