export default {
  name: 'dragon.comment',
  api: {
    // 评论列表
    list: '/dragon/comment/find/all',
    // 新增评论
    create: '/dragon/comment/create',

    // 查询回复的评论
    childrenComment: '/dragon/comment/find/child/all'
  },
};
