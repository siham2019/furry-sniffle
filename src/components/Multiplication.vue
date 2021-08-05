

  <template>
  
      <div>
            <h3>multiplication</h3>
            <p>{{this.$store.state.count}}</p>
    
            <button @click="multiply"> multiply </button>
    
     </div>


</template>


<script>

export default {
    methods:{
        multiply(){
           this.$store.dispatch("multiply")            
        }
    }
}

</script>