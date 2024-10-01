<script setup>
import { useStudentstore } from '@/stores/studentStore';

import {ref} from 'vue'
const emit=defineEmits(['submitData'])
const studentStore=useStudentstore()
const localStudent=ref({
  RegNO:studentStore.student.RegNo ,
  Password:studentStore.student.Password
}
)
function submitData(){
  studentStore.setStudent(localStudent.value)
  emit('submitData',localStudent.value)
}
function resetForm(){
  studentStore.resetStudent()
  localStudent.value={RegNO:'',Password:''}
}
</script>
<template>
  <div class="formCard">
    <form @submit.prevent="submitData">
    <label for="RegNo">Registration No</label><br>
    <input type="text" placeholder="enter reg No" v-model="localStudent.RegNo"><br>
    <label for="password">Password</label><br>
    <input type="text" placeholder="enter Password" v-model="localStudent.Password"><br>
    <button type="submit">Login</button>
    <button type="button" @click="resetForm">reset</button>
  </form>
  </div>
 
  
  
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
  background-color: rgb(27, 31, 32);
  border-radius: 5px;
  color: white;

}
button:hover{
  background-color: aliceblue;
}
.formCard{
  margin: 5px 5px 5px;
  border: 1px solid blue;
  width: 300px;
  padding: 10px 10px;
  
}
input{
  background-color: beige;
}
</style>