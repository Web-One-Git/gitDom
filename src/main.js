import Vue from 'vue';
import App from './App.vue';
//全局样式
import './styles/global.less'; 
import router from './router';

//模拟数据
import './mock' 
import './api/banner'

import {showMessage} from "./utils"
Vue.prototype.$showMessage = showMessage;
 new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
