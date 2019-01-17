<template>
  <div id='ResAuthor'>
    <span class=resauthorline></span>
    <h3 class='resauthortitle'>关于上传者</h3>
    <div class='resauthorhead'>
      <img v-bind:src="resAuthorHead"
        alt="Author's Head"
        height='120px'
        v-on:click='jumpToAuthor'>
    </div>
    <div class='resauthorinfo'>
      <div class='leftresauthorinfo'>
        <p>作者昵称:{{resAuthorName}}</p>
        <p>作者年龄:{{resAuthorAge}}</p>
        <p>作者被推荐次数:{{resAuthorRecommandTime}}</p>
      </div>
      <div class='rightresauthorinfo'>
        <p>作者博客数:{{resAuthorBlogNum}}</p>
        <p>作者问题数:{{resAuthorQuesNum}}</p>
        <p>作者资源数:{{resAuthorResNum}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResAuthor',
  data () {
    return {
      resAuthorName: '',
      resAuthorHead: '',
      resAuthorBlogNum: '',
      resAuthorAge: '',
      resAuthorRecommandTime: '',
      resAuthorResNum: '',
      resAuthorQuesNum: ''
    }
  },
  created: function () {
    this.resAuthorName = 'Author'
    this.resAuthorHead = require('../../assets/head.png')
    this.resAuthorBlogNum = 23
    this.resAuthorAge = 34
    this.resAuthorRecommandTime = 8
    this.resAuthorResNum = 2
    this.resAuthorBlogNum = 9
    this.resAuthorQuesNum = 8
  },
  methods: {
    jumpToAuthor: function () {}
  }
}
</script>

<style>
#ResAuthor{
  margin-top: 20px;
  margin-right: 40px;
}
.resauthorline{
  padding-left: 10px;
  margin-left: 30px;
  background: #2E86C1;
}
.resauthortitle{
  color: #2E86C1;
  padding-left: 20px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  display: inline-block;
}
.resauthorhead{
  text-align: center;
}
.resauthorhead:hover{
  cursor: pointer;
}
.resauthorinfo{
  color: #626567;
}
.leftresauthorinfo{
  display: inline-block;
  margin-left: 40px;
}
.rightresauthorinfo{
  display: inline-block;
  margin-left: 80px;
}
</style>
