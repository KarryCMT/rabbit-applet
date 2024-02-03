<template>
  <!-- 我的 -->
  <view class="publish-container">
    <CoverBox />
    <view class="form-box">
      <view class="title-form-box">
        <input
          class="input"
          maxlength="20"
          placeholder="请输入标题"
          v-model="formDate.title"
          :placeholder-style="placeholderStyle"
        />
      </view>
      <TopicBox />
      <view class="body-form-box">
        <textarea
          auto-height
          class="textarea"
          maxlength="500"
          placeholder="请输入正文"
          v-model="formDate.content"
          :placeholder-style="placeholderStyle"
        />
      </view>
    </view>
    <FooterBox @publish="onPublish"/>
  </view>
</template>

<script>
import CoverBox from './components/cover-box.vue';
import FooterBox from './components/footer-box.vue';
import TopicBox from './components/topic-box.vue';
export default {
  name: 'DgPublish',
  components: {
    CoverBox,
    FooterBox,
    TopicBox,
  },

  data() {
    return {
      formDate: {
        title: '',
        content: '',
      },
      placeholderStyle: `
        color: #b9b9b9;
        font-size: 28rpx;
        font-weight: 100;
        `,
    };
  },
  methods: {
    onPublish(){
      uni.switchTab({
        url:'/pages/home/index'
      })
    }
  },
};
</script>

<style lang="scss">
.publish-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .form-box {
    padding: 20rpx;
    height: 100%;
    .title-form-box {
      width: 100%;
      height: 80rpx;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #f2efef;
      .input {
        color: #353535;
        width: 100%;
        font-size: 28rpx;
      }
    }
    .body-form-box {
      height: 900rpx;
      margin-top: 20rpx;
      .textarea {
        color: #353535;
        line-height: 50rpx;
        font-size: 28rpx;
        width: 100%;
        height: 100% !important;
        overflow: scroll;
      }
    }
  }
}
.placeholder-class {
  color: #b4b4b4;
  font-size: 28rpx;
  font-weight: 200;
}
</style>
