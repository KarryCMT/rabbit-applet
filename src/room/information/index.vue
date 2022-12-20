<template>
  <!-- information -->
  <view class="information-container">
    <s-progress-bar :width="30" />
    <view class="content">
      <text class="title">房间</text>
      <view class="title">详细信息</view>
      <view class="main-box">
        <!-- 我要以什么身份发布 -->
        <view class="common-title-box">
          <text>我要以什么身份发布</text>
          <text></text>
        </view>
        <!-- 我要以什么身份发布 -->
        <view class="occupation-box">
          <view
            class="items-box"
            v-for="(item, index) in identityOptions"
            :key="index"
            @click="form.identityType = index"
          >
            <view
              :class="[form.identityType === index ? 'cover-active' : 'cover']"
            >
              <image
                :src="form.identityType === index ? item.selectIcon : item.icon"
              ></image>
            </view>
            <text class="name">{{ item.text }}</text>
          </view>
        </view>
        <!-- 房间类型 -->
        <view class="common-title-box">
          <text>房间类型</text>
          <text></text>
        </view>
        <!-- 房间类型 -->
        <view class="occupation-box">
          <view
            class="items-box"
            v-for="(item, index) in houseOptions"
            :key="index"
            @click="form.houseType = index"
          >
            <view
              :class="[form.houseType === index ? 'cover-active' : 'cover']"
            >
              <image
                :src="form.houseType === index ? item.selectIcon : item.icon"
              ></image>
            </view>
            <text class="name">{{ item.text }}</text>
          </view>
        </view>
        <!-- 概况 -->
        <view class="common-title-box">
          <text>概况</text>
          <text></text>
        </view>
        <!-- 卧室数量 -->
        <view class="common-subtitle-box"> 卧室数量 </view>
        <!-- 卧室数量 -->
        <view class="form-item-sex">
          <view class="option-group-box">
            <view
              :class="[form.bedroomCount === index ? 'active' : 'items']"
              v-for="(item, index) in [
                { name: '1', value: 1 },
                { name: '2', value: 2 },
                { name: '3', value: 3 },
                { name: '4', value: 4 },
                { name: '5', value: 5 },
                { name: '6', value: 6 },
                { name: '7', value: 7 },
              ]"
              :key="index"
              @click="form.bedroomCount = index"
              >{{ item.name }}</view
            >
          </view>
        </view>

        <!-- 浴室数量 -->
        <view class="common-subtitle-box"> 浴室数量 </view>
        <!-- 浴室数量 -->
        <view class="form-item-sex">
          <view class="option-group-box">
            <view
              :class="[form.showersCount === index ? 'active' : 'items']"
              v-for="(item, index) in [
                { name: '1', value: 1 },
                { name: '2', value: 2 },
                { name: '3', value: 3 },
                { name: '4', value: 4 },
                { name: '5', value: 5 },
                { name: '6', value: 6 },
                { name: '7', value: 7 },
              ]"
              :key="index"
              @click="form.showersCount = index"
              >{{ item.name }}</view
            >
          </view>
        </view>

        <!-- 可租房间数量 -->
        <view class="common-subtitle-box"> 可租房间数量 </view>
        <!-- 可租房间数量 -->
        <view class="form-item-sex">
          <view class="option-group-box">
            <view
              :class="[form.availableCount === index ? 'active' : 'items']"
              v-for="(item, index) in [
                { name: '1', value: 1 },
                { name: '2', value: 2 },
                { name: '3', value: 3 },
                { name: '4', value: 4 },
                { name: '5', value: 5 },
                { name: '6', value: 6 },
                { name: '7', value: 7 },
              ]"
              :key="index"
              @click="form.availableCount = index"
              >{{ item.name }}</view
            >
          </view>
        </view>

        <!-- 卧室类型 -->
        <view class="common-title-box">
          <text>卧室类型</text>
          <text></text>
        </view>
        <!-- 卧室类型 -->
        <view class="occupation-box">
          <view
            class="items-box"
            v-for="(item, index) in occupation"
            :key="index"
            @click="form.bedroomType = index"
          >
            <view
              :class="[form.bedroomType === index ? 'cover-active' : 'cover']"
            >
              <image
                :src="form.bedroomType === index ? item.selectIcon : item.icon"
              ></image>
            </view>
            <text class="name">{{ item.text }}</text>
          </view>
        </view>
        <!-- 配套设施 -->
        <view class="common-title-box">
          <text>配套设施</text>
          <text></text>
        </view>
        <!-- 配套设施 -->
        <view class="supporting-facility-box">
          <view
            class="items-box"
            v-for="(item, index) in supportingArr"
            :key="index"
            @click="onSupporting(item, index)"
          >
            <view :class="[item.isSelected ? 'cover-active' : 'cover']">
              <image
                :src="item.isSelected ? item.selectIcon : item.icon"
              ></image>
            </view>
            <text class="name">{{ item.text }}</text>
          </view>
        </view>
        <!-- 要求 -->
        <view class="common-title-box">
          <text>要求</text>
          <text></text>
        </view>
        <!-- 要求 -->
        <view class="require-box">
          <view
            class="items-box"
            v-for="(item, index) in requirementsArr"
            :key="index"
            @click="onRequirements(item, index)"
          >
            <view :class="[item.isSelected ? 'cover-active' : 'cover']">
              <image
                :src="item.isSelected ? item.selectIcon : item.icon"
              ></image>
            </view>
            <text class="name">{{ item.text }}</text>
          </view>
        </view>
      </view>
    </view>
    <s-footer-btn @change="onBtn" />
  </view>
