module.exports = {
  baseUrl: process.env.NODE_ENV === 'development' ?  'http://localhost:10001/api/v1' : 'https://api.lengnuanit.top/api/v1',
  wsUrl:process.env.NODE_ENV === 'development' ? 'ws://127.0.0.1:10001' : 'ws://api.lengnuanit.top',
};

export const getRabbitConsolePrefix = (module) => `[rabbit-${module}]:`;
