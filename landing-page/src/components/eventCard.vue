<script setup>
import { ref } from 'vue';

const name=ref('agent keen')
function greet(event){
    alert(`hello ${name.value}`)
}
</script>
<template>
    <button @click="greet">greet</button>
    
</template>
<style scoped>

</style>