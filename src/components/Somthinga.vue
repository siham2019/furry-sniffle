

<template>
   
   <div>
        <h1> hello {{nameTeam}} team <small>{{edition.name}}</small> </h1>
<!--         <p v-bind="$attrs">age {{age}}</p> 
 -->
 
         <p>{{age}}</p>
         <p>is old {{isOld}}</p>
        <p v-for="item in members" :key="item.id">{{item}}</p>

   <input
      type="checkbox"
      v-bind:checked="checked"
      v-on:change="$emit('change', $event.target.checked)"
    >   
    
    <button v-on:click="click()">click me</button>

   </div>

</template>


<script>
export default {
    methods:{
      click:function () {
         this.$emit("update:age",this.age+1)
      }
    },
    model: {
      prop: 'checked',
      event: 'change'
  },
    inheritAttrs:false,
/*     props:[
        "nameTeam","age","isOld","members","edition"] */
        props:{
          
          nameTeam: {
              type :String,
              require:true,
           },
          age:{
              type:Number,
              default:34
          },
          checked :Boolean,
          isOld:Boolean,
          edition:Object,
          members:{
              type:Array,
              validator:function (value) {
                  return value.length>8?false : true
              }
          } 


        }

}
</script>