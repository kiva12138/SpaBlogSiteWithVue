<template>
  <div id="PersonPage">
    <div class='leftpersonpart'>
      <persondetail/>
      <contactus/>
    </div>
    <div class='rightpersonpart'>
      <personblog/>
      <personres/>
      <personques/>
    </div>
  </div>
</template>

<script>
import PersonBlog from './PersonalBlog.vue'
import PersonQues from './PersonalQues.vue'
import PersonRes from './PersonalRes.vue'
import PersonDetail from './PersonalDetail.vue'
import ContactUs from '../ContactUs/ContactUs.vue'
export default {
  name: 'PersonPage',
  components: {
    'personblog': PersonBlog,
    'personques': PersonQues,
    'personres': PersonRes,
    'persondetail': PersonDetail,
    'contactus': ContactUs
  }
}
</script>

<style>
#PersonPage{
  margin-top: 60px;
  overflow-x: hidden;
}
.leftpersonpart{
  width: 30%;
  display: inline-block;
  vertical-align: top;
}
.rightpersonpart{
  width: 69%;
  display: inline-block;
  vertical-align: top;
}
</style>
