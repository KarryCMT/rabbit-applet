import http from '@/utils/request';

// 测试
const Test = (params) => http.post('/user/test', params);
export {
  Test
};
