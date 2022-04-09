

<template>
  <h1>黄文杰</h1>
</template>
<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

const count = ref(0);
let color = 'red'
</script>
<style scoped>
h1 {
  color: v-bind(color);
}
</style>
