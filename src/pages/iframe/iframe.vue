<template>
  <div class="iframe-container">
    <div class="remark-section">
      <div class="remark-content">
        <p class="remark-title">使用说明</p>
        <p class="reamrk-desc">1、父应用中引入iframe组件；</p>
        <p class="reamrk-desc">
          2、父应用向iframe传值：iframe的引用.value.contentWindow.postMessage(值,
          地址)；
        </p>
        <p class="reamrk-desc">
          3、iframe向父应用传值：window.parent.postMessage(值, 地址)；
        </p>
        <p class="reamrk-desc">4、本地开发调试地址使用*；</p>
      </div>
    </div>
    <div class="iframe-content">
      <iframe
        id="iframeApp"
        ref="iframeApp"
        class="iframe-section"
        :src="iframeSrc"
        frameborder="0"
      ></iframe>
      <div class="btn-section">
        <p>这里是父应用</p>
        <p>iframe传递的信息:{{ param }}</p>
        <el-input
          width="150px;"
          v-model="msg"
          class="w-50 m-2"
          placeholder="输入传递信息"
        />
        <el-button type="primary" @click="postMsgHandler" class="post-btn"
          >向iframe传值</el-button
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";

// 生产环境域名地址
const iframeSrc = "https://www.xkxk.tech/micro/iframe";

// 本地调试域名地址
// const iframeSrc = 'http://localhost:7000/';
const msg = ref("");
const iframeApp: any = ref(null);
const param = ref("");

const postMsgHandler = () => {
  // 本地调试
  // iframeApp.value.contentWindow.postMessage(msg.value, '*');
  // 生产环境
  iframeApp.value.contentWindow.postMessage(msg.value, iframeSrc);
};
onMounted(() => {
  window.addEventListener("message", (event) => {
    param.value = "";
    param.value = event.data;
  });
});
</script>

<style lang="scss">
.iframe-container {
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

  .iframe-content {
    display: flex;
    padding-left: 5%;

    .iframe-section {
      width: 400px;
      height: 300px;
      margin-top: 50px;
      background-color: #f4f4f4;
    }

    .btn-section {
      width: 400px;
      height: 300px;
      margin-top: 50px;
      margin-left: 20px;
      background-color: #f4f4f4;

      .post-btn {
        margin-top: 20px;
      }
    }
  }
}
</style>
