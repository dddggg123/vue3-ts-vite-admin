<template>
  <div class="international-container">
    <div class="remark-section">
      <div class="remark-content">
        <p class="remark-title">使用说明</p>
        <p class="reamrk-desc">1、国际化使用的框架为：vue-i18n</p>
        <p class="reamrk-desc">
          2、具体国际化选项配置可在@/utils/language.ts文件中配置
        </p>
        <p class="reamrk-desc">3、使用当前实例.$i18n.locale切换语言</p>
        <p class="reamrk-desc">
          4、vue-i18n官方文档<a
            target="_blank"
            style="margin-left: 10px"
            href="https://kazupon.github.io/vue-i18n/zh/started.html#html"
            >https://kazupon.github.io/vue-i18n/zh/started.html#html</a
          >
        </p>
      </div>
    </div>
    <p class="interntional-title">{{ $t("title") }}</p>
    <p class="interntional-sub-title">{{ $t("welcome") }}</p>
    <div class="btn-section">
      <el-button
        type="primary"
        @click="switchLanguageHandler('chinese')"
        class="btn"
      >
        {{ $t("btnZh") }}
      </el-button>
      <el-button
        type="warning"
        @click="switchLanguageHandler('english')"
        class="btn"
      >
        {{ $t("btnEn") }}
      </el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance } from "vue";
export default defineComponent({
  setup() {
    const { proxy } = getCurrentInstance() as any;
    const switchLanguageHandler = (type: String) => {
      console.log("当前选择的语言:" + type);
      switch (type) {
        case "chinese":
          proxy.$i18n.locale = "zh-CN";
          break;
        case "english":
          proxy.$i18n.locale = "en-US";
          break;
      }
    };
    return {
      switchLanguageHandler,
    };
  },
});
</script>

<style lang="scss">
.international-container {
  width: 100%;
  height: 100%;

  .interntional-title {
    font-size: 25px;
    font-weight: 600;
    padding: 0 5%;
    margin-top: 40px;
  }

  .interntional-sub-title {
    font-size: 20px;
    font-weight: 500;
    padding: 0 5%;
  }

  .btn-section {
    margin-top: 20px;
    padding: 0 5%;

    .btn {
      margin: 0 10px;
      padding: 0;
      width: 120px;
      height: 40px;
      border: none;
      font-size: 16px;
      border-radius: 5px;

      &:first-child {
        margin-left: 0;
      }
    }
  }

  .remark-section {
    margin-top: 20px;
    padding: 0 5%;

    .remark-content {
      width: 50%;
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
