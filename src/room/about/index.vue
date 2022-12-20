<template>
  <!-- about -->
  <view class="about-container">
    <s-progress-bar :width="100" />
    <view class="content">
      <text class="title">关于</text>
      <view class="title">我的广告</view>
      <view class="main-box">
        <!-- 标题 -->
        <view class="time-box">
          <view class="date">
            <view class="l">
              <text class="t">标题</text>
              <input
                v-model="form.title"
                type="text"
                maxlength="50"
                placeholder-class="plh"
                placeholder="请输入标题"
              />
            </view>
          </view>
        </view>

        <!-- 描述 -->
        <view class="time-box">
          <view class="date">
            <view class="l">
              <text class="t">描述</text>
              <input
                type="text"
                v-model="form.describe"
                maxlength="120"
                placeholder-class="plh"
                placeholder="请输入"
              />
            </view>
          </view>
        </view>
        <text class="desc-txt">
          请输入描述以获得对列表的响应。告诉其他用户你喜欢什么样的财产；房间、地点和现在的室友有什么了不起。详细的房间信息将会更快被他人访问。
        </text>
        <!-- 相关照片 -->
        <view class="upload">
          <view class="warning-txt">
            <text class="l">相关照片</text>
            <text class="r">(最多10张)</text>
          </view>
          <view class="image-box">
            <image
              @click="onSelectImage"
              v-if="form.relatedImages.length < 10"
              :src="uploadIcon"
            />
            <image :src="item" v-for="(item, index) in form.relatedImages" :key="index" />
          </view>
        </view>
        <!-- tips -->
        <view class="tips">
          照片是任何潜在室友最重要的东西！上传多达10张照片，让你的房间脱颖而出。
        </view>
      </view>
    </view>
    <s-footer-btn btn-title="发布广告" @change="onBtn" />
  </view>
</template>

<script>
import { QiniuUploadToken, CreateRoom } from '@/api/index.js';
import { baseUrl } from '@/utils/config.js';
export default {
  name: 'About',
  components: {},
  data() {
    return {
      uploadIcon: 'http://cdn.lengnuanit.top/stacy/icon/upload-icon.png',
      form: {
        title: '', //标题
        describe: '', // 描述
        relatedImages: [], // 相关图片
      },
      uploadTokenOptions: {}, // 七牛云上传凭证
    };
  },
  computed: {},
  mounted() {},
  methods: {
    // 获取上传七牛云凭证
    getUploadToken() {
      QiniuUploadToken().then((res) => {
        if (res.code === 200) {
          this.uploadTokenOptions = res.data;
        }
      });
    },
    // 选择图片
    onSelectImage() {
      uni.chooseImage({
        count: 1, // 默认9
        sizeType: ['compressed', 'original'],
        sourceType: ['album', 'camera'],
        success: (chooseImageRes) => {
          const tempFilePaths = chooseImageRes.tempFilePaths;
          const { token, prefix } = this.uploadTokenOptions;
          uni.showLoading({
            title:'正在上传中...'
          })
          this.onImageUpload({
            filePath: tempFilePaths[0],
            token,
            prefix,
          });
        },
      });
    },
    // 上传事件
    onImageUpload({ filePath, token, prefix }) {
      uni.uploadFile({
        url: `${baseUrl}/api/base/upload`,
        filePath,
        name: 'file',
        formData: {},
        success: (res) => {
          uni.hideLoading()
          let { data } = JSON.parse(res.data);
          this.form.relatedImages.push(data.url);
        },
        fail: (err) => {
          console.log('fail', err);
        },
      });
    },
    async onBtn() {
      // 获取缓存的表单数据
      const room = uni.getStorageSync('room');

      const payload = {
        ...room,
        ...this.form,
        userId: uni.getStorageSync('userInfo').id,
      };
      const { code, message } = await CreateRoom(payload);
      if (code === 200) {
        uni.removeStorageSync('room')
        uni.showToast({
          title: message,
          icon: 'none',
        });
        let timer = setTimeout(() => {
          clearTimeout(timer);
          uni.switchTab({
            url: '/pages/home/home/index',
          });
        }, 2000);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.about-container {
  .content {
    padding: 94rpx 48rpx 250rpx 48rpx;
    box-sizing: border-box;
    .title {
      font-size: 72rpx;
      font-family: PingFang;
      font-weight: bold;
      color: #020433;
    }
    .main-box {
      .time-box {
        margin-top: 45rpx;
        box-sizing: border-box;
        .date {
          width: 100%;
          height: 108rpx;
          background: #ffffff;
          border: 2rpx solid #f0f0f0;
          border-radius: 12rpx 12rpx 12rpx 12rpx;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 32rpx;
          box-sizing: border-box;
          .l {
            display: flex;
            flex-direction: column;
            .t {
              font-size: 24rpx;
              font-family: PingFang;
              font-weight: 500;
              color: #404b69;
            }
            .times {
              font-size: 32rpx;
              font-family: PingFang;
              font-weight: bold;
              color: #020433;
            }
          }
          .img {
            width: 48rpx;
            height: 48rpx;
          }
          .img:active {
            opacity: 0.5;
          }
          input {
            font-size: 32rpx;
            font-family: Montserrat;
            font-weight: 500;
            color: #020433;
          }
          .plh {
            font-size: 32rpx;
            font-family: Montserrat;
            font-weight: 500;
            color: #020433;
          }
        }
      }
      .desc-txt {
        font-size: 24rpx;
        font-family: PingFang;
        font-weight: 500;
        color: #95a0b6;
      }
      .upload {
        width: 100%;
        margin-top: 53rpx;
        padding: 0 0 0 0;
        box-sizing: border-box;
        .warning-txt {
          display: flex;
          align-items: center;
          .l {
            font-size: 28rpx;
            font-family: PingFang;
            font-weight: bold;
            color: #020433;
          }
          .r {
            margin-left: 12rpx;
            font-size: 24rpx;
            font-family: PingFang;
            font-weight: bold;
            color: #fc2f39;
          }
        }
        .image-box {
          width: 100%;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          image {
            margin-top: 46rpx;
            width: 306rpx;
            height: 244rpx;
            border-radius: 10rpx;
          }
        }
      }
      .tips {
        margin-top: 54rpx;
        font-size: 24rpx;
        font-family: PingFang;
        font-weight: 500;
        color: #95a0b6;
      }
    }
  }
}
</style>
