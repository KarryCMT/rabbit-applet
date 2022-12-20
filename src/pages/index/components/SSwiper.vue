<template>
  <view class="s-swiper-container" :style="{marginTop:top+'px'}">
    <swiper
      class="swiper"
      circular
      :indicator-dots="false"
      :autoplay="true"
      :interval="3000"
      @change="handleBindChange"
    >
      <swiper-item class="swiper-item" v-for="item in imageList" :key="item.id">
        <image
          class="image"
          :style="{ height: item.height }"
          :src="item.path"
        />
        <view class="title">{{ item.title }}</view>
        <view class="desc">{{ item.desc }}</view>
      </swiper-item>
    </swiper>
    <!-- 圆点 -->
    <view class="dot-box">
      <view
        :class="[currentIndexSwiper === index ? 'dot-item' : 'dot-item-active']"
        v-for="(item, index) in imageList"
        :key="index"
      ></view>
    </view>
  </view>
</template>
<script>
export default {
  name: 'SSwiper',
  props:{
    top:{
      type:Number,
      default:0
    }
  },
  data() {
    return {
      imageList: [
        {
          id: 1,
          path: 'http://cdn.lengnuanit.top/stacy/index/login-bg-1.png',
          height: '842rpx',
          title: '寻找居住地方',
          desc: '打开我们的APP即可方便快捷找到适合你居住的地方，房源众多。',
        },
        {
          id: 2,
          path: 'http://cdn.lengnuanit.top/stacy/index/login-bg-2.png',
          height: '1031rpx',
          title: '匹配适合的合租对象',
          desc: '告诉我们你的兴趣爱好，我们将匹配适合您一起居住的合租对象',
        },
        {
          id: 3,
          path: 'http://cdn.lengnuanit.top/stacy/index/login-bg-3.png',
          height: '984rpx',
          title: '志同道合的人',
          desc: '和像你一样的人一起生活。',
        },
      ],
      currentIndexSwiper: 0,
    };
  },
  created() {},
  methods: {
    handleBindChange(e) {
      const { detail } = e;
      this.currentIndexSwiper = detail.current;
    },
  },
};
</script>
<style lang="scss" scoped>
.s-swiper-container {
  .swiper {
    width: 100%;
    height: 1000rpx;
    .swiper-item {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      .image {
        width: 100%;
        height: 100%;
      }
      .title {
        font-size: 48rpx;
        font-family: PingFang;
        font-weight: bold;
        color: #020433;
      }
      .desc {
        margin-top: 41rpx;
        font-size: 28rpx;
        font-family: PingFang;
        font-weight: 500;
        color: #404b69;
        padding: 0 68rpx;
        text-align: center;
      }
    }
  }
  .dot-box {
    margin-top: 60rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    .dot-item {
      width: 16rpx;
      height: 16rpx;
      background: #0f73ee;
      border: 2rpx solid #0f73ee;
      border-radius: 50%;
    }
    .dot-item:nth-child(2){
      margin: 0 16rpx;
    }
    .dot-item-active {
      width: 16rpx;
      height: 16rpx;
      border: 2rpx solid #0f73ee;
      border-radius: 50%;
    }
    .dot-item-active:nth-child(2){
      margin: 0 16rpx;
    }
  }
}
</style>