</template>

<script>
export default {
  name: 'Information',
  components: {},
  data() {
    return {
      form: {
        identityType: 0, //身份类型
        houseType: 0, // 房间类型
        bedroomCount: 0, //卧室数量
        showersCount: 0, //浴室数量
        availableCount: 0, //可租房数量
        bedroomType: 0, //卧室类型
        facilities: '', // 配套设施
        requirements: '', // 要求
      },
      // 卧室类型
      occupation: [
        {
          icon: 'http://cdn.lengnuanit.top/stacy/room/ic_double_bed%402x.png',
          selectIcon:
            'http://cdn.lengnuanit.top/stacy/room/ic_double_bed-select%402x.png',
          text: '双人床',
        },
        {
          icon: 'http://cdn.lengnuanit.top/stacy/room/ic_single_bed%402x.png',
          selectIcon:
            'http://cdn.lengnuanit.top/stacy/room/ic_single_bed-select%402x.png',
          text: '单人床',
        },
      ],
      // 身份类型
      identityOptions: [
        {
          icon: 'http://cdn.lengnuanit.top/stacy/room/ic_roommate%402x.png',
          selectIcon:
            'http://cdn.lengnuanit.top/stacy/room/ic_roommate-select%402x.png',
          text: '租客',
        },
        {
          icon: 'http://cdn.lengnuanit.top/stacy/room/ic_landlord%402x.png',
          selectIcon:
            'http://cdn.lengnuanit.top/stacy/room/ic_landlord-select%402x.png',
          text: '房东',
        },
        {
          icon: 'http://cdn.lengnuanit.top/stacy/room/ic_agent%402x.png',
          selectIcon:
            'http://cdn.lengnuanit.top/stacy/room/ic_agent-select%402x.png',
          text: '中介',
        },
      ],
      // 房间类型
      houseOptions: [
        {
          icon: 'http://cdn.lengnuanit.top/stacy/room/ic_room%402x.png',
          selectIcon:
            'http://cdn.lengnuanit.top/stacy/room/ic_room-select%402x.png',
          text: '单层房间',
        },
        {
          icon: 'http://cdn.lengnuanit.top/stacy/room/ic_house%402x.png',
          selectIcon:
            'http://cdn.lengnuanit.top/stacy/room/ic_house-select%402x.png',
          text: '整栋房',
        },
        {
          icon: 'http://cdn.lengnuanit.top/stacy/room/ic_studio%402x.png',
          selectIcon:
            'http://cdn.lengnuanit.top/stacy/room/ic_studio-select%402x.png',
          text: '工作室',
        },
      ],
      // 配套设施
      supportingArr: [
        {
          id:1,
          icon: 'http://cdn.lengnuanit.top/stacy/room/ic_room%402x.png',
          selectIcon:
            'http://cdn.lengnuanit.top/stacy/room/ic_room-select%402x.png',
          isSelected: false, // 是否选中
          text: '单层房间',
        },
        {
          id:2,
          icon: 'http://cdn.lengnuanit.top/stacy/room/ic_room%402x.png',
          selectIcon:
            'http://cdn.lengnuanit.top/stacy/room/ic_room-select%402x.png',
          isSelected: false, // 是否选中
          text: '单层房间',
        },
        {
          id:3,
          icon: 'http://cdn.lengnuanit.top/stacy/room/ic_room%402x.png',
          selectIcon:
            'http://cdn.lengnuanit.top/stacy/room/ic_room-select%402x.png',
          isSelected: false, // 是否选中
          text: '单层房间',
        },
        {
          id:4,
          icon: 'http://cdn.lengnuanit.top/stacy/room/ic_room%402x.png',
          selectIcon:
            'http://cdn.lengnuanit.top/stacy/room/ic_room-select%402x.png',
          isSelected: false, // 是否选中
          text: '单层房间',
        },
      ],
      // 要求
      requirementsArr: [
        {
          id:1,
          icon: 'http://cdn.lengnuanit.top/stacy/room/ic_room%402x.png',
          selectIcon:
            'http://cdn.lengnuanit.top/stacy/room/ic_room-select%402x.png',
          isSelected: false, // 是否选中
          text: '单层房间',
        },
        {
          id:2,
          icon: 'http://cdn.lengnuanit.top/stacy/room/ic_room%402x.png',
          selectIcon:
            'http://cdn.lengnuanit.top/stacy/room/ic_room-select%402x.png',
          isSelected: false, // 是否选中
          text: '单层房间',
        },
        {
          id:3,
          icon: 'http://cdn.lengnuanit.top/stacy/room/ic_room%402x.png',
          selectIcon:
            'http://cdn.lengnuanit.top/stacy/room/ic_room-select%402x.png',
          isSelected: false, // 是否选中
          text: '单层房间',
        },
        {
          id:4,
          icon: 'http://cdn.lengnuanit.top/stacy/room/ic_room%402x.png',
          selectIcon:
            'http://cdn.lengnuanit.top/stacy/room/ic_room-select%402x.png',
          isSelected: false, // 是否选中
          text: '单层房间',
        },
      ],
    };
  },
  computed: {},
  mounted() {},
  methods: {
    onBtn() {
      // 获取缓存的表单数据
      const room = uni.getStorageSync('room');
      if (room) {
        Object.assign(room, {
          ...this.form,
        });
        uni.setStorageSync('room', room);
      }
      uni.navigateTo({
        url: '/room/situation/index',
      });
    },
    // 配套设施选择
    onSupporting(item, index) {
      this.supportingArr[index].isSelected =
        !this.supportingArr[index].isSelected;
      const arr = this.supportingArr.filter((v) => v.isSelected);
      this.form.facilities = arr.length ?arr.map(v=>{if (v.isSelected) {
        return v.id
      }}).join(',') :''
    },
    // 要求选择
    onRequirements(item, index) {
      this.requirementsArr[index].isSelected =
        !this.requirementsArr[index].isSelected;
      const arr = this.requirementsArr.filter((v) => v.isSelected);
      this.form.requirements = arr.length ?arr.map(v=>{if (v.isSelected) {
        return v.id
      }}).join(',') :''
    },
  },
};
</script>

