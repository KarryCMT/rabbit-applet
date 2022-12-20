<template>
  <view class="menu-tabs-box">
    <view
      @click="onChange(index)"
      :class="[currentTabsIndex === index ? 'items-active' : 'items']"
      v-for="(item, index) in menuList"
      :key="index"
    >
      <text>{{ item.name }}</text>
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
  },
  data() {
    return {
      currentTabsIndex:this.value,
      menuList: [
        {
          name: '房间',
        },
        {
          name: '用户',
        },
        {
          name: '资讯',
        },
      ],
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
    width: 250px;
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
