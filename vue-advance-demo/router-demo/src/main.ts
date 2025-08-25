import { createApp, h } from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter, createWebHashHistory}from 'vue-router'
// import About from './views/About.vue'
// import Home from './views/Home.vue'

//动态加载，分chunk
const Home = import("./views/Home.vue")
const About = import("./views/About.vue")
const AboutDetail = import("./views/AboutDetail.vue")

// 路由逻辑，路由映射表
// 映射规则自己定， key -> value

const routes = [
    {path: "/", component: Home},
    {
        path: "/about", 
        component: About,
        children: [
            {
                path:':id',
                component: AboutDetail 
            }
        ]
    },
    //未匹配到
    {
        path: "/:pathMatch(.*)*",
        component: h('div', '404')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})


//全局导航守卫
//一般用于权限管理
router.beforeEach((to, from, next) => {
    console.log(to, from)
    //根据逻辑跳转页面
    next()
})

const app = createApp(App)

//基于插件协议使用
app.use(router)


app.mount('#app')
