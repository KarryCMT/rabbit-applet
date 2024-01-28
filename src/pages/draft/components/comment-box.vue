<template>
  <view class="detail-comment-box">
    <view class="comment-main-box">
      <view class="count">共 99 条评论</view>
      <view class="master-box">
        <image class="avatar" :src="avatar"></image>
        <view class="input">
          <text class="text">评论一下...</text>
        </view>
      </view>
      <view class="comment-area-box">
        <view
          class="comment-items"
          v-for="item in commentList"
          :key="item.time"
        >
          <CommentListItems :item="item" />
          <view v-if="item.children.length" class="children-items">
            <CommentListItems
              v-for="children in item.children"
              :item="children"
              :key="children.time"
            />
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import CommentListItems from './comment-list-items.vue';
import collectActiveIcon from '@/static/svg/collect-active.svg';
import collectIcon from '@/static/svg/collect.svg';
import likeActiveIcon from '@/static/svg/like-active.svg';
import commentIcon from '@/static/svg/comment.svg';
import createIcon from '@/static/svg/create.svg';
export default {
  components: {
    CommentListItems,
  },
  props: {
    form: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      commentList: [
        {
          likeCount: 9,
          avatar:
            'https://i0.hdslb.com/bfs/face/fef46d61fefa684aff591c4648a899a81a5fc092.jpg@240w_240h_1c_1s_!web-avatar-nav.webp',
          name: '李同学啊',
          isAuthor: true,
          time: 1706405405410,
          city: '广东',
          content:
            '抱歉各位，我不知道会惹来这么大争议，其实我是来分享喜悦的并不是恶意炫耀，加上普通两字，实在欠妥!',
          children: [
            {
              avatar:
                'https://i0.hdslb.com/bfs/face/fef46d61fefa684aff591c4648a899a81a5fc092.jpg@240w_240h_1c_1s_!web-avatar-nav.webp',
              name: '李同学啊',
              isAuthor: true,
              time: 1706405405410,
              likeCount: 9,
              replyName: '小鸭子',
              city: '广东',
              content: '谢谢提醒置顶了',
            },
            {
              avatar:
                'https://i0.hdslb.com/bfs/face/fef46d61fefa684aff591c4648a899a81a5fc092.jpg@240w_240h_1c_1s_!web-avatar-nav.webp',
              name: '小鸭子',
              isAuthor: false,
              likeCount: 9,
              time: 1706405305410,
              replyName: '小鸭子',
              city: '重庆',
              content: '可以置顶一下这一条或者干脆改下标题好了念祝你新婚快乐',
            },
            {
              avatar:
                'https://i0.hdslb.com/bfs/face/fef46d61fefa684aff591c4648a899a81a5fc092.jpg@240w_240h_1c_1s_!web-avatar-nav.webp',
              name: '走不出怪圈的人',
              isAuthor: false,
              time: 1706405305410,
              likeCount: 9,
              replyName: null,
              city: '广东',
              content: '4000一围，是在四星级大酒店还是五星级大酒店摆?',
            },
          ],
        },
        {
          likeCount: 9,
          avatar:
            'https://i0.hdslb.com/bfs/face/fef46d61fefa684aff591c4648a899a81a5fc092.jpg@240w_240h_1c_1s_!web-avatar-nav.webp',
          name: '李同学啊',
          isAuthor: true,
          time: 1706405405410,
          city: '广东',
          content:
            '抱歉各位，我不知道会惹来这么大争议，其实我是来分享喜悦的并不是恶意炫耀，加上普通两字，实在欠妥!',
          children: [
            {
              avatar:
                'https://i0.hdslb.com/bfs/face/fef46d61fefa684aff591c4648a899a81a5fc092.jpg@240w_240h_1c_1s_!web-avatar-nav.webp',
              name: '李同学啊',
              isAuthor: true,
              time: 1706405405410,
              likeCount: 9,
              replyName: '小鸭子',
              city: '广东',
              content: '谢谢提醒置顶了',
            },
            {
              avatar:
                'https://i0.hdslb.com/bfs/face/fef46d61fefa684aff591c4648a899a81a5fc092.jpg@240w_240h_1c_1s_!web-avatar-nav.webp',
              name: '小鸭子',
              isAuthor: false,
              likeCount: 9,
              time: 1706405305410,
              replyName: '小鸭子',
              city: '重庆',
              content: '可以置顶一下这一条或者干脆改下标题好了念祝你新婚快乐',
            },
            {
              avatar:
                'https://i0.hdslb.com/bfs/face/fef46d61fefa684aff591c4648a899a81a5fc092.jpg@240w_240h_1c_1s_!web-avatar-nav.webp',
              name: '走不出怪圈的人',
              isAuthor: false,
              time: 1706405305410,
              likeCount: 9,
              replyName: null,
              city: '广东',
              content: '4000一围，是在四星级大酒店还是五星级大酒店摆?',
            },
          ],
        },
      ],
      avatar:
        'https://i0.hdslb.com/bfs/face/fef46d61fefa684aff591c4648a899a81a5fc092.jpg@240w_240h_1c_1s_!web-avatar-nav.webp',
    };
  },
  onLoad() {},
  computed: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.detail-comment-box {
  padding: 10rpx 20rpx;
  width: 100%;
  box-sizing: border-box;
  .comment-main-box {
    border-top: 1rpx solid #efefef;

    .count {
      margin-top: 20rpx;
      color: #656565;
      font-size: 26rpx;
    }
    .master-box {
      margin-top: 30rpx;
      display: flex;
      align-items: center;
      .avatar {
        width: 70rpx;
        height: 70rpx;
        border-radius: 50%;
      }
      .input {
        flex: 1;
        margin-left: 20rpx;
        display: flex;
        align-items: center;
        background: #f4f4f4;
        border-radius: 40rpx;
        padding: 15rpx 20rpx;
        box-sizing: border-box;
        .text {
          color: #b8b8b8;
          font-size: 26rpx;
        }
      }
    }
    .comment-area-box {
      margin-top: 20rpx;

      .comment-items {
        display: flex;
        flex-direction: column;

        .children-items {
          margin-left: 70rpx;
          box-sizing: border-box;
        }
      }
    }
  }
}
</style>
