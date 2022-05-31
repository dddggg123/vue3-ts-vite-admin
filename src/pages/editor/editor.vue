<template>
  <div class="editor-container">
    <div id="editor" class="editor"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import Editor from "wangeditor";

export default defineComponent({
  setup() {
    onMounted(() => {
      const editor = new Editor("#editor");
      // 图片上传服务器链接（此处仅模拟）
      editor.config.uploadImgServer = "/upload-img";
      // 修改后的回调
      editor.config.onchange = function (newHtml: string) {
        console.log("change 之后最新的 html", newHtml);
      };
      editor.create();

      // 更多配置 说明：https://www.wangeditor.com/doc/pages/01-%E5%BC%80%E5%A7%8B%E4%BD%BF%E7%94%A8/
    });
    return {};
  },
});
</script>

<style lang="scss">
.editor-container {
  height: 100%;
  padding: 30px 50px;
}
</style>
