<template>
  <!-- 我的 -->
  <view class="dg-detail-container">
    <DetailNavBar :top="scrollTop" />
    <TitleBox :form="{}" />
    <BodyBox />
    <CommentBox />
    <FooterBox />
  </view>
</template>

<script>
import TitleBox from './components/title-box.vue';
import DetailNavBar from './components/detail-nav-bar.vue';
import BodyBox from './components/body-box.vue';
import FooterBox from './components/footer-box.vue';
import CommentBox from './components/comment-box.vue';
export default {
  name: 'RbMine',
  components: { TitleBox, BodyBox, FooterBox, CommentBox, DetailNavBar },
  data() {
    return {
      scrollTop: 0,
    };
  },
  onPageScroll(v) {
    this.onScroll(v);
  },
  methods: {
    // 滚动
    onScroll(v) {
      const { scrollTop } = v;
      this.scrollTop = scrollTop.toFixed(0);
    },
  },
};
</script>

<style lang="scss">
.dg-detail-container {
  width: 100%;
  padding-bottom: calc(env(safe-area-inset-bottom) + 75rpx);
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
  .main-box {
    padding: 0 16rpx;
    box-sizing: border-box;
  }
}
</style>
