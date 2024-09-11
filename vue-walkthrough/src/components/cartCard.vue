<script>
import { reactive, computed } from 'vue';
export default{
    setup(){
        const author=reactive({
          fname:'richard',
          lname:'reuben',
            books:[
                'blossoms of savvanah',
                '48 laws of power',
                'civilization'
            ]
        })
        const publishedBooksMessage=computed(()=>{
            return author.books.lenght>0? 'NO':'YES'
        })
        const fullname=computed({
             get(){
                return author.fname +''+ author.lname
             },
             set(newValue){
                [author.fname,author.lname]=newValue.split(' ')
             }
        })

       
        return {
            
           
            publishedBooksMessage,
            author,
            fullname
            
            
        }
    }
}
</script>
<template>
 
    <h1> {{fullname}} has published books</h1>
    <span>{{ publishedBooksMessage }}</span>
    <p>{{ fullname }}</p>
</template>
<style>
</style>