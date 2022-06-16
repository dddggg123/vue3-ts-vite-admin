const microApps = [
  {
    name: "micro1",
    entry: import.meta.env.VITE_APP_MICRO_ONE as string,
    activeRule: "/main/micro/app-one",
  },
  {
    name: "micro2",
    entry: import.meta.env.VITE_APP_MICRO_TWO as string,
    activeRule: "/main/micro/app-two",
  },
];

const apps = microApps.map((app) => {
  return {
    ...app,
    container: "#micro-content",
    props: {
      routerBase: app.activeRule, // 下发基础路由
    },
    loader(loading: boolean) {
      console.log("loading", loading);
    },
  };
});

export default apps;
