<script setup lang="ts">
import { computed } from "vue";
import {useRoute, useRouter} from "vue-router"
const router = useRouter()
const route = useRoute()

//从route中获取id
const id = computed(()=>route.params.id)


</script>

<template>
  <div>
    {{ id }}
  </div>
</template>

<style scoped>
</style>