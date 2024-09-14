<script setup>

import {ref} from 'vue'
const emit=defineEmits(['update-data'])
const inputData=ref('')
function updateData(){
  emit('update-data',inputData.value)
}

</script>
<template>
  <input type="text" placeholder="enter new data" v-model="inputData">
  <button @click="updateData">update data</button>
  
</template>
<style scoped>
input{
  margin: 10px;
  width: 200px;
  border: white;
  border-radius: 10px;
  padding: 4px 5px;
}
button{
  background-color: aquamarine;
}
button:hover{
  background-color: aliceblue;
}
</style>