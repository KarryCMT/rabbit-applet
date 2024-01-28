<template>
  <!-- 我的 -->
  <view class="dg-follow-container">
    <view class="list-box">
      <view class="items" v-for="item in list" :key="item.id">
        <image class="cover" :src="item.url"></image>
        <view class="content">
          <text class="name">{{ item.name }}</text>
          <text class="desc">{{ item.desc }}</text>
          <text class="time">创建日期：{{ item.time || ''}}</text>
        </view>
        <view class="btn">
          <image class="icon" :src="deleteIcon"></image>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import deleteIcon from '@/static/svg/delete.svg';
export default {
  name: 'DgFollow',
  components: {},
  data() {
    return {
      deleteIcon,
      list: [
        {
          name: '李同学的啊',
          desc: '这是描述',
          time:'2023-09-12',
          url: 'https://i0.hdslb.com/bfs/archive/e9f829266a1c8c21b7d4ba14e8fb5e941dc59d4d.jpg@672w_378h_1c_!web-home-common-cover.webp',
        },
        {
          name: '李同学的啊',
          time:'2023-09-12',
          desc: '这是描述',
          url: 'https://i0.hdslb.com/bfs/archive/e9f829266a1c8c21b7d4ba14e8fb5e941dc59d4d.jpg@672w_378h_1c_!web-home-common-cover.webp',
        },
        {
          name: '李同学的啊',
          time:'2023-09-12',
          desc: '这是描述',
          url: 'https://i0.hdslb.com/bfs/face/fef46d61fefa684aff591c4648a899a81a5fc092.jpg@240w_240h_1c_1s_!web-avatar-nav.webp',
        },
        {
          name: '李同学的啊',
          time:'2023-09-12',
          desc: '这是描述',
          url: 'https://i0.hdslb.com/bfs/archive/e9f829266a1c8c21b7d4ba14e8fb5e941dc59d4d.jpg@672w_378h_1c_!web-home-common-cover.webp',
        },
        {
          name: '李同学的啊',
          desc: '这是描述',
          url: 'https://i0.hdslb.com/bfs/face/fef46d61fefa684aff591c4648a899a81a5fc092.jpg@240w_240h_1c_1s_!web-avatar-nav.webp',
        },
        {
          name: '李同学的啊',
          desc: '这是描述',
          url: 'https://i0.hdslb.com/bfs/face/fef46d61fefa684aff591c4648a899a81a5fc092.jpg@240w_240h_1c_1s_!web-avatar-nav.webp',
        },
        {
          name: '李同学的啊',
          desc: '这是描述',
          url: 'https://i0.hdslb.com/bfs/face/fef46d61fefa684aff591c4648a899a81a5fc092.jpg@240w_240h_1c_1s_!web-avatar-nav.webp',
        },
        {
          name: '李同学的啊',
          desc: '这是描述',
          url: 'https://i0.hdslb.com/bfs/face/fef46d61fefa684aff591c4648a899a81a5fc092.jpg@240w_240h_1c_1s_!web-avatar-nav.webp',
        },
        {
          name: '李同学的啊',
          desc: '这是描述',
          url: 'https://i0.hdslb.com/bfs/face/fef46d61fefa684aff591c4648a899a81a5fc092.jpg@240w_240h_1c_1s_!web-avatar-nav.webp',
        },
        {
          name: '李同学的啊',
          desc: '这是描述',
          url: 'https://i0.hdslb.com/bfs/face/fef46d61fefa684aff591c4648a899a81a5fc092.jpg@240w_240h_1c_1s_!web-avatar-nav.webp',
        },
        {
          name: '李同学的啊',
          desc: '这是描述',
          url: 'https://i0.hdslb.com/bfs/face/fef46d61fefa684aff591c4648a899a81a5fc092.jpg@240w_240h_1c_1s_!web-avatar-nav.webp',
        },
        {
          name: '李同学的啊',
          desc: '这是描述',
          url: 'https://i0.hdslb.com/bfs/face/fef46d61fefa684aff591c4648a899a81a5fc092.jpg@240w_240h_1c_1s_!web-avatar-nav.webp',
        },
        {
          name: '李同学的啊',
          desc: '这是描述',
          url: 'https://i0.hdslb.com/bfs/face/fef46d61fefa684aff591c4648a899a81a5fc092.jpg@240w_240h_1c_1s_!web-avatar-nav.webp',
        },
        {
          name: '李同学的啊',
          desc: '这是描述',
          url: 'https://i0.hdslb.com/bfs/face/fef46d61fefa684aff591c4648a899a81a5fc092.jpg@240w_240h_1c_1s_!web-avatar-nav.webp',
        },
        {
          name: '李同学的啊',
          desc: '这是描述',
          url: 'https://i0.hdslb.com/bfs/face/fef46d61fefa684aff591c4648a899a81a5fc092.jpg@240w_240h_1c_1s_!web-avatar-nav.webp',
        },
        {
          name: '李同学的啊',
          desc: '这是描述',
          url: 'https://i0.hdslb.com/bfs/face/fef46d61fefa684aff591c4648a899a81a5fc092.jpg@240w_240h_1c_1s_!web-avatar-nav.webp',
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss">
.dg-follow-container {
  width: 100%;
  height: 100%;
  .title-box {
    padding: 20rpx;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    .follows {
      color: #5f5f5f;
      font-size: 28rpx;
      font-weight: 300;
    }
    .right {
      display: flex;
      align-items: center;

      .sort {
        font-size: 28rpx;
        color: #646464;
      }
    }
    .right:active {
      opacity: 0.5;
    }
  }
  .list-box {
    padding: 0 16rpx;
    box-sizing: border-box;
    .items {
      margin-top: 20rpx;
      display: flex;
      justify-content: space-between;
      .cover {
        width: 200rpx;
        height: 150rpx;
        border-radius: 10rpx;
      }
      .content {
        flex: 1;
        padding-left: 20rpx;
        box-sizing: border-box;
        padding-top: 5rpx;
        padding-bottom: 5rpx;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .desc {
          font-size: 26rpx;
          color: #818181;
          font-weight: 300;
        }
        .time{
          font-size: 26rpx;
          color: #818181;
          font-weight: 300;
        }
      }
      .btn {
        display: flex;
        align-items: center;
        .icon {
          width: 50rpx;
          height: 50rpx;
        }
        .icon:active{
          opacity: .5;
        }
      }
    }
  }
}
</style>
