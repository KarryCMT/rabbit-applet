<template>
  <view class="top-header-bar" :style="{ backgroundColor: bgColor }">
    <!-- 左侧输入框及搜索框 -->
    <view
      :style="{
        marginTop: Fstyle.top,
        height: Fstyle.height,
      }"
      class="left-box"
    >
      <view v-if="isBack" class="back">
        <image :src="isWhite?backWhiteIcon:backBlackIcon" @click="onBack" />
      </view>
    </view>
  </view>
</template>
<script>
export default {
  name: 'NavBar',
  props: {
    isBack: {
      type: Boolean,
      default: false,
    },
    bgColor: {
      type: String,
      default: 'rgba(255,255,255,0)',
    },
    isWhite: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      backBlackIcon:'http://cdn.lengnuanit.top/stacy/icon/back-black-icon.png',
      backWhiteIcon:'http://cdn.lengnuanit.top/stacy/icon/back-white-icon.png',
      Fstyle: {
        BoxBgColor: '#fff', //开始时透明色
        top: '48rpx', //子元素位移值 后续可能要根据不同设备进行匹配暂定小程序适配
        height: '29rpx', //同上
        CityColor: '#ffffff', //城市颜色 ,
        leftBoxBgColor: 'rgba(240, 240, 240,.3)', //输入框盒子的颜色'
        placeHoladerColor: false, //控制切换placeHolder的文字颜色
        lineBg: '#ffffff', //线条颜色
      },
    };
  },
  watch: {},
  created() {},
  mounted() {
    this.getCapsule();
  },
  methods: {
    getCapsule() {
      //获取胶囊位置并改变顶部自定义导航栏的位置
      let { height, top } = uni.getMenuButtonBoundingClientRect();
      //让自定义导航栏头部组件始终和胶囊对齐 做到兼容各手机型号
      this.Fstyle.top = top + 'px';
      this.Fstyle.height = height + 'px';
    },
    onBack() {
      uni.navigateBack({
        delta: 2,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.top-header-bar {
  width: 100%;
  background-color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 99;
  .left-box {
    display: flex;
    width: 100%;
    .back {
      display: flex;
      margin-left: 48rpx;
      align-items: center;
      image {
        width: 48rpx;
        height: 40rpx;
      }
      image:active {
        opacity: 0.5;
      }
    }
  }
}
</style>
