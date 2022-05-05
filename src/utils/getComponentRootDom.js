/**
 * 获取组件渲染Dom的根元素
 * @param {*} comp  组件
 * @param {*} props  属性
 * @returns 
 */

import Vue from 'vue';
export default function (comp, props) {
    const vm = new Vue({
        render:h=> h(comp, {
            props
        })
    })
    vm.$mount();
    return vm.$el;
}