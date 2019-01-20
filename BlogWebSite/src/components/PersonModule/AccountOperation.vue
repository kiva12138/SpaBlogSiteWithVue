<template>
  <div id="AccountOperation">
    <span class='personopline'></span>
    <h3 class='personoptitle'>您可以</h3>
    <div class='personopmain'>
      <el-button type="primary">修改资料</el-button>
      <el-button type="primary">修改密码</el-button>
      <el-button type="primary" v-on:click='logout'>退出登录</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccountOperation',
  data () {
    return {
    }
  },
  methods: {
    logout: function () {
      this.$session.destroy()
      this.$cookie.delete('username')
      this.$cookie.delete('phone')
      this.$cookie.delete('regtime')
      this.$cookie.delete('numofblog')
      this.$cookie.delete('numofques')
      this.$cookie.delete('numofres')
      this.$cookie.delete('birth')
      this.$cookie.delete('userblogs')
      this.$cookie.delete('userques')
      this.$cookie.delete('userres')
      this.$router.push('/login')
    }
  }
}
</script>

<style>
#AccountOperation{
  margin-top: 20px;
  text-align: left;
}
.personopline{
  padding-left: 10px;
  margin-left: 30px;
  background: #2E86C1;
}
.personoptitle{
  color: #2E86C1;
  padding-left: 20px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  display: inline-block;
}
.personopmain{
  margin-left: 40px;
  margin-top: 40px;
}
</style>
