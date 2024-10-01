<script setup>
import {ref} from 'vue'
import {useCounterStore} from '../stores/counter'
const store=useCounterStore()
const props=defineProps({data:Object
})
</script>

<template>
<h1>shared data:<span>{{ data}}</span></h1>
<p>{{ store.count }}</p>
<p>{{ store.doublecount }}</p>
<button @click="store.increment">cont</button>

</template>
<style scoped>

</style>