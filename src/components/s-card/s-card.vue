<template>
  <view class="card-item-container">
    <view class="header">
      <view class="left">
        <image class="url" :src="item.avatarUrl" />
        <view class="header-content">
          <view class="t">
            <text class="username">{{ item.userName || "" }}</text>
            <image
              class="verified"
            mode="aspectFit" 
              :src="item.isAuth === 1 ? verifiedPng : noVerifiedPng"
            />
          </view>
          <view class="b">
            <image :class="[onSexClass(item.sex)]" :src="onSex(item.sex)" />
            <text class="age">{{ item.age }}</text>
            <view class="point"></view>
            <text class="type">{{ item.type === 1 ? "租客" : "房东" }}</text>
          </view>
        </view>
      </view>
      <image class="more"   mode="aspectFit" :src="morePng" />
    </view>
    <view class="wrap">
      <swiper class="wrap-box" circular indicator-dots :autoplay="false">
        <swiper-item
          class="warp-items"
          v-for="(pic, index) in item.relatedImages"
          :key="index"
        >
          <image :src="pic" mode="aspectFill" />
        </swiper-item>
      </swiper>
      <image class="star" @click="onStar" :src="noStarPng" />
    </view>
    <view class="footer" @click="onDetail">
      <view class="is-verified">
        <image
          class="verified-icon"
          :src="item.isAuth === 1 ? verifiedPng : noVerifiedPng"
        />
        <text :class="[item.isAuth === 1 ? 'is-auth' : 'no-auth']">{{
          item.isAuth === 1 ? "已实名认证" : "未实名认证"
        }}</text>
        <text class="count">{{ item.availableCount }} 房</text>
      </view>
      <view class="desc">{{ item.title }}</view>
      <view class="money">
        <text class="number">¥{{ item.monthRent }}</text>
        <text class="pay">每月</text>
      </view>
      <view class="state">
        <text class="age">{{
          item.status === 1 ? "目前有效" : "目前无效"
        }}</text>
        <view class="point"></view>
        <text class="time">{{ item.leaseMax }}个月租期</text>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  name: "Card",
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      morePng: "http://cdn.lengnuanit.top/stacy/icon/more-icon.png",
      verifiedPng: "http://cdn.lengnuanit.top/stacy/icon/verified-icon.png",
      boyPng: "http://cdn.lengnuanit.top/stacy/icon/boy-icon.png",
      girlPng: "http://cdn.lengnuanit.top/stacy/icon/girl-icon.png",
      yesStarPng: "http://cdn.lengnuanit.top/stacy/icon/yes-star.png",
      noStarPng: "http://cdn.lengnuanit.top/stacy/icon/no-star.png",
      noVerifiedPng:
        "http://cdn.lengnuanit.top/stacy/icon/ic_no_verified%402x.png",
    };
  },
  created() {},
  methods: {
    onDetail() {
      this.$emit("detail", this.item);
    },
    onSexClass(type) {
      switch (type) {
        case 0:
          return "girlSize";
        case 1:
          return "boySize";
        case 2:
          return "otherSize";
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
    onStar() {
      let userId = uni.getStorageSync("userInfo").id;
      if (userId === this.item.userId) {
        uni.showToast({
          title: "不能收藏自己发布的房间",
          icon: "none",
        });
        return;
      }
      uni.showModal({
        title: "提示",
        content: "是否收藏该信息",
        success: (res) => {
          if (res.confirm) {
            this.$emit("star", this.item);
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        },
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.card-item-container {
  margin-top: 16rpx;
  width: 100%;
  height: 892rpx;
  background: #ffffff;
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 128rpx;
    padding: 0 48rpx;
    .left {
      display: flex;
      .url {
        width: 80rpx;
        height: 80rpx;
        border-radius: 50%;
      }
      .header-content {
        margin-left: 32rpx;
        display: flex;
        flex-direction: column;
        .t {
          display: flex;
          align-items: center;
          .username {
            font-size: 28rpx;
            font-family: Montserrat;
            font-weight: 500;
            color: #020433;
          }
          .verified {
            margin-left: 17rpx;
            width: 24rpx;
            height: 28rpx;
          }
        }
        .b {
          display: flex;
          align-items: center;
          .girlSize {
            width: 21rpx;
            height: 30rpx;
          }
          .boySize {
            width: 30rpx;
            height: 30rpx;
          }
          .otherSize {
            width: 30rpx;
            height: 30rpx;
          }
          .age {
            margin-left: 14rpx;
            font-size: 26rpx;
            font-family: PingFang;
            font-weight: 500;
            color: #404b69;
          }
          .point {
            margin-left: 20rpx;
            width: 6rpx;
            height: 6rpx;
            background: #404b69;
            border-radius: 50%;
          }
          .type {
            margin-left: 10rpx;
            font-size: 26rpx;
            font-family: PingFang;
            font-weight: 500;
            color: #404b69;
          }
        }
      }
    }
    .more {
      width: 32rpx;
      height: 8rpx;
    }
  }
  .wrap {
    width: 100%;
    height: 480rpx;
    position: relative;
    .wrap-box {
      width: 100%;
      height: 100%;
      .warp-items {
        width: 100%;
        image {
          width: 100%;
          height: 100%;
        }
      }
    }
    .star {
      position: absolute;
      right: 20rpx;
      top: 20rpx;
      width: 48rpx;
      height: 45rpx;
    }
  }
  .footer {
    padding: 0 48rpx;
    .is-verified {
      display: flex;
      align-items: center;
      padding: 26rpx 0;
      .verified-icon {
        width: 24rpx;
        height: 28rpx;
      }
      .is-auth,
      .count,
      .no-auth {
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
      font-size: 36rpx;
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
      margin-top: 6rpx;
      font-size: 28rpx;
      font-family: PingFang;
      font-weight: 500;
      color: #020433;
      .pay {
        margin-left: 17rpx;
      }
    }
    .state {
      margin-top: 6rpx;
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
}
</style>
