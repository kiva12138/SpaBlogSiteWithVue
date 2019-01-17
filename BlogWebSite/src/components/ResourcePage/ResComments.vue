<template>
  <div id='ResComments'>
    <ul class='rescommentsitems'>
      <li class='rescommentsitem'
          v-for='(rescommentsitem, index) in (showmore? resComments: firstFiveComments)'
          v-bind:key='index'>
        <div v-html='rescommentsitem.content' class='rescommentsText'/>
        <div class='commentinfo'>
          <div class='rescommentsname'>--{{rescommentsitem.username}}</div>
          <div class='rescommentstime'>评论时间：{{rescommentsitem.time}}</div>
        </div>
      </li>
    </ul>
    <div class='showmorebutton' v-if='resCommentsNum > 5'>
      <el-button type='primary' plain
        v-on:click='handleShowMore'>
        {{showText}}
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResComments',
  data () {
    return {
      showmore: false,
      showText: '显示更多',
      resComments: null,
      resCommentsNum: 0
    }
  },
  created: function () {
    this.resComments = [
      {
        'username': 'Name',
        'time': '2018-3-2',
        'content': 'This person says ...... and ......'
      },
      {
        'username': 'Name',
        'time': '2018-3-2',
        'content': 'This person says ...... and ......'
      },
      {
        'username': 'Name',
        'time': '2018-3-2',
        'content': 'This person says ...... and ......'
      },
      {
        'username': 'Name',
        'time': '2018-3-2',
        'content': 'This person says ...... and ......'
      },
      {
        'username': 'Name',
        'time': '2018-3-2',
        'content': 'This person says ...... and ......'
      },
      {
        'username': 'Name',
        'time': '2018-3-2',
        'content': 'This person says ...... and ......'
      },
      {
        'username': 'Name',
        'time': '2018-3-2',
        'content': 'This person says ...... and ......'
      },
      {
        'username': 'Name',
        'time': '2018-3-2',
        'content': 'This person says ...... and ......'
      }
    ]
    this.resCommentsNum = this.resComments.length
  },
  computed: {
    firstFiveComments: function () {
      return this.resComments.slice(0, 5)
    }
  },
  methods: {
    handleShowMore: function () {
      this.showmore = !this.showmore
      if (this.showmore) {
        this.showText = '收起显示'
      } else if (!this.showmore) {
        this.showText = '显示更多'
      }
    }
  }
}
</script>

<style>
#ResComments{
  margin-top: 20px;
  margin-left: 80px;
  margin-right: 40px;
  width: 80%;
}
.rescommentsitems{
  list-style-type:none;
  margin: 0;
  padding: 0;
  margin-top: 40px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #424242;
}
.rescommentsitem{
  margin: 0;
  margin-top: 20px;
}
.commentinfo{
  line-height: 150%;
  text-align: right;
}
.showmorebutton{
  text-align: center;
}
</style>
