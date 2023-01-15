import Vue from 'vue';
import App from './App';
import io from "@/utils/lib/weapp.socket.io";
import QQMapWX from "@/utils/lib/qqmap-wx-jssdk.min";
import { baseUrl } from '@/utils/config';
Vue.config.productionTip = false;
Vue.prototype.QQMapWX =new QQMapWX({
  key:'2M7BZ-XLTK3-XW436-3ZDTO-JT4K5-IVBZ4'
})
App.mpType = 'app';

const app = new Vue({
  ...App,
});
app.$mount();
