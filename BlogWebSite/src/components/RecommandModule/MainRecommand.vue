<template>
  <div id="MainRecommand">
    <ul class='mainitems'>
      <li v-for="(main_item, index) in mainItems" class='mainitem'
          v-bind:key='index'
          v-on:click='handleBlogClicked(main_item.url)'>
        <div class='itemcontent'>
          <h3 class='itemtitle'>
            {{main_item.title}}
          </h3>
          <div class='itemheat'>
            <span>热度</span>{{main_item.heat}}
          </div>
          <div class='itemtime'>
            <span>更新于</span>{{main_item.time}}
          </div>
          <div class='itemheadline'>
            {{main_item.headline}}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MainRecommand',
  data () {
    return {
      mainItems: [
        {
          title: 'Title1',
          headline: 'Headline1',
          url: '23122',
          time: '2018-12-29',
          heat: 256
        },
        {
          title: 'Title2',
          headline: 'Headline2',
          url: '23122',
          time: '2018-12-19',
          heat: 239
        },
        {
          title: 'Title3',
          headline: 'Headline3',
          url: '23122',
          time: '2018-11-11',
          heat: 98
        },
        {
          title: 'Title4',
          headline: 'Headline4',
          url: '23122',
          time: '2018-12-1',
          heat: 267
        },
        {
          title: 'Title5',
          headline: 'Headline5',
          url: '23122',
          time: '2018-11-7',
          heat: 132
        },
        {
          title: 'Title6',
          headline: 'Headline6',
          url: '23122',
          time: '2018-10-9',
          heat: 217
        },
        {
          title: 'Title7',
          headline: 'Headline7',
          url: '23122',
          time: '2018-10-26',
          heat: 24
        },
        {
          title: 'Title8',
          headline: 'Headline8',
          url: '23122',
          time: '2018-10-3',
          heat: 85
        },
        {
          title: 'Title9',
          headline: 'Headline9',
          url: '23122',
          time: '2018-10-4',
          heat: 56
        },
        {
          title: 'Title10',
          headline: 'Headline10',
          url: '23122',
          time: '2018-11-2',
          heat: 26
        }
      ]
    }
  },
  methods: {
    handleBlogClicked: function (url) {
      this.$router.push({
        path: '/blog/article/' + url
      })
    }
  }
}
</script>

<style>
.mainitems{
  list-style-type:none;
  padding-left: 10px;
  padding-right: 10px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
.mainitem{
  border: 1px solid;
  border-color: #F2F3F4;
}
.mainitem:hover{
  background: #F2F3F4;
  cursor: pointer;
}
.itemcontent{
  height: 120px;
  width: 100%;
  margin: 10px;
}
.itemtitle{
  color: #7B7D7D;
  padding: 10px;
  width: 65%;
  display: inline-block;
}
.itemtime{
  color: #7B7D7D;
  width: 20%;
  display: inline-block;
  text-align: right;
}
.itemheat{
  width: 10%;
  color: #3498DB;
  text-align: right;
  display: inline-block;
}
.itemheadline{
  padding-left: 10px;
  width: 100%;
  color: #626567;
}
</style>
