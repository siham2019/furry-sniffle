import vue from 'vue'
import vuex from 'vuex'


vue.use(vuex)



const store = new vuex.Store({
  
    state : {
        count:1,
        numbers:[4,56,3,32]
    },
    getters:{
       
        stateInfo(state){
           return "i'm not ok "+state.count
        },
        oddNumber({numbers}){
            return (n)=>numbers.filter(num=>num%n==0)
        } 
    },
    mutations:{
        increment(state){
          state.count++;
        },  
        increase2(state,n){
           state.count+=n;
        },
        increaseN(state,data){
             state.count+=data.data
        },
        multiply(state){
            console.log("mul3");

            state.count*=2
        }
    },
    actions:{
       multiply(context){
            
          setTimeout(() => {
            context.commit("multiply")
          }, 3000);
          
       }

    }


})


export default store;