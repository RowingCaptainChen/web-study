<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

//静态引入
//import xxx from './xxxx'
//动态引入
//import('./xxxx')

//React
//React.lazy(()=>import('./xxxxx'))

//Vue3
//defineAsyncComponent(()=>import('./xxxx'))
//异步组件做优化、分片
const asyncChild = defineAsyncComponent(() => import('./9.AsyncChild.vue'))
</script>
<template>
    <div>
        <Suspense>
            <asyncChild></asyncChild>
        </Suspense>
    </div>
</template>
<style scoped></style>