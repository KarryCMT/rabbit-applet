<template>
  <!-- situation -->
  <view class="situation-container">
    <s-progress-bar :width="50" />
    <view class="content">
      <text class="title">房间</text>
      <view class="title">详细情况</view>
      <view class="main-box">
        <!-- 每月租金 (¥) -->
        <view class="form-item m-top">
          <view class="tips">每月租金 (¥)</view>
          <input
            v-model="form.monthRent"
            placeholder="请输入"
            placeholder-class="plh"
            maxlength="18"
            name="username"
          />
        </view>
        <!-- 押金 (¥) -->
        <view class="form-item m-top">
          <view class="tips">押金 (¥)</view>
          <input
            v-model="form.deposit"
            placeholder="请输入"
            placeholder-class="plh"
            maxlength="18"
            name="username"
          />
        </view>
        <!-- 可入住日期 -->
        <view class="form-item m-top">
          <s-date-picker @change="handleChangeDatePicker">
            <view class="date">
              <view class="l">
                <text class="t">可入住日期</text>
                <text class="times">{{ titleTime || '请选择' }}</text>
              </view>
              <image class="img" :src="dateIcon" />
            </view>
          </s-date-picker>
        </view>

        <!-- 房间类型 -->
        <view class="common-subtitle-box"> 房间类型 </view>
        <!-- 房间类型 -->
        <view class="form-item-sex">
          <view class="option-group-box">
            <view
              :class="[form.roomType === index ? 'active' : 'items']"
              v-for="(item, index) in [
                { name: '单人房', value: 0 },
                { name: '双人房', value: 1 },
                { name: '多人租', value: 2 },
              ]"
              :key="index"
              @click="form.roomType = index"
              >{{ item.name }}</view
            >
          </view>
        </view>

        <!-- 家具情况 -->
        <view class="common-subtitle-box"> 家具情况 </view>
        <!-- 家具情况 -->
        <view class="form-item-sex">
          <view class="option-group-box">
            <view
              :class="[form.furniture === index ? 'active' : 'items']"
              v-for="(item, index) in [
                { name: '家具齐全', value: 0 },
                { name: '部分家具', value: 1 },
                { name: '无家具', value: 2 },
              ]"
              :key="index"
              @click="form.furniture = index"
              >{{ item.name }}</view
            >
          </view>
        </view>

        <!-- 月租 -->
        <view class="common-title-box">
          <text>最小租期</text>
          <text>3 - 6 月</text>
        </view>
        <!-- 月租 -->
        <view class="time-box">
          <view class="date">
            <view class="l">
              <text class="t">日租</text>
              <input
                v-model="form.leaseMin"
                type="number"
                maxlength="2"
                placeholder-class="plh"
                placeholder="请输入最小日租"
              />
            </view>

            <view class="l">
              <text class="t">长租</text>
              <input
                v-model="form.leaseMax"
                type="number"
                maxlength="2"
                placeholder-class="plh"
                placeholder="请输入最大长租"
              />
            </view>
          </view>
        </view>
      </view>
    </view>
    <s-footer-btn @change="onBtn" />
  </view>
</template>

<script>
export default {
  name: 'Situation',
  components: {},
  data() {
    return {
      dateIcon: 'http://cdn.lengnuanit.top/stacy/icon/date-icon.png',
      form: {
        monthRent: 0, // 每月租金
        deposit: 0, // 押金
        roomType: 0, // 房间类型
        checkinDate: '', //入住日期
        furniture: 0, // 家具情况
        leaseMin: 0, // 最短租期
        leaseMax: 0, // 最长租期
      },
      titleTime: '',
    };
  },
  computed: {},
  mounted() {},
  methods: {
    // 提交
    onBtn() {
      // 获取缓存的表单数据
      const room = uni.getStorageSync('room');
      if (room) {
        Object.assign(room, {
          ...this.form,
        });
        uni.setStorageSync('room', room);
      }
      uni.navigateTo({
        url: '/room/existing/index',
      });
    },
    // 选择的入住日期
    handleChangeDatePicker(date, timestamp) {
      this.form.checkinDate = timestamp;
      this.titleTime = date;
    },
  },
};
</script>

