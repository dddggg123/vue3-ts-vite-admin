<template>
  <div class="micro-one-container">
    <div class="remark-section">
      <div class="remark-content">
        <p class="remark-title">使用说明</p>
        <p class="reamrk-desc">
          1、微应用可以单独开发、单独部署、单独运行。<a
            target="_blank"
            href="http://www.xkxk.tech/micro/app-one#/"
            >子应用1</a
          >、<a target="_blank" href="http://www.xkxk.tech/micro/app-two#/"
            >子应用2</a
          >
        </p>
        <p class="reamrk-desc">
          2、本项目微前端框架采用的是qiankun。<a
            target="_blank"
            href="https://qiankun.umijs.org/zh/guide"
            >相关文档</a
          >
        </p>
      </div>
    </div>
    <div class="micro-one-content">
      <div id="micro-content"></div>
      <div class="main-content">
        <h1>主应用操作界面</h1>
        <!-- <el-button class="btn" @click="mainBtnHandler" type="primary">主应用控制子应用跳转</el-button> -->
        <el-button class="btn" @click="mainBtnHandlerWithParam1" type="primary"
          >主应用控制子应用跳转并传参: Hello 采用localStorage
        </el-button>
        <el-button class="btn" @click="mainBtnHandlerWithParam2" type="primary"
          >主应用控制子应用跳转并传参: World! 采用sessionStorage
        </el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { onMounted } from "vue";

const router = useRouter();
onMounted(() => {});
// function mainBtnHandler() {
//   // window.history.pushState({}, '', '/micro/app-one#/about')
//   router.push("/micro/app-one#/about");
// }
function mainBtnHandlerWithParam1() {
  // window.history.pushState({
  //   msg: 'hello'
  // }, '', '/micro/app-one#/about')
  // router.push({path: '/micro/app-one#/about', query: {msg: 'hello'}});
  localStorage.setItem("msg", "Hello");
  router.push("/micro/app-one#/about");
}
function mainBtnHandlerWithParam2() {
  // window.history.pushState({
  //   msg: 'hello'
  // }, '', '/micro/app-one#/about')
  // router.push({path: '/micro/app-one#/about', query: {msg: 'hello'}});
  sessionStorage.setItem("desc", "World!");
  router.push("/micro/app-one#/about");
}
</script>

<style lang="scss">
.micro-one-container {
  height: 100%;

  .remark-section {
    margin-top: 20px;
    padding: 0 5%;

    .remark-content {
      text-align: left;

      .remark-title {
        font-size: 25px;
        font-weight: 600;
      }

      .remark-desc {
        font-size: 22px;
        font-weight: 500;
      }
    }
  }

  .micro-one-content {
    display: flex;
    margin-top: 20px;
    padding-left: 5%;

    #micro-content {
      width: 500px;
      height: 300px;

      #__qiankun_microapp_wrapper_for_micro_1__ {
        width: 500px;
        height: 300px;
        background-color: #f0f0f0;
      }
    }

    .main-content {
      width: 480px;
      height: 300px;
      background-color: #a4a4a4;
      margin-left: 20px;
      padding-left: 20px;

      .btn {
        padding: 0 10px;
        height: 40px;
        border-radius: 10px;
        margin-top: 20px;
        margin-left: 0;
      }
    }
  }
}
</style>
