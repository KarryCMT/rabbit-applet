
## 开发环境
node版本：v14
## 开发流程
克隆项目： ``git clone https://github.com/KarryCMT/rabbit-mobile.git``

依赖安装： `` npm install || yarn install ``

项目启动开发环境：`` npm run dev:mp-weixin ``

生产环境打包：`` npm run build:mp-weixin ``

## 全局组件
1、已全局导入，无需引入即可使用。

2、新增全局组件，在components文件夹创建一个目录，目录名称为rb-名称开头，其中rb-为前缀固定格式，其次再组件名称文件夹下面新建一个index.vue即可。

3、使用方式:以rb-dialog为例： `` <rb-dialog /> `` 或者 `` <rb-dialog></rb-dialog> ``。


## 网络请求
注册对应模块API文件：
/api/home/hone.js

``  export default {
  name: "rabbit.home",
  api: {
    // 首页
    get: "/rabbit/user/list/get",
  },
};
  ``

使用：示例代码

``
created(){
    this.$request('rabbit.home.get',{data:{id:11}}).then(res=>{
      console.log(res);
    })
  }, 
``
