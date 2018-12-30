<template>
  <div id="QuestionStar">
    <span class='quesline'></span>
    <h3 class='quesstartitle'>博客达人</h3>
    <ul class='quesstaritems'>
      <li v-for="quesstaritem in quesStarItems"
          class='quesstaritem'>
        <div class='quesstaritempic'>
          <img v-bind:src="quesstaritem.headurl" 
                v-bind:alt="quesstaritem.name+'的头像'"
                height='80px'/>
        </div>
        <div class='quesstarcontent'>
          <div class='quesstaritemname'>{{quesstaritem.name}}</div>
          <div class='quesstaritemdes'>
            {{quesstaritem.description}}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
	name:'QuestionStar',
  data(){
      return{
        quesStarItems:[
          {
            name:'Name1',
            description:'Description1',
            url:'',
            headurl:require('./../../assets/head.png')
          },
          {
            name:'Name2',
            description:'Description2',
            url:'',
            headurl:require('./../../assets/head.png')
          },
          {
            name:'Name3',
            description:'Description3',
            url:'',
            headurl:require('./../../assets/head.png')
          },
          {
            name:'Name4',
            description:'Description4',
            url:'',
            headurl:require('./../../assets/head.png')
          },
          {
            name:'Name5',
            description:'Description5',
            url:'',
            headurl:require('./../../assets/head.png')
          }
        ]
      }
  }
}
</script>

<style>
#QuestionStar{
  margin-left: 20px;
  margin-top: 20px;
}
.quesline{
  padding-left: 10px;
  margin-left: 30px;
  background: #2E86C1;
}
.quesstartitle{
  color: #2E86C1;
  padding-left: 20px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  display: inline-block;
}
.quesstaritems{
  list-style-type:none;
  margin-left: 10px;
  margin-right: 10px;
  padding-left: 20px;
  padding-right: 20px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
.quesstaritem{
  margin: 10px;
  margin-left: 0;
  height: 100px;
  width: 100%;
}
.quesstaritem:hover{
  background: #F2F3F4;
  cursor: pointer;
}
.quesstaritempic{
  margin: 10px;
  width: 20%;
  display: inline-block;
  vertical-align: middle;
}
.quesstarcontent{
  margin: 10px;
  width: 65%;
  display: inline-block;
  vertical-align: middle;
}
.quesstaritemname{
  color: #626567;
  margin: 10px;
}
.quesstaritemdes{
  color: #626567;
  margin: 10px;
} 
</style>
