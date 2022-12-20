<template>
  <view class="room-address-container">
    <s-progress-bar :width="20" />
    <view class="search-box">
      <view class="box">
        <view class="left">
          <image class="icon" :src="searchIcon"></image>
          <input
            v-model="searchValue"
            maxlength="15"
            class="txt"
            placeholder="请输入地址"
          />
        </view>
        <view class="btn" @click="onSearchMap">搜索</view>
      </view>
    </view>
    <s-map :options="options" :markers="markers" />

    <view class="footer-btn">
      <view class="box" @click="onNext">确认</view>
    </view>
    <s-popup
      ref="popup"
      type="bottom"
      height="600"
      width="500"
      radius="6"
      :showCloseIcon="true"
    >
      <scroll-view :scroll-y="true" class="map-city-box">
        <view
          @click="onCityChange(item)"
          class="items"
          v-for="(item, index) in mapList"
          :key="index"
        >
          <image
            class="icon"
            src="http://cdn.lengnuanit.top/stacy/map/ic_pin_on_map%402x.png"
          />
          <view class="content">
            <text class="title">{{ item.title }}</text>
            <text class="desc">{{ item.address }}</text>
          </view>
        </view>
      </scroll-view>
    </s-popup>
  </view>
</template>

<script>
export default {
  name: 'RoomAddress',
  components: {},
  data() {
    return {
      searchValue: '',
      searchIcon: 'http://cdn.lengnuanit.top/stacy/icon/search-icon.png',
      options: {
        longitude: null,
        latitude: null,
        width: '100%',
        height: '100%',
      },
      mapList: [],
      markers: [
        {
          title: '当前位置',
          id: 1001,
          width: 50,
          height: 50,
          latitude: null,
          longitude: null,
          iconPath:
            'http://cdn.lengnuanit.top/stacy/map/ic_pin_on_map%402x.png',
        },
      ],
    };
  },
  mounted() {
    this.initHeight();
    this.onGetLocation();
  },
  methods: {
    initHeight() {
      const { windowHeight } = uni.getSystemInfoSync(); //结构出当前聊天可视区高度
      uni
        .createSelectorQuery()
        .select('.search-box')
        .boundingClientRect(({ height }) => {
          this.options.height = windowHeight - height - 200 / 2 + 'px'; //当前聊天部分的高度
          console.log(this.options.height);
        })
        .exec();
    },
    onGetLocation() {
      this.markers = [];
      uni.getLocation({
        type: 'wgs84',
        success: ({ longitude, latitude }) => {
          this.options.longitude = longitude;
          this.options.latitude = latitude;
          this.markers.push({
            id: 1001,
            width: 56 / 2,
            height: 80 / 2,
            latitude: latitude,
            longitude: longitude,
            iconPath:
              'http://cdn.lengnuanit.top/stacy/map/ic_pin_on_map%402x.png',
          });
        },
        fail: (err) => {
          console.log(err);
        },
      });
    },
    onSearchMap() {
      if (this.searchValue.trim()) {
        // 调用接口
        this.QQMapWX.search({
          keyword: this.searchValue.trim(), //搜索关键词
          location: `${this.options.latitude},${this.options.longitude}`, //设置周边搜索中心点
          success: (res) => {
            //搜索成功后的回调
            this.mapList = [];
            for (var i = 0; i < res.data.length; i++) {
              this.mapList.push({
                // 获取返回结果，放到mks数组中
                title: res.data[i].title,
                address: res.data[i].address,
                id: Date.now(),
                latitude: res.data[i].location.lat,
                longitude: res.data[i].location.lng,
                iconPath:
                  'http://cdn.lengnuanit.top/stacy/map/ic_pin_on_map%402x.png', //图标路径
                width: 56 / 2,
                height: 80 / 2,
              });
            }
            console.log(this.markers, ' this.markers');
            this.$refs.popup.show(); // 显示
          },
          fail: (res) => {
            console.log(res);
          },
          complete: (res) => {
            console.log(res);
          },
        });
      }
    },
    onNext() {
      uni.setStorageSync('room', {
        longitude: this.options.longitude,
        latitude: this.options.latitude,
      });
      uni.navigateTo({
        url: `/room/information/index`,
      });
    },
    onCityChange({ latitude, longitude, title }) {
      this.markers = [];
      this.options.longitude = longitude;
      this.options.latitude = latitude;
      this.markers.push({
        id: 1001,
        width: 56 / 2,
        height: 80 / 2,
        title: title,
        latitude: latitude,
        longitude: longitude,
        iconPath: 'http://cdn.lengnuanit.top/stacy/map/ic_pin_on_map%402x.png',
      });
      console.log(this.markers);

      this.$refs.popup.hide(); // 显示
    },
  },
};
</script>

<style lang="scss" scoped>
.room-address-container {
  widows: 100%;
  .search-box {
    position: sticky;
    padding: 0 0rpx;
    box-sizing: border-box;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;

    .box {
      width: 100%;
      height: 84rpx;
      // background: #ccc;
      box-shadow: 0px 10rpx 20rpx 0px rgba(0, 0, 0, 0.08);
      display: flex;
      align-items: center;
      padding: 0 33rpx 0 20rpx;
      box-sizing: border-box;
      justify-content: space-between;
      .left {
        display: flex;
        align-items: center;
        .icon {
          width: 32rpx;
          height: 32rpx;
        }
        input {
          flex: 1;
        }
        .txt {
          flex: 1;
          margin-left: 37rpx;
          font-size: 28rpx;
          font-family: PingFang;
          font-weight: bold;
          color: #95a0b6;
        }
      }

      .btn {
        width: 100rpx;
        height: 70rpx;
        border-radius: 16rpx;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 28rpx;
        font-family: PingFang;
        font-weight: bold;
        color: #ffffff;
        background: linear-gradient(135deg, #0f73ee 0%, #c644fc 100%);
      }
      .btn:active {
        opacity: 0.5;
      }
    }
  }
  .footer-btn {
    position: fixed;
    width: 100%;
    padding: 0 48rpx;
    box-sizing: border-box;
    bottom: 0;
    left: 0;
    padding-bottom: env(safe-area-inset-bottom); /*兼容 IOS>11.2*/
    right: 0;
    .box {
      width: 100%;
      height: 100rpx;
      border-radius: 16rpx;
      background: linear-gradient(135deg, #0f73ee 0%, #c644fc 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 28rpx;
      font-family: PingFang;
      font-weight: bold;
      color: #ffffff;
    }
    .box:active {
      opacity: 0.5;
    }
  }
  .map-city-box {
    width: 100%;
    height: 600rpx;
    overflow: hidden;
    .items {
      width: 100%;
      padding: 20rpx 20rpx;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #fdfdfd;
      .icon {
        width: 36rpx;
        height: 60rpx;
      }
      .content {
        margin-left: 20rpx;
        flex: 1;
        display: flex;
        flex-direction: column;
        .title {
          font-size: 28rpx;
          font-family: PingFang;
          font-weight: bold;
          color: #333;
        }
        .desc {
          font-size: 28rpx;
          font-family: PingFang;
          font-weight: bold;
          color: #666;
        }
      }
    }
    .items:active {
      opacity: 0.5;
    }
  }
}
</style>
