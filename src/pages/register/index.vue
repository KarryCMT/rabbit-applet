<template>
  <!-- 注册 -->
  <view class="index-container">
    <image :src="logo" mode="widthFix" class="logo"></image>
    <view class="register-container">
      <input
        type="text"
        placeholder="输入你的邀请码"
        class="register-code"
        maxlength="6"
        v-model="registerCode"
      />
      <view class="register-desc"
        >管理员创建员工证账号之后，你可以从你的个人邮箱中获得注册邀请码</view
      >
      <button class="register-btn" open-type="getUserInfo" @tap="register()">
        执行注册
      </button>
    </view>
  </view>
</template>

<script>
import logo from '@/static/logo-2.png';
export default {
  name: 'Index',
  components: {},
  data() {
    return { logo, registerCode: '' };
  },
  methods: {
    register() {
      let that = this;
      if (that.registerCode == null || that.registerCode.length == 0) {
        uni.showToast({
          icon: 'none',
          title: '邀请码不能为空',
        });
        return;
      } else if (/^[0-9]{6}$/.test(that.registerCode) == false) {
        uni.showToast({
          icon: 'none',
          title: '邀请码必须是6位数字',
        });
        return;
      }
      uni.login({
        provider: 'weixin',
        success: (resp) => {
          console.log(resp.code);
          let code = resp.code;
          uni.getUserInfo({
            provider: 'weixin',
            success: (resp) => {
              let nickName = resp.userInfo.nickName;
              let avatarUrl = resp.userInfo.avatarUrl;
              // console.log(nickName);
              // console.log(avatarUrl);
              let data = {
                code: code,
                nickname: nickName,
                photo: avatarUrl,
                registerCode: that.registerCode,
              };
              that.ajax(that.url.register, 'POST', data, (resp) => {
                let permission = resp.data.permission;
                uni.setStorageSync('permission', permission);
                console.log(permission);
                //跳转到index页面
                uni.switchTab({
                  url: '../index/index',
                });
              });
            },
          });
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.index-container {
  width: 100%;
  height: 100%;

  .logo {
    width: 70%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 80rpx;
  }
  .register-container {
    width: 70%;
    margin-top: 150rpx;
    margin-left: auto;
    margin-right: auto;
    .register-code {
      border: solid 1rpx #e0e0e0;
      font-size: 34rpx;
      color: $font-color;
      text-align: center;
      background-color: #f5f5f5;
      border-radius: 10rpx;
      margin-bottom: 30rpx;
      height: 80rpx;
      padding: 0 20rpx;
    }
    .register-desc {
      color: $desc-color;
      font-size: 28rpx;
      line-height: 1.5;
      margin-bottom: 80rpx;
    }
    .register-btn {
      background-color: $background-color;
      color: #fff;
      &:active {
        background-color: $background-color-active;
      }
    }
  }
}
</style>
