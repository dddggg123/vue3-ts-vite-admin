<template>
  <div class="theme-container">
    <p class="theme-title">选择项目主题色</p>
    <div class="color-pick-section">
      <div v-for="(item, index) in themeArr" :style="{ color: item.color, backgroundColor: item.bgColor }"
        @click="themeItemHandler(index)" class="color-item">
        <span class="color-title">{{ item.title }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup() {
    const themeArr = reactive([
      {
        title: '主题1',
        color: '#fff',
        bgColor: '#304156'
      }, {
        title: '主题2',
        color: '#fff',
        bgColor: '#409eff'
      }, {
        title: '主题3',
        color: '#f7b765',
        bgColor: '#a16bfe'
      }, {
        title: '主题4',
        color: '#9dfcf4',
        bgColor: '#121317'
      }
    ])
    const themeItemHandler = (index: number) => {
      window.document.documentElement.setAttribute(
        "data-ming",
        `theme${index+1}`
      );
    }
    return {
      themeArr,
      themeItemHandler
    }
  }
})
</script>

<style lang="scss">
.theme-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .theme-title {
    font-size: 35px;
    font-weight: 600;
  }

  .color-pick-section {
    display: flex;
    justify-content: center;
    align-items: center;

    .color-item {
      background-color: blue;
      color: #fff;
      width: 150px;
      height: 50px;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 10px;
      cursor: pointer;

      .color-title {
        font-size: 18px;
      }
    }
  }
}
</style>