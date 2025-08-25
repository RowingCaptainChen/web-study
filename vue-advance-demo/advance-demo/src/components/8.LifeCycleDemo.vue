<script setup lang="ts">
import { 
    onBeforeMount, 
    onMounted, 
    onBeforeUpdate, 
    onUpdated, 
    onBeforeUnmount, 
    onUnmounted, 
    onActivated, 
    onDeactivated, 
    //数据追踪
    onRenderTracked, 
    onRenderTriggered,
    //
    onErrorCaptured
} from 'vue';

onBeforeMount(() => {
    console.log('onBeforeMount')
})
//被追踪的数据
onRenderTracked(() => {

})
onRenderTriggered(() => {

})
onMounted(() => {
    console.log('onMounted')
})
onBeforeUpdate(() => {
    console.log('onBeforeUpdate')
})
onUpdated(() => {
    console.log('onUpdated')
})
onBeforeUnmount(() => {
    console.log('onBeforeUnmount')
})
onUnmounted(() => {
    console.log('onUnmounted')
})

//与<KeepAlive></KeepAlive>组件一起使用，不会调用onUnmounted
onActivated(() => {
    console.log('onActivated')
})
onDeactivated(() => {
    console.log('onDeactivated')
})
//组件级别的，错误边界ErrorBoundary，捕获异常，应用不会因为error崩溃
onErrorCaptured((err, vm, info)=>{
    console.log(err, vm, info)
})


</script>
<template>
    <div>
        Life cycle
    </div>
</template>
<style scoped></style>