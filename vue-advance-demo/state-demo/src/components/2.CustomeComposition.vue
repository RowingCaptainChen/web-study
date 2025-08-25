<script lang="ts">
import { userCounter } from '../composible/useCounter';
const {count, add, update} = userCounter()

</script>
<template>
<div>
    {{ count }}
    <button @click="add">add</button>
    <button @click="update(10)">update</button>
</div>
</template>
<style scope>
</style>