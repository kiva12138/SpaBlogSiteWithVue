<template>
  <div id="BlogSearchResult">
    <ul class='blogsearchitems'>
      <li v-for="(blog_item, index) in blogItems"
          class='blogsearchitem'
          v-bind:key='index'
          v-on:click='handleBlogClicked(blog_item.url)'>
        <div class='blogsearchitem'>
          <h3 class='blogsearchitemtitle'>
            {{blog_item.title}}
          </h3>
          <div class='blogsearchitemread'>
            <span>阅读量</span>{{blog_item.read}}
          </div>
          <div class='blogsearchitemtime'>
            <span>更新于</span>{{blog_item.time}}
          </div>
          <div class='blogsearchitemheadline'>
            {{blog_item.headline}}
          </div>
        </div>
      </li>
    </ul>
    <h3 class='blogsearchnum'>一共{{allNum}}条数据</h3>
    <el-pagination
      layout="prev, pager, next"
      :total="allNum"
      :pageSize='10'
      @current-change="pageChanged"
      class='blogsearchpagination'>
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'BlogSearchResult',
  data () {
    return {
      blogItems: [
        {
          title: 'Title1',
          url: '456',
          headline: 'Headline headline headline',
          time: '2018-12-9',
          read: 45
        },
        {
          title: 'Title2',
          url: '456',
          headline: 'Headline headline headline',
          time: '2018-12-9',
          read: 45
        },
        {
          title: 'Title3',
          url: '456',
          headline: 'Headline headline headline',
          time: '2018-12-9',
          read: 45
        },
        {
          title: 'Title4',
          url: '456',
          headline: 'Headline headline headline',
          time: '2018-12-9',
          read: 45
        },
        {
          title: 'Title5',
          url: '456',
          headline: 'Headline headline headline',
          time: '2018-12-9',
          read: 45
        },
        {
          title: 'Title6',
          url: '456',
          headline: 'Headline headline headline',
          time: '2018-12-9',
          read: 45
        },
        {
          title: 'Title7',
          url: '456',
          headline: 'Headline headline headline',
          time: '2018-12-9',
          read: 45
        },
        {
          title: 'Title8',
          url: '456',
          headline: 'Headline headline headline',
          time: '2018-12-9',
          read: 45
        },
        {
          title: 'Title9',
          url: '456',
          headline: 'Headline headline headline',
          time: '2018-12-9',
          read: 45
        },
        {
          title: 'Title10',
          url: '456',
          headline: 'Headline headline headline',
          time: '2018-12-9',
          read: 45
        }
      ],
      allNum: 34
    }
  },
  methods: {
    handleBlogClicked: function (url) {
      this.$router.push({
        path: '/blog/article/' + url
      })
    },
    pageChanged: function () {
    }
  }
}
</script>

<style>
#BlogSearchResult{
  margin-left: 20px;
  width: 100%;
}
.blogsearchitems{
  list-style-type:none;
  padding-left: 10px;
  padding-right: 40px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
.blogsearchitem{
  border: 1px solid;
  border-color: #F2F3F4;
}
.blogsearchitem:hover{
  background: #F2F3F4;
  cursor: pointer;
}
.blogsearchitemcontent{
  height: 120px;
  width: 100%;
  margin: 10px;
}
.blogsearchitemtitle{
  color: #7B7D7D;
  padding: 10px;
  width: 65%;
  display: inline-block;
}
.blogsearchitemtime{
  color: #7B7D7D;
  width: 20%;
  display: inline-block;
  text-align: right;
}
.blogsearchitemread{
  width: 10%;
  color: #3498DB;
  text-align: right;
  display: inline-block;
}
.blogsearchitemheadline{
  padding-left: 10px;
  width: 100%;
  color: #626567;
  margin-bottom: 10px;
}
.blogsearchnum{
  color: #626567;
  text-align: center;
}
.blogsearchpagination{
  text-align: center;
}
</style>
