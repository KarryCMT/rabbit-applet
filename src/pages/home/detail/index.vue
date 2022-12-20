<template>
  <view class="home-detail-container">
    <view>
      <!--1、 Banner图 -->
      <swiper class="swiper-box" autoplay circular>
        <swiper-item
          class="swiper-item"
          v-for="(item, index) in GetRoomInfoList.relatedImages"
          :key="index"
        >
          <image mode="scaleToFill" class="swiper-item-image" :src="item" />
        </swiper-item>
      </swiper>
      <!--2、 主体部分 -->
      <view class="main-content">
        <!--  验证图标部分-->
        <view class="verify-box">
          <image class="verify-icon" :src="IconVerify"></image>
          <text class="verify-text">已实名验证</text>
        </view>
        <!-- 标题 -->
        <text class="title-box">{{ GetRoomInfoList.title }}</text>
        <!-- 价格标题 -->
        <view class="price-box">
          <text class="price-num">￥{{ GetRoomInfoList.monthRent }}</text>
          <text class="price-month">每月</text>
          <text class="price-money">(￥{{ GetRoomInfoList.deposit }}押金)</text>
        </view>
        <!-- 简介 -->
        <view class="configuration-Icom-box">
          <view class="rent">
            <image :src="people" />
            <text>最多{{ GetRoomInfoList.leaseMax }}人租</text>
          </view>
          <view class="rent">
            <image :src="bed" />
            <text>{{ GetRoomInfoList.leaseMin }}个床</text>
          </view>
          <view class="rent">
            <image :src="bedroom" />
            <text>{{ GetRoomInfoList.roomType }}间卧室</text>
          </view>
          <view class="rent">
            <image :src="shower" />
            <text>{{ GetRoomInfoList.houseType }}间浴室</text>
          </view>
        </view>

      <!--3、 房东个人资料 -->
      <view class="profile-info-box">
        <!-- 左边头像部分 -->
        <view class="main-content-box">
          <image class="avator-image" :src="GetRoomInfoList.avatarUrl" />
          <!-- name和icon -->
          <view class="username-box">
            <view class="top-box">
              <text>{{ GetRoomInfoList.nickName }}</text>
              <image class="verify-icon" :src="IconVerify"></image>
            </view>
            <!-- 年龄和身份 -->
            <view class="age-box">
              <image
                :src="GetRoomInfoList.sex === 1 ? Boy : gril"
                class="box-icon"
              />
              <text class="num">36</text>
              <text class="landlord">房东</text>
            </view>
          </view>
        </view>
        <!-- 右边more部分 -->
        <image class="more-icon" :src="moreIcon" mode="scaleToFill" />
      </view>
      <!--4、  详情内容 title 默认传值 :detail 传递对象-->
      <!-- 组件主要内容 -->
      <LabelInfo
        :DataCount="DataCount"
        :detail="GetRoomInfoList"
        :iconList="iconList"
        :nub="count"
        :iconList1="iconList1"
        :DetailAddress="DetailAddress"
      >
      </LabelInfo>

      <!--5、 地图组件 -->
      <DetailMap
        :options="{
          longitude: GetRoomInfoList.longitude,
          latitude: GetRoomInfoList.latitude,
        }"
      />

      <!-- 6、评论部分 -->
      <view class="comment-box">
        <view class="title">
          <text>评论</text>
        </view>
        <!-- 主体内容部分 -->
        <view class="main-box">
          <!-- 头像 -->
          <image
            src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202107%2F17%2F20210717232533_2edcf.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664380751&t=d82fc344147ff18a437c15fcbb7c2903"
            mode="scaleToFill"
            class="avator"
          />
          <!-- 文字 -->
          <view class="text-box">
            <text class="name">Grace Thornton</text>
            <text class="details">最近租客</text>
          </view>
          <!-- 图标 -->
          <image :src="IconVerify" mode="scaleToFill" class="verify-icon" />
        </view>
        <!-- 评论部分  -->
        <view class="good">
          很棒的位置，非常干净，适合我们两个父母的家庭和两个成年的孩子和他们的伙伴。我们没有使用任何危害身体健康的墙漆，空气很清新的…
        </view>
      </view>

      <!--7、 推荐部分 -->
      <view class="recommend-title">相似推荐 </view>
      <scroll-view :scroll-x="true" style="white-space: nowrap; display: flex">
        <RecommendSwiper
          :item="item"
          v-for="item in RecommendList"
          :key="item.id"
        ></RecommendSwiper>
      </scroll-view>

      <!--8、底部栏  -->
      <Tabs
        :monthRent="GetRoomInfoList.monthRent"
        :deposit="GetRoomInfoList.deposit"
      ></Tabs>
    </view>
  </view>
   </view>
</template>
<script>
//组件

