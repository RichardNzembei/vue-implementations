<script setup>
import { onMounted, ref, shallowRef } from "vue";
import HomeCard from "./components/HomeCard.vue";
import studentcard from "./components/studentcard.vue";
import feeCard from "./components/feeCard.vue";
import crudOperation from "./components/crudOperation.vue";
import formCard from "./components/formCard.vue";


const currentView = shallowRef(HomeCard);
const handleHashchange = () => {
  const hash = window.location.hash.substring(1);
  if (hash === "Fee") {
    currentView.value = feeCard;
  } else if (hash === "Student") {
    currentView.value = studentcard;
  } else if(hash==="Crud"){
    currentView.value=crudOperation;
  }
  else {
    currentView.value = HomeCard;
  }
};
onMounted(() => {
  window.addEventListener("hashchange", handleHashchange);
  handleHashchange();
});
const studentData=ref({
  RegNo:'',
  Password:''
})
function handleSubmit(newData){
  studentData.value={
    ...studentData.value, ...newData
  }
}

</script>
<template>
  <div class="app">
    <nav class="navbar">
    <a class="navbar-item" href="#Home">Home</a>
    <a class="navbar-item" href="#Fee">Fee</a>
    <a class="navbar-item" href="#Student">Student</a>
    <a class="navbar-item" href="#Crud">Crud</a>
  </nav>
  <component 
  :is="currentView"
  @submitData="handleSubmit"
  :data="studentData"
  />
  </div>


</template>
<style scoped>
.app{
  background-color: white;
  height: 100%;
}
.navbar {
  background-color: #333;
  padding: 10px 10px;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1000;
  display: flex;
  justify-content: center;
}
.navbar-item {
  margin: 0 15px;

  text-decoration: none;
  color: white;
  padding: 10px 15px;
  font-size: 18px;
  font-family: Arial, sans-serif;
  transition: background-color 0.3s ease;
}
.navbar-item a {
  text-decoration: none;
  color: white;
  padding: 10px 15px;
  font-size: 18px;
  font-family: Arial, sans-serif;
  transition: background-color 0.3s ease;
}
.navbar-item :hover {
  background-color: aqua;
  border-radius: 5px;
}
</style>