<template>
  <!-- 首页 -->
  <view class="index-container">
    <swiper circular="true" interval="8000" duration="1000" class="swiper">
      <swiper-item>
        <image
          mode="widthFix"
          src="https://static-1258386385.cos.ap-beijing.myqcloud.com/img/banner/swiper-1.jpg"
        ></image>
      </swiper-item>
      <swiper-item>
        <image
          mode="widthFix"
          src="https://static-1258386385.cos.ap-beijing.myqcloud.com/img/banner/swiper-2.jpg"
        ></image>
      </swiper-item>
      <swiper-item>
        <image
          mode="widthFix"
          src="https://static-1258386385.cos.ap-beijing.myqcloud.com/img/banner/swiper-3.jpg"
        ></image>
      </swiper-item>
      <swiper-item>
        <image
          mode="widthFix"
          src="https://static-1258386385.cos.ap-beijing.myqcloud.com/img/banner/swiper-4.jpg"
        ></image>
      </swiper-item>
      <swiper-item>
        <image
          mode="widthFix"
          src="https://static-1258386385.cos.ap-beijing.myqcloud.com/img/banner/swiper-5.jpg"
        ></image>
      </swiper-item>
    </swiper>
    <view class="notify-container" @tap="toPage('消息提醒', '/pages/message_list/message_list')">
			<view class="notify-title">
				<image src="https://office-1255986722.cos.ap-chongqing.myqcloud.com/img/icon/icon-1.png" mode="widthFix" class="notify-icon"></image>
				消息提醒
			</view>
			<view class="notify-content">
				你有{{ unreadRows }}条未读消息
			</view>
			<image src="https://office-1255986722.cos.ap-chongqing.myqcloud.com/img/icon/icon-2.png" mode="widthFix" class="more-icon"></image>
		</view>
    	<view class="nav-container">
			<view class="nav-row">
				<view class="nav" @tap="toPage('在线签到','../checkin/checkin')">
					<image mode="widthFix" src="https://office-1255986722.cos.ap-chongqing.myqcloud.com/img/icon/nav-1.png" class="icon"></image>
					<text class="name">在线签到</text>
				</view>
				<view class="nav">
					<image src="https://office-1255986722.cos.ap-chongqing.myqcloud.com/img/icon/nav-2.png" mode="widthFix" class="icon"></image>
					<text class="name">员工健康</text>
				</view>
				<view class="nav">
					<image src="https://office-1255986722.cos.ap-chongqing.myqcloud.com/img/icon/nav-3.png" mode="widthFix" class="icon"></image>
					<text class="name">在线请假</text>
				</view>
				<view class="nav">
					<image src="https://office-1255986722.cos.ap-chongqing.myqcloud.com/img/icon/nav-4.png" mode="widthFix" class="icon"></image>
					<text class="name">公务出差</text>
				</view>
			</view>
			<view class="nav-row">
				<view class="nav">
					<image src="https://office-1255986722.cos.ap-chongqing.myqcloud.com/img/icon/nav-5.png" mode="widthFix" class="icon"></image>
					<text class="name">员工日报</text>
				</view>
				<view class="nav">
					<image src="https://office-1255986722.cos.ap-chongqing.myqcloud.com/img/icon/nav-6.png" mode="widthFix" class="icon"></image>
					<text class="name">我的加班</text>
				</view>
				<view class="nav">
					<image src="https://office-1255986722.cos.ap-chongqing.myqcloud.com/img/icon/nav-7.png" mode="widthFix" class="icon"></image>
					<text class="name">付款申请</text>
				</view>
				<view class="nav">
					<image src="https://office-1255986722.cos.ap-chongqing.myqcloud.com/img/icon/nav-8.png" mode="widthFix" class="icon"></image>
					<text class="name">费用报销</text>
				</view>
			</view>
			<view class="nav-row">
				<view class="nav">
					<image src="https://office-1255986722.cos.ap-chongqing.myqcloud.com/img/icon/nav-9.png" mode="widthFix" class="icon"></image>
					<text class="name">公告通知</text>
				</view>
				<view class="nav" @tap="toPage('在线审批', '../approval_list/approval_list')">
					<image src="https://office-1255986722.cos.ap-chongqing.myqcloud.com/img/icon/nav-10.png" mode="widthFix" class="icon"></image>
					<text class="name">在线审批</text>
				</view>
				<view class="nav">
					<image src="https://office-1255986722.cos.ap-chongqing.myqcloud.com/img/icon/nav-11.png" mode="widthFix" class="icon"></image>
					<text class="name">物品领用</text>
				</view>
				<view class="nav">
					<image src="https://office-1255986722.cos.ap-chongqing.myqcloud.com/img/icon/nav-12.png" mode="widthFix" class="icon"></image>
					<text class="name">采购申请</text>
				</view>
			</view>
		</view>
  </view>
</template>

<script>
export default {
  name: 'OfIndex',
  components: {},
  data() {
    return {
      unreadRows:0
    };
  },
  methods: {
    toPage(){}
  },
};
</script>

<style lang="scss">
.index-container {
  width: 100%;
  height: 100%;
  background-color: #eeeef4;
  .swiper {
    height: 233px;
    image {
      width: 100%;
    }
  }
  .notify-container {
    background-color: #fff;
    padding: 25rpx;
    position: relative;
    margin-bottom: 20rpx;
    .notify-title {
      font-size: 34rpx;
      color: $background-color;
      margin-bottom: 10rpx;
      .notify-icon {
        width: 38rpx;
        margin-right: 5rpx;
        vertical-align: -8rpx;
      }
    }
    .notify-content {
      font-size: 30rpx;
      color: $font-color;
      &:before {
        display: inline-block;
        content: '';
        width: 12rpx;
        height: 12rpx;
        border-radius: 6rpx;
        background-color: red;
        margin-left: 18rpx;
        margin-right: 15rpx;
        vertical-align: 3rpx;
      }
    }
    .more-icon {
      position: absolute;
      right: 5rpx;
      top: 50rpx;
      width: 60rpx;
    }
  }

  .nav-container {
    background-color: #fff;
    margin-bottom: 20rpx;
    padding: 50rpx 40rpx;
    .nav-row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 50rpx;
      .nav {
        text-align: center;
        .icon {
          width: 80rpx;
        }
        .name {
          display: block;
          font-size: 30rpx;
          color: $font-color;
        }
      }
    }
  }
  .calendar-container {
    margin-bottom: 20rpx;
  }
  .meeting-container {
    background-color: #fff;
    .meeting {
      padding: 30rpx;
      position: relative;
      border-bottom: solid 20rpx #eeeef4;
      .row {
        display: flex;
        margin-bottom: 15rpx;
        &:first-child {
          justify-content: space-between;
        }
        .title {
          color: $font-color;
          font-size: 34rpx;
        }
        .hours {
          color: #dd524d;
          font-size: 34rpx;
        }
        .desc {
          font-size: 30rpx;
          color: #999;
        }
        .icon {
          width: 40rpx;
          margin-right: 10rpx;
          margin-top: 2rpx;
        }
      }
      .photo {
        width: 90rpx;
        height: 90rpx;
        border-radius: 45rpx;
        position: absolute;
        right: 30rpx;
        top: 95rpx;
        border: solid 6rpx #4caf50;
        box-sizing: border-box;
      }
    }
  }
}
</style>
