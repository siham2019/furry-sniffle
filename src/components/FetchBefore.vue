
<template>

   <div>


      <p v-if="err">{{err}}</p>

      <p v-if="info">{{info}}</p>

   </div>


</template>



<script>
import getPost from '../scripts/getPost.js'
export default {
    data() {
        return {
            err : null,
            info : null
        }
    },
    beforeRouteEnter (to, from, next) {
        getPost((err,info)=>{
            next(n=>n.setPost(err,info))
        })
    },
    methods:{
      setPost : function (err,info) {
          if (err) {
              this.err = err
          }
          else
           this.info = info
      }
    }
}
</script>
