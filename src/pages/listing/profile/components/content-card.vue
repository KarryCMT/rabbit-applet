<template>
  <view class="content-card-box">
    <view class="header-info-box">
      <view class="cover-box">
        <image class="uri" :src="info.avatarUrl"></image>
        <image class="icon" :src="verifiedIcon"></image>
      </view>
      <text class="username">{{ info.userName }}</text>
      <view class="desc-box">
        <text class="type">租客</text>
        <text class="city">{{ info.workPlace }}</text>
      </view>
    </view>
    <view class="info-content">
      <view class="type-box">
        <text>年龄</text>
        <text>职业</text>
      </view>
      <view class="value-box">
        <text>12</text>
        <text>{{info.occupation}}</text>
      </view>
    </view>
    <view class="main-box">
      <view class="introduction-box">
        <text class="title">个人简介</text>
        <view class="content">
          {{info.profile}}
        </view>
      </view>
      <view class="common-box">
        <text class="title">喜欢的地区</text>
        <view class="content"> {{info.targetCity}} </view>
      </view>
      <view class="common-box">
        <text class="title">兴趣爱好</text>
        <view class="content"> 旅行 - 电影 - 阅读... </view>
      </view>
      <view class="common-box">
        <text class="title">问题</text>
        <view class="content">
          <view
            class="problem-item"
            v-for="(item, index) in problemList"
            :key="index"
          >
            <text class="problem-title">{{ item.title }}</text>
            <text class="problem-value">{{ item.value }}</text>
          </view>
        </view>
      </view>
      <view class="common-box">
        <text class="title">发布搜索</text>
        <view class="content">
          <view
            class="release-record-item"
            v-for="(item, index) in releaseList"
            :key="index"
          >
            <view class="release-title">{{ item.title }}</view>
            <view class="release-content">
              <text class="city">{{ item.city }}</text>
              <view class="point"></view>
              <text class="price">{{ item.price }}</text>
            </view>
            <view class="release-time">{{ item.time }}</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>

export default {
  components: {  },
  name: 'ContentCard',
  props: {
    info:{
      type:Object,
      default:()=>{}
    }
  },
  data() {
    return {
      verifiedIcon:'http://cdn.lengnuanit.top/stacy/icon/verified-icon.png',
      problemList: [
        {
          title: '你多久打扫一次房间？',
          value: '每隔几天',
        },
        {
          title: '你吸烟吗？',
          value: '是的',
        },
        {
          title: '你觉得宠物怎么样？',
          value: '我和一只宠物一起生活！',
        },
        {
          title: '如何看待带客人过来？',
          value: '只能白天过来',
        },
      ],
      releaseList: [
        {
          title: '寻找单间出租，要求小区电梯房，家电齐全，布鲁克林附近',
          city: '广州',
          price: '¥800 - ¥1,200',
          time: '最近更新 9月1日, 2022',
        },
        {
          title: '寻找单间出租，要求小区电梯房，家电齐全，布鲁克林附近',
          city: '广州',
          price: '¥800 - ¥1,200',
          time: '最近更新 9月1日, 2022',
        },
        {
          title: '寻找单间出租，要求小区电梯房，家电齐全，布鲁克林附近',
          city: '广州',
          price: '¥800 - ¥1,200',
          time: '最近更新 9月1日, 2022',
        },
        {
          title: '寻找单间出租，要求小区电梯房，家电齐全，布鲁克林附近',
          city: '广州',
          price: '¥800 - ¥1,200',
          time: '最近更新 9月1日, 2022',
        },
        {
          title: '寻找单间出租，要求小区电梯房，家电齐全，布鲁克林附近',
          city: '广州',
          price: '¥800 - ¥1,200',
          time: '最近更新 9月1日, 2022',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.content-card-box {
  position: relative;
  top: -40rpx;
  z-index: 10;
  width: 100%;
  background: #fff;
  border-radius: 40rpx;
  padding-top: 40rpx;
  .header-info-box {
    width: 100%;
    height: 358rpx;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 41rpx;

    .cover-box {
      margin-top: 16rpx;
      position: relative;
      width: 160rpx;
      height: 160rpx;
      .uri {
        width: 160rpx;
        height: 160rpx;
        border-radius: 50%;
      }
      .icon {
        position: absolute;
        bottom: 0;
        right: -6rpx;
        width: 36rpx;
        height: 42rpx;
      }
    }
    .cover-box:active {
      opacity: 0.5;
    }
    .username {
      margin-top: 44rpx;
      font-size: 48rpx;
      font-family: Montserrat;
      font-weight: 500;
      color: #020433;
    }
    .desc-box {
      margin-top: 26rpx;
      display: flex;
      align-items: center;
      .type {
        font-size: 28rpx;
        font-family: PingFang;
        font-weight: 500;
        color: #404b69;
        margin-right: 25rpx;
      }
      .city {
        font-size: 28rpx;
        font-family: PingFang;
        font-weight: 500;
        color: #404b69;
        margin-left: 25rpx;
      }
    }
  }
  .info-content {
    .type-box,
    .value-box {
      display: flex;
      align-items: center;
      font-size: 28rpx;
      font-family: PingFang;
      font-weight: bold;
      color: #020433;
      padding-left: 49rpx;
      text {
        width: 200rpx;
      }
      > text:last-child {
        margin-left: 153rpx;
      }
    }
    .value-box {
      margin-top: 42rpx;
    }
  }
  .main-box {
    padding-left: 48rpx;
    box-sizing: border-box;
    padding-top: 20rpx;
    .introduction-box,
    .common-box {
      border-bottom: 1px solid #f0f0f0;
      border-top: 1px solid #f0f0f0;
      padding: 60rpx 0;
      .title {
        font-size: 36rpx;
        font-family: PingFang;
        font-weight: bold;
        color: #020433;
      }
      .content {
        margin-top: 42rpx;
        font-size: 28rpx;
        font-family: PingFang;
        font-weight: 500;
        color: #020433;
        padding-right: 48rpx;
        .problem-item {
          display: flex;
          flex-direction: column;
          margin-top: 57rpx;
          .problem-title {
            font-size: 28rpx;
            font-family: PingFang;
            font-weight: bold;
            color: #020433;
          }
          .problem-value {
            margin-top: 20rpx;
            font-size: 28rpx;
            font-family: PingFang;
            font-weight: 500;
            color: #020433;
          }
        }
        .release-record-item {
          display: flex;
          flex-direction: column;
          margin-top: 70rpx;
          .release-title {
            font-size: 32rpx;
            font-family: PingFang;
            font-weight: bold;
            color: #020433;
          }
          .release-content {
            margin-top: 22rpx;
            display: flex;
            align-items: center;
            .city {
              font-size: 26rpx;
              font-family: PingFang;
              font-weight: 500;
              color: #404b69;
            }
            .point {
              margin-left: 150rpx;
              width: 7px;
              height: 7px;
              border-radius: 50%;
              background: #ccc;
            }
            .price {
              margin-left: 17rpx;
              font-size: 26rpx;
              font-family: Montserrat;
              font-weight: 400;
              color: #404b69;
            }
          }
          .release-time {
            margin-top: 23rpx;
            font-size: 26rpx;
            font-family: PingFang;
            font-weight: 500;
            color: #95a0b6;
          }
        }
        .release-record-item:first-child {
          margin-top: 0;
        }
      }
    }
    .common-box {
      border-top: none !important;
    }
  }
}
</style>
