<script setup>
import { ref,defineEmits,defineProps } from "vue";
const products = ref([

  // Fruits
  {
    id: 1,
    name: "Apple",
    description: "Fresh apples",
    price: 40,
    category: "Fruits",
    icon: "fas fa-apple",
  },
  {
    id: 2,
    name: "Banana",
    description: "Ripe bananas",
    price: 10,
    category: "Fruits",
    icon: "fas fa-banana",
  },
  {
    id: 3,
    name: "Avocado",
    description: "Creamy avocados",
    price: 30,
    category: "Fruits",
    icon: "fas fa-avocado",
  },
  {
    id: 4,
    name: "Citrus Fruits",
    description: "Assorted citrus fruits",
    price: 15,
    category: "Fruits",
    icon: "fas fa-lemon",
  },
  {
    id: 5,
    name: "Cucurbit Fruits",
    description: "Watermelon, pumpkins, etc.",
    price: 60,
    category: "Fruits",
    icon: "fas fa-watermelon",
  },
  {
    id: 6,
    name: "Berries",
    description: "Strawberries, gooseberries, etc.",
    price: 100,
    category: "Fruits",
    icon: "fas fa-berries",
  },
  {
    id: 7,
    name: "Passion Fruit",
    description: "Fresh passion fruits",
    price: 35,
    category: "Fruits",
    icon: "fas fa-grin-hearts",
  },
  {
    id: 8,
    name: "Pineapple",
    description: "Sweet pineapples",
    price: 40,
    category: "Fruits",
    icon: "fas fa-pineapple",
  },
  {
    id: 9,
    name: "Pawpaw",
    description: "Ripe pawpaw fruits",
    price: 50,
    category: "Fruits",
    icon: "fas fa-paw",
  },
  {
    id: 10,
    name: "Tree Tomato",
    description: "Tree tomatoes for cultivation",
    price: 10,
    category: "Fruits",
    icon: "fas fa-tree",
  },
  {
    id: 11,
    name: "Mango",
    description: "Juicy mangoes",
    price: 25,
    category: "Fruits",
    icon: "fas fa-mango",
  },
  // Vegetables
  {
    id: 12,
    name: "Irish Potatoes",
    description: "Staple food in many Kenyan households",
    price: 60,
    category: "Vegetables",
    icon: "fas fa-potato",
  },
  {
    id: 13,
    name: "Tomatoes",
    description: "Another popular vegetable in Kenya",
    price: 45,
    category: "Vegetables",
    icon: "fas fa-tomato",
  },
  {
    id: 14,
    name: "Cabbage",
    description: "Commonly used in Kenyan dishes",
    price: 60,
    category: "Vegetables",
    icon: "fas fa-cabbage",
  },
  {
    id: 15,
    name: "Snow Peas",
    description: "Type of flat, tender pea",
    price: 100,
    category: "Vegetables",
    icon: "fas fa-pea-pod",
  },
  {
    id: 16,
    name: "Kale",
    description: "Type of leafy green vegetable",
    price: 15,
    category: "Vegetables",
    icon: "fas fa-leaf",
  },
  {
    id: 17,
    name: "Spinach",
    description: "Popular leafy green vegetable",
    price: 30,
    category: "Vegetables",
    icon: "fas fa-leaf",
  },
  {
    id: 18,
    name: "Runner Beans",
    description: "Type of green bean",
    price: 120,
    category: "Vegetables",
    icon: "fas fa-bean",
  },
  {
    id: 19,
    name: "French Beans",
    description: "Type of green bean",
    price:140 ,
    category: "Vegetables",
    icon: "fas fa-bean",
  },
  {
    id: 20,
    name: "Carrots",
    description: "Popular root vegetable in Kenya",
    price: 10,
    category: "Vegetables",
    icon: "fas fa-carrot",
  },
  {
    id: 21,
    name: "Broccoli",
    description: "Type of cruciferous vegetable",
    price: 25,
    category: "Vegetables",
    icon: "fas fa-broccoli",
  },
  {
    id: 22,
    name: "Indigenous Vegetables",
    description: "Wide range of indigenous vegetables",
    price: 25,
    category: "Vegetables",
    icon: "fas fa-seedling",
  },
  // Cereals
  {
    id: 23,
    name: "Maize (Corn)",
    description: "Staple food in Kenya used to make ugali and other dishes",
    price: 275,
    category: "Cereals",
    icon: "fas fa-corn",
  },
  {
    id: 24,
    name: "140",
    description:
      "Commonly consumed in various forms including plain rice and pilau",
    price: 4,
    category: "Cereals",
    icon: "fas fa-rice",
  },
  {
    id: 25,
    name: "Wheat",
    description: "Used to make bread, chapati, and other baked goods",
    price: 120,
    category: "Cereals",
    icon: "fas fa-wheat",
  },
  {
    id: 26,
    name: "Barley",
    description: "Used for brewing beer and making malted products",
    price: 90,
    category: "Cereals",
    icon: "fas fa-beer",
  },
  {
    id: 27,
    name: "Sorghum",
    description: "Used to make ugali, porridge, and fermented beverages",
    price: 65,
    category: "Cereals",
    icon: "fas fa-sorghum",
  },
  {
    id: 28,
    name: "Millet",
    description: "Used for making porridge, flatbreads, and traditional drinks",
    price: 60,
    category: "Cereals",
    icon: "fas fa-mug-hot",
  },
  {
    id: 29,
    name: "Oats",
    description: "Used to make oatmeal, porridge, and baked goods",
    price: 130,
    category: "Cereals",
    icon: "fas fa-seedling",
  },

]);
const emit=defineEmits(["addToCart"])
const props=defineProps({
  product:Object
})
 
 function addToCart(product){
  emit("addToCart",product)
 }
</script>
<template>
  <div class="search">
    <input type="text" placeholder="search by category" />
    <button><i class="fa fa-search"></i></button>
  </div>

  <div class="card-container">
    <div class="card" v-for="product in products" :key="product.id">
      <span :class="product.icon" class="icon"></span>
      <h3>{{ product.name }}</h3>
      <h4>Price: Ksh {{ product.price }}</h4>
      <div class="row">
        <div class="cell">
          <label><b>Quantity:</b></label>
        </div>
        <div class="cell">
          <input type="number" v-model.number="product.quantity" />
        </div>
      </div>
      <button @click="addToCart(product)" class="addToCart">Add to Cart</button>
    </div>
  </div>
</template>
<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.icon {
  width: 32px;
  height: 32px;
  background-size: cover;
  display: inline-block;
}

.card {
  border: 1px solid #1d3347;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(131, 104, 104, 0.1);
  padding: 16px;
  margin: 16px;
  max-width: 300px;
  text-align: center;
  background-color: antiquewhite;
}

.card h3 {
  margin: 16px 0;
  font-size: 1.25em;
  color: rgb(72, 21, 95);
}

.card .row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
}

.card .cell {
  flex: 1;
  display: flex;
  align-items: center;
}

.card input[type="number"] {
  width: 60px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.card .addToCart {
  margin-top: 16px;
  padding: 8px 16px;
  background-color: #39d1b8;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.card .addToCart:hover {
  background-color: #0056b3;
}

.search {
  text-align: center;
  margin-bottom: 20px;
}

.search input[type="text"] {
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 200px;
  margin-right: 10px;
  margin: 5px;
}

.search button {
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
</style>