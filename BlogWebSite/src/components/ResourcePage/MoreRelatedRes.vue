<template>
  <div id='ResRelated'>
    <span class=moreresline></span>
    <h3 class='morerestitle'>你或许感兴趣的资源</h3>
    <ul class='moreresitems'>
      <li v-for="(moreresitem, index) in moreResItems"
          class='moreresitem'
          v-bind:key='index'
          v-on:click='jumpToRes(moreresitem.url)'>
        <div class='moreresitemtitle'>{{moreresitem.title}}</div>
        <div class='moreresitemauthor'>下载次数：{{moreresitem.downum}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ResRelated',
  data () {
    return {
      moreResItems: null
    }
  },
  created: function () {
    this.moreResItems = [
      {
        'title': 'Title1',
        'downum': '32'
      },
      {
        'title': 'Title2',
        'downum': '32'
      },
      {
        'title': 'Title3',
        'downum': '32'
      },
      {
        'title': 'Title4',
        'downum': '32'
      },
      {
        'title': 'Title5',
        'downum': '32'
      }
    ]
  },
  methods: {
    jumpToRes: function () {}
  }
}
</script>

<style>
#ResRelated{
  margin-top: 20px;
  margin-bottom: 40px;
}
.moreresline{
  padding-left: 10px;
  margin-left: 30px;
  background: #2E86C1;
}
.morerestitle{
  color: #2E86C1;
  padding-left: 20px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  display: inline-block;
}
.moreresitems{
  color: #626567;
  list-style-type:none;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
.moreresitem{
  margin-top: 10px;
  margin-right: 20px;
  overflow-x: hidden;
}
.moreresitem:hover{
  background: #F2F3F4;
  cursor: pointer;
}
.moreresitemtitle{
  margin: 5px;
}
.moreresitemauthor{
  margin: 5px;
}
</style>
