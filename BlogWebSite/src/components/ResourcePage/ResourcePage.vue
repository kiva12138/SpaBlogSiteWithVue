<template>
  <div id='ResourcePage'>
    <div class='leftrespart'>
      <resmain/>
      <rescomments/>
    </div>
    <div class='rightrespart'>
      <resauthor/>
      <morerelatedres/>
      <contactus/>
    </div>
  </div>
</template>

<script>
import MoreRelatedRes from './MoreRelatedRes.vue'
import ResAuthor from './ResAuthor.vue'
import ResComments from './ResComments.vue'
import ResMain from './ResMain.vue'
import ContactUs from '../ContactUs/ContactUs.vue'
export default {
  name: 'ResourcePage',
  components: {
    'morerelatedres': MoreRelatedRes,
    'resauthor': ResAuthor,
    'rescomments': ResComments,
    'resmain': ResMain,
    'contactus': ContactUs
  }
}
</script>

<style>
#ResourcePage{
  margin-top: 70px;
  width: 100%;
  overflow-x: hidden;
}
.leftrespart{
  width: 70%;
  display: inline-block;
  vertical-align: top;
}
.rightrespart{
  width: 29%;
  display: inline-block;
  vertical-align: top;
}
</style>
