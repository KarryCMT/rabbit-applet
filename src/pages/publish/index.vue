<template>
  <!-- 我的 -->
  <view class="publish-container">
    <CoverBox ref="CoverBoxRef"/>
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
      <TopicBox @change="onTopicChange"/>
      <view class="body-form-box">
        <textarea
          cursor-spacing="200"
          maxlength="300"
          placeholder="请输入正文"
          v-model="formDate.content"
          placeholder-style="color: #b9b9b9;font-size: 30rpx;font-weight: 200;"
        />
      </view>
    </view>
    <FooterBox @publish="onPublish" />
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
        font-weight: 200;
        `,
    };
  },
  methods: {
    onPublish() {
      uni.switchTab({
        url: '/pages/home/index',
      });
    },
    onTopicChange(arr){
      console.log('onTopicChange',arr);

    },
  },
};
</script>

<style lang="scss" scoped>
.publish-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .form-box {
    flex: 1;
    padding: 20rpx;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
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
      flex: 1;
      margin-top: 20rpx;
      textarea {
        color: #353535;
        line-height: 50rpx;
        width: 100%;
        height: 500rpx;
      }
    }
  }
}
</style>
