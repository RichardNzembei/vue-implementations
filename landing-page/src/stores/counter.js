import {defineStore} from 'pinia'
import { computed,ref } from 'vue'
export const useCounterStore=defineStore('counter',()=>{
    const count=ref(0)
    const doublecount=computed(()=>
        count.value*2
    )
    function increment(){
        count.value++
    }
    return{count,doublecount,increment}
})
