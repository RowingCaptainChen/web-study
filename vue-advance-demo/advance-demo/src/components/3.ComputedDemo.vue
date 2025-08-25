<script setup lang="ts">
import {computed, ref} from 'vue'
const count = ref(0)
//派生属性
const double = computed(()=>count.value * 2)
console.log(count.value)
</script>
<template>
    <div>
        <div>{{ double }}</div>
        <button @click="count++">+1</button>
    </div>
</template>
<style scoped></style>

