<template>
  <div class="login-container">
    <div class="title-section">
      <p class="title">Vue3-TypeScript-Vite-admin</p>
    </div>
    <div class="login-section">
      <el-tabs v-model="currentTab" class="demo-tabs" @tab-click="tabChangeHandler">
        <el-tab-pane label="普通账号登录" name="account">
          <div class="account-section">
            <div class="input-section">
              <el-input v-model="account" class="w-50 m-2" placeholder="请输入普通账号">
                <template #prefix>
                  <el-icon>
                    <user />
                  </el-icon>
                </template>
              </el-input>
              <el-input style="margin-top: 20px;" v-model="password" class="w-50 m-2" placeholder="请输入密码">
                <template #prefix>
                  <el-icon>
                    <connection />
                  </el-icon>
                </template>
              </el-input>
            </div>
            <div @click="loginHandler('user')" class="login-btn">登录</div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="管理员账号登录" name="qrcode">
          <div class="account-section">
            <div class="input-section">
              <el-input v-model="account" class="w-50 m-2" placeholder="请输入管理员账号">
                <template #prefix>
                  <el-icon>
                    <user />
                  </el-icon>
                </template>
              </el-input>
              <el-input style="margin-top: 20px;" v-model="password" class="w-50 m-2" placeholder="请输入密码">
                <template #prefix>
                  <el-icon>
                    <connection />
                  </el-icon>
                </template>
              </el-input>
            </div>
            <div @click="loginHandler('adminer')" class="login-btn">登录</div>
          </div>
        </el-tab-pane>
      </el-tabs>
      <div class="footer-section">
        <span class="version">版本号：1.0.22051601</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue';
import type { TabsPaneContext } from 'element-plus';
import { useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const currentTab = ref('account');
    const tabChangeHandler = (tab: TabsPaneContext, event: Event) => {
      console.log(tab, event);
    }
    const router = useRouter();
    const loginHandler = (type: string) => {
      // console.log('账号:' + account.value);
      // console.log('密码:' + password.value);
      window.localStorage.setItem('permission', type);
      window.localStorage.setItem('token', 'vue3-ts-vite-admin');
      setTimeout(() => {
        router.push('/');
      }, 500);
    }
    const account: Ref<String> = ref('');
    const password: Ref<String> = ref('');

    return {
      currentTab,
      tabChangeHandler,
      loginHandler,
      account,
      password
    }
  }
})
</script>

<style lang="scss">
.login-container {
  flex: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-image: linear-gradient(calc(160deg), rgba(163, 163, 163, 0.09) 0%, rgba(163, 163, 163, 0.09) 33.3%, rgba(100, 100, 100, 0.09) 33.3%, rgba(100, 100, 100, 0.09) 66.6%, rgba(162, 162, 162, 0.09) 66.6%, rgba(162, 162, 162, 0.09) 99%), linear-gradient(calc(366deg), rgba(193, 193, 193, 0.06) 0%, rgba(193, 193, 193, 0.06) 33.3%, rgba(169, 169, 169, 0.06) 33.3%, rgba(169, 169, 169, 0.06) 66.6%, rgba(92, 92, 92, 0.06) 66.6%, rgba(92, 92, 92, 0.06) 99%), linear-gradient(calc(237deg), rgba(45, 45, 45, 0.03) 0%, rgba(45, 45, 45, 0.03) 33.3%, rgba(223, 223, 223, 0.03) 33.3%, rgba(223, 223, 223, 0.03) 66.6%, rgba(173, 173, 173, 0.03) 66.6%, rgba(173, 173, 173, 0.03) 99%), linear-gradient(calc(388deg), rgba(226, 226, 226, 0.06) 0%, rgba(226, 226, 226, 0.06) 33.3%, rgba(81, 81, 81, 0.06) 33.3%, rgba(81, 81, 81, 0.06) 66.6%, rgba(186, 186, 186, 0.06) 66.6%, rgba(186, 186, 186, 0.06) 99%), linear-gradient(calc(193deg), rgba(225, 225, 225, 0.04) 0%, rgba(225, 225, 225, 0.04) 33.3%, rgba(95, 95, 95, 0.04) 33.3%, rgba(95, 95, 95, 0.04) 66.6%, rgba(39, 39, 39, 0.04) 66.6%, rgba(39, 39, 39, 0.04) 99%), linear-gradient(calc(236deg), rgba(184, 184, 184, 0.06) 0%, rgba(184, 184, 184, 0.06) 33.3%, rgba(0, 0, 0, 0.06) 33.3%, rgba(0, 0, 0, 0.06) 66.6%, rgba(140, 140, 140, 0.06) 66.6%, rgba(140, 140, 140, 0.06) 99.9%), linear-gradient(calc(431deg), rgba(40, 40, 40, 0.07) 0%, rgba(40, 40, 40, 0.07) 33.3%, rgba(214, 214, 214, 0.07) 33.3%, rgba(214, 214, 214, 0.07) 66.6%, rgba(190, 190, 190, 0.07) 66.6%, rgba(190, 190, 190, 0.07) 99.9%), linear-gradient(calc(169deg), rgba(230, 230, 230, 0) 0%, rgba(230, 230, 230, 0) 33.3%, rgba(241, 241, 241, 0) 33.3%, rgba(241, 241, 241, 0) 66.6%, rgba(55, 55, 55, 0) 66.6%, rgba(55, 55, 55, 0) 99%), linear-gradient(calc(108deg), rgb(38, 38, 227), rgb(11, 186, 239));

  .title-section {
    margin-top: -50px;

    .title {
      color: #fff;
      font-size: 35px;
      font-weight: 500;
    }
  }

  .footer-section {
    text-align: center;
    padding-top: 10px;

    .version {
      font-size: 13px;
      color: #a4a4a4;
    }
  }

  .login-section {
    width: 500px;
    height: 300px;
    background-color: #fff;
    border-radius: 20px;
    margin-top: 10px;

    .login-btn {
      width: 320px;
      height: 40px;
      line-height: 40px;
      color: #fff;
      text-align: center;
      border-radius: 20px;
      background-color: #409eff;
      margin: 0 auto;
      font-size: 16px;
      font-weight: 500;
      cursor: pointer;
    }

    .input-section {
      padding: 20px 90px;
    }

    .el-tabs__nav {
      width: 100%;
      display: flex;
      justify-content: space-around;
      margin-top: 20px;

      .el-tab-pane {
        width: 100%;

        .account-section {
          width: 100%;
        }
      }

      .el-tabs__item {
        width: 25%;
        text-align: center;
        border: none;
      }
    }
  }
}
</style>
