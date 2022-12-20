<template>
  <!-- account -->
  <view class="account-container">
    <s-progress-bar :width="80" />

    <view class="title-box">
      <text class="text">创建你的个人</text>
      <text class="text">账户</text>
    </view>
    <view class="form-box">
      <form @submit="formSubmit" @reset="formReset">
        <view class="form-item">
          <view class="tips">全名</view>
          <input
            placeholder="请输入"
            placeholder-class="plh"
            maxlength="18"
            name="username"
            v-model="form.nickName"
          />
        </view>
        <view class="form-item-sex">
          <view class="sex-title">性别</view>
          <view class="sex-box">
            <view
              :class="[form.sex === index ? 'active' : 'items']"
              v-for="(item, index) in [
                { name: '男', value: 1 },
                { name: '女', value: 0 },
                { name: '保密', value: 2 },
              ]"
              :key="index"
              @click="form.sex = index"
              >{{ item.name }}</view
            >
          </view>
        </view>
        <view class="form-item m-top">
          <s-date-picker @change="handleChangeDatePicker">
            <view class="date">
              <view class="l">
                <text class="t">出生日期</text>
                <text class="times">{{ titleTime || '请选择' }}</text>
              </view>
              <image class="img" :src="dateIcon" />
            </view>
          </s-date-picker>
        </view>
        <view class="form-item m-top">
          <view class="tips">联系电话</view>
          <view class="phone-box">
            <view class="tips-txt">86+</view>
            <input
              placeholder="请输入"
              placeholder-class="plh"
              maxlength="11"
              type="number"
              name="phone"
              v-model="form.phone"
            />
          </view>
        </view>
        <view class="form-item m-top">
          <view class="tips">邮箱地址</view>
          <input
            placeholder="请输入"
            placeholder-class="plh"
            maxlength="20"
            name="username"
            v-model="form.email"
          />
        </view>
        <view class="form-item m-top">
          <view class="tips">密码</view>
          <input
            placeholder="请输入"
            placeholder-class="plh"
            type="password"
            maxlength="18"
            name="password"
            v-model="form.password"
          />
        </view>
        <view class="form-item m-top">
          <view class="tips">确认密码</view>
          <input
            placeholder="请输入"
            placeholder-class="plh"
            type="password"
            maxlength="18"
            name="password"
            v-model="confirmPassword"
          />
        </view>
        <s-region-picker @change="handleChangeJobPicker" :jsonData="jobData">
          <view class="form-item m-top">
            <view class="tips">你的职业是什么？</view>
            <view :class="[form.occupation ? 'txt' : 'tips']">{{
              form.occupation || '请选择职业'
            }}</view>
          </view>
        </s-region-picker>
        <s-region-picker
          @change="handleChangeRegionPicker"
          :jsonData="zoneData"
        >
          <view class="form-item m-top">
            <view class="tips">工作地点</view>
            <view :class="[form.workPlace ? 'txt' : 'tips']">{{
              form.workPlace || '请选择工作地点'
            }}</view>
          </view>
        </s-region-picker>
        <view class="form-item-textarea m-top">
          <view class="tips">个人简介</view>
          <view class="textarea">
            <textarea
              placeholder="请输入"
              placeholder-class="plh"
              auto-height
              maxlength="100"
              v-model="form.profile"
            ></textarea>
          </view>
        </view>
      </form>
    </view>
    <!-- 上传照片 -->
    <view class="upload-avatar">
      <view class="warning-txt">
        <text class="l">个人头像</text>
        <text class="r">(最大数量1)</text>
      </view>
      <view class="image-box">
        <image @click="onSelectImage('avatar')" :src="uploadIcon" />
        <image v-if="form.avatarUrl" :src="form.avatarUrl" />
      </view>
    </view>
    <!-- 上传照片 -->
    <view class="upload">
      <view class="warning-txt">
        <text class="l">个人照片</text>
        <text class="r">(最大数量5)</text>
      </view>
      <view class="image-box">
        <image
          @click="onSelectImage('photo')"
          v-if="form.photo.length < 5"
          :src="uploadIcon"
        />
        <image :src="item" v-for="(item, index) in form.photo" :key="index" />
      </view>
    </view>
    <view class="footer-box">
      <button @click="notSecurity">下一步</button>
    </view>
  </view>
