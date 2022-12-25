<template>
  <!-- 人脸签到 -->
  <view class="checkin-container">
    <camera
      device-position="front"
      flash="off"
      class="camera"
      @error="error"
      v-if="showCamera"
    />
    <image mode="widthFix" class="image" :src="photoPath" v-if="showImage" />
    <view class="operate-container">
      <button type="primary" class="btn" @tap="clickBtn" :disabled="canCheckin">
        {{ btnText }}
      </button>
      <button type="warn" class="btn" @tap="afresh" :disabled="canCheckin">
        重拍
      </button>
    </view>
    <view class="notice-container">
      <text class="notice">注意事项</text>
      <text class="desc"
        >拍照签到的时候，必须要拍摄自己的正面照片，侧面照片会导致无法识别。另外，拍照的时候不要戴墨镜或者帽子，避免影响拍照签到的准确度。</text
      >
    </view>
  </view>
</template>

<script>
export default {
  name: 'OfCheckin',
  components: {},
  data() {
    return {
      photoPath: '',
      showImage: '',
      btnText: '拍照',
      canCheckin: false,
      showCamera: true,
    };
  },
  methods: {
    clickBtn() {
      const { btnText } = this;
      if (btnText === '拍照') {
        const ctx = uni.createCameraContext();
        ctx.takePhoto({
          quality: 'high',
          success: (res) => {
            this.photoPath = res.tempImagePath;
            this.showCamera = false;
            this.showImage = true;
            this.btnText = '签到';
          },
        });
      } else {
      }
    },
    afresh() {
      this.showCamera = true;
      this.showImage = false;
      this.photoPath = '';
      this.btnText = '拍照';
    },
    error() {},
  },
};
</script>

<style lang="scss" scoped>
.checkin-container {
  width: 100%;
  height: 100%;
  .camera,
  .image {
    width: 100%;
    height: 400px;
  }
  .operate-container {
    display: flex;
    justify-content: center;
    margin-top: 50rpx;
    .btn {
      width: 40%;
      margin: 0;
      &:first-child {
        margin-right: 30rpx;
      }
    }
  }

  .notice-container {
    padding: 40rpx 60rpx;
    .notice {
      font-size: 40rpx;
      color: $font-color;
      font-weight: bold;
      display: block;
      margin-bottom: 15rpx;
    }
    .desc {
      display: block;
      font-size: 32rpx;
      color: $desc-color;
      line-height: 1.6;
    }
  }
}
</style>
