<template>
  <!-- 我的 -->
  <view class="rb-mine-container">
    <header-info :item="{
      title:'小狐狸不吃素',
      time:'20:00',
      coverImg:'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/default.640d9a7.png'
    }"/>
  </view>
</template>

<script>
import HeaderInfo from './components/header-info.vue';
export default {
  name: 'RbMine',
  components: {HeaderInfo},
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
}
</style>
