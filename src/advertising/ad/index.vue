<template>
  <!-- ad -->
  <view class="ad-container">
    <s-progress-bar :width="100" />
    <view class="content">
      <text class="title">{{ title }}</text>
      <view class="title">{{ subtitle }}</view>
      <view class="main-box">
        <!-- 标题 -->
        <view class="time-box">
          <view class="date">
            <view class="l">
              <text class="t">标题</text>
              <input
                type="text"
                maxlength="50"
                placeholder-class="plh"
                placeholder="请输入标题"
              />
            </view>
          </view>
        </view>

        <!-- 关于我 -->
        <view class="time-box">
          <view class="date">
            <view class="l">
              <text class="t">关于我</text>
              <input
                type="text"
                maxlength="100"
                placeholder-class="plh"
                placeholder="请输入关于我"
              />
            </view>
          </view>
        </view>
        <text class="desc-txt">
          包括你要找的住处，你想和谁住在一起，还有一个潜在的室友应该和你住在一起。
        </text>
      </view>
    </view>
    <s-footer-btn btn-title="发布广告" @change="onBtn" />
  </view>
</template>

<script>
export default {
  name: 'Ad',
  components: {
  },
  data() {
    return {
      form: {
        adType: 0,
      },
      title: '关于',
      subtitle: '我的广告',
    };
  },
  computed: {},
  mounted() {},
  methods: {
    onBtn() {
      uni.switchTab({
        url:'/pages/home/home/index'
      })
    },
  },
};
</script>

<style lang="scss" scoped>
.ad-container {
  .content {
    padding: 94rpx 48rpx 250rpx 48rpx;
    box-sizing: border-box;
    .title {
      font-size: 72rpx;
      font-family: PingFang;
      font-weight: bold;
      color: #020433;
    }
    .main-box {
      .time-box {
        margin-top: 45rpx;
        box-sizing: border-box;
        .date {
          width: 100%;
          height: 108rpx;
          background: #ffffff;
          border: 2rpx solid #f0f0f0;
          border-radius: 12rpx 12rpx 12rpx 12rpx;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 32rpx;
          box-sizing: border-box;
          .l {
            display: flex;
            flex-direction: column;
            .t {
              font-size: 24rpx;
              font-family: PingFang;
              font-weight: 500;
              color: #404b69;
            }
            .times {
              font-size: 32rpx;
              font-family: PingFang;
              font-weight: bold;
              color: #020433;
            }
          }
          .img {
            width: 48rpx;
            height: 48rpx;
          }
          .img:active {
            opacity: 0.5;
          }
          input {
            font-size: 32rpx;
            font-family: Montserrat;
            font-weight: 500;
            color: #020433;
          }
          .plh {
            font-size: 32rpx;
            font-family: Montserrat;
            font-weight: 500;
            color: #020433;
          }
        }
      }
      .desc-txt {
        font-size: 24rpx;
        font-family: PingFang;
        font-weight: 500;
        color: #95a0b6;
      }
    }
  }
}
</style>
