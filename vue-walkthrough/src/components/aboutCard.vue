<script >
import { ref } from "vue";
export default {
  setup() {
    const attributeName = ref("href");
    const url = ref("https://vuejs.org/guide/essentials/template-syntax.html");
    const eventName = ref("mouseover");
    const handleEvent = () => {
      console.log("event was triggered");
    };
    return {
      url,
      attributeName,
      handleEvent,
      eventName,
    };
  },
};
</script>

<template>
  <p :[attributeName]="url">visit</p>

  <button @[eventName]="handleEvent">button</button>
</template>
<style>
</style>