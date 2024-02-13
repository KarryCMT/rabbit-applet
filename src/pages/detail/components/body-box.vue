<!-- 瀑布流布局 -->
<template>
  <view class="body-box">
    <swiper
      class="swiper"
      circular
      :indicator-dots="indicatorDots"
      autoplay
      :interval="interval"
      :duration="duration"
    >
      <swiper-item v-for="item in form.picturesList" :key="item.id">
        <image class="image" :src="item.savePath"></image>
      </swiper-item>
    </swiper>
    <text class="content">{{ form.content }}</text>
    <view class="userinfo-box">
      <text class="time">{{form.createTime}}</text>
      <text class="txt">广东</text>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    form: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      indicatorDots: true,
      autoplay: true,
      interval: 1000,
      duration: 500,
    };
  },
  onLoad() {},
  computed: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.body-box {
  width: 100%;
  padding: 20rpx;
  box-sizing: border-box;
  .swiper {
    margin-bottom: 20rpx;
    .image {
      width: 100%;
      height: 100%;
      border-radius: 8rpx;
    }
  }
  .content {
    color: #333;
    line-height: 50rpx;
  }
  .userinfo-box {
    margin-top: 8px;
    margin-left: 8px;
    display: flex;
    .time {
      font-size: 24rpx;
      color: #999;
    }
    .txt {
      font-size: 24rpx;
      margin-left: 20rpx;
      color: #999;
    }
  }
}
</style>
