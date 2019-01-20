<template>
  <div id="QuesSearchPage">
    <div class='leftquessearch'>
      <quessearch/>
      <quessearchresult/>
    </div>
    <div class='rightquessearch'>
      <todayquesrecommand/>
      <contactus/>
    </div>
  </div>
</template>

<script>
import QuesSearch from './QuesSearch.vue'
import QuesSearchResult from './QuesSearchResult.vue'
import TodayQuesRecommand from '../QuestionModule/QuestionAnnounce.vue'
import ContactUs from '../ContactUs/ContactUs.vue'
export default {
  name: 'QuesSearchPage',
  components: {
    'quessearch': QuesSearch,
    'quessearchresult': QuesSearchResult,
    'todayquesrecommand': TodayQuesRecommand,
    'contactus': ContactUs
  }
}
</script>

<style>
#QuesSearchPage{
  margin-top: 60px;
}
.leftquessearch{
  width: 70%;
  display: inline-block;
  vertical-align: top;
}
.rightquessearch{
  width: 29%;
  display: inline-block;
  vertical-align: top;
}
</style>
