<template>
  <div id="HotResource">
  <span class=hotresline></span>
  <h3 class='hotrestitle'>资源•最热</h3>
    <ul class='hotresitems'>
      <li v-for="hotres_item in hotresItems" class='hotresitem'>
        <div class='hotresitemcontent'>
          <h3 class='hotresitemtitle'>
            {{hotres_item.title}}
          </h3>
          <div class='hotresitemformat'>
            <span>文件格式:</span>{{hotres_item.format}}
          </div>
          <div class='hotresitemnum'>
            <span>下载数量</span>{{hotres_item.num}}
          </div>
          <div class='hotresitemtime'>
            <span>上传时间</span>{{hotres_item.time}}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
	name:'HotResource',
  data(){
    return{
      hotresItems:[
        {
          title:'Title1',
          format:'MP3',
          url:'',
          time:'2018-12-29',
          num:256
        },
        {
          title:'Title2',
          format:'RMVB',
          url:'',
          time:'2018-12-19',
          num:256
        },
        {
          title:'Title3',
          format:'CPP',
          url:'',
          time:'2018-11-11',
          num:256
        },
        {
          title:'Title4',
          format:'MP3',
          url:'',
          time:'2018-12-1',
          num:256
        },
        {
          title:'Title5',
          format:'MP3',
          url:'',
          time:'2018-11-7',
          num:256
        },
        {
          title:'Title6',
          format:'MP3',
          url:'',
          time:'2018-11-7',
          num:256
        },
        {
          title:'Title7',
          format:'MP3',
          url:'',
          time:'2018-11-7',
          num:256
        }
      ]
    } 
  }
}
</script>

<style>
.hotresitems{
  list-style-type:none;
  padding-left: 10px;
  padding-right: 10px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
.hotresitem{
  border: 1px solid;
  border-color: #F2F3F4;
}
.hotresitem:hover{
  background: #F2F3F4;
  cursor: pointer;
}
.hotresitemcontent{
  height: 80px;
  width: 100%;
}
.hotresitemtitle{
  color: #7B7D7D;
  padding-left: 10px; 
  padding-top: 0px;
  margin-top: 10px;
  width: 60%;
  display: inline-block;
}
.hotresitemtime{
  color: #7B7D7D;
  width: 50%;
  text-align: right;
  display: inline-block;
}
.hotresitemnum{
  width: 40%;
  margin-left: 10px;
  color: #3498DB;
  display: inline-block;
}
.hotresitemformat{
  width: 30%;
  color: #626567;
  text-align: right;
  display: inline-block;
}
.hotresline{
  padding-left: 10px;
  margin-left: 30px;
  background: #2E86C1;
}
.hotrestitle{
  color: #2E86C1;
  padding-left: 20px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  display: inline-block;
}
</style>
