<script setup lang="ts">
import {watchEffect, ref, watch} from 'vue'
const count = ref(0)
//处理状态变动后的副作用
//页面初始化时会调用，与watch immediate相同
watchEffect(()=>{
    console.log(count.value)
})
</script>
<template>
    <div>
        <div>{{ double }}</div>
        <button @click="count++">+1</button>
    </div>
</template>
<style scoped></style>