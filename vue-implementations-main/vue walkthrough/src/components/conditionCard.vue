<script setup>
import { ref } from 'vue';

const grade=ref('A')
</script>
<template>
   
  <h1 v-if="grade==='A'"> Excellent!</h1> 
  <h2  v-else-if="grade==='B'">great!</h2>
  <h4 v-else-if="grade==='C'">nice trial</h4>
  <h5 v-else>fail</h5>
</template>
<style scoped>
</style>