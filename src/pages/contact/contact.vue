<template>
  <div class="home-container">
    <div class="qrcode-section">
      <img src="@/assets/png/author_wechat.jpg" class="qrcode-img" alt="">
      <span class="qrcode-title">微信扫一扫添加好友</span>
    </div>
  </div>
</template>

<script lang="ts">
export default {

}
</script>

<style lang="scss">
.home-container {
  width: 100%;
  height: 100%;

  .qrcode-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .qrcode-img {
      width: 300px;
      height: 300px;
    }

    .qrcode-title {
      font-size: 18px;
      font-weight: 600;
      margin-top: 10px;
    }
  }
}
</style>