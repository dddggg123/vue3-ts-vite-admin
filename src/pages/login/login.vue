<template>
  <div class="login-container">
    <Particles id="tsparticles" class="login__particles" :options="config" />
    <!-- <Particles id="tsparticles" class="login__particles"/> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { particles } from './config/particles-config'

export default defineComponent({
  setup() {
    const config = reactive(particles)
    return {
      config
    }
  }
})
</script>

<style lang="scss">
.login-container {
  flex: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;

  &__particles {
    height: 100%;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
  }
}
</style>