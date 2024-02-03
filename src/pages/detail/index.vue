<template>
  <page-meta
    :page-style="'overflow:' + (show ? 'hidden' : 'visible')"
  ></page-meta>
  <!-- 我的 -->
  <view class="dg-detail-container">
    <DetailNavBar :top="scrollTop" />
    <TitleBox :form="{}" />
    <BodyBox />
    <CommentBox
      @comment="onComment"
      @close="show = false"
      @open="show = true"
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
          <view class="info">
            <text class="l-txt">回复 {{ '小狐狸不吃素' }}:</text>
            <text class="r-txt">”</text>
          </view>
          <view class="reply-content"
            >这是回复的内容啊这是回复的内容啊这是回复的内容啊</view
          >
          <view class="input">
            <textarea
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
import TitleBox from './components/title-box.vue';
import DetailNavBar from './components/detail-nav-bar.vue';
import BodyBox from './components/body-box.vue';
import FooterBox from './components/footer-box.vue';
import CommentBox from './components/comment-box.vue';
export default {
  name: 'RbMine',
  components: {
    TitleBox,
    BodyBox,
    FooterBox,
    CommentBox,
    DetailNavBar,
  },
  data() {
    return {
      scrollTop: 0,
      show: false,
      replyContentRow: null,
      isDisabled: false,
    };
  },
  onPageScroll(v) {
    this.onScroll(v);
  },
  methods: {
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
      console.log(this.isDisabled);

      this.show = this.isDisabled;
      this.$refs.RbCommentPopupRef.hide({});
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
