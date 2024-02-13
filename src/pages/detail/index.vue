<template>
  <page-meta :page-style="'overflow:' + (show ? 'hidden' : 'visible')" />
  <!-- 我的 -->
  <view class="dg-detail-container">
    <DetailNavBar :top="scrollTop" :form="modelForm" />
    <TitleBox :form="modelForm" />
    <BodyBox :form="modelForm" />
    <CommentBox
      ref="CommentBoxRef"
      @comment="onComment"
      @close="show = false"
      @open="show = true"
      :form="modelForm"
    />
    <FooterBox @comment="onComment" />
    <!-- 评论输入框 -->
    <rb-popup
      ref="RbCommentPopupRef"
      position="bottom"
      height="40%"
      :zIndex="2000"
      :zMaskIndex="1999"
      :isRadius="false"
    >
      <view class="rb-comment-popup-container">
        <view class="comment-main-input">
          <view class="info" v-if="replyContentRow">
            <text class="l-txt">回复 {{ replyContentRow.name }}:</text>
            <text class="r-txt">”</text>
          </view>
          <view class="reply-content" v-if="replyContentRow">{{
            replyContentRow.content
          }}</view>
          <view class="input">
            <textarea
              v-model="content"
              placeholder-style="color:#ccc;font-weight:200;font-size:28rpx;"
              cursor-spacing="200"
              maxlength="300"
              placeholder="请勿回复违规内容，平台会进行审核"
            ></textarea>
          </view>
        </view>
        <view class="popup-footer-box" @tap="onSend">
          <text class="txt">发送</text>
        </view>
      </view>
    </rb-popup>
  </view>
</template>

<script>
import TitleBox from "./components/title-box.vue";
import DetailNavBar from "./components/detail-nav-bar.vue";
import BodyBox from "./components/body-box.vue";
import FooterBox from "./components/footer-box.vue";
import CommentBox from "./components/comment-box.vue";
export default {
  name: "RbDetail",
  components: {
    TitleBox,
    BodyBox,
    FooterBox,
    CommentBox,
    DetailNavBar,
  },
  data() {
    return {
      content: "",
      scrollTop: 0,
      show: false,
      replyContentRow: null,
      isDisabled: false,
      modelForm: {},
    };
  },
  onLoad(params) {
    this.onLoadData(params.id);
  },
  onPageScroll(v) {
    this.onScroll(v);
  },
  methods: {
    // 获取数据
    onLoadData(id) {
      this.$request("dragon.post.detail", { data: { id } }).then((res) => {
        if (res.statusCode === 600) {
          this.modelForm = res.data;
        }
      });
    },
    // 滚动
    onScroll(v) {
      const { scrollTop } = v;
      this.scrollTop = scrollTop.toFixed(0);
    },
    // 打开评论
    onComment(row = null, type) {
      this.replyContentRow = row;
      this.isDisabled = type;
      this.show = true;
      this.$refs.RbCommentPopupRef.show({});
    },
    // 发送
    onSend() {
      if (!this.content) {
        uni.showToast({
          title: "请输入评论内容",
          icon: "none",
        });
        return;
      }
      this.show = this.isDisabled;
      console.log("发送", this.replyContentRow);
      const payload = this.replyContentRow
        ? { parentId: this.replyContentRow.id, userId: "200",answerId:'' }
        : { parentId: "0", userId: "200" };
      this.onCommentCreateData(payload);
    },
    // 新增评论
    onCommentCreateData(row) {
      this.$request("dragon.comment.create", {
        data: {
          ...row,
          postId: this.modelForm.id,
          content: this.content,
        },
      }).then((res) => {
        this.$refs.RbCommentPopupRef.hide({});
        this.$refs.CommentBoxRef.onGetCommentList(this.modelForm.id);
      });
    },
  },
};
</script>

<style lang="scss">
.dg-detail-container {
  width: 100%;
  padding-bottom: calc(env(safe-area-inset-bottom) + 75rpx);
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
  .main-box {
    padding: 0 16rpx;
    box-sizing: border-box;
  }
  .rb-comment-popup-container {
    .comment-main-input {
      padding: 10rpx 20rpx 10rpx 20rpx;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      .info {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .l-txt {
          color: #ababab;
          font-weight: 300;
        }
        .r-txt {
          color: #e8e8e8;
          font-size: 60rpx;
          font-weight: bold;
        }
      }
      .reply-content {
        background: #f9f9f9;
        color: #848484;
        border-radius: 4rpx;
        padding: 5rpx;
        box-sizing: border-box;
        font-size: 28rpx;
        font-weight: 300;
      }
      .input {
        width: 100%;
        margin-top: 20rpx;
        height: 100%;
      }
      .input textarea {
        width: 100%;
        font-size: 30rpx;
        line-height: 38rpx;
        color: #333;
      }
    }
    .popup-footer-box {
      position: fixed;
      padding-bottom: calc(env(safe-area-inset-bottom) + 55rpx);
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
}
</style>
