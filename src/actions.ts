import { initGlobalState, MicroAppStateActions } from "qiankun";

const state = {
  userInfo: {
    name: "jack",
    age: 23,
  },
};

// 初始化 state
const actions: MicroAppStateActions = initGlobalState(state);

actions.onGlobalStateChange((state, prev) => {
  console.log(state, prev);
});

export default actions;
