<template>
<div class="menu-container">
    这里是侧边栏菜单
</div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
    name: 'my-menu',
    setup() {
        let router = useRouter();
        let navigateToRoute = (name: string) => {
            router.push({
                name
            });
        }
        // let routerArr = myRouter.routes;
        // console.log('路由数组:' + JSON.stringify(myRouter));
        return {
            navigateToRoute
        }
    }
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