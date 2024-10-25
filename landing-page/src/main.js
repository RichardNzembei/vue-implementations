import { createApp } from "vue";
import { createPinia } from "pinia";
import './assets/css/tailwind.css'
import App from "./App.vue";

const pinia = createPinia();
const app = createApp(App);

// Tooltip Directive
app.directive('tooltip', {
  mounted(el, binding) {
    const span = document.createElement('span');
    span.textContent = binding.value;
    span.className = 'tooltip-text';
    
    span.style.position = 'absolute';
    span.style.backgroundColor = 'black';
    span.style.color = 'white';
    span.style.padding = '5px';
    span.style.borderRadius = '4px';
    span.style.whiteSpace = 'nowrap';
    span.style.display = 'none'; 
    span.style.zIndex = '1000';

    el.style.position = 'relative'; 
    el.appendChild(span);

    el.onmouseenter = () => {
      span.style.display = 'inline';
    };

    el.onmouseleave = () => {
      span.style.display = 'none';
    };
  }
});
// Custom directive for password validation
const passwordValidation = {
    mounted(el) {
      const updateValidationStatus = (status) => {
        // Call the method to update checkbox states in the component
        el.__updateValidationStatus(status);
      };
  
      el.addEventListener('input', () => {
        const password = el.value;
        const status = validatePassword(password);
        updateValidationStatus(status);
        el.style.borderColor = status.isValid ? 'green' : 'red';
        
        // Display error message
        const errorMessage = el.nextElementSibling;
        if (errorMessage) {
          errorMessage.textContent = status.isValid ? '' : 'Password is too weak';
        }
      });
    }
  };
  
  // Password validation logic
  function validatePassword(password) {
    const minLength = 8;
    const isMinLength = password.length >= minLength;
    const isUppercase = /[A-Z]/.test(password);
    const isLowercase = /[a-z]/.test(password);
    const isNumber = /[0-9]/.test(password);
    const isSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    
    return {
      isValid: isMinLength && isUppercase && isLowercase && isNumber && isSpecialChar,
      isMinLength,
      isUppercase,
      isLowercase,
      isNumber,
      isSpecialChar,
    };
  }
  
  // Register the directive globally
  app.directive('password-validation', passwordValidation);
app.use(pinia);
app.mount('#app');
