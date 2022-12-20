import http from '@/utils/request';
// 发送邮件
const BaseSendEmail = (params) => http.post('/api/base/send', params);

// 用户注册
const UserRegister = (params) => http.post('/api/user/register', params);

// 用户登录
const UserLogin = (params) => http.post('/api/user/login', params);

// 用户退出
const UserLogout = (params) => http.post('/api/user/logout', params);

// 用户信息
const UserInfo = (params) => http.post('/api/user/info', params);

// 解密Token
const decodeToken = (params) => http.post('/api/user/decode', params);

// 找回密码
const RetrievePassword = (params) => http.post('/api/user/pwd', params);

// 查询邮箱是否存在
const ExistsEmail = (params) => http.post('/api/user/query', params);

//获取七牛云上传凭证
const QiniuUploadToken = () => http.post('/api/base/token', {});

// 获取行政区域
const AreaTreeList = () => http.post('/api/base/area/tree', {});

// 获取职务
const JobTreeList = () => http.post('/api/base/job/tree', {});

// 新建房间
const CreateRoom = (params) => http.post('/api/room/create', params);

// 首页房间分页
const RoomPageList = (params) => http.post('/api/room/page', params);

// 文件上传
const UploadFile = (params) => http.post('/api/base/upload', params);

// 创建收藏
const CreateCollect = (params)=> http.post('/api/collect/create',params)

// 获取小程序sessionKey
const GetWeChatCode = (params)=>http.post('/api/base/session/key',params)

//获取详情页面
const GetRoomInfo = (params)=>http.post('/api/room/info',params)

// 获取指定收藏列表
const GetCollectList = (params) => http.post('/api/collect/list',params)

export {
  BaseSendEmail,
  UserRegister,
  decodeToken,
  UserLogin,
  RetrievePassword,
  UserInfo,
  ExistsEmail,
  QiniuUploadToken,
  AreaTreeList,
  JobTreeList,
  UserLogout,
  CreateRoom,
  RoomPageList,
  UploadFile,
  CreateCollect,
  GetWeChatCode,
  GetRoomInfo,
  GetCollectList
};
