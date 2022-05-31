<template>
  <div class="router-container">
    <div class="remark-section">
      <div class="remark-content">
        <p class="remark-title">使用说明</p>
        <p class="reamrk-desc">
          1、本项目路由管理分为普通账号登录和管理员账号登录
        </p>
        <p class="reamrk-desc">2、用登录返回的权限值模拟动态设置路由</p>
        <p class="reamrk-desc">
          3、@/utils/router-permission.ts文件模拟后端接口返回的路由，实际开发中将改文件数据替换成接口返回数据即可
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style lang="scss">
.router-container {
  width: 100%;
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
}
</style>
