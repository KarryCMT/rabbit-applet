<template>
  <!-- about -->
  <view class="about-container">
    <s-progress-bar :width="40" />
    <view class="content">
      <text class="title">{{ title }}</text>
      <view class="main-box">
        <!-- 性别 -->
        <view class="time-box">
          <picker
            mode="selector"
            :range="rangeArr"
            range-key="label"
            @change="bindSexChange"
          >
            <view class="date">
              <view class="l">
                <text class="t">性别</text>
                <text class="times">{{ sexTitle || '请选择' }}</text>
              </view>
              <!-- <image class="img" :src="dateIcon" /> -->
            </view>
          </picker>
        </view>
        <!-- 人数 -->
        <view class="time-box">
          <picker
            mode="selector"
            :range="countArr"
            range-key="label"
            @change="bindNumberChange"
          >
            <view class="date">
              <view class="l">
                <text class="t">人数</text>
                <text class="times">{{ countNumber || '请选择' }}</text>
              </view>
            </view>
          </picker>
        </view>
        <!-- 日期 -->
        <view class="time-box">
          <picker
            mode="date"
            :value="stayDate"
            :start="startDate"
            :end="endDate"
            @change="bindDateChange"
          >
            <view class="date">
              <view class="l">
                <text class="t">入住日期</text>
                <text class="times">{{ titleTime || '请选择' }}</text>
              </view>
              <image class="img" :src="dateIcon" />
            </view>
          </picker>
        </view>
        <!-- 电话 -->
        <view class="time-box">
          <view class="date">
            <view class="l">
              <text class="t">联系电话</text>
              <!-- <text class="times">{{ titleTime || '请选择' }}</text> -->
              <input
                type="number"
                maxlength="11"
                placeholder-class="plh"
                placeholder="请输入联系电话"
              />
            </view>
          </view>
        </view>
        <!-- 年龄 -->
        <view class="age-title-box">
          <text>年龄</text>
          <text>20 - 30</text>
        </view>
        <!-- 年龄 -->
        <view class="time-box">
          <view class="date">
            <view class="l">
              <text class="t">最小年龄</text>
              <input
                type="number"
                maxlength="2"
                placeholder-class="plh"
                placeholder="请输入最小年龄"
              />
            </view>

            <view class="l">
              <text class="t">最大年龄</text>
              <input
                type="number"
                maxlength="2"
                placeholder-class="plh"
                placeholder="请输入最大年龄"
              />
            </view>
          </view>
        </view>
        <!-- 职业 -->
        <view class="age-title-box">
          <text>职业</text>
          <text></text>
        </view>
        <!-- 职业 -->
        <view class="occupation-box">
          <view
            class="items-box"
            v-for="(item, index) in occupation"
            :key="index"
          >
            <view class="cover">
              <image :src="item.icon"></image>
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
  name: 'About',
  components: {
  },
  data() {
    const currentDate = this.getDate({
      format: true,
    });
    return {
      dateIcon: 'http://cdn.lengnuanit.top/stacy/icon/date-icon.png',
      title: '关于我',
      stayDate: currentDate,
      titleTime: '',
      sexTitle: '',
      countNumber: null,
      rangeArr: [
        { id: 1, label: '男' },
        { id: 0, label: '女' },
      ],
      countArr: [
        { id: 1, label: 1 },
        { id: 2, label: 2 },
        { id: 3, label: 3 },
        { id: 4, label: 4 },
        { id: 5, label: 5 },
      ],
      occupation: [
        {
          icon: 'http://cdn.lengnuanit.top/stacy/ad/ic_professional@2x.png',
          text: '在职人员',
        },
        {
          icon: 'http://cdn.lengnuanit.top/stacy/ad/ic_student@2x.png',
          text: '学生',
        },
      ],
    };
  },
  computed: {
    startDate() {
      return this.getDate('start');
    },
    endDate() {
      return this.getDate('end');
    },
  },
  mounted() {},
  methods: {
    onArea(name) {
      uni.setStorageSync('ad', { aboutName: name });
      uni.navigateTo({
        url: `/advertising/area/index`,
      });
    },
    bindDateChange({ detail }) {
      this.stayDate = detail.value;
      const [year, month, day] = detail.value.split('-');
      this.titleTime = `${month}月${day}日, ${year}`;
    },
    bindSexChange({ detail }) {
      const { label } = this.rangeArr[detail.value];
      this.sexTitle = label;
    },
    bindNumberChange({ detail }) {
      const { label } = this.countArr[detail.value];
      this.countNumber = label;
    },
    getDate(type) {
      const date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();

      if (type === 'start') {
        year = year - 60;
      } else if (type === 'end') {
        year = year + 2;
      }
      month = month > 9 ? month : '0' + month;
      day = day > 9 ? day : '0' + day;
      return `${year}-${month}-${day}`;
    },
    onBtn() {
      uni.navigateTo({
        url: '/advertising/room/index',
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.about-container {
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
      .age-title-box {
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
      .occupation-box {
        margin-top: 36rpx;
        display: flex;
        justify-content: space-evenly;
        .items-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          .cover {
            width: 112rpx;
            height: 112rpx;
            border: 2rpx solid #f0f0f0;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            image {
              width: 46rpx;
              height: 64rpx;
            }
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
              width: 52rpx;
            }
          }
        }
      }
    }
  }
}
</style>
