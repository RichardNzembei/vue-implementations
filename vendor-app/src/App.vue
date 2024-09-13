<script setup>
import {onMounted, ref} from 'vue'
import homeCard from './components/homeCard.vue';
import contactCard from './components/contactCard.vue';
import productCard from './components/productCard.vue';
const currentView=ref(homeCard)
function onHashChange(){
  const hash=window.location.hash.substring(1)
  if(hash==='product'){
    currentView.value=productCard
  }else if(hash==='contact'){
    currentView.value=contactCard
  }
  else{
    currentView.value=homeCard
  }
}
onMounted(()=>{
  window.addEventListener('hashchange', onHashChange)
  onHashChange()

})

</script>
<template>
    <nav class="navbar">
      <a class="items" href="#home">Home</a>
      <a class="items" href="#product">Product</a>
      <a class="items" href="#contact">Contact</a>
      <div class="logo">
                
                <span class=" icon icon-farm"></span>
            </div>  
    </nav>
    <component :is="currentView"/>
</template>
<style scoped>
.navbar{
    display:flex;
    justify-content:space-around;
    align-items: center;
    padding: 14px;
    
    
    background-color: rgb(143, 172, 162);
    
}
.navbar.logo{
    display: flex;
    align-items: center;
    position: relative;
}

.nav-links{
    list-style: none;
    display: flex;
}
.nav-items{
    margin: 0 15px;
}
.nav-items a{
    color: white;
    text-decoration: none;
    font-size: 1.1em;
}
.nav-items a:hover{
    color: #ddd;
} 
.icon {
  width: 32px;
  height: 32px;

  background-size: cover;
  display: inline-block;
}
.icon-farm{
    background-image: url('./assets/images/farm.png');
    font-size: 24px;
    border-radius: 50%;
    position: relative;
}
</style>
