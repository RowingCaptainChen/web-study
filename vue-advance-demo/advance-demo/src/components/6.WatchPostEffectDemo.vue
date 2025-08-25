<script setup lang="ts">
import {watchPostEffect, ref, watch, onBeforeUpdate} from 'vue'
const count = ref(0)
watch(count, (newVal, oldVal)=>{
    console.log(newVal)
})
onBeforeUpdate(()=>{
    console.log('onBeforeUpate')
})
//处理状态变动后的副作用
//页面Dom更新后会调用, 与watch flush： "post"相同
watchPostEffect(()=>{
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