<script setup>

const props=defineProps(['label'])
defineOptions({
    inheritAttrs:false
})

</script>
<template>
    <button v-bind="$attrs" >
{{ label }}
    </button>
</template>