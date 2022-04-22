import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router';

const routes: Array<RouteRecordRaw> = [
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
                component: () => import('@/pages/micro/micro.vue'),
                meta: {
                    name: '微前端',
                    icon: 'grid'
                }
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;