<template>
  <div class="home-container">Hello World,Everybody!Good night!测试一下哈哈哈 WYR同学晚上好！</div>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from 'vue';
export default defineComponent({
  setup() {
    let count = ref(0);

    const addCount = () => {
      setInterval(() => {
        count.value += 1;
      }, 1000)
    }

    onMounted(() => {
      addCount();
    });

    return {
      count
    }
  }
})
</script>

<style lang="scss">
.home-container {
  width: 100%;
}
</style>