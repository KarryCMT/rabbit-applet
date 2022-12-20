<template>
  <!-- room -->
  <view class="room-container">
    <s-progress-bar :width="60" />
    <view class="content">
      <text class="title">{{ title }}</text>
      <view class="title">{{ subtitle }}</view>
      <view class="main-box">
        <!-- 月租 -->
        <view class="age-title-box">
          <text>月租范围</text>
          <text>¥1000 - ¥3000</text>
        </view>
        <!-- 月租 -->
        <view class="time-box">
          <view class="date">
            <view class="l">
              <text class="t">最小金额</text>
              <input
                type="number"
                maxlength="2"
                placeholder-class="plh"
                placeholder="请输入最小金额"
              />
            </view>

            <view class="l">
              <text class="t">最大金额</text>
              <input
                type="number"
                maxlength="2"
                placeholder-class="plh"
                placeholder="请输入最大金额"
              />
            </view>
          </view>
        </view>
        <!-- 租期 -->
        <view class="age-title-box">
          <text>租期</text>
          <text>2 - 6 月</text>
        </view>
        <!-- 租期 -->
        <view class="time-box">
          <view class="date">
            <view class="l">
              <text class="t">最短租期</text>
              <input
                type="number"
                maxlength="2"
                placeholder-class="plh"
                placeholder="请输入最短租期"
              />
            </view>

            <view class="l">
              <text class="t">最长租期</text>
              <input
                type="number"
                maxlength="2"
                placeholder-class="plh"
                placeholder="请输入最长租期"
              />
            </view>
          </view>
        </view>
        <!-- 租期 -->
        <view class="age-title-box">
          <text>房间类型</text>
          <text></text>
        </view>
        <!-- 房间类型 -->
        <view class="form-item-sex">
          <view class="sex-box">
            <view
              :class="[form.roomType === index ? 'active' : 'items']"
              v-for="(item, index) in [
                { name: '单人房', value: 1 },
                { name: '双人房', value: 0 },
                { name: '多人租', value: 2 },
              ]"
              :key="index"
              @click="form.roomType = index"
              >{{ item.name }}</view
            >
          </view>
        </view>
        <!-- 卧室类型 -->
        <view class="age-title-box">
          <text>卧室类型</text>
          <text></text>
        </view>
        <!-- 卧室类型 -->
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
        <!-- 配套设施 -->
        <view class="age-title-box">
          <text>配套设施</text>
          <text></text>
        </view>
        <!-- 配套设施 -->
        <view class="supporting-facility-box">
          <view
            class="items-box"
            v-for="(item, index) in supportingArr"
            :key="index"
          >
            <view class="cover">
              <image :src="item.icon"></image>
            </view>
            <text class="name">{{ item.text }}</text>
          </view>
        </view>
        <!-- 要求 -->
        <view class="age-title-box">
          <text>要求</text>
          <text></text>
        </view>
        <!-- 要求 -->
        <view class="require-box">
          <view
            class="items-box"
            v-for="(item, index) in supportingArr"
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
  name: 'Room',
  components: {
  },
  data() {
    return {
      form: {
        roomType: 0,
      },
      title: '房间',
      subtitle: '详细资料',
      occupation: [
        {
          icon: 'http://cdn.lengnuanit.top/stacy/ad/ic_double_bed@2x.png',
          text: '双人床',
        },
        {
          icon: 'http://cdn.lengnuanit.top/stacy/ad/ic_single_bed@2x.png',
          text: '单人床',
        },
      ],
      supportingArr: [
        {
          icon: 'http://cdn.lengnuanit.top/stacy/ad/ic_double_bed@2x.png',
          text: '双人床',
        },
        {
          icon: 'http://cdn.lengnuanit.top/stacy/ad/ic_single_bed@2x.png',
          text: '单人床',
        },
        {
          icon: 'http://cdn.lengnuanit.top/stacy/ad/ic_single_bed@2x.png',
          text: '单人床',
        },
        {
          icon: 'http://cdn.lengnuanit.top/stacy/ad/ic_single_bed@2x.png',
          text: '单人床',
        },
        {
          icon: 'http://cdn.lengnuanit.top/stacy/ad/ic_single_bed@2x.png',
          text: '单人床',
        },
        {
          icon: 'http://cdn.lengnuanit.top/stacy/ad/ic_single_bed@2x.png',
          text: '单人床',
        },
      ],
    };
  },
  computed: {},
  mounted() {},
  methods: {
    onBtn() {
      uni.navigateTo({
        url: '/advertising/roomie/index',
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.room-container {
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
      .form-item-sex {
        .sex-title {
          margin-top: 53rpx;
          font-size: 28rpx;
          font-family: PingFang;
          font-weight: bold;
          color: #020433;
        }
        .sex-box {
          margin-top: 37rpx;
          display: flex;
          align-items: center;
          .items,
          .active {
            width: 222rpx;
            height: 80rpx;
            background: #fff;
            border: 2px solid #0f73ee;
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
            border-left: none;
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
      .supporting-facility-box,.require-box {
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
      .supporting-facility-box,.require-box {
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
