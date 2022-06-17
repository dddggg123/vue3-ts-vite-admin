<template>
  <div class="theme-container">
    <div class="remark-section">
      <div class="remark-content">
        <p class="remark-title">使用说明</p>
        <p class="reamrk-desc">
          1、给所有需要统一主题色的元素增加一个class: theme-bg
        </p>
        <p class="reamrk-desc">
          2、主题色的背景、字体色号可在@/styles/theme/value.scss文件中进行配置
        </p>
        <p class="reamrk-desc">
          3、具体元素css代码可在@/styles/theme/mixin.scss文件中进行配置
        </p>
        <p class="reamrk-desc">
          4、通过使用window.document.documentElement.setAttribute给元素设置key:value，动态设置当前主题色
        </p>
        <p class="reamrk-desc">
          5、同理元素的主题字体大小也可以通过类似的方法来全局实现
        </p>
      </div>
    </div>
    <p class="theme-title">选择项目主题色</p>
    <div class="color-pick-section">
      <el-button
        v-for="(item, index) in themeArr"
        :key="index"
        :style="{ color: item.color, backgroundColor: item.bgColor }"
        @click="themeItemHandler(index)"
        class="color-item"
      >
        {{ item.title }}
      </el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  setup() {
    const themeArr = reactive([
      {
        title: "主题1",
        color: "#fff",
        bgColor: "#304156",
      },
      {
        title: "主题2",
        color: "#fff",
        bgColor: "#409eff",
      },
      {
        title: "主题3",
        color: "#f7b765",
        bgColor: "#a16bfe",
      },
      {
        title: "主题4",
        color: "#9dfcf4",
        bgColor: "#121317",
      },
    ]);
    const themeItemHandler = (index: number) => {
      window.document.documentElement.setAttribute(
        "current-theme",
        `theme${index + 1}`
      );
    };
    return {
      themeArr,
      themeItemHandler,
    };
  },
});
</script>

<style lang="scss">
.theme-container {
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

  .theme-title {
    font-size: 25px;
    font-weight: 600;
    padding: 0 5%;
    margin-top: 40px;
  }

  .color-pick-section {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 5%;

    .color-item {
      background-color: blue;
      color: #fff;
      margin: 0 10px;
      padding: 0;
      width: 120px;
      height: 40px;
      border: none;
      font-size: 16px;
      border-radius: 5px;

      &:first-child {
        margin-left: 0px;
      }
    }
  }
}
</style>
