<template>
  <view class="header-info-box">
    <view class="cover-box" @click="goProfile">
      <image
        class="uri"
        :src="avatarUrl"
      ></image>
      <image class="icon" :src="verifiedIcon"></image>
    </view>
    <text class="username">{{nickName}}</text>
    <view class="desc-box">
      <text class="type">租客</text>
      <text class="city">{{workPlace}}</text>
    </view>
  </view>
</template>
<script>
export default {
  name: 'HeaderInfo',
  components: {},
  props: {},
  data() {
    return {
      verifiedIcon:'http://cdn.lengnuanit.top/stacy/icon/verified-icon.png',
      nickName:'',
      workPlace:'',
      avatarUrl:'',
    };
  },
  created() {
     const {workPlace,photo,avatarUrl,nickName} = uni.getStorageSync('userInfo')
    this.nickName = nickName
    this.workPlace = workPlace || '暂无'
    this.avatarUrl = avatarUrl
  },
  mounted() {},
  methods: {
    goProfile(){
      uni.navigateTo({
        url:'/pages/listing/profile/index'
      })
    }
  },
};
</script>
<style lang="scss" scoped>
.header-info-box {
  position: sticky;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 358rpx;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 41rpx;

  .cover-box {
    margin-top: 16rpx;
    position: relative;
    width: 160rpx;
    height: 160rpx;
    .uri {
      width: 160rpx;
      height: 160rpx;
      border-radius: 50%;
    }
    .icon {
      position: absolute;
      bottom: 0;
      right: -6rpx;
      width: 36rpx;
      height: 42rpx;
    }
  }
  .cover-box:active{
    opacity: .5;
  }
  .username {
    margin-top: 44rpx;
    font-size: 48rpx;
    font-family: Montserrat;
    font-weight: 500;
    color: #020433;
  }
  .desc-box {
    margin-top: 26rpx;
    display: flex;
    align-items: center;
    .type {
      font-size: 28rpx;
      font-family: PingFang;
      font-weight: 500;
      color: #404b69;
      margin-right: 25rpx;
    }
    .city {
      font-size: 28rpx;
      font-family: PingFang;
      font-weight: 500;
      color: #404b69;
      margin-left: 25rpx;
    }
  }
}
</style>
