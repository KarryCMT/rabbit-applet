<template>
  <view class="card-item-container" @click="onHandle(index)">
    <view :class="[isActive ? 'line-active' : 'line']"></view>
    <view class="cover">
      <image
        class="pic"
        :src="item.relatedImages[0]"
      />
      <image class="star" :src="item.star ? yesStarPng : noStarPng" />
    </view>
    <view class="is-verified">
      <image
        class="verified-icon"
        :src="item.isAuth===1 ? verifiedPng : noVerifiedPng"
      />
      <text :class="[item.isAuth === 1 ? 'is-auth' : 'no-auth']">{{item.isAuth===1 ?'已实名认证':'未实名认证'}}</text>
      <text class="count">{{ item.availableCount }} 房</text>
    </view>
    <view class="desc">{{ item.title }}</view>
    <view class="money">
      <text class="number">¥{{ item.monthRent }}</text>
      <text class="pay">每月</text>
    </view>
    <view class="state">
      <text class="age">{{ item.status===1 ? '目前有效' : '目前无效' }}</text>
      <view class="point"></view>
      <text class="time">{{ item.leaseMax }}个月租期</text>
    </view>
  </view>
</template>
<script>
export default {
  name: 'CardItem',
  props: {
    item: {
      type: Object,
      default: () => {},
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    index: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      morePng:'http://cdn.lengnuanit.top/stacy/icon/more-icon.png',
      verifiedPng:'http://cdn.lengnuanit.top/stacy/icon/verified-icon.png',
      noVerifiedPng: 'http://cdn.lengnuanit.top/stacy/icon/ic_no_verified%402x.png',
      boyPng:'http://cdn.lengnuanit.top/stacy/icon/boy-icon.png',
      girlPng:'http://cdn.lengnuanit.top/stacy/icon/girl-icon.png',
      yesStarPng:'http://cdn.lengnuanit.top/stacy/icon/yes-star.png',
      noStarPng:'http://cdn.lengnuanit.top/stacy/icon/no-star.png',
    };
  },
  created() {},
  methods: {
    onHandle(index) {
      this.$emit('change', index);
    },
    onSexClass(type) {
      switch (type) {
        case 0:
          return 'girlSize';
        case 1:
          return 'boySize';
        case 2:
          return 'otherSize';
        default:
          break;
      }
    },
    onSex(type) {
      switch (type) {
        case 0:
          return this.girlPng;
        case 1:
          return this.boyPng;
        case 2:
          return this.girlPng;
        default:
          break;
      }
    },
    onPayDateType(type) {
      switch (type) {
        case 1:
          return '月度';
        case 2:
          return '季度';
        case 3:
          return '年度';
        default:
          break;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.card-item-container {
  width: 398rpx;
  background: #ffffff;

  .line-active {
    width: 100%;
    height: 8rpx;
    background: #0f73ee;
  }
  .line {
    width: 100%;
    height: 8rpx;
    background: #fff;
  }
  .cover {
    width: 100%;
    position: relative;
    .pic {
      margin-top: 8rpx;
      width: 100%;
      height: 256rpx;
    }
    .star {
      position: absolute;
      right: 20rpx;
      top: 20rpx;
      width: 48rpx;
      height: 45rpx;
    }
  }

  .is-verified {
    display: flex;
    align-items: center;
    padding: 10rpx 0;
    .verified-icon {
      width: 24rpx;
      height: 28rpx;
    }
    .is-auth,
    .count, .no-auth {
      margin-left: 13rpx;
      font-size: 20rpx;
      font-family: PingFang;
      font-weight: 500;
      color: #08c299;
    }
     .no-auth {
        color: #999999 !important;
      }
    .count {
      margin-left: 21rpx;
    }
  }
  .desc {
    font-size: 28rpx;
    font-family: PingFang;
    font-weight: bold;
    color: #020433;
    display: block;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .money {
    margin-top: 4rpx;
    font-size: 28rpx;
    font-family: PingFang;
    font-weight: 500;
    color: #020433;
    .pay {
      margin-left: 17rpx;
    }
  }
  .state {
    margin-top: 4rpx;
    display: flex;
    align-items: center;
    .age {
      font-size: 26rpx;
      font-family: PingFang;
      font-weight: 500;
      color: #404b69;
    }
    .point {
      margin-left: 21rpx;
      width: 6rpx;
      height: 6rpx;
      background: #404b69;
      border-radius: 50%;
    }
    .time {
      margin-left: 10rpx;
      font-size: 26rpx;
      font-family: PingFang;
      font-weight: 500;
      color: #404b69;
    }
  }
}
</style>
