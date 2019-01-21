<template>
  <div id='BlogComments'>
    <hr class='line' width="90%" color='#626567' SIZE='1' align='center'>
    <h4 class='commentstitle'>评论({{articleComments.length}})</h4>
    <el-input
      type="textarea"
      :autosize="{ minRows: 2, maxRows: 6}"
      placeholder="说说您的看法"
      v-model="commentswritten"
      class='commentsarea'>
    </el-input>
    <el-button type="primary" class='commentsbutton' v-on:click='handleComSubmit'>提交</el-button>
    <ul class='commentsitems'>
      <li v-for='(commentitem, index) in (showmore? articleComments: firstFiveItems)'
          v-bind:key='index'
          class='commentsitem'>
        <div class='commentitemtitle'>
          {{commentitem.user}} 评论于 {{commentitem.time}}:
        </div>
        <div class='commentcontent'>
          {{commentitem.content}}
        </div>
      </li>
    </ul>
    <div class='showmorebutton'>
      <el-button type="primary" round plain
      class='commentsbutton'
      v-if='articleComments.length > 5'
      v-on:click='showMoreItems'>{{showMoreHint}}
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogComments',
  data () {
    return {
      articleComments: null,
      commentswritten: '',
      showmore: false,
      showMoreHint: '显示更多'
    }
  },
  created: function () {
    this.articleComments = [{
      time: '2018-12-20',
      user: 'UserName',
      content: 'Content Content Content Content Content Content Content Content'
    }, {
      time: '2018-12-20',
      user: 'UserName',
      content: 'Content Content Content Content Content Content Content Content'
    }, {
      time: '2018-12-20',
      user: 'UserName',
      content: 'Content Content Content Content Content Content Content Content'
    }, {
      time: '2018-12-20',
      user: 'UserName',
      content: 'Content Content Content Content Content Content Content Content'
    }, {
      time: '2018-12-20',
      user: 'UserName',
      content: 'Content Content Content Content Content Content Content Content'
    }, {
      time: '2018-12-20',
      user: 'UserName',
      content: 'Content Content Content Content Content Content Content Content'
    }, {
      time: '2018-12-20',
      user: 'UserName',
      content: 'Content Content Content Content Content Content Content Content'
    }, {
      time: '2018-12-20',
      user: 'UserName',
      content: 'Content Content Content Content Content Content Content Content'
    }, {
      time: '2018-12-20',
      user: 'UserName',
      content: 'Content Content Content Content Content Content Content Content'
    }
    ]
  },
  computed: {
    firstFiveItems: function () {
      return this.articleComments.slice(0, 5)
    }
  },
  methods: {
    showMoreItems: function () {
      this.showmore = !this.showmore
      if (!this.showmore) {
        this.showMoreHint = '显示更多'
      }
      if (this.showmore) {
        this.showMoreHint = '收起显示'
      }
    },
    handleComSubmit: function () {
      var date = new Date()
      if (!this.$session.exists()) {
        this.$router.push('/login')
      } else if (!(this.$cookie.get('login') === '1')) {
        this.$router.push('/login')
      } else {
        this.articleComments.push({
          user: this.$cookie.get('username'),
          time: date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate(),
          content: this.commentswritten
        })
      }
      this.$message({
        message: '评论成功',
        type: 'success'
      })
      this.commentswritten = null
    }
  }
}
</script>

<style>
#BlogComments{
  margin-top: 30px;
  margin-left: 60px;
}
.line{
  margin-bottom: 30px;
}
.commentstitle{
  color: #626567;
}
.commentsarea{
  display: inline-block;
  width: 90%;
}
.commentsbutton{
  display: inline-block;
}
.showmorebutton{
  text-align: center;
}
.commentsitems{
  list-style-type:none;
  margin: 20px;
  margin-right: 40px;
  padding: 0px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #626567;
}
.commentsitem{
  padding: 5px;
  line-height: 150%;
}
</style>
