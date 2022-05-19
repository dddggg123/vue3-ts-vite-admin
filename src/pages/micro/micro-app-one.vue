<template>
  <div class="micro-container">
    <div id="micro-content"></div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';

const router = useRouter()
onMounted(() => {
})
</script>

<style lang="scss">
.micro-container {
  width: 100%;
  height: 100%;
}
</style>