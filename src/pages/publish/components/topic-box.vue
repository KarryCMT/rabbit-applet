<template>
  <view class="topic-box">
    <scroll-view class="scroll-view" scroll-x="true" scroll-left="0">
      <view
        v-for="(item, index) in topicList"
        :key="item.id"
        :class="[item.isCheck ? 'items select-items' : 'items']"
        @tap="onClick(item, index)"
        >{{ item.topicName }}</view
      >
    </scroll-view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      topicList: [],
      currentIndex: -1,
    };
  },
  watch: {
    topicList: {
      handler(arr) {
        this.$emit(
          'change',
          arr.find((v) => v.isCheck)
        );
      },
      deep: true,
    },
  },
  created() {
    this.onInitData();
  },
  methods: {
    onInitData() {
      this.$request('dragon.topic.all').then((res) => {
        this.topicList = res.data
          ? res.data.map((v) => ({ ...v, isCheck: false }))
          : [];
      });
    },
    onClick(row, index) {
      // 如果是当前项取反
      if (this.currentIndex === index) {
        this.topicList[index].isCheck = !this.topicList[index].isCheck;
      } else {
        // 不是先取消所有状态
        this.topicList.forEach((item) => {
          item.isCheck = false;
        });
        // 当前项设置为true
        this.topicList[index].isCheck = true;
      }
      //记录当前index
      this.currentIndex = index;
    },
  },
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
  .items,
  .select-items {
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
  .select-items {
    color: #fff !important;
    background-color: #d94338 !important;
  }
  .items:active {
    opacity: 0.5;
  }
  .items:first-child {
    margin-left: 0;
  }
}
</style>
