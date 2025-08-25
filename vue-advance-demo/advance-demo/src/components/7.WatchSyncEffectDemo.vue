<script setup lang="ts">
import {watchSyncEffect, ref, watch, onBeforeUpdate} from 'vue'
const count = ref(0)
watch(count, (newVal, oldVal)=>{
    console.log(newVal)
})
onBeforeUpdate(()=>{
    console.log('onBeforeUpate')
})
//处理状态变动后的副作用
//onBeforeUpdate页面Dom更新前会调用, 与watch flush： "sync"相同
watchSyncEffect(()=>{
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