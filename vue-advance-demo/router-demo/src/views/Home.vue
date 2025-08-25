<script setup lang="ts">
import {useRouter} from "vue-router"
const router = useRouter()

//RouterLink 跳转
//router实例 跳转
const goAbout = ()=>{
    router.push('/about')
    //路由替换
    router.replace('/about')
    //步长跳转
    router.go(1)
}
</script>

<template>
  <div>
    <RouterLink to="/about">To About</RouterLink>
    Home
  </div>
</template>

<style scoped>
</style>