<template>
  <view class="profile-container">
    <s-nav-bar isBack isWhite />
    <CoverSwiper :list="coverList" />
    <ContentCard :info="userInfo"/>
  </view>
</template>
<script>
import CoverSwiper from './components/cover-swiper.vue';
import ContentCard from './components/content-card.vue';
import { UserInfo } from '@/api/index.js';
export default {
  name: 'Profile',
  components: {  CoverSwiper, ContentCard },
  props: {},
  data() {
    return {
      userInfo:{},
      coverList: [
       
      ],
    };
  },
  created() {
    const { id } = uni.getStorageSync('userInfo');
    this.onGetUserInfo({ id });
  },
  onShow() {},
  mounted() {},
  methods: {
    async onGetUserInfo({id}) {
      const { code, data } = await UserInfo({ id });
      if (code === 200) {
        this.userInfo= data
        this.coverList = data.photo
      }
    },
  },
};
</script>
<style>
page {
  background: #f8f8ff;
}
</style>
<style lang="scss" scoped></style>
