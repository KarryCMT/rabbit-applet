<!-- 瀑布流布局 -->
<template>
  <view class="body-box">
    <swiper
      class="swiper"
      circular
      :indicator-dots="indicatorDots"
      autoplay
      :interval="interval"
      :duration="duration"
    >
      <swiper-item v-for="(item, index) in form.picturesList" :key="item.id">
        <image
          mode="aspectFit"
          class="image"
          :src="item.savePath"
          @tap="onPreview(index)"
        ></image>
      </swiper-item>
    </swiper>
    <text class="content">{{ form.content }}</text>
    <view class="userinfo-box">
      <text class="time">{{ form.createTime }}</text>
      <text class="txt">广东</text>
    </view>
    <!-- 图片预览 -->
    <rb-image-perview
      ref="previewImageRef"
      :urls="imgs"
      @onLongpress="onLongPress"
    />
  </view>
</template>

<script>
export default {
  props: {
    form: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      indicatorDots: false,
      autoplay: true,
      interval: 3000,
      duration: 500,
      imgs:[]
    };
  },
  onLoad() {},
  computed: {},
  methods: {
    onPreview(index) {
      this.imgs = this.form.picturesList.map((v) => v.savePath); //设置图片数组
      // #ifdef MP-WEIXIN
      this.$nextTick(() => {
        this.$refs.previewImageRef.open(this.imgs[index]); // 传入当前选中的图片地址(小程序必须添加$nextTick，解决组件首次加载无图)
      });
      // #endif

      // #ifndef MP-WEIXIN
      this.$refs.previewImageRef.open(this.imgs[index]); // 传入当前选中的图片地址
      // #endif
    },
    onLongPress(e) {
      //长按事件
      console.log('当前长按的图片是' + e);
      uni.showActionSheet({
        itemList: ['转发给朋友', '保存到手机'],
        success: (res) => {
          console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
        },
        fail: (res) => {
          console.log(res.errMsg);
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.body-box {
  width: 100%;
  padding: 20rpx;
  box-sizing: border-box;
  .swiper {
    margin-bottom: 20rpx;
    .image {
      width: 100%;
      height: 100%;
      border-radius: 8rpx;
    }
  }
  .content {
    color: #333;
    line-height: 50rpx;
  }
  .userinfo-box {
    margin-top: 8px;
    margin-left: 8px;
    display: flex;
    .time {
      font-size: 24rpx;
      color: #999;
    }
    .txt {
      font-size: 24rpx;
      margin-left: 20rpx;
      color: #999;
    }
  }
}
</style>
