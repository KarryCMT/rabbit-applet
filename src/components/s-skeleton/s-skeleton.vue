<template>
  <!-- 骨架屏的高度宽度和背景，用绝对定位提高层级 -->
  <view v-if="show">
    <view
      :style="{
        width: windowWidth,
        height: windowHeight,
        backgroundColor: bgColor,
        position: 'absolute',
        zIndex: 9999,
        top: top,
        left: left,
      }"
    >
      <view
        v-for="(item, index) in node"
        :key="index + 'Rect'"
        class="skeleton-fade"
        :style="{
          width: item.width===100?'100%':item.width + 'px',
          height: item.height + 'px',
          backgroundColor: elColor,
          borderRadius: item.radius ? item.radius + 'px' : '',
          position: 'absolute',
          top: item.top + 'px',
          left: item.left + 'px',
        }"
      >
      </view>
    </view>
  </view>
</template>

<script>
let systemInfo = uni.getSystemInfoSync();
export default {
  name: 'skeleton',
  props: {
    show: {
      type: Boolean,
      default: true,
    },
    node: {
      type: Array,
      default: ()=>{
        return  [
        {
          id: '',
          dataset: {},
          left: 48 / 2,
          right: 0,
          top: 24 / 2,
          radius: 80 / 2,
          bottom: 32,
          width: 80 / 2,
          height: 80 / 2,
        },
        {
          id: '',
          dataset: {},
          left: 160 / 2,
          right: 0,
          top: 35 / 2,
          bottom: 32,
          width: 187 / 2,
          height: 21 / 2,
        },
        {
          id: '',
          dataset: {},
          left: 364 / 2,
          right: 0,
          top: 32 / 2,
          bottom: 32,
          width: 24 / 2,
          height: 28 / 2,
        },
        {
          id: '',
          dataset: {},
          left: 166 / 2,
          right: 0,
          top: 74 / 2,
          bottom: 32,
          width: 21 / 2,
          height: 30 / 2,
        },
        {
          id: '',
          dataset: {},
          left: 201 / 2,
          right: 0,
          top: 78 / 2,
          bottom: 32,
          width: 29 / 2,
          height: 21 / 2,
        },
        {
          id: '',
          dataset: {},
          left: 250 / 2,
          right: 0,
          top: 86 / 2,
          bottom: 32,
          radius: 6 / 2,
          width: 6 / 2,
          height: 6 / 2,
        },
        {
          id: '',
          dataset: {},
          left: 275 / 2,
          right: 0,
          top: 76 / 2,
          bottom: 32,
          width: 50 / 2,
          height: 25 / 2,
        },
        {
          id: '',
          dataset: {},
          left: 670 / 2,
          right: 0,
          top: 48 / 2,
          bottom: 32,
          width: 32 / 2,
          height: 8 / 2,
        },
        {
          id: '',
          dataset: {},
          left: 0,
          right: 360.20001220703125,
          top: 60,
          bottom: 171,
          width: 375,
          height: 480 / 2,
        },
        {
          id: '',
          dataset: {},
          left: 52 / 2,
          right: 0,
          top: 642 / 2,
          bottom: 373,
          width: 24 / 2,
          height: 28 / 2,
        },
        {
          id: '',
          dataset: {},
          left: 89 / 2,
          right: 183,
          top: 647 / 2,
          bottom: 533,
          width: 99 / 2,
          height: 20 / 2,
        },
        {
          id: '',
          dataset: {},
          left: 209 / 2,
          right: 0,
          top: 647 / 2,
          bottom: 457,
          width: 37 / 2,
          height: 20 / 2,
        },
        {
          id: '',
          dataset: {},
          left: 49 / 2,
          right: 0,
          top: 697 / 2,
          bottom: 532,
          width: 631 / 2,
          height: 78 / 2,
        },
        {
          id: '',
          dataset: {},
          left: 49 / 2,
          right: 0,
          top: 789 / 2,
          bottom: 532,
          width: 65 / 2,
          height: 26 / 2,
        },
        {
          id: '',
          dataset: {},
          left: 131 / 2,
          right: 0,
          top: 789 / 2,
          bottom: 532,
          width: 50 / 2,
          height: 26 / 2,
        },
        {
          id: '',
          dataset: {},
          left: 51 / 2,
          right: 0,
          top: 832 / 2,
          bottom: 532,
          width: 100 / 2,
          height: 25 / 2,
        },
        {
          id: '',
          dataset: {},
          left: 172 / 2,
          right: 0,
          top: 842 / 2,
          bottom: 532,
          radius: 6 / 2,
          width: 6 / 2,
          height: 6 / 2,
        },
        {
          id: '',
          dataset: {},
          left: 193 / 2,
          right: 0,
          top: 832 / 2,
          bottom: 532,
          width: 117 / 2,
          height: 25 / 2,
        },

        // 第二个
        {
          id: '',
          dataset: {},
          left: 48 / 2,
          right: 0,
          top: 948 / 2,
          radius: 80 / 2,
          bottom: 32,
          width: 80 / 2,
          height: 80 / 2,
        },
        {
          id: '',
          dataset: {},
          left: 160 / 2,
          right: 0,
          top: 961 / 2,
          bottom: 32,
          width: 187 / 2,
          height: 21 / 2,
        },
        {
          id: '',
          dataset: {},
          left: 364 / 2,
          right: 0,
          top: 956 / 2,
          bottom: 32,
          width: 24 / 2,
          height: 28 / 2,
        },
        {
          id: '',
          dataset: {},
          left: 166 / 2,
          right: 0,
          top: 998 / 2,
          bottom: 32,
          width: 21 / 2,
          height: 30 / 2,
        },
        {
          id: '',
          dataset: {},
          left: 201 / 2,
          right: 0,
          top: 1002 / 2,
          bottom: 32,
          width: 29 / 2,
          height: 21 / 2,
        },
        {
          id: '',
          dataset: {},
          left: 250 / 2,
          right: 0,
          top: 1010 / 2,
          bottom: 32,
          radius: 6 / 2,
          width: 6 / 2,
          height: 6 / 2,
        },
        {
          id: '',
          dataset: {},
          left: 275 / 2,
          right: 0,
          top: 1000 / 2,
          bottom: 32,
          width: 50 / 2,
          height: 25 / 2,
        },
        {
          id: '',
          dataset: {},
          left: 670 / 2,
          right: 0,
          top: 984 / 2,
          bottom: 32,
          width: 32 / 2,
          height: 8 / 2,
        },
        {
          id: '',
          dataset: {},
          left: 0,
          right: 0,
          top: 1052 / 2,
          bottom: 171,
          width: 375,
          height: 480 / 2,
        },
        {
          id: '',
          dataset: {},
          left: 52 / 2,
          right: 0,
          top: 642 / 2,
          bottom: 373,
          width: 24 / 2,
          height: 28 / 2,
        },
        {
          id: '',
          dataset: {},
          left: 89 / 2,
          right: 183,
          top: 647 / 2,
          bottom: 533,
          width: 99 / 2,
          height: 20 / 2,
        },
        {
          id: '',
          dataset: {},
          left: 209 / 2,
          right: 0,
          top: 647 / 2,
          bottom: 457,
          width: 37 / 2,
          height: 20 / 2,
        },
        {
          id: '',
          dataset: {},
          left: 49 / 2,
          right: 0,
          top: 697 / 2,
          bottom: 532,
          width: 631 / 2,
          height: 78 / 2,
        },
        {
          id: '',
          dataset: {},
          left: 49 / 2,
          right: 0,
          top: 789 / 2,
          bottom: 532,
          width: 65 / 2,
          height: 26 / 2,
        },
        {
          id: '',
          dataset: {},
          left: 131 / 2,
          right: 0,
          top: 789 / 2,
          bottom: 532,
          width: 50 / 2,
          height: 26 / 2,
        },
        {
          id: '',
          dataset: {},
          left: 51 / 2,
          right: 0,
          top: 832 / 2,
          bottom: 532,
          width: 100 / 2,
          height: 25 / 2,
        },
        {
          id: '',
          dataset: {},
          left: 172 / 2,
          right: 0,
          top: 842 / 2,
          bottom: 532,
          radius: 6 / 2,
          width: 6 / 2,
          height: 6 / 2,
        },
        {
          id: '',
          dataset: {},
          left: 193 / 2,
          right: 0,
          top: 832 / 2,
          bottom: 532,
          width: 117 / 2,
          height: 25 / 2,
        },
      ]
      },
    },
  },
  data() {
    return {
      windowWidth: systemInfo.windowWidth + 'px',
      windowHeight: systemInfo.windowHeight + 'px',
      bgColor: '#fff',
      elColor: '#e5e5e5',
      top: 0,
      left: 0,
      borderRadius: 10,
  
    };
  },
  mounted() {
    // 矩形骨架元素
    this.getRectEls();
    // 圆形骨架元素
    this.getCircleEls();
  },
  methods: {
    getRectEls() {
      let query = uni.createSelectorQuery().in(this.$parent);
      query
        .selectAll('.skeleton-rect')
        .boundingClientRect((res) => {
          // console.log('rect', JSON.stringify(res));
        })
        .exec(function () {});
    },
    getCircleEls() {
      let query = uni.createSelectorQuery().in(this.$parent);
      query
        .selectAll('.skeleton-circle')
        .boundingClientRect((res) => {
          // console.log('circle', JSON.stringify(res));
        })
        .exec(function () {});
    },
  },
};
</script>

<style>
.skeleton-fade {
  width: 100%;
  height: 100%;
  background: rgb(194, 207, 214);
  animation-duration: 1.5s;
  animation-name: blink;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}

@keyframes blink {
  0% {
    opacity: 0.4;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0.4;
  }
}
</style>
