<template>
  <div id="HotLifeQuestion">
  <span class=lifequesline></span>
  <h3 class='lifequestitle'>热点•生活区</h3>
    <ul class='hotlifeitems'>
      <li v-for="(hotlife_item, index) in hotlifeItems"
          class='hotlifeitem'
          v-bind:key='index'
          v-on:click='handleQuestionClicked(hotlife_item.url)'>
        <div class='hotlifeitemcontent'>
          <h3 class='hotlifeitemtitle'>
            {{hotlife_item.title}}
          </h3>
          <div class='hotlifeitemheat'>
            <span>参与人数</span>{{hotlife_item.heat}}
          </div>
          <div class='hotlifeitemtime'>
            <span>最后回答于</span>{{hotlife_item.time}}
          </div>
          <div class='hotlifeitemheadline'>
            {{hotlife_item.headline}}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HotLifeQuestion',
  data () {
    return {
      hotlifeItems: [
        {
          title: 'Title1',
          headline: 'Headline1',
          url: '231',
          time: '2018-12-29',
          heat: 256
        },
        {
          title: 'Title2',
          headline: 'Headline2',
          url: '34232',
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
          url: '432432',
          time: '2018-12-1',
          heat: 267
        },
        {
          title: 'Title5',
          headline: 'Headline5',
          url: '432432',
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
.hotlifeitems{
  list-style-type:none;
  padding-left: 10px;
  padding-right: 10px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
.hotlifeitem{
  border: 1px solid;
  border-color: #F2F3F4;
}
.hotlifeitem:hover{
  background: #F2F3F4;
  cursor: pointer;
}
.hotlifeitemcontent{
  height: 120px;
  width: 100%;
  margin: 10px;
}
.hotlifeitemtitle{
  color: #7B7D7D;
  padding: 10px;
  width: 65%;
  display: inline-block;
}
.hotlifeitemtime{
  color: #7B7D7D;
  width: 20%;
  display: inline-block;
  text-align: right;
}
.hotlifeitemheat{
  width: 10%;
  color: #3498DB;
  text-align: right;
  display: inline-block;
}
.hotlifeitemheadline{
  padding-left: 10px;
  width: 100%;
  color: #626567;
}
.lifequesline{
  padding-left: 10px;
  margin-left: 30px;
  background: #2E86C1;
}
.lifequestitle{
  color: #2E86C1;
  padding-left: 20px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  display: inline-block;
}
</style>