</template>

<script>
import {
  BaseSendEmail,
  QiniuUploadToken,
  JobTreeList,
  AreaTreeList,
} from '@/api/index.js';
import { baseUrl } from '@/utils/config.js';

export default {
  name: 'account',
  components: {},
  data() {
    return {
      confirmPassword: '',
      form: {
        nickName: '',
        password: '',
        sex: 0,
        birthDate: '',
        phone: '',
        email: '',
        occupation: '',
        workPlace: '',
        profile: '',
        avatarUrl:
          'https://pic1.zhimg.com/v2-a62801183ee3defb684fd4856e4c8f12_is.jpg?source=32738c0c', // 个人头像
        photo: [],
      },
      dateIcon: 'http://cdn.lengnuanit.top/stacy/icon/date-icon.png',
      uploadIcon: 'http://cdn.lengnuanit.top/stacy/icon/upload-icon.png',
      titleTime: '',
      uploadTokenOptions: {}, // 七牛云上传凭证
      jobData: [], // 职务数据
      zoneData: [], // 行政区域数据
    };
  },

  created() {
    AreaTreeList().then((res) => {
      if (res.code === 200) {
        this.zoneData = res.data;
      }
    });
    JobTreeList().then((res) => {
      if (res.code === 200) {
        this.jobData = res.data;
      }
    });
  },
  methods: {
    // 提交表单
    formSubmit({ detail }) {
      const { value } = detail;
    },
    // 校验表单
    notSecurity() {
      // 判断密码是否一致
      if (this.confirmPassword !== this.form.password) {
        uni.showToast({
          title: '密码不一致',
          icon: 'none',
        });
        return;
      }
      // 获取缓存的表单数据
      const register = uni.getStorageSync('register');
      if (register) {
        Object.assign(register, {
          ...this.form,
        });
        uni.setStorageSync('register', register);
      }
      // 判断是否填写邮箱号码
      if (!register.email) {
        uni.showToast({
          title: '邮箱地址必填',
          icon: 'none',
        });
        return;
      }
      this.sendEmail(register.email);
    },
    // 请求邮箱接口
    async sendEmail(email) {
      const { code, data } = await BaseSendEmail({ email });
      if (code === 200) {
        uni.navigateTo({
          url: `/base/steps/security/index`,
        });
      }
    },
    // 选择图片
    onSelectImage(type) {
      uni.chooseImage({
        count: 1, // 默认9
        sizeType: ['compressed', 'original'],
        sourceType: ['album', 'camera'],
        success: (chooseImageRes) => {
          uni.showLoading({
            title: '正在上传中...',
          });
          const tempFilePaths = chooseImageRes.tempFilePaths;
          this.onImageUpload(
            {
              filePath: tempFilePaths[0],
            },
            type
          );
        },
      });
    },
    // 通用上传事件
    onImageUpload({ filePath }, type) {
      uni.uploadFile({
        url: `${baseUrl}/api/base/upload`,
        filePath,
        name: 'file',
        formData: {},
        success: (res) => {
          uni.hideLoading();
          let { data } = JSON.parse(res.data);
          if (type === 'avatar') {
            this.form.avatarUrl = data.url;
          } else {
            this.form.photo.push(data.url);
          }
        },
        fail: (err) => {
          console.log('fail', err);
        },
      });
    },
    // 选择的行政区域
    handleChangeRegionPicker({ detail }) {
      this.form.workPlace = detail.value[2];
    },
    // 选择职位
    handleChangeJobPicker({ detail }) {
      this.form.occupation = detail.value[2];
    },
    // 选择的日期
    handleChangeDatePicker(date, timestamp) {
      this.form.birthDate = timestamp;
      this.titleTime = date;
    },
  },
};
</script>

