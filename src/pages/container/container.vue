<template>
  <div class="app-container">
    <Menu :menuList="state.sidebarMenu"></Menu>
    <Navbar></Navbar>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, computed } from "vue";
import Menu from "@/components/menu/menu.vue";
import Navbar from "@/components/navbar/navbar.vue";
import { useRouter } from 'vue-router';
import { useStore } from "vuex"

export default defineComponent({
  setup() {
    const store = useStore();
    let state = reactive({
      sidebarMenu: computed(() => store.getters.GET_MENU)
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