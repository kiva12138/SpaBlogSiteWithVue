<template>
  <div id="Blog">
    <div class='leftblogrecommand'>
      <picblogrecommand class='picblog'/>
      <mainblogrecommand class='mainblog'/>
    </div>
    <div class='rightblogrecommand'>
      <searchblog class='search'/>
      <blogstar class='blogstar'/>
      <todayblogrecommand class='todayblog'/>
    </div>
  </div>
</template>

<script>
import BlogStar from './BlogModule/BlogStar.vue'
import MainBlogRecommand from './BlogModule/MainBlogRecommand.vue'
import PicBlogRecommand from './BlogModule/PicBlogRecommand.vue'
import SearchBlog from './BlogModule/SearchBlog.vue'
import TodayBlogRecommand from './BlogModule/TodayBlogRecommand.vue'
export default {
  name: 'Blog',
  components: {
    'blogstar': BlogStar,
    'mainblogrecommand': MainBlogRecommand,
    'picblogrecommand': PicBlogRecommand,
    'searchblog': SearchBlog,
    'todayblogrecommand': TodayBlogRecommand
  }
}
</script>

<style>
#Blog {
  width: 100%;
  margin: 0;
  padding: 0;
  margin-top: 50px;
  overflow-x: hidden;
}
.leftblogrecommand{
  height: 100%;
  width: 70%;
  float: left;
}
.rightblogrecommand{
  height: 100%;
  width: 30%;
  float: left;
}
.picblog {
  margin-left: 10px;
  margin-right: 10px;
}
.mainblog {
  margin-left: 10px;
  margin-right: 10px;
}
.search{
  margin-left: 10px;
  margin-right: 10px;
}
.blogstar{
  margin-left: 10px;
  margin-right: 10px;
}
.todayblog {
  margin-left: 10px;
  margin-right: 10px;
}
</style>
