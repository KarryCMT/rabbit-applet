<template>
  <view class="cover-box">
    <view
      class="items"
      @longpress="onLongPress"
      v-for="(item, index) in fileList"
      :key="item.id"
    >
      <image
        v-show="isCurrentLongPress"
        class="close"
        :src="closeIcon"
        @click.stop="onClose(index)"
      ></image>
      <image
        :class="[isCurrentLongPress ? 'ani' : '']"
        class="image"
        :src="item.url"
      ></image>
    </view>
    <view class="items" @click="onChooseImage">
      <image class="add-icon" :src="addIcon"></image>
    </view>
  </view>
</template>

<script>
import addIcon from "@/static/svg/add.svg";
import closeIcon from "@/static/svg/close.svg";
import { uploadUrl } from "@/utils/config.js";
export default {
  data() {
    return {
      closeIcon,
      isCurrentLongPress: false, // 是否长按
      addIcon,
      fileList: [],
    };
  },
  watch: {
    fileList: {
      handler(v) {
        this.$emit(
          "change",
          this.fileList.length ? this.fileList.map((v) => v.id) : []
        );
      },
      deep: true,
    },
  },
  methods: {
    // 删除
    onClose(index) {
      this.fileList.splice(index, 1);
    },
    // 选择图片
    onChooseImage() {
      this.isCurrentLongPress = false;
      uni.chooseImage({
        count: 1, //默认9
        sizeType: ["original", "compressed"], //可以指定是原图还是压缩图，默认二者都有
        sourceType: ["album"], //从相册选择
        success: (res) => {
          const tempFilePaths = res.tempFilePaths;
          this.onUploadImage({
            filePath: tempFilePaths[0],
            Authorization: `Bearer ${uni.getStorageSync("Authorization")}`,
          });
        },
      });
    },
    // 上传图片
    onUploadImage({ filePath, Authorization }) {
      uni.uploadFile({
        url: uploadUrl, //仅为示例，非真实的接口地址
        filePath,
        header: {
          Authorization,
          "Content-type": "multipart/form-data", // 则以 formData 方式传参
        }, // 可以加access_token等
        name: "file",
        success: (res) => {
          if (res.statusCode === 200) {
            const {
              statusCode,
              data: { id, savePath: url },
            } = JSON.parse(res.data);
            if (statusCode === 600) {
              this.fileList = [
                ...this.fileList,
                {
                  id,
                  url,
                },
              ];
            }
          }
        },
        fail: (err) => {
          console.log("🚀🚀~err", err);
        },
      });
    },

    onLongPress(v) {
      this.isCurrentLongPress = !this.isCurrentLongPress;
    },
  },
};
</script>

<style lang="scss">
.cover-box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;

  .items {
    position: relative;
    margin-left: 20rpx;
    margin-top: 20rpx;
    width: 220rpx;
    height: 220rpx;
    border-radius: 8rpx;
    .close {
      position: absolute;
      z-index: 3;
      width: 40rpx;
      height: 40rpx;
      right: -15rpx;
      top: -15rpx;
    }
    .close:active {
      opacity: 0.5;
    }
    .image {
      width: 100%;
      border-radius: 8rpx;
      height: 100%;
    }
    .ani {
      position: relative;
      animation: swing 1s infinite;
    }
    /* 关键帧动画 */
    @keyframes swing {
      0% {
        left: 0;
      }
      50% {
        left: 5rpx;
      }
      100% {
        left: 0;
      }
    }
  }

  .items:last-child {
    background: #f7f7f7;
    display: flex;
    align-items: center;
    justify-content: center;
    .add-icon {
      width: 80rpx;
      height: 80rpx;
    }
  }
  .items:last-child :active {
    opacity: 0.5;
  }
}
</style>
