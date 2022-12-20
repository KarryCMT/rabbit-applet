<template>
  <view>
    <!-- 租期 -->
    <view class="label-info-box">
      <text class="title">租期</text>
      <view class="content">
        <text>{{DataCount }}</text>
        <text>最少周期为{{ detail.smoking }}年</text>
      </view>
    </view>

    <!-- 寻找 -->
    <view class="label-info-box">
      <text class="title">寻找</text>
      <view class="content">
        <text>以下条件租客</text>
        <text
          >男性或者女性在{{ detail.existTenantsMinAge }} - {{ detail.existTenantsMaxAge }}之间
        </text>
           
        <text>

        </text>
      </view>
    </view>

    <!-- 描述 -->
    <view class="label-info-box">
      <text class="title">描述</text>
      <view class="content">
        <text>空间：</text>
        <text>-</text>
        <text>{{ detail.describe }}</text>
      </view>
    </view>

    <!-- 配套设备 -->
    <view class="label-info-box">
      <text class="title">配套设备</text>
      <view class="image-box">
        <view class="icon-box" v-for="item in iconList" :key="item">
          <image :src="item.icon" />
        </view>
        <view class="count">{{ count }}</view>
      </view>
    </view>

    <!-- 要求 -->
    <view class="label-info-box">
      <text class="title">要求</text>
      <view class="image-box-two">
        <view class="icon-box" v-for="item in iconList1" :key="item">
          <image :src="item.icon" />
        </view>
      </view>
    </view>

    <!-- 地址 -->
    <view class="label-info-box">
      <text class="title">地址</text>
      <view class="content">
        <text>{{DetailAddress}}</text>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  name: "label-info",
  props: {
    DataCount: {
      type: String, //接收传值类型为字符串
      default: "",
    },
    detail: {
      type: Object, //接收一个对象的渲染
      default: () => {},
    },
    iconList: {
      type: Array, //接收一个数组icon
      default: [],
    },
    iconList1: {
      type: Array, //接收一个对象的icon
      default: [],
    },
    count: {
      type: String, //详情数字
      default: `+${8}`,
    },
    DetailAddress:{
      type:String,
    default:""
    }
  },
  data() {
    return {
  
    };
  },
  watch:{
    // GetLocationAddress(newval,val){
    // deep=true,

    //   console.log(newval,val,);
      
    // }
  },
onLoad(){
  console.log();
},
  methods: {


    }
  }

</script>
<style lang="scss" scoped>
.label-info-box {
  margin-top: 70rpx;
  padding-left: 48rpx;
  box-sizing: border-box;
  width: 100%;
  .title {
    font-size: 36rpx;
    font-family: PingFang;
    font-weight: bold;
    color: #020433;
  }
  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    border-bottom: 2px solid #f0f0f0;
    padding-bottom: 53rpx;
    text {
      margin-top: 40rpx;
      &:first-child {
        margin-top: 42rpx;
      }
    }
  }

}
  .image-box {
  margin-top: 63rpx;
  display: flex;
  justify-content: space-between;
      border-bottom: 2px solid #f0f0f0;
          padding-bottom: 53rpx;
   
  image {
    width: 55rpx;
    height: 64rpx;
  }
 
  .count {
    font-size: 48rpx;
    margin-right: 30rpx;
    color: #0f73ee;
  }
}
.image-box-two{
  margin-top: 70rpx;
    display: flex;
        border-bottom: 2px solid #f0f0f0;
            padding-bottom: 53rpx;
    image {
    width: 60rpx;
    height: 64rpx;
     padding-right: 53rpx;
  }
}
</style>