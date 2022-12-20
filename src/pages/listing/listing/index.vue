<template>
  <view class="listing-container">
    <HeaderInfo />
    <view class="menu-box">
      <MainMenu
        @change="onMainMenu"
        v-for="(item, index) in tenantsList"
        :key="index"
        :detail="item"
      />
    </view>
  </view>
</template>
<script>
import { UserInfo } from '@/api/index.js';
import HeaderInfo from './components/header-info.vue';
import MainMenu from './components/main-menu.vue';
export default {
  name: 'Listing',
  components: { HeaderInfo, MainMenu },
  props: {},
  data() {
    return {
      // 租客
      tenantsList: [
        {
          name: '发布新的广告',
          icon: 'http://cdn.lengnuanit.top/stacy/listing/ic_new_post@2x.png',
          path: '/advertising/seek/index',
        },
        {
          name: '发布我的房间',
          path: '/room/address/index',
          icon: 'http://cdn.lengnuanit.top/stacy/listing/ic_new_room@2x.png',
        },
        {
          name: '切换到房东模式',
          icon: 'http://cdn.lengnuanit.top/stacy/listing/ic_switch@2x.png',
        },
        {
          name: '邀请朋友和其他人',
          icon: 'http://cdn.lengnuanit.top/stacy/listing/ic_invite@2x.png',
        },
        {
          name: '帮助中心',
          icon: 'http://cdn.lengnuanit.top/stacy/listing/ic_help@2x.png',
        },
        {
          name: '设置',
          icon: 'http://cdn.lengnuanit.top/stacy/listing/ic_setting@2x.png',
          path: '/pages/listing/setting/index',
        },
      ],
      // 房东
      landlordList: [
        {
          name: '增强广告展现',
          icon: 'http://cdn.lengnuanit.top/stacy/listing/ic_boot@2x.png',
        },
        {
          name: '发布我的房间',
          path: '/room/address/index',
          icon: 'http://cdn.lengnuanit.top/stacy/listing/ic_new_room@2x.png',
        },
        {
          name: '切换到租客模式',
          icon: 'http://cdn.lengnuanit.top/stacy/listing/ic_switch@2x.png',
        },
        {
          name: '邀请朋友和其他人',
          icon: 'http://cdn.lengnuanit.top/stacy/listing/ic_invite@2x.png',
        },
        {
          name: '帮助中心',
          icon: 'http://cdn.lengnuanit.top/stacy/listing/ic_help@2x.png',
        },
        {
          name: '设置',
          icon: 'http://cdn.lengnuanit.top/stacy/listing/ic_setting@2x.png',
        },
      ],
    };
  },
  created() {},
  onShow() {
    const { id } = uni.getStorageSync('userInfo');
    this.onUserInfo({ id });
  },
  mounted() {},
  methods: {
    async onUserInfo({ id }) {
      const { code, data } = await UserInfo({ id });
      if (code === 200) {
        // uni.setStorageSync('userInfo',data)
      }
    },
    onMainMenu({ path }) {
      uni.navigateTo({
        url: path,
      });
    },
  },
};
</script>
<style>
page {
  background: #f8f8ff;
}
</style>
<style lang="scss" scoped>
.listing-container {
  .menu-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
}
</style>
