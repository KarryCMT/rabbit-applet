<template>
  <!-- 我的 -->
  <view class="dg-follow-container">
    <view class="title-box">
      <text class="follows">我的关注（{{ list.length }}）</text>
      <view class="right">
        <text class="sort">排序</text>
        <image class="icon" :src="sortIcon"></image>
      </view>
    </view>
    <view class="list-box" v-if="list.length">
      <view class="items" v-for="item in list" :key="item.id">
        <image class="cover" :src="item.avatar"></image>
        <view class="content">
          <text class="name">{{ item.name }}</text>
          <text class="desc">{{ item.desc }}</text>
        </view>
        <view class="btn" @click="() => onCancelFollow(item)">
          <view class="box">已关注</view>
        </view>
      </view>
    </view>
    <rb-empty v-else />
  </view>
</template>

<script>
import sortIcon from '@/static/svg/sort.svg';
export default {
  name: 'DgFollow',
  components: {},
  data() {
    return {
      sortIcon,
      list: [],
      searchForm: {
        pageNum: 1,
        pageSize: 10,
      },
    };
  },
  computed: {
    userId() {
      return uni.getStorageSync('userInfo').id;
    },
  },
  created() {
    this.onLoadData();
  },
  methods: {
    // 取消关注
    onCancelFollow(row) {
      uni.showModal({
        title: '提示',
        content: '确定取消关注该用户么？',
        success: (res) => {
          if (res.confirm) {
            const url = 'dragon.follow.cancel';
            this.$request(url, {
              data: {
                followedId: row.followedId,
                userId: this.userId,
              },
            }).then((res) => {
              this.onLoadData();
            });
          } else if (res.cancel) {
            console.log('用户点击取消');
          }
        },
      });
    },
    // 加载数据
    onLoadData() {
      this.$request('dragon.follow.page', {
        data: { ...this.searchForm, userId: this.userId },
      }).then((res) => {
        this.list = res.data.list;
      });
    },
  },
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
      .icon {
        width: 30rpx;
        height: 30rpx;
      }
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
        width: 100rpx;
        height: 100rpx;
        border-radius: 50%;
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
      }
      .btn {
        display: flex;
        align-items: center;
        .box {
          border: 1px solid #9c9c9c;
          color: #9c9c9c;
          font-weight: 200;
          padding: 5rpx 20rpx;
          box-sizing: border-box;
          font-size: 28rpx;
          border-radius: 50rpx;
        }
        .box:active {
          opacity: 0.5;
        }
      }
    }
  }
}
</style>
