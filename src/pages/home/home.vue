<template>
  <div class="home-container">
    <div class="remark-section">
      <div class="remark-content">
        <p class="remark-title">使用说明</p>
        <p class="reamrk-desc">1、本项目分为1个主项目、2个微前端项目和1个iframe项目，共4个项目。</p>
        <p class="reamrk-desc">2、本项目前端用来实践和学习Vue3、Vite、qiankun等技术栈。</p>
        <p class="reamrk-desc">3、本项目的CI/CD采用Jenkins结合Gitee。</p>
        <p class="reamrk-desc">4、本项目的服务端采用Windows Server 2012、宝塔面板结合Nginx。</p>
        <p class="reamrk-desc">5、本项目的下载地址：<a target="_blank" href="https://gitee.com/xiaoxiang_reincarnation/vue3-ts-vite-admin">主应用</a>、<a target="_blank" href="https://gitee.com/xiaoxiang_reincarnation/vue3-ts-vite-admin-micro1">微前端应用1</a>、<a target="_blank" href="https://gitee.com/xiaoxiang_reincarnation/vue3-ts-vite-admin-micro2">微前端应用2</a>、<a target="_blank" href="https://gitee.com/xiaoxiang_reincarnation/vue3-ts-vite-admin-iframe">iframe项目</a></p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
export default defineComponent({
  setup() {
    let count = ref(0);

    const addCount = () => {
      setInterval(() => {
        count.value += 1;
      }, 1000)
    }

    onMounted(() => {
      addCount();
    });

    return {
      count
    }
  }
})
</script>

<style lang="scss">
.home-container {
  width: 100%;

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
}
</style>