<script setup>
const mss = "hello world";
const isButtonDisabled = true;
const displayId = "reuben";
const objectofattr = {
  id: "container",
  class: "schools",
  style: "color:blue",
};
const seen = false;
</script>
<template>
  <h3>welcome</h3>
  <span style="color: red; text-indent: 10px">message is:{{ mss }}</span
  ><br />
  <button :disabled="isButtonDisabled">button</button><br />

  <input type="text" :id="displayId" />n
  <div v-bind="objectofattr">hey kabarak</div>
  <p v-if="seen">now you see me</p>
  
</template>
<style>
h3 {
  color: aqua;
  font-size: 40px;
}
</style>