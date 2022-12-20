<template>
  <!-- money -->
  <view class="money-container">
    <s-progress-bar :width="60" />
    <view class="title-box">
      <text class="text">你的最高花费</text>
      <text class="text">是多少？</text>
    </view>
    <view class="money-box">
      <view class="txt-box">
        <text class="l">¥ {{ count }}</text>
        <text class="r">每月</text>
      </view>
      <view class="progress-box">
        <s-progress-line :min="0" :max="10000" @change="moveEvent" />
        <view class="start-end">
          <text>¥0</text>
          <text>¥{{ 10000 }}</text>
        </view>
      </view>
    </view>
    <view class="title-box">
      <text class="text">你的入住日期</text>
      <text class="text">是什么？</text>
    </view>
    <view class="time-box">
      <s-date-picker
       @change="handleChangeDatePicker"
      >
        <view class="date">
          <view class="l">
            <text class="t">入住日期</text>
            <text class="times">{{ titleTime || '请选择' }}</text>
          </view>
          <image class="img" :src="dateIcon" />
        </view>
      </s-date-picker>
    </view>
    <view class="footer-box">
      <button @click="onNext">下一步</button>
    </view>
  </view>
</template>

<script>

export default {
  name: 'Money',
  components: {
  },
  data() {
    return {
      dateIcon:'http://cdn.lengnuanit.top/stacy/icon/date-icon.png',
      count: 0,
      stayDate: '',
      titleTime:''
    };
  },
  computed: {
  },
  mounted() {},
  methods: {
    moveEvent(e) {
      this.count = e * 100;
    },
    onNext() {
      const register = uni.getStorageSync('register');
      if (register) {
        Object.assign(register, {
          maxMoney: this.count,
          stayDate: this.stayDate,
        });
        uni.setStorageSync('register', register);
      }
      uni.navigateTo({
        url: `/base/steps/account/index`,
      });
    },
      // 选择的日期
    handleChangeDatePicker(date, timestamp) {
      this.stayDate = timestamp;
      this.titleTime = date;
    },
  },
};
</script>

<style lang="scss">
.money-container {
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
  .money-box {
    width: 100%;
    padding: 0 48rpx;
    box-sizing: border-box;
    .txt-box {
      margin-top: 40rpx;
      .l {
        font-size: 48rpx;
        font-family: Montserrat;
        font-weight: bold;
        color: #0f73ee;
      }
      .r {
        margin-left: 12rpx;
        font-size: 28rpx;
        font-family: PingFang;
        font-weight: 500;
        color: #020433;
      }
    }
    .progress-box {
      margin-top: 75rpx;
      width: 100%;
      .start-end {
        margin-top: 20rpx;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 26rpx;
        font-family: Montserrat;
        font-weight: 400;
        color: #404b69;
      }
    }
  }
  .time-box {
    margin-top: 45rpx;
    padding: 0 48rpx;
    box-sizing: border-box;
    .date {
      width: 100%;
      height: 108rpx;
      background: #ffffff;
      border: 2rpx solid #f0f0f0;
      border-radius: 12rpx 12rpx 12rpx 12rpx;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 32rpx;
      box-sizing: border-box;
      .l {
        display: flex;
        flex-direction: column;
        .t {
          font-size: 24rpx;
          font-family: PingFang;
          font-weight: 500;
          color: #404b69;
        }
        .times {
          font-size: 32rpx;
          font-family: PingFang;
          font-weight: bold;
          color: #020433;
        }
      }
      .img {
        width: 48rpx;
        height: 48rpx;
      }
      .img:active {
        opacity: 0.5;
      }
    }
  }
  .footer-box {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 184rpx;
    background: #ffffff;
    padding: 0 48rpx;
    box-sizing: border-box;
    button {
      width: 100%;
      height: 92rpx;
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
</style>
