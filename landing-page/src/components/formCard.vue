<script setup>
import { computed } from 'vue';
const [model ,modifiers]=defineModel({
    set(value){
        if(modifiers.capitalize){
            return value.charAt(0).toUpperCase()+ value.slice(1)
        }
        return value
    }
})
</script>
<template>
    <label for="fName">First Name</label><br>
    <input type="text" v-model="model">
</template>