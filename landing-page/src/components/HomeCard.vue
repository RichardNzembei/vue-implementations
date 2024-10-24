<script setup>
import { useStudentstore } from '@/stores/studentStore';
import formCard from './formCard.vue';
import ButtonCard from './ButtonCard.vue'
import modalCard from './modalCard.vue';
import fancyButton from './fancyButton.vue';

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
const fname=ref('')
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
 
  <div>
 <formCard v-model.capitalize="fname"/>
 </div>
  <div>
    <ButtonCard class="mybutton" label="click me" ></ButtonCard>
  </div>
  <fancyButton>
    click me
  </fancyButton>

</template>
<style scoped>
.mybutton{
  background-color: white;
  color: black;
  margin-top: 5px;
}
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