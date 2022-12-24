import http from '@/utils/request';

// 用户注册
const UserRegister = (params) => http.post('/user/register', params);
// 用户登录
const UserLogin = (params) => http.post('/user/login', params);

export {
  UserRegister,
  UserLogin
};
