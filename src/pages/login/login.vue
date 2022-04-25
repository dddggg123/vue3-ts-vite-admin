<template>
  <div class="login-container">
    <div class="login-section">
      <el-tabs v-model="currentTab" class="demo-tabs" @tab-click="tabChangeHandler">
        <el-tab-pane label="账号登录" name="account">User</el-tab-pane>
        <el-tab-pane label="扫码登录" name="qrcode">Config</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { particles } from './config/particles-config'
import type { TabsPaneContext } from 'element-plus'

export default defineComponent({
  setup() {
    const currentTab = ref('account');
    const tabChangeHandler = (tab: TabsPaneContext, event: Event) => {
      console.log(tab, event);
    }
    return {
      particles,
      currentTab,
      tabChangeHandler
    }
  }
})
</script>

<style lang="scss">
.login-container {
  flex: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-image: linear-gradient(calc(160deg), rgba(163, 163, 163, 0.09) 0%, rgba(163, 163, 163, 0.09) 33.3%, rgba(100, 100, 100, 0.09) 33.3%, rgba(100, 100, 100, 0.09) 66.6%, rgba(162, 162, 162, 0.09) 66.6%, rgba(162, 162, 162, 0.09) 99%), linear-gradient(calc(366deg), rgba(193, 193, 193, 0.06) 0%, rgba(193, 193, 193, 0.06) 33.3%, rgba(169, 169, 169, 0.06) 33.3%, rgba(169, 169, 169, 0.06) 66.6%, rgba(92, 92, 92, 0.06) 66.6%, rgba(92, 92, 92, 0.06) 99%), linear-gradient(calc(237deg), rgba(45, 45, 45, 0.03) 0%, rgba(45, 45, 45, 0.03) 33.3%, rgba(223, 223, 223, 0.03) 33.3%, rgba(223, 223, 223, 0.03) 66.6%, rgba(173, 173, 173, 0.03) 66.6%, rgba(173, 173, 173, 0.03) 99%), linear-gradient(calc(388deg), rgba(226, 226, 226, 0.06) 0%, rgba(226, 226, 226, 0.06) 33.3%, rgba(81, 81, 81, 0.06) 33.3%, rgba(81, 81, 81, 0.06) 66.6%, rgba(186, 186, 186, 0.06) 66.6%, rgba(186, 186, 186, 0.06) 99%), linear-gradient(calc(193deg), rgba(225, 225, 225, 0.04) 0%, rgba(225, 225, 225, 0.04) 33.3%, rgba(95, 95, 95, 0.04) 33.3%, rgba(95, 95, 95, 0.04) 66.6%, rgba(39, 39, 39, 0.04) 66.6%, rgba(39, 39, 39, 0.04) 99%), linear-gradient(calc(236deg), rgba(184, 184, 184, 0.06) 0%, rgba(184, 184, 184, 0.06) 33.3%, rgba(0, 0, 0, 0.06) 33.3%, rgba(0, 0, 0, 0.06) 66.6%, rgba(140, 140, 140, 0.06) 66.6%, rgba(140, 140, 140, 0.06) 99.9%), linear-gradient(calc(431deg), rgba(40, 40, 40, 0.07) 0%, rgba(40, 40, 40, 0.07) 33.3%, rgba(214, 214, 214, 0.07) 33.3%, rgba(214, 214, 214, 0.07) 66.6%, rgba(190, 190, 190, 0.07) 66.6%, rgba(190, 190, 190, 0.07) 99.9%), linear-gradient(calc(169deg), rgba(230, 230, 230, 0) 0%, rgba(230, 230, 230, 0) 33.3%, rgba(241, 241, 241, 0) 33.3%, rgba(241, 241, 241, 0) 66.6%, rgba(55, 55, 55, 0) 66.6%, rgba(55, 55, 55, 0) 99%), linear-gradient(calc(108deg), rgb(38, 38, 227), rgb(11, 186, 239));

  .login-section {
    width: 500px;
    height: 300px;
    background-color: #fff;
    border-radius: 20px;

    .el-tabs__nav {
      width: 100%;

      .el-tabs__item {
        width: 50%;
        text-align: center;
        border: none;
      }
    }
  }
}
</style>
