<template>
  <div id="MainBlogRecommand">
    <ul class='mainblogitems'>
      <li v-for="(main_blog_item, index) in mainBlogItems"
          class='mainblogitem'
          v-bind:key='index'>
        <div class='blogitemcontent'>
          <h3 class='blogitemtitle'>
            {{main_blog_item.title}}
          </h3>
          <div class='blogitemread'>
            <span>阅读量</span>{{main_blog_item.read}}
          </div>
          <div class='blogitemtime'>
            <span>更新于</span>{{main_blog_item.time}}
          </div>
          <div class='blogitemheadline'>
            {{main_blog_item.headline}}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MainBlogRecommand',
  data () {
    return {
      mainBlogItems: [
        {
          title: 'Title1',
          headline: 'Headline1',
          url: '',
          time: '2018-12-29',
          read: 256
        },
        {
          title: 'Title2',
          headline: 'Headline2',
          url: '',
          time: '2018-12-19',
          read: 239
        },
        {
          title: 'Title3',
          headline: 'Headline3',
          url: '',
          time: '2018-11-11',
          read: 98
        },
        {
          title: 'Title4',
          headline: 'Headline4',
          url: '',
          time: '2018-12-1',
          read: 267
        },
        {
          title: 'Title5',
          headline: 'Headline5',
          url: '',
          time: '2018-11-7',
          read: 132
        },
        {
          title: 'Title6',
          headline: 'Headline6',
          url: '',
          time: '2018-10-9',
          read: 217
        },
        {
          title: 'Title7',
          headline: 'Headline7',
          url: '',
          time: '2018-10-26',
          read: 24
        },
        {
          title: 'Title8',
          headline: 'Headline8',
          url: '',
          time: '2018-10-3',
          read: 85
        },
        {
          title: 'Title9',
          headline: 'Headline9',
          url: '',
          time: '2018-10-4',
          read: 56
        },
        {
          title: 'Title10',
          headline: 'Headline10',
          url: '',
          time: '2018-11-2',
          read: 26
        }
      ]
    }
  }
}
</script>

<style>
.mainblogitems{
  list-style-type:none;
  padding-left: 10px;
  padding-right: 10px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
.mainblogitem{
  border: 1px solid;
  border-color: #F2F3F4;
}
.mainblogitem:hover{
  background: #F2F3F4;
  cursor: pointer;
}
.blogitemcontent{
  height: 120px;
  width: 100%;
  margin: 10px;
}
.blogitemtitle{
  color: #7B7D7D;
  padding: 10px;
  width: 65%;
  display: inline-block;
}
.blogitemtime{
  color: #7B7D7D;
  width: 20%;
  display: inline-block;
  text-align: right;
}
.blogitemread{
  width: 10%;
  color: #3498DB;
  text-align: right;
  display: inline-block;
}
.blogitemheadline{
  padding-left: 10px;
  width: 100%;
  color: #626567;
}
</style>
