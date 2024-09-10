<script setup>
import { ref } from "vue";
const text = ref("");
const checked = ref("");
</script>
<template>
  <input v-model.trim="text" />
  <p>{{ text }}</p>
  <h1>checkbox</h1>
  <input type="checkbox" id="checkbox" v-model="checked" />
  <label for="checkbox">{{ checked }}</label>
</template>
<style scoped>
</style>