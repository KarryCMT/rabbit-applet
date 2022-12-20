module.exports = {
  baseUrl:
    process.env.NODE_ENV === 'development'
      ?  'http://127.0.0.1:7001'
      : 'https://api.lengnuanit.top',
  wsUrl:
    process.env.NODE_ENV === 'development'
      ? 'ws://127.0.0.1:7001'
      : 'ws://api.lengnuanit.top',
};
