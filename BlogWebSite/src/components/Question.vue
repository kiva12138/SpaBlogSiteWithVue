<template>
  <div id="Question">
    <div class='leftquestion'>
      <searchquestion class='searchquestion'/>
      <hottechquestions class='hottechquestions'/>
      <hotlifequestions class='hotlifequestions'/>
    </div>
    <div class='rightquestion'>
      <questionstar class='questionstar'/>
      <questionannounce class='questionannounce'/>
    </div>
  </div>
</template>

<script>
import HotLifeQuestion from './QuestionModule/HotLifeQuestions.vue'
import HotTechQuestion from './QuestionModule/HotTechQuestions.vue'
import QuestionAnnounce from './QuestionModule/QuestionAnnounce.vue'
import QuestionStar from './QuestionModule/QuestionStar.vue'
import SearchQuestion from './QuestionModule/SearchQuestion.vue'
export default {
  name: 'Question',
  components: {
    'hotlifequestions': HotLifeQuestion,
    'hottechquestions': HotTechQuestion,
    'questionannounce': QuestionAnnounce,
    'questionstar': QuestionStar,
    'searchquestion': SearchQuestion
  }
}
</script>

<style>
#Question {
  width: 100%;
  margin: 0;
  padding: 0;
  margin-top: 60px;
}
.leftquestion{
  height: 100%;
  width: 70%;
  float: left;
}
.searchquestion{
  margin-left: 10px;
  margin-right: 10px;
}
.hottechquestions{
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 20px;
}
.hotlifequestions{
  margin-left: 10px;
  margin-right: 10px;
}
.rightquestion{
  height: 100%;
  width: 30%;
  float: left;
}
.questionstar{
  margin-left: 10px;
  margin-right: 10px;
}
.questionannounce{
  margin-top: 40px;
  margin-left: 10px;
  margin-right: 10px;
}
</style>
