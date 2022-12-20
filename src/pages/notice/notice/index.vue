<template>
  <view class="notice-container">
    <MenuTabs
      v-model="menuTabsIndex"
      :newsCount="newsCount"
      :noticeCount="noticeCount"
      @change="onChange"
    />
    <swiper
      class="swiper-box"
      circular
      :current="menuTabsIndex"
      @change="onSwiperChange"
      :style="{ height: swiperHeight + 'px' }"
    >
      <swiper-item>
        <scroll-view
          enhanced
          :show-scrollbar="false"
          scroll-y
          class="card-item-box"
        >
          <NewsListItem
            v-for="(item, index) in newsList"
            :detail="item"
            :key="index"
            @change="onNewsChange"
          />
        </scroll-view>
      </swiper-item>
      <swiper-item>
        <scroll-view
          enhanced
          :show-scrollbar="false"
          scroll-y
          class="card-item-box"
        >
          <NoticeListItem
            v-for="(item, index) in noticeList"
            :detail="item"
            :key="index"
          />
        </scroll-view>
      </swiper-item>
    </swiper>
  </view>
</template>
<script>
import MenuTabs from './components/menu-tabs.vue';
import NoticeListItem from './components/notice-list-item.vue';
import NewsListItem from './components/news-list-item.vue';

export default {
  name: 'Notice',
  components: {
    MenuTabs,
    NoticeListItem,
    NewsListItem,
  },
  props: {},
  data() {
    return {
      menuTabsIndex: 0,
      newsList: [
        {
          name: 'CoCo',
          pic: 'https://picx.zhimg.com/9d10668e5_l.jpg?source=1940ef5c',
          receive: '有自己浴室的双人间，很实用！',
          send: '好的，我等你回复。',
          date: 1661586278487,
          isRead: true,
        },
        {
          name: 'CoCo',
          pic: 'https://picx.zhimg.com/9d10668e5_l.jpg?source=1940ef5c',
          receive: '有自己浴室的双人间，很实用！',
          date: 1661586278487,
          isRead: false,
          send: '好的，我等你回复。',
        },
        {
          name: 'CoCo',
          pic: 'https://picx.zhimg.com/9d10668e5_l.jpg?source=1940ef5c',
          receive: '有自己浴室的双人间，很实用！',
          date: 1661586278487,
          isRead: false,
          send: '好的，我等你回复。',
        },
        {
          name: 'CoCo',
          pic: 'https://picx.zhimg.com/9d10668e5_l.jpg?source=1940ef5c',
          date: 1661586278487,
          receive: '有自己浴室的双人间，很实用！',
          isRead: true,
          send: '好的，我等你回复。',
        },
        {
          name: 'CoCo',
          pic: 'https://picx.zhimg.com/9d10668e5_l.jpg?source=1940ef5c',
          receive: '有自己浴室的双人间，很实用！',
          date: 1661586278487,
          isRead: false,
          send: '好的，我等你回复。',
        },
        {
          name: 'CoCo',
          pic: 'https://picx.zhimg.com/9d10668e5_l.jpg?source=1940ef5c',
          date: 1661586278487,
          receive: '有自己浴室的双人间，很实用！',
          isRead: false,
          send: '好的，我等你回复。',
        },
        {
          name: 'CoCo',
          pic: 'https://picx.zhimg.com/9d10668e5_l.jpg?source=1940ef5c',
          receive: '有自己浴室的双人间，很实用！',
          isRead: false,
          date: 1661586278487,
          send: '好的，我等你回复。',
        },
        {
          name: 'CoCo',
          pic: 'https://picx.zhimg.com/9d10668e5_l.jpg?source=1940ef5c',
          receive: '有自己浴室的双人间，很实用！',
          isRead: false,
          date: 1661586278487,
          send: '好的，我等你回复。',
        },
      ],
      noticeList: [
        {
          name: 'CoCo',
          pic: 'https://picx.zhimg.com/9d10668e5_l.jpg?source=1940ef5c',
          type: 1,
          date: 1661586978487,
          isRead: false,
        },
        {
          name: 'CoCo',
          pic: 'https://picx.zhimg.com/9d10668e5_l.jpg?source=1940ef5c',
          type: 2,
          isRead: false,
          date: 1661581978487,
        },
        {
          name: 'CoCo',
          pic: 'https://picx.zhimg.com/9d10668e5_l.jpg?source=1940ef5c',
          type: 1,
          isRead: false,
          date: 1661586278487,
        },
        {
          name: 'CoCo',
          pic: 'https://picx.zhimg.com/9d10668e5_l.jpg?source=1940ef5c',
          type: 1,
          isRead: false,
          date: 1661586972487,
        },
        {
          name: 'CoCo',
          pic: 'https://picx.zhimg.com/9d10668e5_l.jpg?source=1940ef5c',
          type: 2,
          isRead: false,
          date: 1661586978487,
        },
        {
          name: 'CoCo',
          pic: 'https://picx.zhimg.com/9d10668e5_l.jpg?source=1940ef5c',
          type: 2,
          date: 1661586978487,
          isRead: false,
        },
        {
          name: 'CoCo',
          pic: 'https://picx.zhimg.com/9d10668e5_l.jpg?source=1940ef5c',
          type: 1,
          isRead: false,
          date: 1661586978187,
        },
        {
          name: 'CoCo',
          pic: 'https://picx.zhimg.com/9d10668e5_l.jpg?source=1940ef5c',
          isRead: true,
          type: 1,
          date: 1661586948487,
        },
      ],
      swiperHeight: 0,
    };
  },
  computed: {
    newsCount() {
      const len = this.newsList.filter((v) => v.isRead);
      return len.length;
    },
    noticeCount() {
      const len = this.noticeList.filter((v) => v.isRead);
      return len.length;
    },
  },
  onLoad(){
    // this.onWsMessage()
  },
  created() {},
  mounted() {
    this.initHeight();
  },
  methods: {
    initHeight() {
      const { windowHeight } = uni.getSystemInfoSync(); //结构出当前聊天可视区高度
      this.swiperHeight = windowHeight - 96 / 2; //当前聊天部分的高度
    },
    onChange(v) {
      this.menuTabsIndex = v;
    },
    onSwiperChange({ detail }) {
      this.menuTabsIndex = detail.current;
    },
    // 消息点击
    onNewsChange(row) {
      uni.navigateTo({
        url: `/pages/notice/chat/index`,
      });
    },
    // 获取接口ws推送的数据
    onWsMessage(){
      this.socket.on('message',(data)=>{
        console.log(data,'获取接口ws推送的数据');
      })
    }
  },
};
</script>
<style lang="scss" scoped>
.notice-container {
  width: 100%;
  height: 100vh;
  .swiper-box {
    height: 100%;
    .card-item-box {
      height: 100%;
      margin-bottom: 100rpx;
    }
  }
}
</style>
