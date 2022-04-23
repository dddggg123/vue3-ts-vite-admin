<template>
  <div class="app-container">
    <Menu :menuList="state.sidebarMenu"></Menu>
    <Navbar></Navbar>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import Menu from "@/components/menu/menu.vue";
import Navbar from "@/components/navbar/navbar.vue";
import {DynamicRoutes} from "../../router/index";

export default defineComponent({
  setup() {
    let state = reactive({
      sidebarMenu: DynamicRoutes
    })
    return {
      state
    }
  },
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