import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router';
import store from "../store/index";
import permissionList from "@/utils/router-permission";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/pages/login/login.vue'),
        meta: {
            name: '登录'
        }
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach((to: any, from: any, next: any) => {
    //未登录执行逻辑
    if (!window.localStorage.getItem("token") && to.path !== "/login") {
        return next({ path: "/login" });
    };
    //已登录执行逻辑
    if (window.localStorage.getItem("token") && to.path == "/login") return next({ path: "/" });
    //重新加载动态路由
    if (!store.state.permissionList.length && to.path != '/login') {
        console.log('用户权限:' + window.localStorage.getItem('permission'));
        const routerArr: Array<object> = window.localStorage.getItem('permission') == 'adminer' ? permissionList : [];
        // router.removeRoute('router');
        return store.dispatch("FETCH_PERMISSION", routerArr).then(() => {
            next({ ...to, replace: true });
        });
    } else {
        // 手动修改history的state
        // if (!history.state.current) {
        //     Object.assign(history.state, {
        //         current: from.fullPath
        //     })
        // }
        next();
    }
})

router.afterEach((to: any, from: any, next: any) => {
    try {
        //设置标题
        if (to.meta.name) {
            document.title = to.meta.name;
        }
    } catch (err) { }
    let routerList = to.matched;
    //顶部面包屑
    store.commit("setCrumbList", routerList);
})

export const DynamicRoutes = [
    {
        path: '',
        name: 'container',
        component: () => import('@/pages/container/container.vue'),
        meta: {
            name: '首页'
        },
        children: [
            {
                path: 'home',
                name: 'home',
                component: () => import('@/pages/home/home.vue'),
                meta: {
                    name: '首页',
                    icon: 'house'
                }
            }, {
                path: 'theme',
                name: 'theme',
                component: () => import('@/pages/theme/theme.vue'),
                meta: {
                    name: '主题管理',
                    icon: 'mostly-cloudy'
                }
            }, {
                path: 'table',
                name: 'table',
                component: () => import('@/pages/table/table.vue'),
                meta: {
                    name: '表格管理',
                    icon: 'tickets'
                }
            }, {
                path: 'router',
                name: 'router',
                component: () => import('@/pages/router/router.vue'),
                meta: {
                    name: '路由管理',
                    icon: 'sort'
                }
            }, {
                path: 'international',
                name: 'international',
                component: () => import('@/pages/international/international.vue'),
                meta: {
                    name: '国际化',
                    icon: 'help'
                }
            }, {
                path: 'micro',
                name: 'micro',
                component: () => import('@/pages/micro/micro-app-one.vue'),
                meta: {
                    name: '微前端',
                    icon: 'grid'
                }
            }, {
                path: 'map',
                name: 'map',
                component: () => import('@/pages/map/map.vue'),
                meta: {
                    name: '地图',
                    icon: 'map-location'
                }
            }, {
                path: 'editor',
                name: 'editor',
                component: () => import('@/pages/editor/editor.vue'),
                meta: {
                    name: '富文本编辑器',
                    icon: 'reading'
                }
            }, {
                path: 'iframe',
                name: 'iframe',
                component: () => import('@/pages/iframe/iframe.vue'),
                meta: {
                    name: 'iframe通信',
                    icon: 'guide'
                }
            }, {
                path: 'screen',
                name: 'screen',
                component: () => import('@/pages/screen/screen.vue'),
                meta: {
                    name: '大屏展示',
                    icon: 'data-analysis'
                }
            }, {
                path: 'form',
                name: 'form',
                component: () => import('@/pages/form/form.vue'),
                meta: {
                    name: '表单',
                    icon: 'tickets'
                }
            }, {
                path: 'other',
                name: 'other',
                component: () => import('@/pages/other/other.vue'),
                meta: {
                    name: '其他模块',
                    icon: 'link'
                }
            }, {
                path: 'contact',
                name: 'contact',
                component: () => import('@/pages/contact/contact.vue'),
                meta: {
                    name: '联系作者',
                    icon: 'phone'
                }
            }
        ]
    }
]

export default router;