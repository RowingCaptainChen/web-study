<script setup lang="ts">
import {ref, reactive, computed} from 'vue'

//defineProps是宏定义，编译时会插入，所以无需导入
defineProps({
    msg: String,
})
const count = ref(0)
const age = reactive({value: 0})

//派生状态
const double = computed(()=>count.value * 2)

</script>

<template>
    <div>
        <div>{{ msg }}</div>
        <div>{{ count }} -- {{ double }} -- {{ age.value }}</div>
    </div>
</template>

<style scoped>
</style>