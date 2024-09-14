<script setup>
import { onMounted, ref, shallowRef } from "vue";
import HomeCard from "./components/HomeCard.vue";
import ContactCard from "./components/ContactCard.vue";
import AboutsCard from "./components/AboutsCard.vue";

const currentView = shallowRef(HomeCard);
const handleHashchange = () => {
  const hash = window.location.hash.substring(1);
  if (hash === "About") {
    currentView.value = AboutsCard;
  } else if (hash === "Contact") {
    currentView.value = ContactCard;
  } else {
    currentView.value = HomeCard;
  }
};
onMounted(() => {
  window.addEventListener("hashchange", handleHashchange);
  handleHashchange();
});
const shareData=ref('')
function handleupdate(newData){

  shareData.value=newData
}
</script>
<template>
  <div class="app">
    <nav class="navbar">
    <a class="navbar-item" href="#Home">Home</a>
    <a class="navbar-item" href="#About">About</a>
    <a class="navbar-item" href="#Contact">Contact</a>
  </nav>
  <component 
  :is="currentView"
  @update-data="handleupdate"
  :data="shareData"
  />
  </div>
 

</template>
<style scoped>
.app{
  background-color: antiquewhite;
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