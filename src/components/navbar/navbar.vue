<template>
  <div class="nav-container">
    <aside class="nav-top">
      <div class="breadcrumb-section">
        <el-breadcrumb separator="/">
          <transition-group name="breadcrumb">
            <!-- 防止面包屑导航出现 首页/首页， v-if="route.name!='home'" -->
            <el-breadcrumb-item
              v-for="(route, i) in state.crumbList"
              :key="route.name"
              :to="{ name: route.name }"
              :class="{
                'is-last-link': i == state.crumbList.length - 1,
              }"
            >
              <span v-if="route.name != 'home'">{{ route.meta.name }}</span>
            </el-breadcrumb-item>
          </transition-group>
        </el-breadcrumb>
      </div>
    </aside>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  setup() {
    const store = useStore();
    let state: any = reactive({
      crumbList: computed(() => store.getters.getCrumbList),
    });
    return {
      state,
    };
  },
});
</script>

<style lang="scss">
.nav-container {
  height: 100%;
  margin-left: 200px;
  width: calc(100% - 200px);

  .nav-top {
    border-bottom: 1px solid #e5e5e5;
    height: 50px;
    line-height: 50px;
    position: fixed;
    left: 200px;
    top: 0;
    right: 0;
    background: #fff;
    z-index: 1000;
    transition: left 0.25s;
    display: flex;

    .breadcrumb-section {
      width: 10%;
      padding-left: 20px;

      .el-breadcrumb {
        height: 50px;
        line-height: 50px;
      }

      // .breadcrumb-enter,
      // .breadcrumb-leave-active {
      //   opacity: 0;
      //   transform: translateX(20px);
      // }

      // .breadcrumb-enter-active,
      // .breadcrumb-leave-active {
      //   transition: all 0.6s;
      // }

      // .breadcrumb-leave-active {
      //   position: absolute;
      // }
    }
  }
}
</style>