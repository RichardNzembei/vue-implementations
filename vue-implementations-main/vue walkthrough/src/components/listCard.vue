<script setup>
import { reactive, ref, computed} from "vue";
const studentMajor = ref("CS");
const students = ref([
  { name: "joel" },
  { name: "gabriel" },
  { name: "collins" },
]);
const studentObj = reactive({
  name: "collins kimutai",
  yearOfStudy: "3rd year",
  major: "computer science",
});
const numbers=ref([1,2,3,4,5,6,7,8])
const evenNumbers=computed(()=>{
    return  numbers.value.filter((n)=>n%2===1)
})
</script>
<template>
  <li v-for="(student, index) in students" :key="index">
    {{ studentMajor }} -{{ index }}-{{ student.name }}
  </li>
  <ul>
    <h1>student details</h1>
    <li v-for="(value, key,index) in studentObj" :key="index">{{ key }}:{{ value }}</li>
  </ul>
  <li v-for="(n,index) in evenNumbers" :key="index">
    {{ n }}
  </li>
</template>

<style scoped>
</style>