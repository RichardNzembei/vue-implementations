<template>
  <div>
    <!-- Attach the ref to the input element -->
    <input ref="passwordInput" v-password-validation type="password" placeholder="Enter your password" />
    <p class="error-message text-red-500"></p>

    <!-- Validation Criteria -->
    <div class="mt-2">
      <div>
        <input type="checkbox" :checked="isMinLength" disabled />
        <label>At least 8 characters</label>
      </div>
      <div>
        <input type="checkbox" :checked="isUppercase" disabled />
        <label>At least 1 uppercase letter</label>
      </div>
      <div>
        <input type="checkbox" :checked="isLowercase" disabled />
        <label>At least 1 lowercase letter</label>
      </div>
      <div>
        <input type="checkbox" :checked="isNumber" disabled />
        <label>At least 1 number</label>
      </div>
      <div>
        <input type="checkbox" :checked="isSpecialChar" disabled />
        <label>At least 1 special character</label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// State variables for password validation
const isMinLength = ref(false);
const isUppercase = ref(false);
const isLowercase = ref(false);
const isNumber = ref(false);
const isSpecialChar = ref(false);

// Reference to the password input
const passwordInput = ref(null);

// Method to update checkbox states
const updateValidationStatus = (status) => {
  isMinLength.value = status.isMinLength;
  isUppercase.value = status.isUppercase;
  isLowercase.value = status.isLowercase;
  isNumber.value = status.isNumber;
  isSpecialChar.value = status.isSpecialChar;
};

// Use onMounted to ensure the input is available
onMounted(() => {
  // Set the updateValidationStatus method on the directive's instance
  passwordInput.value.__updateValidationStatus = updateValidationStatus;
});
</script>

<style scoped>
.error-message {
  font-size: 0.875rem;
}
</style>