<style lang="scss" scoped>
.information-container {
  .content {
    padding: 94rpx 48rpx 250rpx 48rpx;
    box-sizing: border-box;
    .title {
      font-size: 72rpx;
      font-family: PingFang;
      font-weight: bold;
      color: #020433;
    }
    .main-box {
      .time-box {
        margin-top: 45rpx;
        box-sizing: border-box;
        .date {
          width: 100%;
          height: 108rpx;
          background: #ffffff;
          border: 2rpx solid #f0f0f0;
          border-radius: 12rpx 12rpx 12rpx 12rpx;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 32rpx;
          box-sizing: border-box;
          .l {
            display: flex;
            flex-direction: column;
            .t {
              font-size: 24rpx;
              font-family: PingFang;
              font-weight: 500;
              color: #404b69;
            }
            .times {
              font-size: 32rpx;
              font-family: PingFang;
              font-weight: bold;
              color: #020433;
            }
          }
          .img {
            width: 48rpx;
            height: 48rpx;
          }
          .img:active {
            opacity: 0.5;
          }
          input {
            font-size: 32rpx;
            font-family: Montserrat;
            font-weight: 500;
            color: #020433;
          }
          .plh {
            font-size: 32rpx;
            font-family: Montserrat;
            font-weight: 500;
            color: #020433;
          }
        }
      }
      .form-item-sex {
        .sex-title {
          margin-top: 53rpx;
          font-size: 28rpx;
          font-family: PingFang;
          font-weight: bold;
          color: #020433;
        }
        .option-group-box {
          margin-top: 37rpx;
          display: flex;
          align-items: center;
          .items,
          .active {
            width: 222rpx;
            height: 80rpx;
            background: #fff;
            border-left: 2px solid #0f73ee;
            border-top: 2px solid #0f73ee;
            border-bottom: 2px solid #0f73ee;
            font-size: 26rpx;
            font-family: PingFang;
            font-weight: bold;
            color: #0f73ee;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .items:first-child,
          .active:first-child {
            border-radius: 12rpx 0rpx 0rpx 12rpx;
            border-right: none;
          }

          .items:last-child,
          .active:last-child {
            border-radius: 0px 12rpx 12rpx 0px;
            border-right: 2px solid #0f73ee;
          }
          .active {
            background: #0f73ee;
            // border: 2px solid #0f73ee;
            font-size: 26rpx;
            font-family: PingFang;
            font-weight: bold;
            color: #ffffff;
          }
        }
      }
      .common-title-box {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 60rpx 0 0rpx 0;
        text {
          font-size: 36rpx;
          font-family: PingFang SC;
          font-weight: bold;
          color: #020433;
        }
      }
      .common-subtitle-box {
        margin-top: 40rpx;
        font-size: 26rpx;
        font-family: PingFang;
        font-weight: 500;
        color: #020433;
      }
      .occupation-box,
      .supporting-facility-box,
      .require-box {
        margin-top: 36rpx;
        display: flex;
        justify-content: space-evenly;
        .items-box,
        .items-active-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          .cover,
          .cover-active {
            width: 112rpx;
            height: 112rpx;
            border: 2rpx solid #f0f0f0;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            image {
              width: 64rpx;
              height: 44rpx;
            }
          }
          .cover-active {
            background: #0f73ee !important;
          }
          .name {
            margin-top: 10rpx;
            font-size: 24rpx;
            font-family: PingFang;
            font-weight: bold;
            color: #020433;
          }
        }

        .items-box:last-child {
          .cover {
            image {
              height: 52rpx;
            }
          }
        }
        .common-box-title {
        }
      }
      .supporting-facility-box,
      .require-box {
        justify-content: space-between;
        flex-wrap: wrap;
        .items-box {
          margin-top: 20rpx;
        }
      }
    }
  }
}
</style>
