<template>
  <div id="ResSearchPage">
    <div class='leftressearch'>
      <ressearch/>
      <ressearchresult/>
    </div>
    <div class='rightressearch'>
      <todayresrecommand/>
      <contactus/>
    </div>
  </div>
</template>

<script>
import ResSearch from './ResSearch.vue'
import ResSearchResult from './ResSearchResult.vue'
import TodayResRecommand from '../ResourceModule/ResourceStar.vue'
import ContactUs from '../ContactUs/ContactUs.vue'
export default {
  name: 'ResSearchPage',
  components: {
    'ressearch': ResSearch,
    'ressearchresult': ResSearchResult,
    'todayresrecommand': TodayResRecommand,
    'contactus': ContactUs
  }
}
</script>

<style>
#ResSearchPage{
  margin-top: 60px;
}
.leftressearch{
  width: 70%;
  display: inline-block;
  vertical-align: top;
}
.rightressearch{
  width: 29%;
  display: inline-block;
  vertical-align: top;
}
</style>
