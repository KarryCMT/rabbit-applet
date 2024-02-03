<template>
  <!-- 我的 -->
  <view class="rb-mine-container">
    <rb-navbar />
    <view class="main-box">
      <HeaderInfo />
      <FuncMenu />
      <MineItem />
    </view>
  </view>
</template>

<script>
import HeaderInfo from './components/header-info.vue';
import FuncMenu from './components/func-menu.vue';
import MineItem from './components/mine-item.vue';
export default {
  name: 'RbMine',
  components: { HeaderInfo,FuncMenu,MineItem },
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
  background: #fff;
  .main-box{
  }
}
</style>
