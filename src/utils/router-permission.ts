// 模拟后端给的权限路由
/*
    "component":当前页面路径（如果路径为：@/views/admin/orderList，填admin/orderList即可）(如果有子组件，父组件可以为空),
    meta:{
        name:侧边栏名字,
        icon:侧边栏图标,
        hide:是否在侧边栏隐藏
    }
*/
const permissionList: Array<any> = [
  {
    path: "",
    name: "setting",
    component: "",
    meta: {
      name: "设置",
      icon: "setting",
    },
    children: [
      {
        path: "setting/info",
        name: "setting-info",
        component: () => import("@/pages/setting/info.vue"),
        meta: {
          name: "个人信息",
          icon: "user",
        },
      },
      {
        path: "setting/modify",
        name: "setting-modify",
        component: () => import("@/pages/setting/modify.vue"),
        meta: {
          name: "修改信息",
          icon: "files",
        },
      },
    ],
  },
];
export default permissionList;
