<template>
  <!-- 我的 -->
  <view class="rb-mine-container">
    <rb-navbar />
    <view class="main-box">
      <HeaderInfo />
      <FuncMenu />
      <MineItem />
      <Version/>
    </view>
  </view>
</template>

<script>
import HeaderInfo from './components/header-info.vue';
import FuncMenu from './components/func-menu.vue';
import MineItem from './components/mine-item.vue';
import Version from './components/version.vue';
export default {
  name: 'RbMine',
  components: { HeaderInfo,FuncMenu,MineItem,Version },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss">
.rb-mine-container {
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgb(192, 209, 242),
    rgba(115, 159, 248, 0.53) 46.662%,
    rgba(37, 109, 255, 0) 95.045%
  );
  .main-box{
    padding: 0 16rpx;
  }
}
</style>
