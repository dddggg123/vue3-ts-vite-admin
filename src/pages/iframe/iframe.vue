<template>
  <div class="iframe-container">
    <iframe id="iframeApp" ref="iframeApp" class="iframe-section" :src="iframeSrc"  frameborder="0"></iframe>
    <div class="btn-section">
      <p>这里是操作界面</p>
      <el-input v-model="msg" class="w-50 m-2" :placeholder="$t('请输入普通账号')"/>
      <el-button type="primary" @click="postMsgHandler" class="post-btn">向iframe传值</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref, onMounted} from 'vue'
// 'http://localhost:7000/'
const iframeSrc = ref('http://www.xkxk.tech/micro/iframe');
// const iframeSrc = ref('http://localhost:7000/');
const msg = ref('');
const iframeApp: any = ref(null);
// const $iframeApp: any = ref<InstanceType<typeof iframeApp>>();

const postMsgHandler = () => {
  // iframeApp.value.contentWindow.postMessage(msg.value, '*');
  iframeApp.value.contentWindow.postMessage(msg.value, iframeSrc);
}
onMounted (() => {
})
</script>

<style lang="scss">
.iframe-container {
  height: 100%;
  padding: 0 5%;
  display: flex;
  
  .iframe-section {
    width: 400px;
    height: 600px;
    margin-top: 50px;
    background-color: #f4f4f4;
  }

  .btn-section {
    width: 400px;
    height: 600px;
    margin-top: 50px;
    margin-left: 20px;
    background-color: #f4f4f4;

    .post-btn {
      margin-top: 20px;
    }
  }
}
</style>