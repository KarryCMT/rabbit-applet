<template>
  <view class="main-menu-box" @click="onChange(detail)">
    <image :src="detail.icon"></image>
    <text class="username">{{ detail.name }}</text>
  </view>
</template>
<script>
export default {
  name: 'MainMenu',
  components: {},
  props: {
    detail: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    onChange(row){
      this.$emit('change',row)
    }
  },
};
</script>
<style lang="scss" scoped>
.main-menu-box {
  width: 302rpx;
  height: 264rpx;
  background: #ffffff;
  box-shadow: 0px 4rpx 10rpx 0px rgba(0, 0, 0, 0.05);
  border-radius: 8rpx;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 48rpx;
  image {
    width: 76rpx;
    height: 76rpx;
  }
  text {
    margin-top: 40rpx;
    font-size: 26rpx;
    font-family: PingFang;
    font-weight: bold;
    color: #020433;
  }
}
.main-menu-box:active{
  opacity: .5;
}

</style>
