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
      <div class="user-section">
        <el-dropdown @command="handleCommand">
          <img
            class="header-img"
            src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.zhimg.com%2F50%2Fv2-a8a6c2a721e25040f94cefb6facb4741_hd.jpg&refer=http%3A%2F%2Fpic1.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653315444&t=8053495416847e53c140620a973eabc4"
            alt=""
          />
          <span class="username">管理员</span>
          <el-icon><arrow-down-bold /></el-icon>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="quit">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </aside>
    <div class="app-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default defineComponent({
  setup() {
    const handleCommand = (command: string) => {
      console.log('我点击了:' + command);
      router.push('/login');
    }
    const router = useRouter();
    const store = useStore();
    let state: any = reactive({
      crumbList: computed(() => store.getters.getCrumbList),
    });
    return {
      state,
      handleCommand
    };
  },
});
</script>

<style lang="scss">
.nav-container {
  height: 100%;
  margin-left: 200px;
  width: calc(100% - 200px);

  .app-content {
    margin-top: 50px;
    height: calc(100% - 50px);
  }

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
    justify-content: space-between;

    .user-section {
      width: 10%;
      padding-right: 20px;
      text-align: right;

      .el-dropdown {
        height: 50px;
        cursor: pointer;

        .el-tooltip__trigger {
          display: flex;
        justify-content: flex-end;
        align-items: center;
        }

        .header-img {
          width: 30px;
          height: 30px;
          border-radius: 50%;
        }

        .username {
          font-size: 15px;
          margin-left: 10px;
          margin-right: 10px;
        }
      }
    }

    .breadcrumb-section {
      width: 10%;
      padding-left: 20px;

      .el-breadcrumb {
        height: 50px;
        line-height: 50px;
      }

      .breadcrumb-enter,
      .breadcrumb-leave-active {
        opacity: 0;
        transform: translateX(20px);
      }

      .breadcrumb-enter-active,
      .breadcrumb-leave-active {
        transition: all 0.6s;
      }

      .breadcrumb-leave-active {
        position: absolute;
      }
    }
  }
}
</style>