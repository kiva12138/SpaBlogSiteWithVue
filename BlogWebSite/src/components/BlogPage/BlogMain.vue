<template>
  <div id='BlogMain'>
    <div class='blogtitle'>
      <h2>{{articleTitle}}</h2>
    </div>
    <div class='articleinfo'>
      <div class='blogreadtimes'>阅读数量：{{articleRead}}</div>
      <div class='blogtime'>发表日期：{{articleTime}}</div>
    </div>
    <div class='blogcontent' v-html='articleContent'></div>
  </div>
</template>

<script>
export default {
  name: 'BlogPage',
  data () {
    return {
      articleContent: '',
      articleTitle: '',
      articleTime: '',
      articleRead: ''
    }
  },
  created: function () {
    // 在此进行初始化操作
    this.articleTitle = 'Title Of Title Of Title Of Title Of ' + this.$route.params.id
    this.articleContent = '&nbsp&nbsp&nbsp&nbsp&nbsp&nbspContent Of This Text Content Of This Text Content Of This Text Content Of This Text<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbspContent Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text<br>&nbsp&nbsp&nbsp&nbsp&nbspContent Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text<br>&nbsp&nbsp&nbsp&nbsp&nbspContent Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text<br>&nbsp&nbsp&nbsp&nbsp&nbspContent Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text Content Of This Text'
    this.articleRead = '343'
    this.articleTime = '2018-12-20'
  }
}
</script>

<style>
#BlogMain{
  margin-top: 20px;
}
.blogtitle{
  color: #626567;
  margin-left: 80px;
}
.blogcontent{
  margin-top: 40px;
  margin-left: 60px;
  margin-right: 40px;
  line-height: 150%;
  color: #424242;
}
.articleinfo{
  text-align: right;
}
.blogtime{
  display: inline-block;
  color: #626567;
  width: 20%;
  text-align: right;
  margin-right: 60px;
}
.blogreadtimes{
  display: inline-block;
  color: #626567;
  width: 20%;
  text-align: right;
}
</style>
