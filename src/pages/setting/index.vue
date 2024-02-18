<template>
  <!-- 个人设置 -->
  <view class="rb-setting-container">
    <MineItem />
  </view>
</template>

<script>
import MineItem from './components/mine-item.vue';
export default {
  name: 'RbSetting',
  components: { MineItem },
  data() {
    return {};
  },
  created() {},
  onShow() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.rb-setting-container {
  width: 100%;
  height: 100%;
  background: #fff;
}
</style>
