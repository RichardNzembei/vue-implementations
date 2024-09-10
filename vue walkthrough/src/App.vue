<script setup>
import { ref } from "vue";
import projectsCard from "./components/projectsCard.vue";
import aboutCard from "./components/aboutCard.vue";
import productCard from "./components/productCard.vue";
import cartCard from "./components/cartCard.vue";
import conditionCard from "./components/conditionCard.vue";
import listCard from "./components/listCard.vue";
import eventCard from "./components/eventCard.vue";
import formCard from "./components/formCard.vue";
import componentCard from "./components/componentCard.vue";

const posts = ref([
  {
    id: 1,
    title: "Sakata Dimba",
    date: "September 15, 2024",
    time: "3:00 PM",
    location: "Nairobi, Kenya",
    description:
      "A local football tournament where the top teams from Nairobi battle it out for the championship.",
    imageUrl: "@/assets/images/UI.png"
  },
  {
    id: 2,
    title: "Gez Rivals",
    date: "October 3, 2024",
    time: "6:00 PM",
    location: "Addis Ababa, Ethiopia",
    description:
      "The Gez rivals, an intense football match between the two biggest teams in Ethiopia, attracts thousands of fans annually.",
    imageUrl: "path/to/gez-rivals-image.jpg",
  },
  {
    id: 3,
    title: "La Liga Derby",
    date: "November 10, 2024",
    time: "8:00 PM",
    location: "Madrid, Spain",
    description:
      "The La Liga derby between Real Madrid and Atlético Madrid, one of the fiercest rivalries in European football.",
    imageUrl: "path/to/laliga-derby-image.jpg",
  },
]);
</script>
<template>
  <div class="vuebasics">
    <h2>Vue Js Basics</h2>
    <projectsCard />
    <aboutCard />
    <productCard />
    <cartCard />
    <conditionCard />
    <listCard />
    <eventCard /><br />
    <formCard />
  </div>
  <div class="components">
    <h2>components in depth</h2>
    <componentCard
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      :date="post.date"
      :time="post.time"
      :location="post.location"
      :description="post.description"
      :imageUrl="post.imageUrl"
    >
    </componentCard>
  </div>
</template>  
<style>
h2 {
  color: black;
  text-decoration: underline;

  text-align: center;
}
.vuebasics {
  border: 1px solid black;
  width: 400px;
  border-radius: 10px;
}
.components {
  border: 1px solid rgb(22, 22, 21);
  width: 400px;
  position: absolute;
  left: 450px;
  top: 0;
  border-radius: 10px;
}
</style>