<template>
  <div class="flex justify-center items-center gap-3">
    <button v-tooltip="'Click me!'">Hover me</button>

    <div>
      <button @click="show=!show">toggle</button>
      <Transition name="slide-fade">
        <p v-if="show">hello</p>
      </Transition>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const show = ref(false);
</script>

<style scoped>
.slide-fade-enter-active{
  transition: all 0.6s ease-out;
}
.slide-fade-leave-active {
  transition: all 1.2s cubic-bezier(1,0.5,0.8,1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(40px);
  opacity: 0;
}
.tooltip-text {
  position: absolute;
  background-color: black;
  color: rgb(15, 55, 189);
  padding: 5px;
  border-radius: 4px;
  white-space: nowrap;
  display: none;
  z-index: 1000;
}
</style>
