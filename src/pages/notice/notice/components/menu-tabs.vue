<template>
  <view class="menu-tabs-box">
    <view
      @click="onChange(0)"
      :class="[currentTabsIndex === 0 ? 'items-active' : 'items']"
    >
      <text>{{ `消息 (${newsCount})` }}</text>
    </view>
    <view
      @click="onChange(1)"
      :class="[currentTabsIndex === 1 ? 'items-active' : 'items']"
    >
      <text>{{ `系统通知 (${noticeCount})` }}</text>
    </view>
  </view>
</template>
<script>
export default {
  name: 'MenuTabs',
  components: {},
  props: {
    value: {
      type: [Number, String],
    },
    newsCount:{
      type:Number,
      default:0,
    },
     noticeCount:{
      type:Number,
      default:0,
    }
  },
  data() {
    return {
      currentTabsIndex: this.value,
    };
  },
  watch: {
    value: {
      handler(v) {
        this.currentTabsIndex = v;
      },
      deep: true,
    },
  },
  created() {},
  mounted() {},
  methods: {
    onChange(index) {
      this.currentTabsIndex = index;
      this.$emit('change', this.currentTabsIndex);
    },
  },
};
</script>
<style lang="scss" scoped>
.menu-tabs-box {
  width: 100%;
  height: 96rpx;
  background: #ffffff;
  box-shadow: 0px 4rpx 8rpx 0px rgba(2, 4, 51, 0.08);
  display: flex;
  align-items: center;
  .items,
  .items-active {
    width: 374rpx;
    height: 96rpx;
    border-bottom: 1px solid #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    text {
      font-size: 26rpx;
      font-family: PingFang SC;
      font-weight: bold;
      color: #95a0b6;
    }
  }
  .items-active {
    border-bottom: 1px solid #0f73ee !important;
    text {
      color: #0f73ee !important;
    }
  }
}
</style>
