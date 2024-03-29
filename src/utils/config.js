module.exports = {
  uploadUrl: process.env.NODE_ENV === 'development' ? 'http://localhost:8004/api/v1/oss/file/upload' : 'https://api.lengnuanit.top/api/v1/oss/file/upload',
  baseUrl: process.env.NODE_ENV === 'development' ? 'http://localhost:8000/api/v1' : 'https://api.lengnuanit.top/api/v1',
  wsUrl: process.env.NODE_ENV === 'development' ? 'ws://127.0.0.1:10001' : 'ws://api.lengnuanit.top',
};
export const getRabbitConsolePrefix = (module) => `[rabbit-${module}]:`;
