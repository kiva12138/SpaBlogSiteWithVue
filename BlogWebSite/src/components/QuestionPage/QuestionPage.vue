<template>
  <div id='QuestionPage'>
    <div id='leftQuesPart'>
      <quesmain/>
    </div>
    <div id='rightQuesPart'>
      <morerelatedques/>
      <contactus/>
    </div>
  </div>
</template>

<script>
import ContactUs from '../ContactUs/ContactUs.vue'
import QuesMain from './QuesMain.vue'
import MoreRelatedQues from './MoreRelatedQues.vue'
export default {
  name: 'QuestionPage',
  components: {
    'contactus': ContactUs,
    'quesmain': QuesMain,
    'morerelatedques': MoreRelatedQues
  }
}
</script>

<style>
#QuestionPage{
  margin-top: 70px;
  width: 100%;
  overflow-x: hidden;
}
#leftQuesPart{
  width: 70%;
  display: inline-block;
  vertical-align: top;
}
#rightQuesPart{
  width: 29%;
  display: inline-block;
  vertical-align: top;
}
</style>
