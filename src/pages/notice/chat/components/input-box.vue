<template>
  <view id="input-box" class="input-box" :style="inputMarBot?'bottom:50px':''">
    <view class="l">
      <input
       :value="value"
        type="text"
        placeholder-class="pls"
        maxlength="200"
        placeholder="输入文字"
        @input="onInput"
        :hold-keyboard="false"
        @keyboardheightchange="onKeyBoardHeightChange"
        @confirm="onConfirm"
        confirm-type="send"
      />
      <!--   padding-bottom: env(safe-area-inset-bottom); 解决安全距离问题 -->
    </view>
    <view class="r">
      <image class="add" :src="addIcon"></image>
      <image @click="onSend" class="send" :src="sendIcon"></image>
    </view>
  </view>
</template>

<script>
export default {
  name: 'Input',
  props: {
    detail: {
      type: Object,
      default: () => {},
    },
    value:{
      type:[Number,String],
      default:''
    }
  },
  data() {
    return {
      addIcon:'http://cdn.lengnuanit.top/stacy/notice/ic_chat_add@2x.png',
      sendIcon:'http://cdn.lengnuanit.top/stacy/notice/ic_send@2x.png',
      inputMarBot:false,
    };
  },
  mounted() {
   
  },
  onReady() {
   
  },
  methods: {
    onInput(e){
      this.$emit('input',e.target.value)
    },
    onConfirm({detail}){
       this.$emit('send')
    },
    onSend(){
      this.$emit('send')
    },
    onKeyBoardHeightChange({detail}){
      this.inputMarBot = detail.height > 0
      uni.showToast({
        title:JSON.stringify(e.detail),
        icon:'none'
      })
      
    }
  },
};
</script>

<style></style>

<style lang="scss" scoped>
.input-box {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 126rpx;
  background: #ffffff;
  box-shadow: 0px -4rpx 8rpx 0px rgba(2, 4, 51, 0.08);
  display: flex;
  align-items: center;
  padding-bottom: env(safe-area-inset-bottom);
  .l {
    flex: 1;
    padding-left: 48rpx;
    input {
      font-size: 28rpx;
      font-family: PingFang;
      font-weight: 500;
      color: #333;
    }
    .pls {
      font-size: 28rpx;
      font-family: PingFang;
      font-weight: 500;
      color: #95a0b6;
    }
  }
  .r {
    width: 200rpx;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    .add {
      width: 44rpx;
      height: 44rpx;
    }
    .send {
      width: 44rpx;
      height: 40rpx;
    }
    .add:active,
    .send:active {
      opacity: 0.5;
    }
  }
}
</style>
