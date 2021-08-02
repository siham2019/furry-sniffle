

<template>
   
      <div>
              <input type="text" v-bind:value="name" v-on:input="$emit('input',$event.target.value)"> 
                
                <br>

              <slot></slot>
      </div>
 
</template>


<script>
export default {
    props:{
        name:String
    }
}
</script>

