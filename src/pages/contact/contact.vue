<template>
  <div class="contact-container">
    <div class="qrcode-section">
      <img src="@/assets/png/author_wechat.jpg" class="qrcode-img" alt="">
      <span class="qrcode-title">微信扫一扫添加好友</span>
    </div>
    <div class="qrcode-section">
      <img src="@/assets/png/author_admire.jpg" class="qrcode-img" alt="">
      <span class="qrcode-title">觉得不错赞赏一杯咖啡</span>
    </div>
  </div>
</template>

<script lang="ts">
export default {

}
</script>

<style lang="scss">
.contact-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .qrcode-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 50px;

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