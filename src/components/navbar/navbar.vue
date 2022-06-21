<template>
  <div class="nav-container">
    <aside class="nav-top">
      <div class="breadcrumb-section">
        <el-breadcrumb>
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
              <span>{{ $t(route.meta.name) }}</span>
            </el-breadcrumb-item>
          </transition-group>
        </el-breadcrumb>
      </div>
      <div class="tool-section">
        <div class="btn-section">
          <div @click="btnHandler('gitee')" class="btn">
            <img class="icon" src="../../assets/png/gitee_icon.png" alt="" />
            <span class="btn-title">gitee</span>
          </div>
          <div @click="btnHandler('github')" class="btn">
            <img class="icon" src="../../assets/png/github_icon.png" alt="" />
            <span class="btn-title">github</span>
          </div>
          <div @click="btnHandler('full')" class="btn">
            <el-icon>
              <full-screen color="#1d99e3" />
            </el-icon>
            <span class="btn-title">{{ $t("full") }}</span>
          </div>
          <div class="line"></div>
        </div>
        <div class="user-section">
          <el-dropdown @command="handleCommand">
            <div class="user-content">
              <img class="header-img" src="../../assets/png/logo.png" alt="" />
              <span class="username">{{ $t("nickName") }}</span>
              <el-icon>
                <arrow-down-bold />
              </el-icon>
            </div>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="quit">{{
                  $t("signOut")
                }}</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
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
import screenfull from "screenfull";

export default defineComponent({
  setup() {
    const router = useRouter();
    const store = useStore();
    let state: any = reactive({
      crumbList: computed(() => store.getters.getCrumbList),
    });
    const btnHandler = (type: string) => {
      switch (type) {
        case "full":
          screenfull.isEnabled && screenfull.toggle();
          break;
        case "gitee":
          window.open(
            "https://gitee.com/xiaoxiang_reincarnation/vue3-ts-vite-admin",
            "_blank"
          );
          break;
        case "github":
          window.open(
            "https://github.com/dddggg123/vue3-ts-vite-admin",
            "_blank"
          );
          break;
      }
    };
    const handleCommand = () => {
      window.localStorage.clear();
      store.dispatch("CLEAR_ALL_ROUTES");
      setTimeout(() => {
        router.push("/login");
      }, 500);
    };
    return {
      state,
      handleCommand,
      btnHandler,
    };
  },
});
</script>

<style lang="scss">
.nav-container {
  height: 100%;
  margin-left: 200px;
  width: calc(100% - 200px);
  z-index: 9999;

  .app-content {
    position: fixed;
    top: 50px;
    left: 200px;
    right: 0;
    bottom: 0;
    overflow: scroll;
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

    .tool-section {
      width: 450px;
      display: flex;

      .btn-section {
        width: 350px;
        display: flex;
        justify-content: flex-end;
        align-items: center;

        .btn {
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          width: calc(100% / 3);

          .icon {
            width: 20px;
            height: 20px;
          }

          .btn-title {
            margin-left: 10px;
            font-size: 15px;
            color: #1d99e3;
          }
        }

        .line {
          width: 1px;
          height: 20px;
          background-color: #a4a4a4;
        }
      }

      .user-section {
        width: 150px;
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
            // color: #1d99e3;
          }
        }
      }
    }

    .breadcrumb-section {
      width: 15%;
      padding-left: 20px;
      text-align: left;

      .el-breadcrumb {
        height: 50px;
        line-height: 50px;

        // .el-breadcrumb__item {
        //   .el-breadcrumb__separator {
        //     visibility: hidden;

        //     &:first-child {
        //       visibility: hidden;
        //     }
        //   }
        // }
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
