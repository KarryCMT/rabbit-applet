<template>
  <!-- 搜索 -->
  <view class="dg-search-container">
    <SearchNavBar @change="onSearch" />
    <view class="main-box">
      <HistoryBox v-if="listData.length === 0" />
      <ListBox :keyword="keyword" v-else :list="listData" />
    </view>
  </view>
</template>

<script>
import SearchNavBar from './components/search-nav-bar.vue';
import HistoryBox from './components/history-box.vue';
import ListBox from './components/list-box.vue';
export default {
  name: 'DgSearch',
  components: {
    SearchNavBar,
    HistoryBox,
    ListBox,
  },

  data() {
    return {
      keyword: '',
      listData: [
        {
          title: '阿斯顿撒的撒打算打算',
          time: 1706216031000,
          commentCount: 12,
          url: 'https://i0.hdslb.com/bfs/archive/8c2ef4eb3c2b2d82ecfcd1718f440636f546c73c.jpg@672w_378h_1c_!web-home-common-cover.webp',
        },
        {
          title: '阿斯顿撒的撒打算打算',
          time: 1706416131000,
          commentCount: 12,
          url: 'https://i0.hdslb.com/bfs/archive/8c2ef4eb3c2b2d82ecfcd1718f440636f546c73c.jpg@672w_378h_1c_!web-home-common-cover.webp',
        },
      ],
    };
  },
  methods: {
    onSearch(keyword) {
      this.keyword = keyword;
    },
  },
};
</script>

<style lang="scss">
.dg-search-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
