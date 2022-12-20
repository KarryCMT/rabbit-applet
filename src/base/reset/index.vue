<template>
  <!-- 重置密码 -->
  <view class="reset-container">
    <view class="title-box" :style="{ marginTop: height + 90 + 'px' }">
      <text class="text">重置密码</text>
      <text class="desc"
        >重置代码发送到您的电子邮件。请输入代码并创建新密码。</text
      >
    </view>
    <view class="form-box">
      <form @submit="formSubmit">
        <view class="form-item">
          <input
            placeholder-class="phc"
            placeholder="重置代码"
            maxlength="6"
            name="authCode"
          />
        </view>
        <view class="form-item">
          <input
            placeholder-class="phc"
            placeholder="新的密码"
            maxlength="15"
            name="newPassword"
          />
        </view>
        <view class="form-item">
          <input
            placeholder-class="phc"
            placeholder="确认密码"
            maxlength="15"
            name="password"
          />
        </view>
        <view class="form-btn">
          <button form-type="submit">更改密码</button>
        </view>
      </form>
    </view>
  </view>
</template>

<script>
import { RetrievePassword } from '@/api/index.js';
export default {
  name: 'reset',
  components: {},
  data() {
    return {
      height: 0,
      email: '',
    };
  },
  onLoad({ email }) {
    this.email = decodeURIComponent(email);
  },
  methods: {

    formSubmit({ detail }) {
      const { value } = detail;
      if (!value.authCode) {
        uni.showToast({
          title: '请输入6位邮箱验证码',
          icon: 'none',
        });
        return;
      }
      if (!value.newPassword) {
        uni.showToast({
          title: '请输入新密码',
          icon: 'none',
        });
        return;
      }
      if (!value.password) {
        uni.showToast({
          title: '请输入确认密码',
          icon: 'none',
        });
        return;
      }
      if (value.password !== value.newPassword) {
        uni.showToast({
          title: '新密码与确认密码不一致',
          icon: 'none',
        });
        return;
      }
      this.onRetrievePassword(value);
    },

    async onRetrievePassword(payload) {
      const { code, message } = await RetrievePassword({
        ...payload,
        email: this.email,
      });
      if (code === 200) {
        uni.showToast({
          title: message,
          icon: 'none',
        });
        let timer = setTimeout(() => {
          clearTimeout(timer);
          uni.navigateTo({
            url: `/base/success/index`,
          });
        }, 2000);
      }
    },
    
  },
};
</script>

<style lang="scss">
.reset-container {
  width: 100%;
  height: 100%;
  .title-box {
    margin: 90rpx 0 0 50rpx;
    display: flex;
    flex-direction: column;
    .text {
      font-size: 60rpx;
      font-family: PingFang SC;
      font-weight: bold;
      color: #020433;
    }
    .desc {
      margin-top: 46rpx;
      font-size: 28rpx;
      font-family: PingFang;
      font-weight: 500;
      color: #404b69;
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
      display: flex;
      align-items: center;
      padding-left: 33rpx;
      box-sizing: border-box;
      input {
        font-size: 32rpx;
        font-family: Montserrat;
        font-weight: 500;
        color: #020433;
      }
      .phc {
        font-size: 28rpx;
        font-family: PingFang;
        font-weight: 500;
        color: #95a0b6;
      }
    }
    .form-item:nth-child(2),
    .form-item:nth-child(3) {
      margin-top: 32rpx;
    }
    .form-btn {
      margin-top: 48rpx;
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
      button:active {
        opacity: 0.5;
      }
    }
  }
}
</style>
