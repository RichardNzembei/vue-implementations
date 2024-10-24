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

app.use(pinia);
app.mount('#app');
