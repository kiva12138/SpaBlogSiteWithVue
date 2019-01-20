<template>
  <div id="BlogSearchPage">
    <div class='leftblogsearch'>
      <blogsearch/>
      <blogsearchresult/>
    </div>
    <div class='rightblogsearch'>
      <todayblogrecommand/>
      <contactus/>
    </div>
  </div>
</template>

<script>
import BlogSearch from './BlogSearch.vue'
import BlogSearchResult from './BlogSearchResult.vue'
import TodayBlogRecommand from '../BlogModule/TodayBlogRecommand.vue'
import ContactUs from '../ContactUs/ContactUs.vue'
export default {
  name: 'SearchBlog',
  components: {
    'blogsearch': BlogSearch,
    'blogsearchresult': BlogSearchResult,
    'todayblogrecommand': TodayBlogRecommand,
    'contactus': ContactUs
  }
}
</script>

<style>
#BlogSearchPage{
  margin-top: 60px;
}
.leftblogsearch{
  width: 70%;
  display: inline-block;
  vertical-align: top;
}
.rightblogsearch{
  width: 29%;
  display: inline-block;
  vertical-align: top;
}
</style>
