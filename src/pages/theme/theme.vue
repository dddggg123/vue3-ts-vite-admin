<template>
  <div class="theme-container">
    <p class="theme-title">选择项目主题色</p>
    <div class="color-pick-section">
      <div class="color-item theme1">
        <span class="color-title">主题1</span>
      </div>
      <div class="color-item theme2">
        <span class="color-title">主题2</span>
      </div>
      <div class="color-item theme3">
        <span class="color-title">主题3</span>
      </div>
      <div class="color-item theme4">
        <span class="color-title">主题4</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {

}
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

      .color-title {
        font-size: 18px;
      }
    }

    .theme1 {
      background-color: #304156;
      color: #fff;
    }

    .theme2 {
      background-color: #409eff;
      color: #fff;
    }

    .theme3 {
      background-color: #a16bfe;
      color: #f7b765;
    }

    .theme4 {
      background-color: #121317;
      color: #9dfcf4;
    }
  }
}
</style>