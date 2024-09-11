<script setup>
import {ref} from 'vue'
const props=defineProps(['title','date','time','location','description','imageUrl'])
const emits=defineEmits(['buttonClicked'])
const sendEvent=()=>{
  emits('buttonClicked', 'you Joined the event')
}
</script>
<template>
    <div class="blogposts">
        
        <h4>{{ title }}</h4>
        <img :src="imageUrl" alt="Blog Post Image" />
        <span>{{ date }}</span>
        <strong>{{ time }}</strong><br>
        <span>{{ location }}</span>
        <p>{{ description }}</p>
        <button @click="buttonClicked">join</button>

    </div>
    
</template>
<style scoped>
.blogposts{
    border: 1px solid blue;
    height: max-content;
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
    
}
h4{
    color: aqua;
}

</style>