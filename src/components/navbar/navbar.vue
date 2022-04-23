<template>
  <div class="nav-container">
      <router-view></router-view>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({

})
</script>

<style lang="scss">
.nav-container {
    height: 100%;
    margin-left: 200px;
    width: calc(100% - 200px);
}
</style>