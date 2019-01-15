<template>
  <div id='BlogAuthor'>
    <span class=blogauthorline></span>
    <h3 class='blogauthortitle'>关于作者</h3>
    <div class='blogauthorhead'>
      <img v-bind:src="articleAuthorHead"
        alt="Author's Head"
        height='120px'
        v-on:click='jumpToAuthor'>
    </div>
    <div class='blogauthorinfo'>
      <div class='leftblogauthorinfo'>
        <p>作者昵称:{{articleAuthorName}}</p>
        <p>作者年龄:{{authorAge}}</p>
        <p>作者被推荐次数:{{authorRecommandTime}}</p>
      </div>
      <div class='rightblogauthorinfo'>
        <p>作者博客数:{{authorBlogNum}}</p>
        <p>作者问题数:{{authorQuesNum}}</p>
        <p>作者资源数:{{authorResNum}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogAuthor',
  data () {
    return {
      articleAuthorName: '',
      articleAuthorHead: '',
      authorBlogNum: '',
      authorAge: '',
      authorRecommandTime: '',
      authorResNum: '',
      authorQuesNum: ''
    }
  },
  created: function () {
    // 在此进行初始化操作
    this.articleAuthorName = 'Author'
    this.articleAuthorHead = require('../../assets/head.png')
    this.authorBlogNum = 23
    this.authorAge = 34
    this.authorRecommandTime = 8
    this.authorResNum = 2
    this.authorBlogNum = 9
    this.authorQuesNum = 8
  },
  methods: {
    jumpToAuthor: function () {}
  }
}
</script>

<style>
#BlogAuthor{
  margin-top: 20px;
  margin-left: 20px;
  margin-bottom: 40px;
}
.blogauthorline{
  padding-left: 10px;
  margin-left: 30px;
  background: #2E86C1;
}
.blogauthortitle{
  color: #2E86C1;
  padding-left: 20px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  display: inline-block;
}
.blogauthorhead{
  text-align: center;
}
.blogauthorhead:hover{
  cursor: pointer;
}
.blogauthorinfo{
  color: #626567;
}
.leftblogauthorinfo{
  display: inline-block;
  margin-left: 40px;
}
.rightblogauthorinfo{
  display: inline-block;
  margin-left: 80px;
}
</style>
