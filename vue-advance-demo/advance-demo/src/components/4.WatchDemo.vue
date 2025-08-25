<script setup lang="ts">
import {computed, ref, watch} from 'vue'
const count = ref(0)
//处理状态变动后的副作用
watch(count, (newVal, oldVal)=>{
    console.log(newVal)
    console.log(oldVal)
})
</script>
<template>
    <div>
        <div>{{ double }}</div>
        <button @click="count++">+1</button>
    </div>
</template>
<style scoped></style>