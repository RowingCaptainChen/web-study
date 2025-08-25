<script setup lang="ts">
import {ref} from 'vue'
const count = ref(0)
console.log(count.value)
</script>
<template>
    <div>
        <div>{{ count }}</div>
        <button @click="count++">+1</button>
    </div>
</template>
<style scoped></style>