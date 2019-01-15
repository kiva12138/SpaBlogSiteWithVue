<template>
  <div id='BlogPage'>
    <div id='leftBlogPart'>
      <div id='blogMain'>
        <blogmain/>
      </div>
      <div id='comments'>
        <blogcomments/>
      </div>
    </div>
    <div id='rightBlogPart'>
      <div id='authorInfo'>
        <blogauthorinfo/>
      </div>
      <div id='contactUs'>
        <contactus/>
      </div>
    </div>
  </div>
</template>

<script>
import ContactUs from '../ContactUs/ContactUs.vue'
import BlogMain from './BlogMain.vue'
import BlogComments from './BlogComments.vue'
import BlogAuthorInfo from './BlogAuthorInfo.vue'
export default {
  name: 'BlogPage',
  components: {
    'contactus': ContactUs,
    'blogmain': BlogMain,
    'blogauthorinfo': BlogAuthorInfo,
    'blogcomments': BlogComments
  }
}
</script>

<style>
#BlogPage{
  margin-top: 70px;
  width: 100%;
  overflow-x: hidden;
}
#leftBlogPart{
  width: 70%;
  display: inline-block;
  vertical-align: top;
}
#rightBlogPart{
  width: 29%;
  display: inline-block;
  vertical-align: top;
}
</style>
