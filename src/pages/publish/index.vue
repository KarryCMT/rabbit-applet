<template>
  <!-- 我的 -->
  <view class="publish-container">
    <CoverBox ref="CoverBoxRef" />
    <view class="form-box">
      <view class="title-form-box">
        <input
          class="input"
          maxlength="20"
          placeholder="请输入标题"
          v-model="modelForm.title"
          :placeholder-style="placeholderStyle"
        />
      </view>
      <TopicBox @change="onTopicChange" />
      <view class="body-form-box">
        <textarea
          cursor-spacing="200"
          maxlength="300"
          placeholder="请输入正文"
          v-model="modelForm.content"
          placeholder-style="color: #b9b9b9;font-size: 30rpx;font-weight: 200;"
        />
      </view>
      <view class="topic-box">
        <view class="items" v-for="item in TopicArr" :key="item.id">
          <image class="icon" :src="messageTopicIcon"></image>
          <text class="name">{{ item.name }}</text>
        </view>
      </view>
    </view>
    <FooterBox @publish="onPublish" />
  </view>
</template>

<script>
import CoverBox from './components/cover-box.vue';
import FooterBox from './components/footer-box.vue';
import TopicBox from './components/topic-box.vue';
import messageTopicIcon from '@/static/svg/message-topic.svg';
export default {
  name: 'DgPublish',
  components: {
    CoverBox,
    FooterBox,
    TopicBox,
  },

  data() {
    return {
      messageTopicIcon,
      TopicArr: [],
      modelForm: {
        userId: '100',
        topicId: '100',
        title: '',
        content: '',
        pictures: '',
        remark: '',
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
      this.onCreate();
    },
    // 创建API
    onCreate() {
      this.$request('dragon.post.create', { data: { ...this.modelForm } }).then(
        (res) => {
          uni.switchTab({
            url: '/pages/home/index',
          });
        }
      );
    },
    // 选择的话题
    onTopicChange(arr) {
      this.TopicArr = arr;
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
    .topic-box {
      display: flex;
      flex-wrap: wrap;
      margin-left: -15rpx;
      margin-top: -15rpx;
      .items {
        margin-top: 15rpx;
        margin-left: 15rpx;
        display: flex;
        align-items: center;
        background: #e6e6e6;
        border-radius: 50rpx;
        padding: 5rpx 20rpx;
        box-sizing: border-box;
        .icon {
          width: 30rpx;
          height: 30rpx;
        }
        .name {
          margin-left: 5rpx;
          color: #333;
          font-size: 26rpx;
        }
      }
    }
  }
}
</style>
