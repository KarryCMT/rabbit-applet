module.exports = {
  baseUrl:
    process.env.NODE_ENV === 'development'
      ?  'http://localhost:8080/api/v1'
      : 'https://api.lengnuanit.top/api/v1',
  wsUrl:
    process.env.NODE_ENV === 'development'
      ? 'ws://127.0.0.1:8080'
      : 'ws://api.lengnuanit.top',
};
