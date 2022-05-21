<template>
  <div class="micro-one-container">
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
.micro-one-container {
  width: 100%;
  padding: 0 5%;

  #__qiankun_microapp_wrapper_for_micro_1__ {
    width: 500px;
    height: 800px;
    background-color: #f0f0f0;
  }
}
</style>