import { baseUrl } from './config';
class Request {
  /**
   * 内部的属性定义有：基础配置(config)、拦截器(interceptor)、请求方法表达式（get post put delete）
   */
  constructor() {
    this.config = {
      baseUrl,
      header: {}, // 默认的请求头
      method: 'POST',
      dataType: 'json', // 设置为json，返回后uni.request会对数据进行一次JSON.parse
      responseType: 'text', // 此参数无需处理，因为5+和支付宝小程序不支持，默认为text即可
      showLoading: true, // 是否显示请求中的loading
      loadingText: '请求中...',
      loadingTime: 800, // 在此时间内，请求还没回来的话，就显示加载中动画，单位ms
      timer: null, // 定时器
      loadingMask: true, // 展示loading的时候，是否给一个透明的蒙层，防止触摸穿透
    };

    /**
     * 包含了值都为空的请求拦截和响应拦截属性的拦截器对象。
     */
    this.interceptor = {
      // 请求拦截
      request(config) {
        uni.showLoading({
          title:"请求中..."
        })
        config.data = config.data || {};
        return config;
      },
      // 响应拦截
      response(response) {
        if (response.errMsg && response.errMsg === 'request:fail ') {
          uni.hideLoading()
          uni.showToast({
            icon: 'none',
            title: '网络错误',
          });
          return Promise.reject(response);
        }
        if (response.statusCode === 401) {
          uni.hideLoading()
          uni.showToast({
            icon: 'none',
            title: '登录过期，请重新登录',
          });
          uni.redirectTo({
            url: '/pages/login/index',
          });
          uni.clearStorageSync();
        } else if (response.statusCode === 200 && response.data.code === 200) {
          uni.hideLoading()
          const data = response.data;
          if (data.hasOwnProperty('token')) {
            const token = data.token;
            uni.setStorageSync('token', token);
          }
          return response.data || {};
        } else {
          uni.hideLoading()
          uni.showToast({
            icon: 'none',
            title: response.data || '系统错误',
          });
          return Promise.reject(response);
        }
      },
    };

    // post请求
    this.post = ({url,data,methods}) => {
      return this.request({
        url:`${url}`,
        method: methods || 'POST',
        header: uni.getStorageSync('token')
          ? { token: uni.getStorageSync('token') }
          : {},
        data,
      });
    };
  }
  /**
   * 主要请求部分,使用uni.request进行请求，并实现请求和响应的拦截
   */
  request(options = {}) {
    //检查请求拦截
    this.options = this.interceptor.request(options);
    options.dataType = options.dataType || this.config.dataType;
    options.responseType = options.responseType || this.config.responseType;
    options.url = this.config.baseUrl + options.url || '';
    options.params = options.params || {};
    options.header = Object.assign({}, this.config.header, options.header);
    options.method = options.method || this.config.method;

    return new Promise((resolve, reject) => {
      options.complete = (response) => {
        //请求返回后，隐藏loading
        uni.hideLoading();
        //清除定时器，如果请求快，不用显示loading
        clearTimeout(this.config.timer);
        this.config.timer = null;
        //响应拦截
        let resInterceptors = this.interceptor.response(response);
        resolve(resInterceptors);
      };
      //是否显示loading，加一个是否有已经有了timer的判断，否则两个同时请求的时候，后者会清除前者的定时器id，而没有清除前者的定时器，导致前者超时，一直显示loading
      if (this.config.showLoading && this.config.timer) {
        this.config.timer = setTimeout(() => {
          uni.showLoading({
            title: this.config.loadingText,
            mask: this.config.loadingMask,
          });
        }, this.config.loadingTime);
      }
      uni.request(options);
    });
  }
}
export default new Request();
