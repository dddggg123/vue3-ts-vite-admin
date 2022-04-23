<template>
  <div class="menu-container">
    <el-menu
      :collapse="state.isSidebarNavCollapse"
      text-color="#eee"
      active-text-color="#ffd04b"
      background-color="#304156"
      :default-active="state.currentMenu"
      class="theme-bg"
      id="menu"
      :unique-opened="true"
    >
      <template v-for="v in state.menuList" :key="v.name">
        <div v-if="v.children && v.children.length > 0">
          <!-- 外层 -->
          <el-sub-menu
            :index="v.name"
            :key="v.name"
            class="theme-bg"
            v-if="!v.meta.hide"
          >
            <template v-slot:title>
              <i class="iconfont theme-color" :class="v.meta.icon"></i>
              <span class="theme-color">{{ v.meta.name }}</span>
            </template>
            <el-menu-item-group>
              <my-menu :menuList="v.children"></my-menu>
            </el-menu-item-group>
          </el-sub-menu>
        </div>
        <div v-else>
          <!-- 内层 -->
          <el-menu-item
            v-if="!v.meta.hide"
            :key="v.name"
            :index="v.name"
            @click="navigateToRoute(v.name)"
            class="theme-bg"
          >
            <i class="iconfont theme-color" :class="v.meta.icon"></i>
            <span class="theme-color">{{ v.meta.name }}</span>
          </el-menu-item>
        </div>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "my-menu",
  props: {
      menuList: {
          type: Array,
          default: () => []
      }
  },
  setup(props: any) {
    let router = useRouter();
    let navigateToRoute = (name: string) => {
      router.push({
        name,
      });
    };
    let state = reactive({
      menuList: props.menuList,
      isSidebarNavCollapse: ref(false),
      currentMenu: ''
    });
    return {
      navigateToRoute,
      state,
    };
  },
});
</script>

<style lang="scss">
.menu-container {
  position: fixed;
  top: 0;
  height: 100%;
  width: 200px;
  left: 0;

  .el-menu {
      height: 100%;
  }
}
</style>