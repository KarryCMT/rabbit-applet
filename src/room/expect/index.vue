<template>
  <!-- expect -->
  <view class="expect-container">
    <s-progress-bar :width="80" />
    <view class="content">
      <text class="title">期望</text>
      <view class="title">租客类型</view>
      <view class="main-box">
        <!-- 期望租客人数 -->
        <view class="common-subtitle-box"> 期望租客人数 </view>
        <!-- 期望租客人数 -->
        <view class="form-item-sex">
          <view class="option-group-box">
            <view
              :class="[form.expectTenantsCount === index ? 'active' : 'items']"
              v-for="(item, index) in [
                { name: '0', value: 0 },
                { name: '1', value: 1 },
                { name: '2', value: 2 },
                { name: '3', value: 3 },
                { name: '4', value: 4 },
                { name: '5', value: 5 },
              ]"
              :key="index"
              @click="form.expectTenantsCount = index"
              >{{ item.name }}</view
            >
          </view>
        </view>
        <!-- 性别 -->
        <view class="common-title-box">
          <text>性别</text>
          <text></text>
        </view>
        <!-- 性别 -->
        <view class="occupation-box">
          <view
            class="items-box"
            v-for="(item, index) in sexOptions"
            :key="index"
            @click="form.expectTenantsSex = index"
          >
            <view
              :class="[
                form.expectTenantsSex === index ? 'cover-active' : 'cover',
              ]"
            >
              <image
                :src="
                  form.expectTenantsSex === index ? item.selectIcon : item.icon
                "
              ></image>
            </view>
            <text class="name">{{ item.text }}</text>
          </view>
        </view>
        <!-- 年龄 -->
        <view class="common-title-box">
          <text>年龄</text>
          <text>{{ form.expectTenantsMinAge }} - {{ form.expectTenantsMaxAge }}</text>
        </view>
        <!-- 年龄 -->
        <view class="time-box">
          <view class="date">
            <view class="l">
              <text class="t">最小年龄</text>
              <input
                type="number"
                v-model="form.expectTenantsMinAge"
                maxlength="2"
                placeholder-class="plh"
                placeholder="请输入最小年龄"
              />
            </view>

            <view class="l">
              <text class="t">最大年龄</text>
              <input
                type="number"
                v-model="form.expectTenantsMaxAge"
                maxlength="2"
                placeholder-class="plh"
                placeholder="请输入最大年龄"
              />
            </view>
          </view>
        </view>
        <!-- 职业 -->
        <view class="common-title-box">
          <text>职业</text>
          <text></text>
        </view>
        <!-- 职业 -->
        <view class="occupation-box">
          <view
            class="items-box"
            v-for="(item, index) in occupation"
            :key="index"
            @click="form.expectTenantsProfessional = index"
          >
            <view
              :class="[
                form.expectTenantsProfessional === index
                  ? 'cover-active'
                  : 'cover',
              ]"
            >
              <image
                :src="
                  form.expectTenantsProfessional === index
                    ? item.selectIcon
                    : item.icon
                "
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
  name: 'Expect',
  components: {},
  data() {
    return {
      dateIcon: 'http://cdn.lengnuanit.top/stacy/icon/date-icon.png',
      form: {
        expectTenantsCount: 0, //期望租客数量
        expectTenantsMinAge: 0, //期望租客年龄最小
        expectTenantsSex: 0, //期望租客性别
        expectTenantsMaxAge: 0, //期望租客年龄最大
        expectTenantsProfessional: 0, //期望租客职业
      },
      // 期望租客性别
      sexOptions: [
        {
          icon: 'http://cdn.lengnuanit.top/stacy/ad/ic_double_bed@2x.png',
          selectIcon: 'http://cdn.lengnuanit.top/stacy/ad/ic_double_bed@2x.png',
          text: '男士',
        },
        {
          icon: 'http://cdn.lengnuanit.top/stacy/ad/ic_single_bed@2x.png',
          selectIcon: 'http://cdn.lengnuanit.top/stacy/ad/ic_single_bed@2x.png',
          text: '女士',
        },
      ],
      // 期望租客职业
      occupation: [
        {
          icon: 'http://cdn.lengnuanit.top/stacy/ad/ic_double_bed@2x.png',
          selectIcon: 'http://cdn.lengnuanit.top/stacy/ad/ic_double_bed@2x.png',
          text: '在职人员',
        },
        {
          icon: 'http://cdn.lengnuanit.top/stacy/ad/ic_single_bed@2x.png',
          selectIcon: 'http://cdn.lengnuanit.top/stacy/ad/ic_double_bed@2x.png',
          text: '学生',
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
        url: '/room/about/index',
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.expect-container {
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
      .form-item {
        width: 100%;
        height: 108rpx;
        background: #ffffff;
        border: 2rpx solid #f0f0f0;
        border-radius: 12rpx 12rpx 12rpx 12rpx;
        padding: 13rpx 34rpx 13rpx 34rpx;
        box-sizing: border-box;
        .tips {
          font-size: 24rpx;
          font-family: PingFang;
          font-weight: bold;
          color: #404b69;
        }
        .txt {
          font-size: 32rpx;
          font-family: PingFang;
          font-weight: bold;
          color: #020433;
        }

        input {
          font-size: 32rpx;
          font-family: Montserrat;
          font-weight: 500;
          color: #020433;
        }
        .date {
          width: 100%;
          background: #ffffff;
          border-radius: 12rpx 12rpx 12rpx 12rpx;
          display: flex;
          align-items: center;
          justify-content: space-between;
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
        }
        .phone-box {
          display: flex;
          align-items: center;
          .tips-txt {
            text-align: center;
            width: 100rpx;
            font-size: 32rpx;
            font-family: PingFang;
            font-weight: bold;
            color: #95a0b6;
          }

          input {
            font-size: 32rpx;
            font-family: PingFang;
            font-weight: bold;
            color: #020433;
          }
        }
      }
      .m-top {
        margin-top: 32rpx;
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
        .items-box {
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