<style lang="scss" scoped>
.situation-container {
  .content {
    padding: 94rpx 48rpx 250rpx 48rpx;
    box-sizing: border-box;
    .title {
      font-size: 72rpx;
      font-family: PingFang;
      font-weight: bold;
      color: #020433;
    }
    .main-box {
      .time-box {
        margin-top: 45rpx;
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
          input {
            font-size: 32rpx;
            font-family: Montserrat;
            font-weight: 500;
            color: #020433;
          }
          .plh {
            font-size: 32rpx;
            font-family: Montserrat;
            font-weight: 500;
            color: #020433;
          }
        }
      }
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
        .txt {
          font-size: 32rpx;
          font-family: PingFang;
          font-weight: bold;
          color: #020433;
        }

        input {
          font-size: 32rpx;
          font-family: Montserrat;
          font-weight: 500;
          color: #020433;
        }
        .date {
          width: 100%;
          background: #ffffff;
          border-radius: 12rpx 12rpx 12rpx 12rpx;
          display: flex;
          align-items: center;
          justify-content: space-between;
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
        .phone-box {
          display: flex;
          align-items: center;
          .tips-txt {
            text-align: center;
            width: 100rpx;
            font-size: 32rpx;
            font-family: PingFang;
            font-weight: bold;
            color: #95a0b6;
          }

          input {
            font-size: 32rpx;
            font-family: PingFang;
            font-weight: bold;
            color: #020433;
          }
        }
      }
      .m-top {
        margin-top: 32rpx;
      }
      .form-item-sex {
        .sex-title {
          margin-top: 53rpx;
          font-size: 28rpx;
          font-family: PingFang;
          font-weight: bold;
          color: #020433;
        }
        .option-group-box {
          margin-top: 37rpx;
          display: flex;
          align-items: center;
          .items,
          .active {
            width: 222rpx;
            height: 80rpx;
            background: #fff;
            border-left: 2px solid #0f73ee;
            border-top: 2px solid #0f73ee;
            border-bottom: 2px solid #0f73ee;
            font-size: 26rpx;
            font-family: PingFang;
            font-weight: bold;
            color: #0f73ee;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .items:first-child,
          .active:first-child {
            border-radius: 12rpx 0rpx 0rpx 12rpx;
            border-right: none;
          }

          .items:last-child,
          .active:last-child {
            border-radius: 0px 12rpx 12rpx 0px;
            border-right: 2px solid #0f73ee;
          }
          .active {
            background: #0f73ee;
            // border: 2px solid #0f73ee;
            font-size: 26rpx;
            font-family: PingFang;
            font-weight: bold;
            color: #ffffff;
          }
        }
      }
      .common-title-box {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 60rpx 0 0rpx 0;
        text {
          font-size: 36rpx;
          font-family: PingFang SC;
          font-weight: bold;
          color: #020433;
        }
      }
      .common-subtitle-box {
        margin-top: 40rpx;
        font-size: 26rpx;
        font-family: PingFang;
        font-weight: 500;
        color: #020433;
      }
      .occupation-box,
      .supporting-facility-box,
      .require-box {
        margin-top: 36rpx;
        display: flex;
        justify-content: space-evenly;
        .items-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          .cover {
            width: 112rpx;
            height: 112rpx;
            border: 2rpx solid #f0f0f0;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            image {
              width: 64rpx;
              height: 44rpx;
            }
          }
          .name {
            margin-top: 10rpx;
            font-size: 24rpx;
            font-family: PingFang;
            font-weight: bold;
            color: #020433;
          }
        }
        .items-box:last-child {
          .cover {
            image {
              height: 52rpx;
            }
          }
        }
        .common-box-title {
        }
      }
      .supporting-facility-box,
      .require-box {
        justify-content: space-between;
        flex-wrap: wrap;
        .items-box {
          margin-top: 20rpx;
        }
      }
    }
  }
}
</style>
