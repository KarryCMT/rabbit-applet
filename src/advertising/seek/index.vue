<template>
  <!-- seek -->
  <view class="seek-container">
    <s-progress-bar :width="20" />
    <view class="title-box">
      <text class="text">你想寻找哪里</text>
      <text class="text">的房间？</text>
    </view>
    <view class="banner-box">
      <view class="items" v-for="(item, index) in bannerList" :key="index">
        <image @click="onArea(item.name)" :src="item.path" />
        <text class="name">{{ item.name }}</text>
        <text class="parent">{{ item.parent }}</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'Seek',
  components: {
  },
  data() {
    return {
      bannerList: [
        {
          id: 1,
          path: 'https://pic2.zhimg.com/v2-09302ddd82a781c318de23d5ae4bda3d_r.jpg',
          name: '重庆',
          parent: '重庆',
        },
        {
          id: 2,
          path: 'https://pic1.zhimg.com/v2-03dd03dc6a1216ed703b34caaad8713d_r.jpg?source=1940ef5c',
          name: '广州',
          parent: '广东',
        },
        {
          id: 3,
          path: 'https://pic2.zhimg.com/80/v2-794ed30322cb3887a8d2e3aa83f5eacb_1440w.jpg?source=1940ef5c',
          name: '南京',
          parent: '江苏',
        },
        {
          id: 4,
          path: 'https://pica.zhimg.com/v2-7c09994447a0177f3909caf0fface516_r.jpg?source=1940ef5c',
          name: '上海',
          parent: '上海',
        },
        {
          id: 4,
          path: 'https://pica.zhimg.com/v2-7c09994447a0177f3909caf0fface516_r.jpg?source=1940ef5c',
          name: '上海',
          parent: '上海',
        },
        {
          id: 4,
          path: 'https://pica.zhimg.com/v2-7c09994447a0177f3909caf0fface516_r.jpg?source=1940ef5c',
          name: '上海',
          parent: '上海',
        },
      ],
    };
  },
  mounted() {
  },
  methods: {
    onArea(name) {
      uni.setStorageSync('ad', {seekName:name});
      uni.navigateTo({
        url: `/advertising/area/index`,
      });
    },
  },
};
</script>

<style lang="scss">
.seek-container {
  width: 100%;
  height: 100%;
  .title-box {
    margin: 90rpx 0 0 50rpx;
    display: flex;
    flex-direction: column;
    .text {
      font-size: 60rpx;
      font-family: PingFang;
      font-weight: bold;
      color: #020433;
    }
  }
  .banner-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    .items {
      display: flex;
      flex-direction: column;
      image {
        margin-top: 60rpx;
        width: 302rpx;
        height: 400rpx;
        border-radius: 8rpx;
      }
      image:active {
        opacity: 0.5;
      }
      .name {
        font-size: 32rpx;
        font-family: PingFang SC;
        font-weight: bold;
        color: #020433;
        padding: 39rpx 0 0 17rpx;
      }
      .parent {
        font-size: 24rpx;
        padding: 16rpx 0 0 17rpx;
        font-family: PingFang;
        font-weight: 500;
        color: #404b69;
      }
    }
  }
}
</style>
