import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from "./routes";

// 使用插件
Vue.use(VueRouter);

const router = new VueRouter({
    //配置
    routes,  // 路由匹配规则
    mode: 'history',  // 路由匹配模式
})

export default router;