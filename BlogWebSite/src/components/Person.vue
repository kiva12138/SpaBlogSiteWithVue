<template>
  <div id="Person">
    <div id='personaldetail'>
      <personaldetail/>
    </div>
    <div id='accountoperation'>
      <accountoperation/>
    </div>
    <div id='personalblog'>
      <personalblog/>
    </div>
    <div id='personalques'>
      <personalques/>
    </div>
    <div id='personalres'>
      <personalres/>
    </div>
  </div>
</template>

<script>
import AccountOperation from './PersonModule/AccountOperation.vue'
import PersonalBlog from './PersonModule/PersonalBlog.vue'
import PersonalDetail from './PersonModule/PersonalDetail.vue'
import PersonalQues from './PersonModule/PersonalQues.vue'
import PersonalRes from './PersonModule/PersonalRes.vue'
export default {
  name: 'Person',
  components: {
    'accountoperation': AccountOperation,
    'personalblog': PersonalBlog,
    'personaldetail': PersonalDetail,
    'personalques': PersonalQues,
    'personalres': PersonalRes
  }
}
</script>

<style>
#Person {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
  width: 100%;
  text-align: left;
}
#personaldetail{
  width: 50%;
  display: inline-block;
}
#accountoperation{
  width: 45%;
  display: inline-block;
  vertical-align: top;
}
#personalques{
  width: 50%;
  display: inline-block;
}
#personalres{
  width: 45%;
  display: inline-block;
  vertical-align: top;
}
</style>
