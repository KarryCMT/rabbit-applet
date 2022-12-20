<template>
  <!-- roomie -->
  <view class="roomie-container">
    <s-progress-bar :width="80" />
    <view class="content">
      <text class="title">{{ title }}</text>
      <view class="title">{{ subtitle }}</view>
      <view class="main-box">
        <!-- 合租对象 -->
        <view class="age-title-box">
          <text>合租对象</text>
          <text></text>
        </view>
        <!-- 合租对象 -->
        <view class="occupation-box">
          <view
            class="items-box"
            v-for="(item, index) in occupation"
            :key="index"
          >
            <view class="cover">
              <image :src="item.icon"></image>
            </view>
            <text class="name">{{ item.text }}</text>
          </view>
        </view>
        <!-- 性别 -->
        <view class="age-title-box">
          <text>性别</text>
          <text></text>
        </view>
        <!-- 性别 -->
        <view class="occupation-box">
          <view class="items-box" v-for="(item, index) in sexArr" :key="index">
            <view class="cover">
              <image :src="item.icon"></image>
            </view>
            <text class="name">{{ item.text }}</text>
          </view>
        </view>
        <!-- 年龄 -->
        <view class="age-title-box">
          <text>年龄</text>
          <text>20 - 30</text>
        </view>
        <!-- 年龄 -->
        <view class="time-box">
          <view class="date">
            <view class="l">
              <text class="t">最小年龄</text>
              <input
                type="number"
                maxlength="2"
                placeholder-class="plh"
                placeholder="请输入最小年龄"
              />
            </view>

            <view class="l">
              <text class="t">最大年龄</text>
              <input
                type="number"
                maxlength="2"
                placeholder-class="plh"
                placeholder="请输入最大年龄"
              />
            </view>
          </view>
        </view>
        <!-- 职业 -->
        <view class="age-title-box">
          <text>职业</text>
          <text></text>
        </view>
        <!-- 职业 -->
        <view class="profession-box">
          <view
            class="items-box"
            v-for="(item, index) in occupationArr"
            :key="index"
          >
            <view class="cover">
              <image :src="item.icon"></image>
            </view>
            <text class="name">{{ item.text }}</text>
          </view>
        </view>
      </view>
    </view>
    <s-footer-btn @change="onBtn" />
  </view>
</template>

<script>
export default {
  name: 'roomie',
  components: {
  },
  data() {
    return {
      form: {
        roomieType: 0,
      },
      title: '室友',
      subtitle: '详细情况',
      occupation: [
        {
          icon: 'http://cdn.lengnuanit.top/stacy/ad/ic_double_bed@2x.png',
          text: '租客',
        },
        {
          icon: 'http://cdn.lengnuanit.top/stacy/ad/ic_single_bed@2x.png',
          text: '房东',
        },
      ],
      sexArr: [
        {
          icon: 'http://cdn.lengnuanit.top/stacy/ad/ic_double_bed@2x.png',
          text: '男士',
        },
        {
          icon: 'http://cdn.lengnuanit.top/stacy/ad/ic_single_bed@2x.png',
          text: '女士',
        },
      ],
      occupationArr: [
        {
          icon: 'http://cdn.lengnuanit.top/stacy/ad/ic_professional@2x.png',
          text: '在职人员',
        },
        {
          icon: 'http://cdn.lengnuanit.top/stacy/ad/ic_student@2x.png',
          text: '学生',
        },
      ],
    };
  },
  computed: {},
  mounted() {},
  methods: {
    onBtn() {
      uni.navigateTo({
        url: '/advertising/ad/index',
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.roomie-container {
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
      .age-title-box {
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
      .occupation-box,
      .supporting-facility-box,
      .require-box,
      .profession-box {
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
      }
      .supporting-facility-box,
      .require-box {
        justify-content: space-between;
        flex-wrap: wrap;
        .items-box {
          margin-top: 20rpx;
        }
      }
      .profession-box {
        .items-box:first-child {
          .cover {
            image {
              width: 45rpx !important;
              height: 64rpx !important;
            }
          }
        }
        .items-box:last-child {
          .cover {
            image {
              width: 52rpx !important;
              height: 64rpx !important;
            }
          }
        }
      }
    }
  }
}
</style>
