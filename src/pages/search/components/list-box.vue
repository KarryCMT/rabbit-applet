<template>
  <!-- 我的 -->
  <view class="list-box">
    <ListItem :keyword="keyword" :form="item" v-for="(item, index) in list" :key="index"> </ListItem>
  </view>
</template>

<script>
import ListItem from './list-item.vue';
export default {
  name: 'list-box',
  components: {
    ListItem,
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    keyword: {
      type: String,
      default: '',
    },
  },
  components: {},
  data() {
    return {};
  },
  methods: {
  },
};
</script>

<style lang="scss">
.list-box {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 0 20rpx;
  box-sizing: border-box;
  .items {
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
}
</style>
