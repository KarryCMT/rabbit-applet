import Vue from 'vue';
import App from './App';


import { api, $request, io, qqMap,baseUrl,H } from '@/utils';

// 注册全局api
const requireAll = (requireContext) =>
  requireContext.keys().map(requireContext);
const apis = requireAll(require.context('@/api', true, /\.js$/));
api ? api.install(apis) : '';

Vue.prototype.QQMapWX = qqMap
Vue.prototype.$request = $request;

Vue.prototype.$H = H;

Vue.config.productionTip = false;

App.mpType = 'app';

const app = new Vue({
  ...App,
});
app.$mount();
