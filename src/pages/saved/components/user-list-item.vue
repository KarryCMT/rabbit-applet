<template>
  <view class="user-list-item-box">
    <view class="box">
      <image :src="detail.pic"></image>
      <view class="content">
        <view class="t">
          <text class="username">{{ detail.name }}</text>
          <image class="ver" :src="verifiedIcon"></image>
        </view>
        <view class="b">
          <image
            :class="[detail.sex === 1 ? 'boy' : 'girl']"
            :src="detail.sex === 1 ? boyIcon : girlIcon"
          ></image>
          <text class="age">{{ detail.age }}</text>
          <view class="icon"></view>
          <text class="type">{{ detail.type === 1 ? '房东' : '租客' }}</text>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  name: 'UserListItem',
  components: {},
  props: {
    detail: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      verifiedIcon:'http://cdn.lengnuanit.top/stacy/icon/verified-icon.png',
      boyIcon:'http://cdn.lengnuanit.top/stacy/icon/boy-icon.png',
      girlIcon:'http://cdn.lengnuanit.top/stacy/icon/girl-icon.png',
    };
  },
  created() {},
  mounted() {},
  methods: {
    onChange(index) {
      this.currentTabsIndex = index;
      this.$emit('change', this.currentTabsIndex);
    },
  },
};
</script>
<style lang="scss" scoped>
.user-list-item-box {
  width: 100%;
  height: 150rpx;
  background: #ffffff;
  box-shadow: 0px 4rpx 8rpx 0px rgba(2, 4, 51, 0.08);
  display: flex;
  align-items: center;
  padding-left: 48rpx;
  .box {
    width: 100%;
    height: 100%;
    border-bottom: 1px solid #f0f0f0;
    display: flex;
    align-items: center;
    image {
      width: 80rpx;
      height: 80rpx;
      border-radius: 40rpx;
    }
    .content {
      margin-left: 32rpx;
      .t {
        .username {
          font-size: 28rpx;
          font-family: Montserrat;
          font-weight: 500;
          color: #020433;
        }
        .ver {
          margin-left: 18rpx;
          width: 24rpx;
          height: 28rpx;
        }
      }
      .b {
        margin-top: 13rpx;
        display: flex;
        align-items: center;
        .boy {
          width: 30rpx;
          height: 30rpx;
        }
        .girl {
          width: 21rpx;
          height: 30rpx;
        }
        .age {
          margin-left: 13rpx;
          font-size: 26rpx;
          font-family: Montserrat;
          font-weight: 400;
          color: #404b69;
        }
        .icon {
          margin-left: 20rpx;
          width: 7rpx;
          height: 7rpx;
          background: #404b69;
          border-radius: 50%;
        }
        .type {
          margin-left: 11rpx;
          font-size: 26rpx;
          font-family: PingFang;
          font-weight: 500;
          color: #404b69;
        }
      }
    }
  }
}
</style>
