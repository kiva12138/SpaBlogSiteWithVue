<template>
  <div id="HotTechQuestion">
  <span class=techquesline></span>
  <h3 class='techquestitle'>热点•科技区</h3>
    <ul class='hottechitems'>
      <li v-for="(hottech_item, index) in hottechItems"
          class='hottechitem'
          v-bind:key='index'
          v-on:click='handleQuestionClicked(hottech_item.url)'>
        <div class='hottechitemcontent'>
          <h3 class='hottechitemtitle'>
            {{hottech_item.title}}
          </h3>
          <div class='hottechitemheat'>
            <span>参与人数</span>{{hottech_item.heat}}
          </div>
          <div class='hottechitemtime'>
            <span>最后回答于</span>{{hottech_item.time}}
          </div>
          <div class='hottechitemheadline'>
            {{hottech_item.headline}}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HotTechQuestion',
  data () {
    return {
      hottechItems: [
        {
          title: 'Title1',
          headline: 'Headline1',
          url: '4343',
          time: '2018-12-29',
          heat: 256
        },
        {
          title: 'Title2',
          headline: 'Headline2',
          url: '54352',
          time: '2018-12-19',
          heat: 239
        },
        {
          title: 'Title3',
          headline: 'Headline3',
          url: '432432',
          time: '2018-11-11',
          heat: 98
        },
        {
          title: 'Title4',
          headline: 'Headline4',
          url: '4323',
          time: '2018-12-1',
          heat: 267
        },
        {
          title: 'Title5',
          headline: 'Headline5',
          url: '234',
          time: '2018-11-7',
          heat: 132
        }
      ]
    }
  },
  methods: {
    handleQuestionClicked: function (url) {
      this.$router.push({
        path: '/question/article/' + url
      })
    }
  }
}
</script>

<style>
.hottechitems{
  list-style-type:none;
  padding-left: 10px;
  padding-right: 10px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
.hottechitem{
  border: 1px solid;
  border-color: #F2F3F4;
}
.hottechitem:hover{
  background: #F2F3F4;
  cursor: pointer;
}
.hottechitemcontent{
  height: 120px;
  width: 100%;
  margin: 10px;
}
.hottechitemtitle{
  color: #7B7D7D;
  padding: 10px;
  width: 65%;
  display: inline-block;
}
.hottechitemtime{
  color: #7B7D7D;
  width: 20%;
  display: inline-block;
  text-align: right;
}
.hottechitemheat{
  width: 10%;
  color: #3498DB;
  text-align: right;
  display: inline-block;
}
.hottechitemheadline{
  padding-left: 10px;
  width: 100%;
  color: #626567;
}
.techquesline{
  padding-left: 10px;
  margin-left: 30px;
  background: #2E86C1;
}
.techquestitle{
  color: #2E86C1;
  padding-left: 20px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  display: inline-block;
}
</style>
