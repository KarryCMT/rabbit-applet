<template>
  <!-- 首页 -->
  <view class="index-container">
    <view class="search-box">
      <view class="search-txt">搜索</view>
    </view>
    <scroll-view
      class="scroll-view-box"
      :style="{ height: H }"
      :enable-back-to-top="true"
      :scroll-y="true"
      :refresher-enabled="true"
    >
      <home-list-item v-for="item in list" :item="item" :key="item.id" />
    </scroll-view>
  </view>
</template>

<script>
import HomeListItem from './components/home-list-item.vue';
export default {
  name: 'RbIndex',
  components: { HomeListItem },
  data() {
    return {
      list: [
        {
          id: '001',
          title: '揭秘web3元宇宙千万级项目的财富密码：凭什么一个div卖一千块？',
          time: '2023-09-11 21:34',
          commentCount: 99,
          coverImg:
            'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/default.640d9a7.png',
        },
        {
          id: '001',
          title: '揭秘web3元宇宙千万级项目的财富密码：凭什么一个div卖一千块？',
          time: '2023-09-11 21:34',
          commentCount: 99,
          coverImg:
            'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/default.640d9a7.png',
        },
        {
          id: '001',
          title: '揭秘web3元宇宙千万级项目的财富密码：凭什么一个div卖一千块？',
          time: '2023-09-11 21:34',
          commentCount: 99,
          coverImg:
            'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/default.640d9a7.png',
        },
        {
          id: '001',
          title: '揭秘web3元宇宙千万级项目的财富密码：凭什么一个div卖一千块？',
          time: '2023-09-11 21:34',
          commentCount: 99,
          coverImg:
            'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/default.640d9a7.png',
        },
        {
          id: '001',
          title: '揭秘web3元宇宙千万级项目的财富密码：凭什么一个div卖一千块？',
          time: '2023-09-11 21:34',
          commentCount: 99,
          coverImg:
            'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/default.640d9a7.png',
        },
        {
          id: '001',
          title: '揭秘web3元宇宙千万级项目的财富密码：凭什么一个div卖一千块？',
          time: '2023-09-11 21:34',
          commentCount: 99,
          coverImg:
            'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/default.640d9a7.png',
        },
        {
          id: '001',
          title: '揭秘web3元宇宙千万级项目的财富密码：凭什么一个div卖一千块？',
          time: '2023-09-11 21:34',
          commentCount: 99,
          coverImg:
            'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/default.640d9a7.png',
        },
        {
          id: '001',
          title: '揭秘web3元宇宙千万级项目的财富密码：凭什么一个div卖一千块？',
          time: '2023-09-11 21:34',
          commentCount: 99,
          coverImg:
            'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/default.640d9a7.png',
        },
      ],
    };
  },
  computed: {
    H({ $H }) {
      return $H;
    },
  },
  created() {
    // 示例
    // this.$request('rabbit.home.get', { data: { id: 11 } }).then((res) => {
    //   console.log(res);
    // });
  },
  methods: {
    handleScrollToupper(e) {
      console.log(e, 'handleScrollToupper');
    },
  },
};
</script>
<style>
page {
  background-color: #fff;
}
</style>
<style lang="scss">
.index-container {
  width: 100%;
  height: 100%;
  .search-box {
    padding: 10rpx 20rpx 0 20rpx;
    box-sizing: border-box;
    .search-txt {
      width: 100%;
      height: 80rpx;
      background: #fff;
      border: 1px solid #e0e0e0;
      border-radius: 10rpx;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #999;
    }
  }
}
</style>
