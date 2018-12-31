<template>
  <div id="QuestionAnnounce">
    <span class=quesannouline></span>
    <h3 class='quesannoutitle'>论坛公告</h3>
    <ul class='quesannouitems'>
      <li v-for="(quesannouitem, index) in quesAnnounceItems"
          class='quesannouitem'
          v-bind:key='index'>
        <div class='quesannouitemtitle'>{{quesannouitem.title}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'QuestionAnnounce',
  data () {
    return {
      quesAnnounceItems: [
        {
          title: 'This is Title1',
          url: ''
        },
        {
          title: 'This is Title2',
          url: ''
        },
        {
          title: 'This is Title3',
          url: ''
        },
        {
          title: 'This is Title4',
          url: ''
        },
        {
          title: 'This is Title5',
          url: ''
        }
      ]
    }
  }
}
</script>

<style>
#QuestionAnnounce{
  margin-left: 20px;
}
.quesannouline{
  padding-left: 10px;
  margin-left: 30px;
  background: #2E86C1;
}
.quesannoutitle{
  color: #2E86C1;
  padding-left: 20px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  display: inline-block;
}
.quesannouitems{
  list-style-type:none;
  margin-left: 10px;
  margin-right: 10px;
  padding-left: 20px;
  padding-right: 20px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
.quesannouitem{
  margin: 5px;
  margin-left: 0;
  height: 40px;
  width: 100%;
}
.quesannouitem:hover{
  background: #F2F3F4;
  cursor: pointer;
}
.quesannouitemtitle{
  color: #626567;
  padding-left:5px;
  padding-top: 10px;
  margin: 10px;
}
</style>
