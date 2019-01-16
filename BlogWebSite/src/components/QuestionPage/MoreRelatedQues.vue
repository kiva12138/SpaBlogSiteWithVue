<template>
  <div id='QuesRelated'>
    <span class=morequesline></span>
    <h3 class='morequestitle'>你或许感兴趣的问题</h3>
    <ul class='morequesitems'>
      <li v-for="(morequesitem, index) in moreQuesItems"
          class='morequesitem'
          v-bind:key='index'
          v-on:click='jumpToQues(morequesitem.url)'>
        <div class='morequesitemtitle'>{{morequesitem.title}}</div>
        <div class='morequesitemauthor'>{{morequesitem.author}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'QuesRelated',
  data () {
    return {
      moreQuesItems: null
    }
  },
  created: function () {
    this.moreQuesItems = [
      {
        'title': 'Title1',
        'author': 'Author1'
      },
      {
        'title': 'Title2',
        'author': 'Author2'
      },
      {
        'title': 'Title3',
        'author': 'Author3'
      },
      {
        'title': 'Title4',
        'author': 'Author4'
      },
      {
        'title': 'Title5',
        'author': 'Author5'
      }
    ]
  },
  methods: {
    jumpToQues: function () {}
  }
}
</script>

<style>
#QuesRelated{
  margin-top: 20px;
  margin-left: 20px;
  margin-bottom: 40px;
}
.morequesline{
  padding-left: 10px;
  margin-left: 30px;
  background: #2E86C1;
}
.morequestitle{
  color: #2E86C1;
  padding-left: 20px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  display: inline-block;
}
.morequesitems{
  color: #626567;
  list-style-type:none;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
.morequesitem{
  margin-top: 10px;
  margin-right: 20px;
  overflow-x: hidden;
}
.morequesitem:hover{
  background: #F2F3F4;
  cursor: pointer;
}
.morequesitemtitle{
  margin: 5px;
}
.morequesitemauthor{
  margin: 5px;
}
</style>
