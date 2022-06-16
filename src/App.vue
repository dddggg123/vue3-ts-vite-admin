<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { registerMicroApps, start } from "qiankun";
import actions from "./actions";
import apps from "./micro-app";

const user = {
  name: "wang",
};

actions.onGlobalStateChange((state) => {
  console.log("main onGlobalStateChange", state);
});

actions.setGlobalState(user);
registerMicroApps(apps);

start({
  sandbox: {
    experimentalStyleIsolation: true,
  },
});
</script>

<style lang="scss"></style>
