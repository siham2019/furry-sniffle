


<template>
    
  <div>

      <h1>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
       
       <!--- fallback content -->
       
         <slot>hello</slot>
        
        <!--- named slot --->
        
        <header> <slot name="head"></slot> </header>

        <main> <slot name="main"></slot> </main>

        <footer> <slot name="footer"></slot> </footer>
        
       <!--- scoped slot --->
        
        <slot name="product" :product="product">

        </slot>

      <!--- dynamic name slot --->
        
        <slot name="ert" >
        </slot>
        <slot name="ll" >
            mmmm
        </slot>
  </div>

</template>


<script>
export default {
    data() {
        return {
              product:{
                 name:"bimbies",
                 price:450.45
            }
        }
    },
    props:{
        info:String,
      
    }
}
</script>
