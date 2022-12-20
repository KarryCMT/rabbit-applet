<template>
  <view class="chat-container">
    <!-- 头部组件  -->
    <Reserve class="reserve" />
    <!--   enhanced
      :show-scrollbar="false" 完美隐藏滚动条
         :scroll-into-view="intoNumber" 小程序中滚动事件   必须属性- 绑定数组id     :id="`item${index}`"
         在事件处理函数中 返回最新的值  聊天界面显示在第一条   return `item${this.chatList.length - 1}`
       -->
    <scroll-view
      enhanced
      :show-scrollbar="false"
      scroll-y
      :scroll-into-view="intoNumber"
      class="scroll-view"
      :style="{ height: chatHeight + 'px' }"
    >
    <!-- 动态渲染对话框 样式-->
      <view
        :class="[item.type === 1 ? 'chat-items-right' : 'chat-items-left']"
        v-for="(item, index) in chatList"
        :key="index"
        :id="`item${index}`"
      >
        <!-- 别人 通过type属性来定义-->
        <view class="receive" v-if="item.type === 2">
          <view class="cover">
            <image src="https://picx.zhimg.com/9d10668e5_l.jpg" />
            <view class="online"></view>
          </view>
          <view class="main">
            <view class="content">{{ item.content }}</view>
            <text class="date">{{ item.date }}</text>
          </view>
        </view>
        <!-- 自己 -->
        <view class="send" v-if="item.type === 1">
          <view class="content">{{ item.content }}</view>
          <text class="date">{{ item.date }}</text>
        </view>
      </view>
    </scroll-view>
    <!-- 输入框组件 v-model绑定 输入值 -->
    <InputBox v-model="inputValue" @send="onSend"/>
  </view>
</template>
<script>
import InputBox from "./components/input-box.vue";
import Reserve from "./components/reserve.vue";
export default {
  name: "Chat",
  components: {
    Reserve,
    InputBox,
  },
  props: {},
  data() {
    return {
      inputValue:'',//发送的内容
      chatHeight: 0,
      chatList: [
        {
          id: 1,
          type: 2,
          content: "你好，我叫菲利普斯桑德拉。你的房间还在租吗？",
          date: "09:50",
        },
        {
          id: 1,
          type: 1,
          content: "你好，是的，房间现在还在的。",
          date: "09:50",
        },
        {
          id: 1,
          type: 1,
          content: "您意向的是哪套房？",
          date: "09:50",
        },
        {
          id: 1,
          type: 2,
          content: "朝阳，一室一厅。",
          date: "09:50",
        },
        {
          id: 1,
          type: 1,
          content: "有的。",
          date: "09:50",
        },
        {
          id: 1,
          type: 2,
          content: "是今天来看房吗？",
          date: "09:50",
        },
      ],
     
    };
  },
  computed: {
     intoNumber(){
      return `item${this.chatList.length - 1}`
     }
  },
  created() {},
  mounted() {
    this.initHeight();
  },
  watch:{
  
  },
  methods: {
    initHeight() {
      const { windowHeight } = uni.getSystemInfoSync();//结构出当前聊天可视区高度
      uni
        .createSelectorQuery()
        .select(".reserve")
        .boundingClientRect(({ height }) => {
          this.chatHeight = windowHeight - height - 216 / 2;//当前聊天部分的高度
        })
        .exec();
    },
    //发送聊天内容
    onSend(){
      if (!this.inputValue) {
        uni.showToast({
          title:'请输入内容',
          icon:'none'
        })
        return
      }
      //监听子组件 并且追加进数组内容
      this.chatList.push( {
          id: 1,
          type: 1,
          content: this.inputValue,
          date: "09:50",
        },)
        this.inputValue = ''
    }
  },
};
</script>
<style lang="scss" scoped>
.chat-container {
  width: 100%;
  .scroll-view {
    padding: 0 48rpx;
    box-sizing: border-box;
    //右边自身对话框
    .chat-items-right {
      display: flex;
      margin-top: 53rpx;
      justify-content: flex-end;
      .send {
        display: flex;
        flex-direction: column;
        .content {
          padding: 20rpx;
          background: #0f73ee;
          border-radius: 18rpx 18rpx 0 18rpx;
          font-size: 28rpx;
          font-family: PingFang;
          font-weight: 500;
          color: #ffffff;
        }
        .date {
          margin-top: 17rpx;
          align-self: flex-end;//当前子元素自身的位置
          font-size: 20rpx;
          font-family: PingFang;
          font-weight: 500;
          color: #95a0b6;
        }
      }
    }
    //左边对话框 图标定位
    .chat-items-left {
      margin-top: 53rpx;
      display: flex;
      justify-content: flex-start;
      .receive {
        display: flex;
        .cover {
          align-self: flex-end;
          position: relative;
          bottom: 38rpx;
          width: 64rpx;
          height: 64rpx;
          image {
            width: 64rpx;
            height: 64rpx;
            border-radius: 50%;
          }
          .online {
            position: absolute;
            bottom: 0;
            right: -15rpx;
            width: 24rpx;
            height: 24rpx;
            background: #08c299;
            border-radius: 50%;
            border: 4rpx solid #ffffff;
          }
        }
        .main {
          margin-left: 15rpx;
          .content {
            padding: 20rpx;
            background: #f0f0f0;
            border-radius: 18rpx 18rpx 18rpx 0rpx;
            font-size: 28rpx;
            font-family: PingFang;
            font-weight: 500;
            color: #020433;
          }
          .date {
            margin-top: 17rpx;
            align-self: flex-end;
            font-size: 20rpx;
            font-family: PingFang;
            font-weight: 500;
            color: #95a0b6;
          }
        }
      }
    }
  }
}
</style>
