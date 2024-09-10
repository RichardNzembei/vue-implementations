<script setup>
const message=''
</script>
<template>
    <input type="text" v-model.lazy="message">
    <p>message is:{{ message }}</p>
</template>
<style>
</style>