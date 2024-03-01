<template>
  <!-- 我的 -->
  <view class="list-item" @click="onDetail">
    <view class="content">
      <view class="title" v-html="highlightContent"></view>
      <view class="other">
        <text>{{ formatTime(form.createTime) }}</text>
        <text>{{ form.commentCount }}评</text>
      </view>
    </view>
    <image class="cover" :src="form.cover" />
  </view>
</template>

<script>
import { formatTime } from '@/utils/index.js';
export default {
  name: 'list-box',
  props: {
    form: {
      type: Object,
      default: () => {},
    },
    keyword: {
      type: String,
      default: '',
    },
  },
  components: {},
  computed: {
    highlightContent() {
      const regex = new RegExp(this.keyword, 'gi'); // g表示全局匹配，i表示不区分大小写
      const result = this.form.title.replace(
        regex,
        `<span style="color: red">${this.keyword}</span>`
      );

      return result;
    },
  },
  data() {
    return {};
  },
  methods: {
    formatTime,
    onDetail(){
      const id = this.form.id
      uni.navigateTo({
        url:`/pages/detail/index?id=${id}`
      })
    }
  },
};
</script>

<style lang="scss" scoped>
.list-item {
  margin-top: 40rpx;
  width: 100%;
  display: flex;
  justify-content: space-between;
  .content {
    padding-right: 20rpx;
    box-sizing: border-box;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .title {
      font-size: 30rpx;
      color: #232323;
    }

    .other {
      display: flex;
      justify-content: space-between;
      color: #9f9f9f;
      font-size: 26rpx;
    }
  }
  .cover {
    width: 220rpx;
    height: 150rpx;
    border-radius: 10rpx;
  }
}
</style>
