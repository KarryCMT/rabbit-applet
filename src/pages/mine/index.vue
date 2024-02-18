<template>
  <!-- 我的 -->
  <view class="rb-mine-container">
    <rb-navbar />
    <view class="main-box">
      <HeaderInfo v-if="isLogin" />
      <view class="login-box" v-else>
        <button class="btn" @click="onOpenLogin">立即登录</button>
      </view>
      <FuncMenu />
      <MineItem />
    </view>
    <!-- 登录界面 -->
    <rb-popup
      ref="RbLoginPopupRef"
      position="bottom"
      height="40%"
      :zIndex="2000"
      :zMaskIndex="1999"
    >
      <view class="rb-login-popup-container">
        <view class="login-main-input">
          <text class="title-txt">邮箱登录</text>
          <view class="username">
            <input v-model="formData.username" placeholder="请输入邮箱" />
          </view>
          <view class="verify-code">
            <input
              v-model="formData.captcha"
              placeholder="请输入验证码"
              maxlength="6"
            />
            <view class="code-img" v-if="isCountdown" @tap="onSendEmailCode">{{
              '获取邮箱验证码'
            }}</view>
            <view class="code-img" v-else>{{ countdownText }}</view>
          </view>
        </view>
        <view class="popup-footer-box" @tap="onLogin">
          <view class="txt">登录</view>
        </view>
      </view>
    </rb-popup>
  </view>
</template>

<script>
import HeaderInfo from './components/header-info.vue';
import FuncMenu from './components/func-menu.vue';
import MineItem from './components/mine-item.vue';
export default {
  name: 'RbMine',
  components: { HeaderInfo, FuncMenu, MineItem },
  data() {
    return {
      isLogin: false,
      isCountdown: true,
      countdownText: '',
      formData: {
        username: '18223673150@163.com',
        password: '',
        phone: '',
        captcha: '',
        type: '',
        uuid: '',
      },
    };
  },
  created() {
    this.isLogin = this.onHasLogin();
  },
  onShow() {
    this.isLogin = this.onHasLogin();
  },
  computed: {},
  methods: {
    onHasLogin() {
      return !!uni.getStorageSync('userInfo');
    },
    // 打开登录弹窗
    onOpenLogin() {
      this.$refs.RbLoginPopupRef.show({});
    },
    // 登录方法
    onLogin() {
      this.$request('dragon.common.login', {
        data: {
          appId: 2,
          ...this.formData,
          rememberMe: undefined,
          type: 'captcha',
          username: this.formData.username,
          notips: true,
        },
      }).then((res) => {
        if (res.statusCode === 600) {
          uni.setStorageSync('Authorization', res.data);
          this.onGetUserInfo();
        }
      });
    },
    // 获取邮箱验证码
    onSendEmailCode() {
      this.$request('dragon.common.sendEmailCode', {
        data: this.formData,
      }).then((res) => {
        if (res && res.statusCode === 600) {
          this.onCountdown();
        }
      });
    },
    // 倒计时
    onCountdown() {
      if (this.isCountdown) {
        this.isCountdown = false;
        let langTime = 60;
        let timer = setInterval(() => {
          if (langTime === 0) {
            this.isCountdown = true;
            this.countdownText = '获取邮箱验证码';
            clearInterval(timer);
          } else {
            langTime--;
            this.countdownText = `倒计时${langTime}秒`;
          }
        }, 1000);
      } else {
        console.log('不能点了');
      }
    },

    // 获取用户信息
    onGetUserInfo() {
      this.$request('dragon.common.userInfo', {}).then((res) => {
        uni.setStorageSync('userInfo', res.data);
        this.$refs.RbLoginPopupRef.hide({});
        this.isLogin = this.onHasLogin();
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.rb-mine-container {
  width: 100%;
  height: 100%;
  background: #fff;
  .main-box {
    .login-box {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-bottom: 50rpx;
      box-sizing: border-box;
      .btn {
        background-color: $main-color;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0rpx 60rpx;
        box-sizing: border-box;
        font-size: 28rpx;
      }
      button:active {
        opacity: 0.5;
      }
    }
  }
  .rb-login-popup-container {
    .login-main-input {
      padding: 20rpx;
      box-sizing: border-box;
      .title-txt {
        font-size: 38rpx;
        font-weight: 600;
      }
      .username,
      .verify-code {
        margin-top: 30rpx;
        background: #eff3f6;
        padding: 20rpx 20rpx;
        box-sizing: border-box;
        border-radius: 8rpx;
        input {
          width: 100%;
          font-size: 32rpx;
        }
      }
      .verify-code {
        display: flex;
        align-items: center;
        .code-img {
          width: 390rpx;
          text-align: right;
        }
        .code-img:active {
          opacity: 0.5;
        }
      }
    }
    .popup-footer-box {
      padding: 0 20rpx;
      box-sizing: border-box;
      .txt {
        background: #e4524a;
        color: #fff;
        border-radius: 8rpx;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 25rpx 0;
        box-sizing: border-box;
        font-size: 32rpx;
      }
      .txt:active {
        opacity: 0.5;
      }
    }
  }
}
</style>
