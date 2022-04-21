<template>
  <div class="app-container">
    <Menu></Menu>
    <Navbar></Navbar>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Menu from "@/components/menu/menu.vue";
import Navbar from "@/components/navbar/navbar.vue";

export default defineComponent({
  setup() {},
  components: {
    Menu,
    Navbar,
  }
});
</script>

<style lang="scss">
.app-container {
    height: 100%;
}
</style>