<template>
  <div class="contact-container">
    <div class="remark-section">
      <div class="remark-content">
        <p class="remark-title">说明</p>
        <p class="reamrk-desc">1、如果你有好的想法或建议，欢迎添加作者微信。</p>
        <p class="reamrk-desc">2、如果有好的工作推荐，欢迎添加作者微信。</p>
        <p class="reamrk-desc">3、如果有不懂的地方或者项目配置，欢迎添加作者微信。</p>
        <p class="reamrk-desc">4、如果通过该项目学到了新的知识或者对工作有帮助，欢迎打赏作者一杯咖啡。</p>
      </div>
    </div>
    <div class="qrode-content">
      <div class="qrcode-section">
        <img src="@/assets/png/author_wechat.jpg" class="qrcode-img" alt="">
        <span class="qrcode-title">微信扫一扫添加好友</span>
      </div>
      <div class="qrcode-section">
        <img src="@/assets/png/author_admire.jpg" class="qrcode-img" alt="">
        <span class="qrcode-title">觉得不错赞赏一杯咖啡</span>
      </div>
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

  .qrode-content {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 5%;

    .qrcode-section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      &:last-child {
        margin-left: 30px;
      }

      .qrcode-img {
        width: 200px;
        height: 200px;
      }

      .qrcode-title {
        font-size: 18px;
        font-weight: 600;
        margin-top: 10px;
      }
    }
  }
}
</style>