<script setup lang="ts">
import {reactive} from 'vue'
const count = reactive({value:0})
console.log(count.value)
</script>
<template>
    <div>
        <div>{{ count.value }}</div>
        <button @click="count++">+1</button>
    </div>
</template>
<style scoped></style>