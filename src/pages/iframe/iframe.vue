<template>
  <div class="iframe-container">
    <iframe class="iframe-section" :src="iframeSrc"  frameborder="0"></iframe>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
const iframeSrc = ref('http://www.xkxk.tech/micro/iframe');
</script>

<style lang="scss">
.iframe-container {
  height: 100%;
  padding: 0 5%;
  
  .iframe-section {
    width: 400px;
    height: 600px;
    margin-top: 50px;
    background-color: #f4f4f4;
  }
}
</style>