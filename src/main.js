import Vue from 'vue';
import App from './App';


import { api, $request, io, qqMap,baseUrl } from '@/utils';

// 注册全局api
const requireAll = (requireContext) =>
  requireContext.keys().map(requireContext);
const apis = requireAll(require.context('@/api', true, /\.js$/));
api ? api.install(apis) : '';

Vue.prototype.QQMapWX = new qqMap({
  key: '2M7BZ-XLTK3-XW436-3ZDTO-JT4K5-IVBZ4',
});
Vue.prototype.$request = $request;

Vue.config.productionTip = false;

App.mpType = 'app';

const app = new Vue({
  ...App,
});
app.$mount();
