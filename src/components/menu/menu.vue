<template>
<div class="menu-container">
    这里是侧边栏菜单
</div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({

})
</script>

<style lang="scss">
.menu-container {
    position: fixed;
    top: 0;
    height: 100%;
    width: 200px;
    left: 0;
    background-color: yellow;
}
</style>