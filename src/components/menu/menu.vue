<template>
  <div class="menu-container">
    <el-menu
      :collapse="state.isSidebarNavCollapse"
      text-color="#a4a4a4"
      active-text-color="#fff"
      background-color="#191a23"
      :default-active="state.currentMenu"
      class="theme-bg"
      id="menu"
      :unique-opened="true"
    >
      <template v-for="v in state.menuList" :key="v.name">
        <div v-if="v.children && v.children.length > 0 && !v.meta.subHide">
          <!-- 外层 -->
          <el-sub-menu :index="v.name" :key="v.name" class="theme-bg">
            <template #title>
              <el-icon>
                <component class="iconfont theme-color" :is="v.meta.icon" />
              </el-icon>
              <span class="theme-color">{{ $t(v.meta.name) }}</span>
              <!-- <item class="theme-color" :title="titleConfirm(v.meta.name)"></item> -->
            </template>
            <el-menu-item-group>
              <!-- <my-menu :menuList="v.children"></my-menu> -->
              <el-menu-item
                v-for="item in v.children"
                :key="item.name"
                :index="item.name"
                @click="navigateToRoute(item.name)"
                class="theme-bg"
              >
                <el-icon>
                  <component
                    class="iconfont theme-color"
                    :is="item.meta.icon"
                  />
                </el-icon>
                <span class="theme-color">{{ $t(item.meta.name) }}</span>
              </el-menu-item>
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
            <el-icon>
              <component class="iconfont theme-color" :is="v.meta.icon" />
            </el-icon>
            <span class="theme-color">{{ $t(v.meta.name) }}</span>
          </el-menu-item>
        </div>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default defineComponent({
  name: "MyMenu",
  props: {
    menuList: {
      type: Array,
      default: () => [],
    },
  },
  setup(props: any) {
    const store = useStore();
    let router = useRouter();
    let navigateToRoute = (name: string) => {
      router.push({
        name,
      });
    };
    let state = reactive({
      menuList: props.menuList,
      isSidebarNavCollapse: computed(
        () => store.getters.getIsSidebarNavCollapse
      ),
      currentMenu: computed(() => store.getters.getCurrentMenu),
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
  bottom: 0;
  width: 200px;
  left: 0;

  .el-menu {
    height: 100%;
    overflow-x: hidden;

    .is-active {
      background-color: #409eff;
    }

    .el-menu-item-group {
      .el-menu-item-group__title {
        padding-top: 0;
      }
    }
  }

  // .el-menu .el-menu-item:hover{
  //   outline: 0 !important;
  //   color: #2E95FB !important;
  //   background: linear-gradient(270deg, #F2F7FC 0%, #FEFEFE 100%)!important;
  // }
}
</style>
