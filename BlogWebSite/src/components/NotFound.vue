<template>
  <div id="NotFound">
    <h3 class='notfoundtext'>对不起，您访问的页面不存在</h3>
    <el-button
      type='primary'
      v-on:click='handleBackToHome'>返回首页</el-button>
  </div>
</template>

<script>
export default{
  name: 'NotFound',
  methods: {
    handleBackToHome: function () {
      this.$router.push('recommand')
    }
  }
}
</script>

<style>
#NotFound{
  margin-top: 80px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
}
.notfoundtext{
  color: #409EFF;
  text-align: center;
}
</style>
