<template>
  <view class="detail-comment-box">
    <view class="comment-main-box">
      <view class="count">共 99 条评论</view>
      <view class="master-box">
        <image class="avatar" :src="avatar"></image>
        <view class="input" @tap="onComment">
          <text class="text">评论一下...</text>
        </view>
      </view>
      <view class="comment-area-box">
        <view
          class="comment-items"
          v-for="(item, index) in commentList"
          :key="item.time"
        >
          <CommentListItems
            :index="index + 1"
            :item="item"
            @unfold="onUnfold"
            @reply="onReply"
          />
        </view>
      </view>
    </view>
    <!-- 子评论 -->
    <rb-popup ref="RbListPopupRef" position="bottom" @close="onClose">
      <view class="rb-list-popup-container">
        <view
          class="comment-items"
          v-for="item in commentChildrenList"
          :key="item.time"
        >
          <CommentListItems
            :isUnfold="false"
            :item="item"
            @reply="onChildrenReply"
          />
          <view v-if="item.children.length" class="children-items">
            <CommentListItems
              :isUnfold="false"
              v-for="children in item.children"
              :item="children"
              :key="children.id"
              @reply="onChildrenReply"
            />
          </view>
        </view>
        <view class="popup-footer-box" @tap="onCancel">
          <text class="txt">收起</text>
        </view>
      </view>
    </rb-popup>
  </view>
</template>

<script>
import CommentListItems from "./comment-list-items.vue";
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
      show: false,
      commentList: [],
      commentChildrenList: [
        {
          likeCount: 9,
          avatar:
            "https://i0.hdslb.com/bfs/face/fef46d61fefa684aff591c4648a899a81a5fc092.jpg@240w_240h_1c_1s_!web-avatar-nav.webp",
          name: "李同学啊",
          isAuthor: true,
          time: 1706405405410,
          city: "广东",
          content:
            "抱歉各位，我不知道会惹来这么大争议，其实我是来分享喜悦的并不是恶意炫耀，加上普通两字，实在欠妥!",
          children: [
            {
              avatar:
                "https://i0.hdslb.com/bfs/face/fef46d61fefa684aff591c4648a899a81a5fc092.jpg@240w_240h_1c_1s_!web-avatar-nav.webp",
              name: "李同学啊",
              isAuthor: true,
              time: 1706405405410,
              likeCount: 9,
              replyName: "小鸭子",
              city: "广东",
              content: "谢谢提醒置顶了",
            },
            {
              avatar:
                "https://i0.hdslb.com/bfs/face/fef46d61fefa684aff591c4648a899a81a5fc092.jpg@240w_240h_1c_1s_!web-avatar-nav.webp",
              name: "小鸭子",
              isAuthor: false,
              likeCount: 9,
              time: 1706405305410,
              replyName: "小鸭子",
              city: "重庆",
              content: "可以置顶一下这一条或者干脆改下标题好了念祝你新婚快乐",
            },
            {
              avatar:
                "https://i0.hdslb.com/bfs/face/fef46d61fefa684aff591c4648a899a81a5fc092.jpg@240w_240h_1c_1s_!web-avatar-nav.webp",
              name: "走不出怪圈的人",
              isAuthor: false,
              time: 1706405305410,
              likeCount: 9,
              replyName: null,
              city: "广东",
              content: "4000一围，是在四星级大酒店还是五星级大酒店摆?",
            },
            {
              avatar:
                "https://i0.hdslb.com/bfs/face/fef46d61fefa684aff591c4648a899a81a5fc092.jpg@240w_240h_1c_1s_!web-avatar-nav.webp",
              name: "小鸭子",
              isAuthor: false,
              likeCount: 9,
              time: 1706405305410,
              replyName: "小鸭子",
              city: "重庆",
              content: "可以置顶一下这一条或者干脆改下标题好了念祝你新婚快乐",
            },
            {
              avatar:
                "https://i0.hdslb.com/bfs/face/fef46d61fefa684aff591c4648a899a81a5fc092.jpg@240w_240h_1c_1s_!web-avatar-nav.webp",
              name: "走不出怪圈的人",
              isAuthor: false,
              time: 1706405305410,
              likeCount: 9,
              replyName: null,
              city: "广东",
              content: "4000一围，是在四星级大酒店还是五星级大酒店摆?",
            },
            {
              avatar:
                "https://i0.hdslb.com/bfs/face/fef46d61fefa684aff591c4648a899a81a5fc092.jpg@240w_240h_1c_1s_!web-avatar-nav.webp",
              name: "小鸭子",
              isAuthor: false,
              likeCount: 9,
              time: 1706405305410,
              replyName: "小鸭子",
              city: "重庆",
              content: "可以置顶一下这一条或者干脆改下标题好了念祝你新婚快乐",
            },
            {
              avatar:
                "https://i0.hdslb.com/bfs/face/fef46d61fefa684aff591c4648a899a81a5fc092.jpg@240w_240h_1c_1s_!web-avatar-nav.webp",
              name: "走不出怪圈的人",
              isAuthor: false,
              time: 1706405305410,
              likeCount: 9,
              replyName: null,
              city: "广东",
              content: "4000一围，是在四星级大酒店还是五星级大酒店摆?",
            },
          ],
        },
      ],
      avatar:
        "https://i0.hdslb.com/bfs/face/fef46d61fefa684aff591c4648a899a81a5fc092.jpg@240w_240h_1c_1s_!web-avatar-nav.webp",
    };
  },
  onLoad() {},
  computed: {},
  watch: {
    form: {
      handler(obj) {
        if (obj.id) {
          this.onGetCommentList(obj.id);
        }
      },
      immediate: true,
    },
  },
  methods: {
    // 获取评论列表
    onGetCommentList(postId) {
      this.$request("dragon.comment.list", { data: { postId } }).then((res) => {
        this.commentList = res.data;
      });
    },

    onUnfold(row) {
      this.$emit("open");
      this.$refs.RbListPopupRef.show({});
    },
    onClose() {
      this.$emit("close");
    },
    onCancel() {
      this.$refs.RbListPopupRef.hide();
    },
    onComment() {
      this.$emit("comment", null, false);
    },
    onReply(row) {
      this.$emit("comment", row, false);
    },
    onChildrenReply(row) {
      this.$emit("comment", row, true);
    },
  },
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
      }
    }
  }
}
.rb-list-popup-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  padding: 10rpx;
  box-sizing: border-box;
  flex-direction: column;
  padding-bottom: calc(env(safe-area-inset-bottom) + 85rpx);

  .comment-items {
    display: flex;
    flex-direction: column;
    .children-items {
      margin-top: 20rpx;
      margin-left: 70rpx;
      box-sizing: border-box;
      background-color: #f9f9f9;
      padding: 0 10rpx;
      box-sizing: border-box;
    }
  }
  .popup-footer-box {
    position: fixed;
    padding-bottom: calc(env(safe-area-inset-bottom) + 75rpx);
    bottom: 0;
    box-sizing: border-box;
    left: 0;
    right: 0;
    height: 60rpx;
    border-top: 1px solid #eeecec;
    background-color: #fff;
    display: flex;
    justify-content: center;
    .txt {
      margin-top: 10rpx;
    }
    .txt:active {
      opacity: 0.5;
    }
  }
}
</style>
