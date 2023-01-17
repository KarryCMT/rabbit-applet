<template>
  <!-- 首页 -->
  <view class="index-container">
    <text>首页</text>
    <rb-dialog />
  </view>
</template>

<script>
export default {
  name: 'RbIndex',
  components: {},
  data() {
    return {
      unreadRows: 0,
    };
  },
  created(){
    this.$request('rabbit.home.get',{data:{id:11}}).then(res=>{
      console.log(res);
      
    })
  },
  methods: {
    toPage(name, url) {
      uni.navigateTo({
        url,
      });
    },
  },
};
</script>

<style lang="scss">
.index-container {
  width: 100%;
  height: 100%;
  background-color: #eeeef4;
}
</style>
