<template>
  <!-- 登录-引导 -->
  <view class="index-container">
    <SSwiper/>
    <SButton  />
    <view class="login-text">
      <text>登录账户</text>
    </view>
  </view>
</template>

<script>
import SButton from './components/SButton.vue';
import SSwiper from './components/SSwiper.vue';
export default {
  name:'Index',
  components: {
    SButton,
    SSwiper,
  },
  data() {
    return {
    };
  },
  methods: {
  
  },
};
</script>

<style lang="scss">
.index-container {
  width: 100%;
  height: 100%;

  .login-text {
    position: fixed;
    bottom: 105rpx;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28rpx;
    font-family: PingFang;
    font-weight: bold;
    color: #404b69;
  }
   .login-text:active{
    opacity: .5;
   }
}
</style>
