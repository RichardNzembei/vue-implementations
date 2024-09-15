<script setup>
import { onMounted, ref, shallowRef,computed } from "vue";
import homeCard from "./components/homeCard.vue";
import contactCard from "./components/contactCard.vue";
import productCard from "./components/productCard.vue";
import cartCard from "./components/cartCard.vue";
const currentView = shallowRef(homeCard);
const isCartvisible=ref(false)
const cartItems=ref([])

function onHashChange() {
  const hash = window.location.hash.substring(1);
  if (hash === "product") {
    currentView.value = productCard;
  } else if (hash === "Offers") {
    currentView.value = contactCard;
  } else {
    currentView.value = homeCard;
  }
}
onMounted(() => {
  window.addEventListener("hashchange", onHashChange);
  onHashChange();
});

function toogleSidebar(){
    isCartvisible.value=!isCartvisible.value
}

function handleAddToCart(product){
  cartItems.value.push(product)

}
const totalQuantity = computed(() => {
  return cartItems.value.reduce((total, item) => total + item.quantity, 0);
});
</script>
<template>
  <nav class="navbar">
    <a class="navbar-items" href="#home">Home</a>
    <a class="navbar-items" href="#product">Product</a>
    <a class="navbar-items" href="#Offers">Offers</a>
    <div class="logo">
      
    </div>
    <a @click="toogleSidebar">
      <span class="icon icon-trolley"></span>
      <span class="cartBadge">{{ totalQuantity }}</span>
      
    </a>
  </nav>
  <component
   :is="currentView" 
   :cartItems="cartItems"
   @addToCart="handleAddToCart"
  />
  <cart-card  
  v-if="isCartvisible"
  :cartItems="cartItems"
  @toogle="toogleSidebar"
  />

</template>
<style scoped>
.navbar {
  justify-content: space-around;
  align-items: center;
  padding: 14px;

  background-color: rgb(185, 207, 203);
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1000;
  display: flex;
}
.navbar.logo {
  display: flex;
  align-items: center;
  position: relative;
}

.navbar-items {
  margin: 0 15px;
  text-decoration: none;
  color: rgb(82, 73, 73);
  padding: 10px 15px;
  font-size: 18px;
  font-family: Arial, sans-serif;
  transition: background-color 0.3s ease;
}.search button {
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  background-color: #1f78bb;
  color: #080404;
  cursor: pointer;
}

.search button:hover {
  background-color: #646c74;
}
.navbar-items a {
  color: white;
  text-decoration: none;

  padding: 10px 15px;
  font-size: 18px;
  font-family: Arial, sans-serif;
  transition: background-color 0.3s ease;
}
.navbar-items:hover {
  background-color: rgb(115, 120, 133);
  border-radius: 5px;
}
.icon {
  width: 32px;
  height: 32px;

  background-size: cover;
  display: inline-block;
}
.icon-farm {
  background-image: url("./assets/images/farm.png");
  font-size: 24px;
  border-radius: 50%;
  position: relative;
}
.icon-trolley{
  background-image: url("./assets/images/trolley.png");
  font-size: 24px;
  border-radius: 50%;
  position: relative;
}
button {
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  background-color: #414950;
  color: #080404;
  cursor: pointer;
}

button:hover {
  background-color: #646c74;
}
.cartBadge{
  position: absolute;
  top: 2px;
  right: 148px;
  background-color: rgb(224, 35, 107);
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
}
</style>
