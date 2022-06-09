import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import store from "../store/index";
import permissionList from "@/utils/router-permission";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/pages/login/login.vue"),
    meta: {
      name: "登录",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to: any, _from: any, next: any) => {
  //未登录执行逻辑
  if (!window.localStorage.getItem("token") && to.path !== "/login") {
    return next({ path: "/login" });
  }
  //已登录执行逻辑
  if (window.localStorage.getItem("token") && to.path == "/login") {
    return next();
  }
  //重新加载动态路由
  if (!store.state.permissionList.length && to.path != "/login") {
    const routerArr: Array<object> =
      window.localStorage.getItem("permission") == "adminer"
        ? permissionList
        : [];
    // router.removeRoute('router');
    return store.dispatch("FETCH_PERMISSION", routerArr).then(() => {
      next({ path: "/home" });
    });
  } else {
    console.log('我执行了，跳转路径:' + to.path);
    next();
  }
});

router.afterEach((to: any, from: any, _next: any) => {
  try {
    //设置标题
    if (to.meta.name) {
      document.title = to.meta.name;
    }
  } catch (err) { }
  const arr = to.matched;
  let routerList = [...arr];
  // console.log(from);
  // console.log(to);
  routerList = routerList.splice(1);
  if (to.meta.hide) {
    routerList.unshift(from);
    //顶部面包屑
    store.commit("SET_CRUMB_LIST", routerList);
    //目前左边导航选中的active
    // store.commit("SET_CURRENT_MENU", to.name);
  } else {
    //顶部面包屑
    store.commit("SET_CRUMB_LIST", routerList);
    //目前左边导航选中的active
    store.commit("SET_CURRENT_MENU", to.name);
  }

});

export const DynamicRoutes = [
  {
    path: "",
    name: "container",
    component: () => import("@/pages/container/container.vue"),
    meta: {
      name: "首页",
    },
    children: [
      {
        path: "home",
        name: "home",
        component: () => import("@/pages/home/home.vue"),
        meta: {
          name: "首页",
          icon: "house",
        },
      },
      {
        path: "theme",
        name: "theme",
        component: () => import("@/pages/theme/theme.vue"),
        meta: {
          name: "主题管理",
          icon: "mostly-cloudy",
        },
      },
      {
        path: "table",
        name: "table",
        component: () => import("@/pages/table/table.vue"),
        meta: {
          name: "表格管理",
          icon: "tickets",
          subHide: true
        }
      },
      {
        path: "router",
        name: "router",
        component: () => import("@/pages/router/router.vue"),
        meta: {
          name: "路由管理",
          icon: "sort",
        },
      },
      {
        path: "international",
        name: "international",
        component: () => import("@/pages/international/international.vue"),
        meta: {
          name: "国际化",
          icon: "help",
        },
      },
      {
        path: "main/micro",
        name: "micro",
        component: () => import("@/pages/micro/micro.vue"),
        meta: {
          name: "微前端",
          icon: "grid",
        },
        children: [
          {
            path: "app-one",
            name: "micro-app-one",
            component: () => import("@/pages/micro/micro-app-one.vue"),
            meta: {
              name: "子应用1",
              icon: "TopLeft",
            },
          },
          {
            path: "app-two",
            name: "micro-app-two",
            component: () => import("@/pages/micro/micro-app-two.vue"),
            meta: {
              name: "子应用2",
              icon: "TopRight",
            },
          },
        ],
      },
      {
        path: "map",
        name: "map",
        component: () => import("@/pages/map/map.vue"),
        meta: {
          name: "地图",
          icon: "map-location",
        },
      },
      {
        path: "editor",
        name: "editor",
        component: () => import("@/pages/editor/editor.vue"),
        meta: {
          name: "富文本编辑器",
          icon: "reading",
        },
      },
      {
        path: "iframe",
        name: "iframe",
        component: () => import("@/pages/iframe/iframe.vue"),
        meta: {
          name: "iframe通信",
          icon: "guide",
        },
      },
      {
        path: "screen",
        name: "screen",
        component: () => import("@/pages/screen/screen.vue"),
        meta: {
          name: "大屏展示",
          icon: "data-analysis",
        },
      },
      {
        path: "form",
        name: "form",
        component: () => import("@/pages/form/form.vue"),
        meta: {
          name: "表单",
          icon: "tickets",
        },
      },
      {
        path: "contact",
        name: "contact",
        component: () => import("@/pages/contact/contact.vue"),
        meta: {
          name: "联系作者",
          icon: "phone",
        },
      },
      {
        path: "book",
        name: "book",
        component: () => import("@/pages/book/book-detail.vue"),
        meta: {
          name: "图书详情",
          icon: "TopLeft",
          hide: true
        }
      }
    ],
  },
];

export default router;
