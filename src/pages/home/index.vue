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
          @tap="()=>onDetail(item)"
        :key="j"
      >
        <image
          class="img-tip"
          :src="item.imgUrl"
          mode="widthFix"
          lazy-load
          :data-item="item"
          @load="imgLoad"
          @error="imgError"
        />
        <view  class="tit-tip multi-line-omit">{{ item.title }}</view>
        <view class="desc-tip multi-line-omit">{{ item.desc }}</view>
        <view class="footer-btns">
          <view class="user">
            <image class="avatar-url" :src="item.imgUrl"></image>
            <text class="name">{{ '李同学' }}</text>
          </view>
          <view class="like">
            <image
              class="icon"
              :src="item.isLike ? likeFill : likeIcon"
            ></image>
            <text class="count">{{ 12 }}</text>
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
  name:'RbHome',
  components: {
    HomeNavBar,
  },
  data() {
    return {
      scrollTop: 0,
      likeFill,
      likeIcon,
      flowData: {
        list: [], // 数据值
        column: 2, // 瀑布列数
        columnSpace: 2, // 瀑布列宽间距
      },
    };
  },
  created() {
    /* 初始化每一列的数据 */
    for (let i = 1; i <= this.flowData.column; i++) {
      this.$set(this.flowData, `column_${i}`, []);
    }
  },
  onPageScroll(v) {
    this.onScroll(v);
  },
  onLoad() {
    /* 数据赋值 */
    this.flowData.list = [
      {
        imgUrl:
          'https://www.logosc.cn/uploads/resources/2023/03/17/1679045108_thumb.jpg',
        title: '自动驾驶汽车对交通和城市规划的未来影响与挑战',
        desc: '分析自动驾驶汽车对未来交通和城市规划的潜在影响，探讨相关挑战。',
      },
      {
        imgUrl:
          'https://www.logosc.cn/uploads/resources/2023/03/17/1679044581_thumb.jpg',
        title: '可持续城市发展：构建环保城市的策略和实践',
        desc: '分析建设可持续城市的战略和实际方法，强调环保、资源利用和城市规划的重要性。',
      },
      {
        imgUrl:
          'https://www.logosc.cn/uploads/resources/2023/03/17/1679045190_thumb.jpg',
        title: '消灭传染病：全球卫生领域的挑战与创新',
        desc: '探讨在全球范围内消灭传染病的挑战，突出卫生领域的创新方法。',
      },
      {
        imgUrl:
          'https://www.logosc.cn/uploads/resources/2023/03/17/1679044667_thumb.jpg',
        title: '人工智能与机器学习：颠覆性技术对未来的巨大影响',
        desc: '探讨人工智能和机器学习如何在多个领域引发革命性变革，从工业到医疗，对未来产生深远影响。',
      },
      {
        imgUrl:
          'https://www.logosc.cn/uploads/resources/2023/03/17/1679044562_thumb.jpg',
        title: '生命科学的新前沿：基因编辑和生物技术的伦理挑战',
        desc: '研究生命科学领域的最新发展，聚焦基因编辑和生物技术的伦理考量，探讨科技前沿的道德挑战。',
      },
      {
        imgUrl:
          'https://www.logosc.cn/uploads/resources/2023/03/17/1679045057_thumb.jpg',
        title: '加密货币与区块链：重塑全球金融体系的力量',
        desc: '解析加密货币和区块链技术对金融体系的颠覆作用，重新定义了全球金融交易方式。',
      },
      {
        imgUrl:
          'https://www.logosc.cn/uploads/resources/2023/03/17/1679044716_thumb.jpg',
        title: '量子计算与量子技术应用的前沿探索',
        desc: '深入研究量子计算和量子技术的前沿，展示这一领域的创新及其应用前景。',
      },
      {
        imgUrl:
          'https://www.logosc.cn/uploads/resources/2023/03/17/1679044779_thumb.jpg',
        title: '气候变化缓解的复杂性：全球视角下的挑战与机遇',
        desc: '探讨应对气候变化的复杂性，强调全球合作，突出应对挑战所蕴含的机遇。',
      },
      {
        imgUrl:
          'https://www.logosc.cn/uploads/resources/2023/03/17/1679044956_thumb.jpg',
        title: '虚拟现实与医疗保健的交汇：革命性地改变患者护理',
        desc: '介绍虚拟现实技术如何在医疗领域革命性地改善患者护理和治疗方法。',
      },
      {
        imgUrl:
          'https://www.logosc.cn/uploads/resources/2023/03/17/1679044607_thumb.jpg',
        title: '生物工程的突破：改变医学和人类增强的科技',
        desc: '研究生物工程领域的创新，关注其在医学和人类增强领域的重要作用。',
      },
      {
        imgUrl:
          'https://www.logosc.cn/uploads/resources/2023/03/17/1679045083_thumb.jpg',
        title: '社交媒体的演进及其对沟通和社会的影响',
        desc: '追溯社交媒体的发展历程，探讨其对人际沟通和社会动态的广泛影响。',
      },
      {
        imgUrl:
          'https://www.logosc.cn/uploads/resources/2023/03/17/1679044643_thumb.jpg',
        title: '元宇宙时代：在工作、教育和娱乐的虚拟世界中导航',
        desc: '介绍元宇宙时代，强调虚拟世界在工作、教育和娱乐中的多样应用。',
      },
      {
        imgUrl:
          'https://www.logosc.cn/uploads/resources/2023/03/17/1679044936_thumb.jpg',
        title: '通用人工智能：人类是否准备好面对超智能机器？',
        desc: '研究通用人工智能的发展，引发思考人类面对超级智能机器的准备程度。',
      },
      {
        imgUrl:
          'https://www.logosc.cn/uploads/resources/2023/03/17/1679045159_thumb.jpg',
        title: '超越火星：人类太空探索和星际旅行的未来',
        desc: '展望人类在太空探索领域的未来，探讨星际旅行的潜力和挑战。',
      },
    ];
    this.$nextTick(() => {
      this.initValue(0);
    });
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
        url: '/pages/detail/index',
      });
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
