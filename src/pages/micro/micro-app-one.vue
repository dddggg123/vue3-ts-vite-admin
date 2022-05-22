<template>
  <div class="micro-one-container">
    <div id="micro-content"></div>
    <div class="main-content">
      <h1>主应用操作界面</h1>
      <!-- <el-button class="btn" @click="mainBtnHandler" type="primary">主应用控制子应用跳转</el-button> -->
      <el-button class="btn" @click="mainBtnHandlerWithParam" type="primary">主应用控制子应用跳转并传参: hello</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';

const router = useRouter()
onMounted(() => {
})
function mainBtnHandler () {
  // window.history.pushState({}, '', '/micro/app-one#/about')
  router.push('/micro/app-one#/about');
}
function mainBtnHandlerWithParam () {
  // window.history.pushState({
  //   msg: 'hello'
  // }, '', '/micro/app-one#/about')
  // router.push({path: '/micro/app-one#/about', query: {msg: 'hello'}});
  localStorage.setItem('msg', 'hello');
  router.push('/micro/app-one#/about');
}
</script>

<style lang="scss">
.micro-one-container {
  width: 100%;
  padding: 0 5%;
  display: flex;

  #micro-content {
    width: 500px;
    height: 800px;

    #__qiankun_microapp_wrapper_for_micro_1__ {
      width: 500px;
      height: 800px;
      background-color: #f0f0f0;
    }
  }

  .main-content {
    width: 500px;
    height: 800px;
    background-color: #a4a4a4;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    
    .btn {
      width: 250px;
      height: 40px;
      border-radius: 10px;
      margin-top: 20px;
      margin-left: 0;
    }
  }
}
</style>