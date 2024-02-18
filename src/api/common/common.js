export default {
  name: "dragon.common",
  api: {
    // 首页
    upload: "/rabbit/file/upload",
    // 邮箱登录
    login:'/rabbit/email/login',
    // 验证码
    verificationCode:'/rabbit/captcha/get',
    // 发送邮箱验证码
    sendEmailCode:'/rabbit/send/email/code',
    // 获取用户信息
    userInfo:'/rabbit/system/member/get/current'
  },
};
