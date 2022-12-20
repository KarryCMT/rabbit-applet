<template>
  <!-- 登录-引导 -->
  <view class="login-container">
    <view class="title-box" :style="{ marginTop: height + 90 + 'px' }">
      <text class="text">你好，</text>
      <text class="text">欢迎回来！</text>
    </view>
    <view class="form-box">
      <form @submit="formSubmit" @reset="formReset">
        <view class="form-item">
          <view class="tips">账户</view>
          <input placeholder="请输入您的邮箱" maxlength="20" name="email" />
        </view>
        <view class="form-item">
          <view class="tips">密码</view>
          <input
            type="password"
            maxlength="20"
            placeholder="请输入密码"
            name="password"
          />
        </view>
        <view class="not-password" @click="notPwd">忘记密码？</view>
        <view class="form-btn">
          <button form-type="submit">登录</button>
        </view>
      </form>
    </view>
    <view class="new-box">
      <view class="new-txt">
        <text class="l">新! </text>
        <text class="r">用授权快速登录</text>
      </view>
      <view class="icon-box">
        <image
          @click="onLoginWeChat"
          src="http://cdn.lengnuanit.top/stacy/icon/weixin.png"
        />
      </view>
    </view>
    <view class="login-text">
      <text>还没有帐号?</text>
      <text class="register" @click="onRegister">马上注册</text>
    </view>
  </view>
</template>

<script>
import { encrypt } from "@/utils/index.js";
import { UserLogin, decodeToken, GetWeChatCode } from "@/api";
export default {
  name: "Login",
  components: {},
  data() {
    return {
      height: 0,
    };
  },
  methods: {
    async formSubmit({ detail }) {
      const { value } = detail;
      // value.email = '18223673150@163.com'
      // value.password = '123456'
      if (!value.email) {
        uni.showToast({
          title: "请输入正确的邮箱地址",
          icon: "none",
        });
        return;
      }
      if (!value.password) {
        uni.showToast({
          title: "请输入密码",
          icon: "none",
        });
        return;
      }
      const { code, token, message } = await UserLogin({
        email: value.email,
        password: encrypt(value.password),
      });
      if (code === 200) {
        uni.setStorageSync("token", token);
        uni.removeStorageSync("register");
        this.getUserInfo(token);
      } else {
        uni.showToast({
          title: message,
          icon: "none",
        });
      }
    },
    async getUserInfo(token) {
      const { code, data, message } = await decodeToken({ token });
      if (code === 200) {
        const { id, nickName, workPlace, avatarUrl } = data;
        uni.setStorageSync("userInfo", { nickName, id, workPlace, avatarUrl });
        uni.showToast({
          title: "登录成功",
          icon: "none",
        });
        this.onSocketLogin(id);
        let timer = setTimeout(() => {
          clearTimeout(timer);
          uni.switchTab({ url: "/pages/home/home/index" });
        }, 2000);
      } else {
        uni.showToast({
          title: message,
          icon: "none",
        });
      }
    },
    // socket模块 用户登录socket注册
    onSocketLogin(userId) {
      // this.socket.emit('login', userId);
    },
    notPwd() {
      uni.navigateTo({
        url: `/base/password/index`,
      });
    },
    onRegister() {
      uni.navigateTo({
        url: `/base/steps/target/index`,
      });
    },
    // 微信登录
    onLoginWeChat() {
      this.onGetCode();
      uni.getUserProfile({
        lang: "zh_CN",
        desc: "获取用户个人信息",
        success: (res) => {
          const { userInfo } = res;
          uni.setStorageSync("userInfo", userInfo);
          uni.showToast({
            title:'登录成功',
            icon:'none'
          })
          let timer = setTimeout(() => {
            clearTimeout(timer)
            uni.switchTab({
              url: "/pages/home/home/index",
            });
          }, 2000);
        },
      });
    },
    onGetCode() {
      uni.login({
        success: async (res) => {
          const { code, token } = await GetWeChatCode({ code: res.code });
          if (code === 200) {
            uni.setStorageSync("token", token);
          }
        },
      });
    },
  },
};
</script>

<style lang="scss">
.login-container {
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
  .form-box {
    margin-top: 89rpx;
    padding: 0 48rpx;
    .form-item {
      width: 100%;
      height: 108rpx;
      background: #ffffff;
      border: 2rpx solid #f0f0f0;
      border-radius: 12rpx 12rpx 12rpx 12rpx;
      padding: 13rpx 34rpx 13rpx 34rpx;
      box-sizing: border-box;
      .tips {
        font-size: 24rpx;
        font-family: PingFang;
        font-weight: bold;
        color: #404b69;
      }
      input {
        font-size: 32rpx;
        font-family: Montserrat;
        font-weight: 500;
        color: #020433;
      }
    }
    .form-item:nth-child(2) {
      margin-top: 32rpx;
    }
    .not-password {
      margin: 36rpx 0 53rpx 0;
      text-align: right;
      font-size: 28rpx;
      font-family: PingFang;
      font-weight: bold;
      color: #404b69;
    }
    .not-password:active {
      opacity: 0.5;
    }
    .form-btn {
      button {
        width: 100%;
        height: 100rpx;
        background: linear-gradient(135deg, #0f73ee 0%, #c644fc 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 28rpx;
        font-family: PingFang;
        font-weight: bold;
        color: #ffffff;
      }
      .not-password:active,
      button:active {
        opacity: 0.5;
      }
    }
  }
  .new-box {
    margin-top: 84rpx;
    .new-txt {
      display: flex;
      align-items: center;
      justify-content: center;
      .l {
        font-size: 28rpx;
        font-family: PingFang;
        font-weight: 500;
        color: #ff4949;
      }
      .r {
        margin-left: 6rpx;
        font-size: 28rpx;
        font-family: PingFang;
        font-weight: 500;
        color: #020433;
      }
    }
    .icon-box {
      margin-top: 30rpx;
      width: 100%;
      display: flex;
      justify-content: center;
      image {
        width: 100rpx;
        height: 100rpx;
      }
      image:active {
        opacity: 0.5;
      }
    }
  }
  .login-text {
    position: fixed;
    bottom: 85rpx;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28rpx;
    font-family: PingFang;
    font-weight: bold;
    color: #404b69;
    .register {
      margin-left: 8rpx;
      font-size: 28rpx;
      font-family: PingFang;
      font-weight: bold;
      color: #0f73ee;
    }
    .register:active {
      opacity: 0.5;
    }
  }
}
</style>