import LabelInfo from "./components/label-info.vue";
import DetailMap from "./components/map.vue";
import RecommendSwiper from "./components/recommend-swiper.vue";
import Tabs from "./components/tabs-btn.vue";

// icon 图标
import collect from "@/static/tabbar/saved.png";

import { GetRoomInfo } from "@/api/index.js";
export default {
  components: { LabelInfo, DetailMap, RecommendSwiper, Tabs },
  name: "Detail",
  data() {
    return {
      iconList: [
        {
          icon: "http://cdn.lengnuanit.top/stacy/detail/ic_washing.png",
        },
        {
          icon: "http://cdn.lengnuanit.top/stacy/home/ic_router@2x.png",
        },
        {
          icon: "http://cdn.lengnuanit.top/stacy/home/ic_armchair@2x.png",
        },
        {
          icon: "http://cdn.lengnuanit.top/stacy/home/ic_elevator@2x.png",
        },
        {
          icon: "http://cdn.lengnuanit.top/stacy/home/ic_radiator@2x.png",
        },
      ],
      iconList1: [
        {
          icon: "http://cdn.lengnuanit.top/stacy/home/ic_no_drinks@2x.png",
        },
        {
          icon: "http://cdn.lengnuanit.top/stacy/home/ic_marijuana@2x.png",
        },
        {
          icon: "http://cdn.lengnuanit.top/stacy/home/ic_dog@2x.png",
        },
        {
          icon: "http://cdn.lengnuanit.top/stacy/home/ic_couple@2x.png",
        },
      ],
      height: 0,
      IconVerify: "http://cdn.lengnuanit.top/stacy/icon/verified-icon.png", //icon图标
      Boy: "http://cdn.lengnuanit.top/stacy/icon/boy-icon.png", //icon图标
      gril: "http://cdn.lengnuanit.top/stacy/icon/girl-icon.png", //icon图标
      moreIcon: "http://cdn.lengnuanit.top/stacy/icon/more-icon.png",
      people: "http://cdn.lengnuanit.top/stacy/detail/ic_roommate.png",
      bed: "http://cdn.lengnuanit.top/stacy/detail/ic_bed.png",
      bedroom: " http://cdn.lengnuanit.top/stacy/detail/ic_bedroom.png",
      shower: "http://cdn.lengnuanit.top/stacy/detail/ic_shower.png",
      RecommendList: [
        {
          id: 1,
          room: "https://img0.baidu.com/it/u=2610721283,3333229425&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=336", //图片
          collect: collect, //收藏爱心
          IconVerify: "http://cdn.lengnuanit.top/stacy/icon/verified-icon.png", //icon图标
          attestation: "已实名认证",
          house: "2房",
          detail: "非常漂亮的两房户型，独立卫生间，1房间闲置求合租。",
          price: "$650",
          month: "每月",
          deadline: "目前有效",
          tenancy: "6个月租期",
        },
        {
          id: 2,
          room: "https://img0.baidu.com/it/u=2610721283,3333229425&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=336", //图片
          collect: collect, //收藏爱心
          IconVerify: "http://cdn.lengnuanit.top/stacy/icon/verified-icon.png", //icon图标
          attestation: "已实名认证",
          house: "2房",
          detail: "非常漂亮的两房户型，独立卫生间，1房间闲置求合租。",
          price: "$650",
          month: "每月",
          deadline: "目前有效",
          tenancy: "6个月租期",
        },
        {
          id: 3,
          room: "https://img0.baidu.com/it/u=2610721283,3333229425&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=336", //图片
          collect: collect, //收藏爱心
          IconVerify: "http://cdn.lengnuanit.top/stacy/icon/verified-icon.png", //icon图标
          attestation: "已实名认证",
          house: "2房",
          detail: "非常漂亮的两房户型，独立卫生间，1房间闲置求合租。",
          price: "$650",
          month: "每月",
          deadline: "目前有效",
          tenancy: "6个月租期",
        },
        {
          id: 4,
          room: "https://img0.baidu.com/it/u=2610721283,3333229425&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=336", //图片
          collect: collect, //收藏爱心
          IconVerify: "http://cdn.lengnuanit.top/stacy/icon/verified-icon.png", //icon图标
          attestation: "已实名认证",
          house: "2房",
          detail: "非常漂亮的两房户型，独立卫生间，1房间闲置求合租。",
          price: "$650",
          month: "每月",
          deadline: "目前有效",
          tenancy: "6个月租期",
        },
      ],
      GetRoomInfoList: {},
      DataCount: "",
      DetailAddress: "",
    };
  },
  onLoad({ id, Getaddress }) {
    this.onGetRoomInfo(id); //调用获取用户信息params=传递过来拼接的id和地址，直接解构;
    console.log(this.onGetRoomInfo(id));

    this.DetailAddress = Getaddress;
    console.log("传递的详情id+地图地址=>", id, this.DetailAddress);
  },
  methods: {
    async onGetRoomInfo(id) {
      const { data, code, message } = await GetRoomInfo({ id });
      if (code === 200) {
        this.DataCount = data.checkinDate.substring(0, 10);//切割数组
        // console.log( this.GetRoomInfoList = data.checkinDate.split(" ")[0]);

        this.GetRoomInfoList = data;
console.log(  this.GetRoomInfoList,111);

        console.log(272, this.GetRoomInfoList);
      } else if (message) {
        uni.showLoading({
          title: "加载中",
          mask: true,
        });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.home-detail-container {
  .swiper-box {
    padding: 0;
    width: 100%;
    height: 600rpx;
    .swiper-item image {
      width: 100%;
      height: 600rpx;
    }
  }
  .main-content {
    box-sizing: border-box;
    width: 100%;
    .verify-box {
      padding: 0 50rpx;
      display: flex;
      align-items: center;
      margin: 50rpx 0 34rpx 0;
      image {
        width: 24rpx;
        height: 28rpx;
      }
      .verify-text {
        margin-left: 20rpx;
        font-size: 20rpx;
        font-family: PingFang;
        font-weight: bold;
        color: #08c299;
      }
    }
    .title-box {
      margin-bottom: 48rpx;
      padding: 0 50rpx;

      font-size: 48rpx;
      font-family: PingFang;
      font-weight: bold;
      color: #020433;
    }
    .price-box {
      padding: 0 50rpx;
      display: flex;
      align-items: center;
      margin-top: 38rpx;
      .price-num {
        font-size: 48rpx;
        font-family: Montserrat;
        font-weight: bold;
        color: #020433;
      }
      .price-month {
        font-size: 28rpx;
        font-family: PingFang;
        font-weight: 500;
        color: #020433;
        margin-left: 14rpx;
      }
      .price-money {
        margin-left: 14rpx;
        font-size: 28rpx;
        font-family: PingFang;
        font-weight: 500;
        color: #404b69;
      }
    }
    .configuration-Icom-box {
      padding: 0 50rpx;
      margin-top: 25rpx;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 0rpx 20;
      .rent {
        width: 40%;
        margin-top: 57rpx;
      }
      image {
        width: 26rpx;
        height: 32rpx;
        margin-right: 30rpx;
      }
    }
  }
  .profile-info-box {
    margin-top: 48rpx;
    width: 100%;
    height: 176rpx;
    background: #f7f9ff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40rpx;
    box-sizing: border-box;
    .main-content-box {
      display: flex;
      .avator-image {
        border-radius: 50%;
        width: 112rpx;
        height: 112rpx;
      }
      .username-box {
        margin-left: 30rpx;
        flex: 1;
        .top-box,
        .age-box {
          display: flex;
          align-items: center;
          text {
            font-size: 32rpx;
            font-family: Montserrat;
            font-weight: 500;
            color: #020433;
          }
          image {
            margin-left: 15rpx;
            width: 24rpx;
            height: 28rpx;
          }
        }
        .age-box {
          margin-top: 14rpx;
          image {
            margin-left: 0;
          }
          .num {
            margin-left: 11rpx;
          }
          .landlord {
            margin-left: 45rpx;
          }
        }
      }
    }
    .more-icon {
      width: 32rpx;
      height: 8rpx;
    }
  }
  .comment-box {
    margin-top: 70rpx;
    padding: 0 40rpx;
    border-bottom: 2px solid #f0f0f0;
    .title {
      height: 34rpx;
      font-size: 36rpx;
      font-family: PingFang;
      font-weight: bold;
      margin-bottom: 52rpx;
      color: #020433;
    }
    .main-box {
      display: flex;
      align-items: center;
      .avator {
        width: 80rpx;
        height: 80rpx;
        margin-right: 32rpx;
        border-radius: 50%;
      }
      .text-box {
        display: flex;
        flex-direction: column;
        .name {
          margin-bottom: 20rpx;
        }
      }
      .verify-icon {
        width: 24rpx;
        height: 28rpx;
        margin-left: 40rpx;
        padding-bottom: 60rpx;
        font-size: 20rpx;
        font-family: PingFang;
        font-weight: bold;
        color: #08c299;
      }
    }
    .good {
      margin: 38rpx 0 61rpx 0;
    }
  }
  .recommend-title {
    padding-left: 49rpx;
    margin-top: 70rpx;
    font-size: 36rpx;
    font-family: PingFang;
    font-weight: bold;
    color: #020433;
  }
  .recomemnd-box {
    display: flex;
    white-space: nowrap;
  }
}
</style>
