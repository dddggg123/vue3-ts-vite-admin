<template>
  <div class="app-container">
    <MyMenu :menuList="state.sidebarMenu"></MyMenu>
    <Navbar></Navbar>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, computed } from "vue";
import MyMenu from "@/components/menu/menu.vue";
import Navbar from "@/components/navbar/navbar.vue";
import { useStore } from "vuex";

export default defineComponent({
  components: {
    MyMenu,
    Navbar,
  },
  setup() {
    const store = useStore();
    let state = reactive({
      sidebarMenu: computed(() => store.getters.getMenu),
    });
    onMounted(() => {});
    return {
      state,
    };
  },
});
</script>

<style lang="scss">
.app-container {
  height: 100%;
}
</style>