<style lang="scss">
.plh {
  font-size: 28rpx;
  font-family: PingFang;
  font-weight: 500;
  color: #95a0b6;
}
.account-container {
  width: 100%;
  height: 100%;
  .title-box {
    margin: 90rpx 0 0 50rpx;
    display: flex;
    flex-direction: column;
    .text {
      font-size: 60rpx;
      font-family: PingFang;
      font-weight: bold;
      color: #020433;
    }
  }
  .form-box {
    margin-top: 89rpx;
    padding: 0 48rpx;
    .form-item {
      width: 100%;
      height: 108rpx;
      background: #ffffff;
      border: 2rpx solid #f0f0f0;
      border-radius: 12rpx 12rpx 12rpx 12rpx;
      padding: 13rpx 34rpx 13rpx 34rpx;
      box-sizing: border-box;
      .tips {
        font-size: 24rpx;
        font-family: PingFang;
        font-weight: bold;
        color: #404b69;
      }
      .txt {
        font-size: 32rpx;
        font-family: PingFang;
        font-weight: bold;
        color: #020433;
      }

      input {
        font-size: 32rpx;
        font-family: Montserrat;
        font-weight: 500;
        color: #020433;
      }
      .date {
        width: 100%;
        background: #ffffff;
        border-radius: 12rpx 12rpx 12rpx 12rpx;
        display: flex;
        align-items: center;
        justify-content: space-between;
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
      }
      .phone-box {
        display: flex;
        align-items: center;
        .tips-txt {
          text-align: center;
          width: 100rpx;
          font-size: 32rpx;
          font-family: PingFang;
          font-weight: bold;
          color: #95a0b6;
        }

        input {
          font-size: 32rpx;
          font-family: PingFang;
          font-weight: bold;
          color: #020433;
        }
      }
    }
    .form-item-sex {
      .sex-title {
        margin-top: 53rpx;
        font-size: 28rpx;
        font-family: PingFang;
        font-weight: bold;
        color: #020433;
      }
      .sex-box {
        margin-top: 37rpx;
        display: flex;
        align-items: center;
        .items,
        .active {
          width: 222rpx;
          height: 80rpx;
          background: #fff;
          border: 2px solid #0f73ee;
          font-size: 26rpx;
          font-family: PingFang;
          font-weight: bold;
          color: #0f73ee;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .items:first-child,
        .active:first-child {
          border-radius: 12rpx 0rpx 0rpx 12rpx;
          border-right: none;
        }

        .items:last-child,
        .active:last-child {
          border-radius: 0px 12rpx 12rpx 0px;
          border-left: none;
        }
        .active {
          background: #0f73ee;
          // border: 2px solid #0f73ee;
          font-size: 26rpx;
          font-family: PingFang;
          font-weight: bold;
          color: #ffffff;
        }
      }
    }
    .form-item-textarea {
      width: 100%;
      // height: 200rpx;
      background: #ffffff;
      border: 2rpx solid #f0f0f0;
      border-radius: 12rpx 12rpx 12rpx 12rpx;
      padding: 13rpx 34rpx 13rpx 34rpx;
      box-sizing: border-box;
      .tips {
        font-size: 24rpx;
        font-family: PingFang;
        font-weight: bold;
        color: #404b69;
      }
      .textarea {
        padding-top: 16rpx;
        textarea {
          font-size: 32rpx;
          font-family: PingFang;
          font-weight: bold;
          color: #020433;
        }
      }
    }
    .m-top {
      margin-top: 32rpx;
    }
    .form-item:nth-child(2) {
      margin-top: 32rpx;
    }
  }
  .upload,
  .upload-avatar {
    width: 100%;
    margin-top: 53rpx;
    padding: 0 48rpx 194rpx 48rpx;
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
  .upload-avatar {
    padding: 0 48rpx 24rpx 48rpx !important;
    .image-box {
      width: 100%;
      display: flex;
      align-items: center;
      image {
        margin-top: 46rpx;
        width: 200rpx;
        height: 200rpx;
        border-radius: 50%;
      }
      image:first-child {
        margin-top: 46rpx;
        width: 306rpx;
        height: 244rpx;
        border-radius: 10rpx;
      }
    }
  }
  .footer-box {
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 9;
    height: 184rpx;
    background: #ffffff;
    padding: 0 48rpx;
    box-sizing: border-box;
    button {
      width: 100%;
      height: 92rpx;
      background: linear-gradient(135deg, #0f73ee 0%, #c644fc 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 28rpx;
      font-family: PingFang;
      font-weight: bold;
      color: #ffffff;
    }
    button:active {
      opacity: 0.5;
    }
  }
}
</style>
