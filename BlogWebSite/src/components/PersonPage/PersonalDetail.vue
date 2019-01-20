<template>
  <div id="persondetail">
    <span class='persondetailline'></span>
    <h3 class='persondetailtitle'>{{personalName}}的信息</h3>
    <div class='mainpersondetail'>
    <div class='persondetailhead'>
      <img v-bind:src="personalHead"
            v-bind:alt="personalName+'的头像'"
            height='100px'>
    </div>
    <div class='part1'>
        <p class='personalname'>昵称: {{personalName}}</p>
        <p class='personalregtime'>注册时间: {{personalRegTime}}</p>
        <p class='personalbirth'>生日: {{birthDate}}</p>
      </div>
      <div class='part2'>
        <p class='numofblogs'>已发表博客数: {{numOfBlogs}}</p>
        <p class='numofques'>论坛提问数: {{numOfQues}}</p>
        <p class='numofres'>上传资源数: {{numOfRes}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonalDetail',
  data () {
    return {
      personalHead: require('./../../assets/head.png'),
      personalName: '用户名',
      personalRegTime: '2018-12-30',
      birthDate: '1998-10-20',
      numOfBlogs: 23,
      numOfQues: 34,
      numOfRes: 20
    }
  }
}
</script>

<style>
#persondetail{
  margin: 20px;
  margin-bottom: 60px;
  text-align: left;
  display: block;
}
.persondetailline{
  padding-left: 10px;
  margin-left: 30px;
  background: #2E86C1;
}
.persondetailtitle{
  color: #2E86C1;
  padding-left: 20px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  display: inline-block;
}
.mainpersondetail{
  display: block-inline;
  margin-left: 40px;
  margin-right: 40px;
}
.persondetailhead{
  padding-right: 30px;
  padding-top: 30px;
  text-align: center;
}
.part1{
  display: inline-block;
}
.part2{
  margin-left: 40px;
  vertical-align: top;
  display: inline-block;
}
</style>
