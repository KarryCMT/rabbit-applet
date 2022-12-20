<template>
  <view class="home-container">
    <view class="content" v-if="isSkeleton">
      <s-card
        v-for="(item, index) in itemList"
        :item="item"
        :key="index"
        @detail="onDetail"
        @star="onStar"
      />
    </view>
    <s-skeleton :node="rectNodes" :show="!isSkeleton" />
    <s-tool type="map" @map="onMap" />
  </view>
</template>
<script>
import { RoomPageList, CreateCollect } from "@/api/index.js";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      isSkeleton: true,
      itemList: [],
      hasNextPage: false, // 是否有下一页
      rectNodes: [
        {
          id: "",
          dataset: {},
          left: 48 / 2,
          right: 0,
          top: 24 / 2,
          radius: 80 / 2,
          bottom: 32,
          width: 80 / 2,
          height: 80 / 2,
        },
        {
          id: "",
          dataset: {},
          left: 160 / 2,
          right: 0,
          top: 35 / 2,
          bottom: 32,
          width: 187 / 2,
          height: 21 / 2,
        },
        {
          id: "",
          dataset: {},
          left: 364 / 2,
          right: 0,
          top: 32 / 2,
          bottom: 32,
          width: 24 / 2,
          height: 28 / 2,
        },
        {
          id: "",
          dataset: {},
          left: 166 / 2,
          right: 0,
          top: 74 / 2,
          bottom: 32,
          width: 21 / 2,
          height: 30 / 2,
        },
        {
          id: "",
          dataset: {},
          left: 201 / 2,
          right: 0,
          top: 78 / 2,
          bottom: 32,
          width: 29 / 2,
          height: 21 / 2,
        },
        {
          id: "",
          dataset: {},
          left: 250 / 2,
          right: 0,
          top: 86 / 2,
          bottom: 32,
          radius: 6 / 2,
          width: 6 / 2,
          height: 6 / 2,
        },
        {
          id: "",
          dataset: {},
          left: 275 / 2,
          right: 0,
          top: 76 / 2,
          bottom: 32,
          width: 50 / 2,
          height: 25 / 2,
        },
        {
          id: "",
          dataset: {},
          left: 670 / 2,
          right: 0,
          top: 48 / 2,
          bottom: 32,
          width: 32 / 2,
          height: 8 / 2,
        },
        {
          id: "",
          dataset: {},
          left: 0,
          right: 360.20001220703125,
          top: 60,
          bottom: 171,
          width: 100,
          height: 480 / 2,
        },
        {
          id: "",
          dataset: {},
          left: 52 / 2,
          right: 0,
          top: 642 / 2,
          bottom: 373,
          width: 24 / 2,
          height: 28 / 2,
        },
        {
          id: "",
          dataset: {},
          left: 89 / 2,
          right: 183,
          top: 647 / 2,
          bottom: 533,
          width: 99 / 2,
          height: 20 / 2,
        },
        {
          id: "",
          dataset: {},
          left: 209 / 2,
          right: 0,
          top: 647 / 2,
          bottom: 457,
          width: 37 / 2,
          height: 20 / 2,
        },
        {
          id: "",
          dataset: {},
          left: 49 / 2,
          right: 0,
          top: 697 / 2,
          bottom: 532,
          width: 631 / 2,
          height: 78 / 2,
        },
        {
          id: "",
          dataset: {},
          left: 49 / 2,
          right: 0,
          top: 789 / 2,
          bottom: 532,
          width: 65 / 2,
          height: 26 / 2,
        },
        {
          id: "",
          dataset: {},
          left: 131 / 2,
          right: 0,
          top: 789 / 2,
          bottom: 532,
          width: 50 / 2,
          height: 26 / 2,
        },
        {
          id: "",
          dataset: {},
          left: 51 / 2,
          right: 0,
          top: 832 / 2,
          bottom: 532,
          width: 100 / 2,
          height: 25 / 2,
        },
        {
          id: "",
          dataset: {},
          left: 172 / 2,
          right: 0,
          top: 842 / 2,
          bottom: 532,
          radius: 6 / 2,
          width: 6 / 2,
          height: 6 / 2,
        },
        {
          id: "",
          dataset: {},
          left: 193 / 2,
          right: 0,
          top: 832 / 2,
          bottom: 532,
          width: 117 / 2,
          height: 25 / 2,
        },

        // 第二个
        {
          id: "",
          dataset: {},
          left: 48 / 2,
          right: 0,
          top: 948 / 2,
          radius: 80 / 2,
          bottom: 32,
          width: 80 / 2,
          height: 80 / 2,
        },
        {
          id: "",
          dataset: {},
          left: 160 / 2,
          right: 0,
          top: 961 / 2,
          bottom: 32,
          width: 187 / 2,
          height: 21 / 2,
        },
        {
          id: "",
          dataset: {},
          left: 364 / 2,
          right: 0,
          top: 956 / 2,
          bottom: 32,
          width: 24 / 2,
          height: 28 / 2,
        },
        {
          id: "",
          dataset: {},
          left: 166 / 2,
          right: 0,
          top: 998 / 2,
          bottom: 32,
          width: 21 / 2,
          height: 30 / 2,
        },
        {
          id: "",
          dataset: {},
          left: 201 / 2,
          right: 0,
          top: 1002 / 2,
          bottom: 32,
          width: 29 / 2,
          height: 21 / 2,
        },
        {
          id: "",
          dataset: {},
          left: 250 / 2,
          right: 0,
          top: 1010 / 2,
          bottom: 32,
          radius: 6 / 2,
          width: 6 / 2,
          height: 6 / 2,
        },
        {
          id: "",
          dataset: {},
          left: 275 / 2,
          right: 0,
          top: 1000 / 2,
          bottom: 32,
          width: 50 / 2,
          height: 25 / 2,
        },
        {
          id: "",
          dataset: {},
          left: 670 / 2,
          right: 0,
          top: 984 / 2,
          bottom: 32,
          width: 32 / 2,
          height: 8 / 2,
        },
        {
          id: "",
          dataset: {},
          left: 0,
          right: 0,
          top: 1052 / 2,
          bottom: 171,
          width: 100,
          height: 480 / 2,
        },
        {
          id: "",
          dataset: {},
          left: 52 / 2,
          right: 0,
          top: 642 / 2,
          bottom: 373,
          width: 24 / 2,
          height: 28 / 2,
        },
        {
          id: "",
          dataset: {},
          left: 89 / 2,
          right: 183,
          top: 647 / 2,
          bottom: 533,
          width: 99 / 2,
          height: 20 / 2,
        },
        {
          id: "",
          dataset: {},
          left: 209 / 2,
          right: 0,
          top: 647 / 2,
          bottom: 457,
          width: 37 / 2,
          height: 20 / 2,
        },
        {
          id: "",
          dataset: {},
          left: 49 / 2,
          right: 0,
          top: 697 / 2,
          bottom: 532,
          width: 631 / 2,
          height: 78 / 2,
        },
        {
          id: "",
          dataset: {},
          left: 49 / 2,
          right: 0,
          top: 789 / 2,
          bottom: 532,
          width: 65 / 2,
          height: 26 / 2,
        },
        {
          id: "",
          dataset: {},
          left: 131 / 2,
          right: 0,
          top: 789 / 2,
          bottom: 532,
          width: 50 / 2,
          height: 26 / 2,
        },
        {
          id: "",
          dataset: {},
          left: 51 / 2,
          right: 0,
          top: 832 / 2,
          bottom: 532,
          width: 100 / 2,
          height: 25 / 2,
        },
        {
          id: "",
          dataset: {},
          left: 172 / 2,
          right: 0,
          top: 842 / 2,
          bottom: 532,
          radius: 6 / 2,
          width: 6 / 2,
          height: 6 / 2,
        },
        {
          id: "",
          dataset: {},
          left: 193 / 2,
          right: 0,
          top: 832 / 2,
          bottom: 532,
          width: 117 / 2,
          height: 25 / 2,
        },
      ],
      pageIndex: 1,
      Getaddress:''
    };
  },
  created() {
    this.onGetPageList({ pageIndex: 1 }, "init");
    this.onGetCurrentMap();
  },
  mounted() {},
  onReachBottom() {
    if (!this.hasNextPage) {
      uni.showToast({
        title: "没有更多数据了",
        icon: "none",
      });
      return;
    }
    this.pageIndex = this.hasNextPage ? (this.pageIndex += 1) : this.pageIndex;
    this.onGetPageList({ pageIndex: this.pageIndex }, "page");
  },
  onPullDownRefresh() {
    this.onGetPageList({ pageIndex: 1 }, "init");
    let timer = setTimeout(() => {
      uni.showToast({
        title: "刷新成功",
        icon: "none",
      });
      clearTimeout(timer);
      uni.stopPullDownRefresh();
    }, 1000);
  },
  methods: {
    // 获取分页数据
    async onGetPageList(params, type) {
      this.isSkeleton = false;
      const { code, data } = await RoomPageList({ ...params, pageSize: 10 });
      if (code === 200) {
        this.isSkeleton = true;
        this.hasNextPage = data.length > 0;
        this.itemList = type === "page" ? [...this.itemList, ...data] : data;
        console.log(this.itemList);
      }
    },
    onMap() {
      uni.navigateTo({
        url: `/pages/home/map/index`,
      });
    },
    onDetail({ id, }) {
      uni.navigateTo({
        url: `/pages/home/detail/index?id=${id}&Getaddress=${this.Getaddress}`,
      });
    },
    async onStar({ id }) {
      const { code } = await CreateCollect({
        type: 1,
        typeId: id,
        userId: uni.getStorageSync("userInfo").id,
      });
      if (code === 200) {
        console.log("收藏成功");
      }
    },
    // 获取当前位置
    onGetCurrentMap() {
      this.QQMapWX.reverseGeocoder({
        success: (res) => {
          const { district } = res.result.ad_info;
          uni.setNavigationBarTitle({
            title: district,
          });
          //成功后的回调 声明对象接
          this.Getaddress = res.result.address
          console.log(this.Getaddress, "成功之后的回调");
        },
        fail: (error) => {
          console.error(error);
        },
      });
    },
  },
};
</script>
<style>
page {
  background-color: #f6f8ff;
}
</style>
<style lang="scss" scoped>
.home-container {
  width: 100%;
}
</style>
