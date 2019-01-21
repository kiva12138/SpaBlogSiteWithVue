<template>
  <div id='QuesMain'>
    <div class='questitle'><h3>{{quesTitle}}</h3></div>
    <div class='questioninfo'>
      <div class='quesauthorhead'>
        <img v-bind:src="quesAuthorHead"
        alt="Question Author's Head"
        height='120px'
        class='quesauthorheadpic'>
      </div>
      <div class='quescontent'>
        <div v-html='quesContent' class='quesText'/>
        <div class='otherinfo'>
          <div class='quesindex'>楼主</div>
          <div class='quesansnum'>回答数量：{{quesAnsNum}}</div>
          <div class='questime'>提问时间：{{quesTime}}</div>
        </div>
      </div>
    </div>
    <div class='questionanses'>
      <ul class='quesansitems'>
        <li class='quesansitem'
            v-for='(quesansitem, index) in (showmore? quesAnses: firstFiveAnses)'
            v-bind:key='index'>
          <div class='anshead'>
            <img v-bind:src="quesansitem.head"
              alt="Question Answer's Head"
              height='120px'>
          </div>
          <div class='anscontent'>
            <div v-html='quesansitem.content' class='quesText'/>
              <div class='otherinfo'>
              <div class='ansname'>{{quesansitem.username}}</div>
              <div class='quesindex'>第{{index+2}}楼</div>
              <div class='questime'>回答时间：{{quesansitem.time}}</div>
            </div>
          </div>
        </li>
      </ul>
      <div class='showmorebutton' v-if='quesAnsNum > 5'>
        <el-button type='primary' plain
          v-on:click='handleShowMore'>
          {{showText}}
        </el-button>
      </div>
    </div>
    <div class='submitans'>
      <el-input
        type="textarea"
        :autosize="{ minRows: 4, maxRows: 10}"
        placeholder="期待您的精彩回答"
        v-model="answritten"
        class='ansarea'>
      </el-input>
      <div class='ansbutton'>
        <el-button type="primary" v-on:click='handleAnsSubmit'>发表</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuesMain',
  data () {
    return {
      quesContent: '',
      quesTitle: '',
      quesTime: '',
      quesAnsNum: 0,
      quesAuthor: '',
      quesAuthorHead: null,
      quesAnses: null,
      showmore: false,
      showText: '显示更多回答',
      answritten: ''
    }
  },
  created: function () {
    this.quesTitle = 'Title Of ' + this.$route.params.id
    this.quesTime = '2018-2-9'
    this.quesAuthor = 'AuthorName'
    this.quesAuthorHead = require('../../assets/head.png')
    this.quesContent = '&nbspContent Of This Question. &nbspContent Of This Question. &nbspContent Of This Question. &nbspContent Of This Question. &nbspContent Of This Question. &nbspContent Of This Question. &nbspContent Of This Question. &nbspContent Of This Question. &nbspContent Of This Question. &nbspContent Of This Question. &nbspContent Of This Question. &nbspContent Of This Question. &nbspContent Of This Question. &nbspContent Of This Question. '
    this.quesAnses = [
      {
        username: 'Name',
        time: '2018-3-2',
        content: 'This person says ...... and ......',
        head: require('../../assets/head.png')
      },
      {
        username: 'Name',
        time: '2018-3-2',
        content: 'This person says ...... and ......',
        head: require('../../assets/head.png')
      },
      {
        username: 'Name',
        time: '2018-3-2',
        content: 'This person says ...... and ......',
        head: require('../../assets/head.png')
      },
      {
        username: 'Name',
        time: '2018-3-2',
        content: 'This person says ...... and ......',
        head: require('../../assets/head.png')
      },
      {
        username: 'Name',
        time: '2018-3-2',
        content: 'This person says ...... and ......',
        head: require('../../assets/head.png')
      },
      {
        username: 'Name',
        time: '2018-3-2',
        content: 'This person says ...... and ......',
        head: require('../../assets/head.png')
      },
      {
        username: 'Name',
        time: '2018-3-2',
        content: 'This person says ...... and ......',
        head: require('../../assets/head.png')
      },
      {
        username: 'Name',
        time: '2018-3-2',
        content: 'This person says ...... and ......',
        head: require('../../assets/head.png')
      }
    ]
    this.quesAnsNum = this.quesAnses.length
  },
  computed: {
    firstFiveAnses: function () {
      return this.quesAnses.slice(0, 5)
    }
  },
  methods: {
    handleShowMore: function () {
      this.showmore = !this.showmore
      if (this.showmore) {
        this.showText = '收起显示更多'
      } else if (!this.showmore) {
        this.showText = '显示更多回答'
      }
    },
    handleAnsSubmit: function () {
      var date = new Date()
      if (!this.$session.exists()) {
        this.$router.push('/login')
      } else if (!(this.$cookie.get('login') === '1')) {
        this.$router.push('/login')
      } else {
        this.quesAnses.push({
          username: this.$cookie.get('username'),
          time: date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate(),
          content: this.answritten,
          head: require('../../assets/head.png')
        })
      }
      this.$message({
        message: '评论成功',
        type: 'success'
      })
      this.answritten = null
    }
  }
}
</script>

<style>
#QuesMain{
  margin-top: 20px;
  margin-left: 80px;
  margin-right: 40px;
}
.questitle{
  color: #626567;
}
.questioninfo{
  margin-top: 40px;
}
.quesauthorhead{
  width: 15%;
  display: inline-block;
  vertical-align: top;
}
.quescontent{
  width: 84%;
  display: inline-block;
  vertical-align: top;
  color: #424242;
}
.quesText {
  line-height: 150%;
}
.otherinfo{
  margin-top: 10px;
  text-align: right;
}
.quesindex{
  display: inline-block;
  width: 15%;
  text-align: right;
}
.quesansnum{
  display: inline-block;
  width: 15%;
  text-align: right;
}
.questime{
  display: inline-block;
  width: 25%;
  text-align: right;
}
.quesansitems{
  list-style-type:none;
  margin: 0;
  padding: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #424242;
}
.quesansitem{
  margin: 0;
  margin-top: 20px;
}
.anshead{
  width: 15%;
  display: inline-block;
  vertical-align: top;
}
.ansname{
  line-height: 150%;
}
.anscontent{
  width: 84%;
  display: inline-block;
  vertical-align: top;
  color: #424242;
}
.showmorebutton{
  text-align: center;
}
.submitans{
  text-align: center;
  margin-top: 40px;
}
.ansbutton{
  margin-top: 20px;
}
</style>
