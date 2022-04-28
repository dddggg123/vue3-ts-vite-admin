<template>
  <div class="app-container">
    <Menu :menuList="state.sidebarMenu"></Menu>
    <Navbar></Navbar>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted } from "vue";
import Menu from "@/components/menu/menu.vue";
import Navbar from "@/components/navbar/navbar.vue";
import {DynamicRoutes} from "../../router/index";
import {useRouter} from 'vue-router';

export default defineComponent({
  setup() {
    let state = reactive({
      sidebarMenu: DynamicRoutes
    })
    const router = useRouter();
    onMounted(() => {
      // 初始化跳转至 home首页 界面
      router.push('/home');
    })
    return {
      state
    }
  },
  components: {
    Menu,
    Navbar
  }
});
</script>

<style lang="scss">
.app-container {
    height: 100%;
}
</style>