<template>
  <view class="saved-container">
    <MenuTabs class="menu-tabs" v-model="menuTabsIndex" @change="onChange" />
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
          <s-card
            v-for="(item, index) in itemList"
            :item="item"
            :key="index"
            @detail="onDetail"
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
          <UserListItem
            v-for="(item, index) in userList"
            :detail="item"
            :key="index"
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
          <MessageListItem
            v-for="(item, index) in messageList"
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
import UserListItem from './components/user-list-item.vue';
import MessageListItem from './components/message-list-item.vue';
import { GetCollectList } from "@/api/index.js";
export default {
  name: 'Saved',
  components: {
    MenuTabs,
    UserListItem,
    MessageListItem,
  },
  data() {
    return {
      menuTabsIndex: 0,
      itemList: [
      ],
      userList: [
        {
          name: 'CoCo',
          type: 1,
          pic: 'https://pic1.zhimg.com/v2-abed1a8c04700ba7d72b45195223e0ff_im.jpeg',
          sex: 1,
          age: 12,
        },
        {
          name: 'CoCo',
          type: 1,
          pic: 'https://pic1.zhimg.com/v2-abed1a8c04700ba7d72b45195223e0ff_im.jpeg',
          sex: 1,
          age: 12,
        },
        {
          name: 'CoCo',
          type: 1,
          pic: 'https://pic1.zhimg.com/v2-abed1a8c04700ba7d72b45195223e0ff_im.jpeg',
          sex: 1,
          age: 12,
        },
        {
          name: 'CoCo',
          type: 1,
          pic: 'https://pic1.zhimg.com/v2-abed1a8c04700ba7d72b45195223e0ff_im.jpeg',
          sex: 1,
          age: 12,
        },
        {
          name: 'CoCo',
          type: 1,
          pic: 'https://pic1.zhimg.com/v2-abed1a8c04700ba7d72b45195223e0ff_im.jpeg',
          sex: 1,
          age: 12,
        },
        {
          name: 'CoCo',
          type: 1,
          pic: 'https://pic1.zhimg.com/v2-abed1a8c04700ba7d72b45195223e0ff_im.jpeg',
          sex: 1,
          age: 12,
        },
        {
          name: 'CoCo',
          type: 1,
          pic: 'https://pic1.zhimg.com/v2-abed1a8c04700ba7d72b45195223e0ff_im.jpeg',
          sex: 1,
          age: 12,
        },
        {
          name: 'CoCo',
          type: 1,
          pic: 'https://pic1.zhimg.com/v2-abed1a8c04700ba7d72b45195223e0ff_im.jpeg',
          sex: 1,
          age: 12,
        },
      ],
      messageList: [
        {
          title: '为什么很多人都喜欢住在美国纽约？你应该了解的',
          type: '生活方式',
          pic: 'https://pic1.zhimg.com/v2-f7f80f8e043765df0caf0135f15f0bfa_1440w.jpg',
          time: '8月24日, 2022',
        },
        {
          title: '有没有让你第一眼就觉得很惊艳的风景照？',
          type: '生活方式',
          pic: 'https://pic1.zhimg.com/80/v2-80164e3d80a76b0ded0dbc0f8f075ea6_1440w.jpg?source=1940ef5c',
          time: '8月24日, 2022',
        },
      ],
      swiperHeight: 0,
    };
  },
  created() {
    this.onGetCollectList(1)
  },
  mounted() {
    this.initHeight();
  },
  methods: {
    // 获取指定收藏类型
   async onGetCollectList(type){
      const {code,data} = await GetCollectList({type,
        userId:uni.getStorageSync('userInfo').id
      })
      if (code === 200) {
        console.log(data);
        this.itemList = data
      }
    },
    initHeight() {
      const { windowHeight } = uni.getSystemInfoSync(); //结构出当前聊天可视区高度
      this.swiperHeight = windowHeight - 96 / 2; //当前聊天部分的高度
    },
    onChange(v) {
      this.menuTabsIndex = v;
    },
    onSwiperChange({ detail }) {
      this.menuTabsIndex = detail.current;
      this.onGetCollectList(detail.current+1)
    },
    onDetail(row) {},
  },
};
</script>
<style>
page{
  background-color: #f6f8ff;
}
</style>
<style lang="scss" scoped>
.saved-container {
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
