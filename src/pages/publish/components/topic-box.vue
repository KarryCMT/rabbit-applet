<template>
  <view class="topic-box">
    <scroll-view
      class="scroll-view"
      scroll-x="true"
      scroll-left="0"
    >
      <view
        v-for="(item, index) in topicList"
        :key="index"
        class="items"
        >{{ item.name }}</view
      >
    </scroll-view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      topicList: [
        {
          id: 1,
          name: '二手',
        },
        {
          id: 2,
          name: '相亲专区',
        },
        {
          id: 3,
          name: '二手',
        },
        {
          id: 4,
          name: 'windows系统',
        },
        {
          id: 5,
          name: 'windows系统',
        },
        {
          id: 4,
          name: 'windows系统',
        },
        {
          id: 5,
          name: 'windows系统',
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss">
.topic-box {
  width: 100%;
  padding-top: 20rpx;
  box-sizing: border-box;
  .scroll-view {
    white-space: nowrap;
    width: 100%;
  }
  .items {
    margin-left: 20rpx;
    padding: 8rpx 20rpx;
    background: #f6f6f6;
    color: #949494;
    height: 36rpx;
    border-radius: 36rpx;
    line-height: 36rpx;
    display: inline-block;
    text-align: center;
    font-size: 26rpx;
    font-weight: 100;
  }
  .items:active{
    opacity: .5;
  }
  .items:first-child{
    margin-left: 0;
  }
}
</style>
