<template>
  <div>
    <button @click="showModal = true">Open Modal</button>

    <!-- Modal component with slots for header, body, and footer -->
    <modalCard id="info-modal" role="dialog" aria-labelledby="modal-title" aria-hidden="true" :show="showModal" @close="showModal = false">
      <!-- Custom header slot -->
      <template #header>
        <h2 id="modal-title">Information Modal</h2>
      </template>

      <!-- Custom body slot -->
      <template #body>
        <p>This is some important information inside the modal!</p>
      </template>

      <!-- Custom footer slot -->
      <template #footer>
        <button @click="showModal = false">Got it!</button>
      </template>
    </modalCard>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import modalCard from './modalCard.vue';

const showModal = ref(false);  // Modal visibility control
</script>
