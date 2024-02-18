<!-- 瀑布流布局 -->
<template>
  <view class="home-container">
    <HomeNavBar :top="scrollTop" />
    <view
      :id="`cont_${index + 1}`"
      class="cont-box"
      :style="{ width: widthCalc, 'margin-left': index === 0 ? 0 : marginCalc }"
      v-for="(numVal, index) in flowData.column"
      :key="index"
    >
      <view
        class="item-box"
        v-for="(item, j) in flowData[`column_${index + 1}`]"
        @tap="() => onDetail(item)"
        :key="j"
      >
        <image
          class="img-tip"
          :src="item.cover"
          mode="widthFix"
          lazy-load
          :data-item="item"
          @load="imgLoad"
          @error="imgError"
        />
        <view class="tit-tip multi-line-omit">{{ item.title }}</view>
        <view class="desc-tip multi-line-omit">{{ item.content }}</view>
        <view class="footer-btns">
          <view class="user">
            <image class="avatar-url" :src="item.avatar"></image>
            <text class="name">{{ item.name }}</text>
          </view>
          <view class="like">
            <image
              class="icon"
              :src="item.isLike ? likeFill : likeIcon"
            ></image>
            <text class="count">{{ item.likeCount }}</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import HomeNavBar from './components/home-nav-bar.vue';
import likeFill from '@/static/svg/like-fill.svg';
import likeIcon from '@/static/svg/like-icon.svg';
export default {
  name: 'RbHome',
  components: {
    HomeNavBar,
  },
  data() {
    return {
      scrollTop: 0,
      likeFill,
      likeIcon,
      searchForm: {
        pageSize: 10,
        pageNum: 1,
      },
      flowData: {
        list: [], // 数据值
        column: 2, // 瀑布列数
        columnSpace: 2, // 瀑布列宽间距
      },
    };
  },
  created() {
    /* 数据赋值 */
  },
  onPageScroll(v) {
    this.onScroll(v);
  },
  onLoad() {
    this.onLoadPage();
  },
  computed: {
    /* 计算列宽 */
    widthCalc() {
      return `${100 / this.flowData.column - this.flowData.columnSpace}%`;
    },
    /* 计算 margin 外边距 */
    marginCalc() {
      const columnWidth =
        100 / this.flowData.column - this.flowData.columnSpace;
      return `${
        (100 - columnWidth.toFixed(5) * this.flowData.column) /
        (this.flowData.column - 1)
      }%`;
    },
  },
  methods: {
    /* 获取最小值的对象 */
    getMinObj(a, s) {
      let m = a[0][s];
      let mo = a[0];
      for (let i = a.length - 1; i >= 0; i--) {
        if (a[i][s] < m) m = a[i][s];
      }
      mo = a.filter((i) => i[s] === m);
      return mo[0];
    },
    // 滚动
    onScroll(v) {
      const { scrollTop } = v;
      this.scrollTop = scrollTop.toFixed(0);
    },
    /* 计算每列的高度 */
    getMinColumnHeight() {
      return new Promise((resolve) => {
        const heightArr = [];
        for (let i = 1; i <= this.flowData.column; i++) {
          uni
            .createSelectorQuery()
            .in(this)
            .select(`#cont_${i}`)
            .boundingClientRect((res) => {
              heightArr.push({ column: i, height: res.height });
            })
            .exec(() => {
              if (this.flowData.column <= heightArr.length) {
                resolve(this.getMinObj(heightArr, 'height'));
              }
            });
        }
      });
    },
    /* 初始化瀑布流数据 */
    async initValue(i) {
      if (i >= this.flowData.list.length) return false;
      const minHeightRes = await this.getMinColumnHeight();
      this.flowData[`column_${minHeightRes.column}`].push({
        ...this.flowData.list[i],
        index: i,
      });
    },
    /* 图片加载完成 */
    imgLoad(e) {
      const i = e.target.dataset.item.index;
      this.initValue(i + 1); // 加载下一条数据
    },
    /* 图片加载失败 */
    imgError(e) {
      const i = e.target.dataset.item.index;
      this.initValue(i + 1); // 加载下一条数据
    },
    // 详情
    onDetail(row) {
      uni.navigateTo({
        url: `/pages/detail/index?id=${row.id}`,
      });
    },

    // 初始化数据
    onLoadPage() {
      this.$request('dragon.post.page', { data: { ...this.searchForm } }).then(
        (res) => {
          if (!res || res.statusCode !== 600) {
            return;
          }
          this.flowData.list = res.data.list.map((v) => {
            return {
              ...v,
              cover: v.picturesList.length ? v.picturesList[0].savePath : '',
            };
          });
          /* 初始化每一列的数据 */
          for (let i = 1; i <= this.flowData.column; i++) {
            this.$set(this.flowData, `column_${i}`, []);
          }
          this.$nextTick(() => {
            this.initValue(0);
          });
        }
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.home-container {
  padding: 0 20rpx;
  .cont-box {
    $borderRadius: 12rpx;
    float: left;
    .item-box {
      width: 100%;
      padding-bottom: 20rpx;
      margin-bottom: 30rpx;
      border-radius: $borderRadius;
      box-shadow: 0rpx 3rpx 6rpx rgba(0, 46, 37, 0.08);
      .img-tip {
        width: 100%;
        border-radius: $borderRadius $borderRadius 0 0;
      }
      .tit-tip {
        text-align: justify;
        font-size: 30rpx;
        padding: 10rpx 20rpx 0;
        font-weight: 900;
      }
      .desc-tip {
        text-align: justify;
        font-size: 26rpx;
        padding: 5rpx 20rpx 0;
        margin-top: 10rpx;
      }
      .footer-btns {
        display: flex;
        justify-content: space-between;
        padding: 10rpx;
        .user {
          margin-left: 10rpx;
          display: flex;
          align-items: center;
          .avatar-url {
            width: 40rpx;
            height: 40rpx;
            border-radius: 50%;
          }
          .name {
            margin-left: 10rpx;
            color: #333;
            font-size: 22rpx;
          }
        }
        .like {
          display: flex;
          align-items: center;
          .icon {
            width: 40rpx;
            height: 40rpx;
            margin-right: 10rpx;
          }
          .count {
            color: #333;
            font-size: 26rpx;
          }
        }
      }
    }
    .item-box :active {
      opacity: 0.6;
    }
  }
}
/* 多行省略 */
.multi-line-omit {
  word-break: break-all; // 允许单词内自动换行，如果一个单词很长的话
  text-overflow: ellipsis; // 溢出用省略号显示
  overflow: hidden; // 超出的文本隐藏
  display: -webkit-box; // 作为弹性伸缩盒子模型显示
  -webkit-line-clamp: 2; // 显示的行
  -webkit-box-orient: vertical; // 设置伸缩盒子的子元素排列方式--从上到下垂直排列
}
/* 单行省略 */
.one-line-omit {
  width: 100%; // 宽度100%：1vw等于视口宽度的1%；1vh等于视口高度的1%
  white-space: nowrap; // 溢出不换行
  overflow: hidden; // 超出的文本隐藏
  text-overflow: ellipsis; // 溢出用省略号显示
}
</style>
