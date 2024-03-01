<template>
  <!-- 搜索 -->
  <view class="dg-search-container">
    <SearchNavBar @change="onSearch" />
    <view class="main-box">
      <HistoryBox v-if="listData.length === 0" @search="onSearch"/>
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
      searchParams: {
        pageSize: 10,
        pageNum: 1,
      },
      listData: [],
    };
  },
  methods: {
    onSearch(keyword) {
      this.keyword = keyword;
      if (!this.keyword) {
        this.listData = []
        return
      }
      this.$request('dragon.search.page', {
        data: {
          ...this.searchParams,
          title: this.keyword,
        },
      }).then((res) => {
        if (res.data.list.length) {
          this.listData = res.data.list.map((v) => ({
            ...v,
            cover: v.picturesList.length ? v.picturesList[0].savePath : '',
          }));
        }
      });
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
