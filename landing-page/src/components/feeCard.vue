<script setup>
import {ref} from 'vue'
const props=defineProps({data:Object
})
</script>

<template>
<h1>shared data:<span>{{ data}}</span></h1>

</template>
<style scoped>

</style>