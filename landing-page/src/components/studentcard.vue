<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
    validator(value) {
      return value && typeof value.RegNo === 'string';
    }
  }
});
</script>

<template>
  <div class="profile">
    <p>richard nzembei</p>
    <span><strong>{{ data.RegNo }}</strong></span><br>
    
  </div>
</template>
<style scoped>
.profile{
    border-radius: 5px;
    border:1px solid black;
    margin: 10px 10px;
    width: 300px;
    height: 300px;
    padding: 10px 10px;
}
</style>