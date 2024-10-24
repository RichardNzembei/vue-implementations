<template>
    <div class="modal-overlay" v-if="isVisible" @click.self="closeModal" v-bind="$attrs">
      <div class="modal-content">
        <button class="modal-close" @click="closeModal">&times;</button>
  
        <!-- Custom header slot -->
        <slot name="header">
          <h2>Default Header</h2>
        </slot>
  
        <!-- Custom body slot -->
        <slot name="body">
          <p>Default body content.</p>
        </slot>
  
        <!-- Custom footer slot -->
        <slot name="footer">
          <button @click="closeModal">Close</button>
        </slot>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  
  // Props to control the modal visibility
  const props = defineProps({
    show: Boolean,
  });
  
  // Emit the 'close' event to the parent when the modal closes
  const emit = defineEmits(['close']);
  
  // Local ref to control internal modal visibility
  const isVisible = ref(props.show);
  
  // Watch the `show` prop and update `isVisible` accordingly
  watch(() => props.show, (newVal) => {
    isVisible.value = newVal;
  });
  
  // Function to close the modal and emit the 'close' event
  function closeModal() {
    isVisible.value = false;
    emit('close');
  }
  
  defineOptions({
    inheritAttrs: false,  // Disable automatic fallthrough of attributes to the root element
  });
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    background: white;
    padding: 20px;
    border-radius: 5px;
    position: relative;
  }
  
  .modal-close {
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border: none;
    font-size: 20px;
  }
  </style>
  