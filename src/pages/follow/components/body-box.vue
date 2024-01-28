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
      <swiper-item v-for="item in imageList" :key="item.id">
        <image class="image" :src="item.url"></image>
      </swiper-item>
    </swiper>
    <text class="content"
      >习近平指出，60年前，中法打破冷战坚冰、跨越阵营鸿沟，建立大使级外交关系。这一历史事件推动世界格局朝着对话和合作的正确方向演变，至今仍具有重要启示意义。60年来，中法始终坚持独立自主的战略抉择，始终致力于通过互利合作实现共同发展、通过平等交流促进文明互鉴、通过多边协调携手应对全球性挑战。两国关系创造多个“第一”、取得丰硕成果，不仅造福于两国人民，也为维护世界和平稳定、促进世界多极化和国际关系民主化发挥重要作用。</text
    >
    <view class="userinfo-box">
      <text class="time">2024-01-11 12:00:00</text>
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
      imageList: [
        {
          url: 'https://gips0.baidu.com/it/u=275700058,4159306898&fm=3028&app=3028&size=w931&q=75&n=0&f=PNG&fmt=auto&maxorilen2heic=2000000',
        },
      ],
      indicatorDots: true,
      autoplay: true,
      interval: 2000,
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
