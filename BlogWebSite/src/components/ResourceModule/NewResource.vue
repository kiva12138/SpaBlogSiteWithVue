<template>
  <div id="NewResource">
  <span class=newresline></span>
  <h3 class='newrestitle'>资源•最新</h3>
    <ul class='newresitems'>
      <li v-for="(newres_item, index) in newresItems"
          class='newresitem'
          v-bind:key='index'
          v-on:click='handleResClicked(newres_item.url)'>
        <div class='newresitemcontent'>
          <h3 class='newresitemtitle'>
            {{newres_item.title}}
          </h3>
          <div class='newresitemformat'>
            <span>文件格式: </span>{{newres_item.format}}
          </div>
          <div class='newresitemnum'>
            <span>下载数量</span>{{newres_item.num}}
          </div>
          <div class='newresitemtime'>
            <span>上传时间</span>{{newres_item.time}}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NewResource',
  data () {
    return {
      newresItems: [
        {
          title: 'Title1',
          format: 'MP3',
          url: '86',
          time: '2018-12-29',
          num: 256
        },
        {
          title: 'Title2',
          format: 'RMVB',
          url: '54',
          time: '2018-12-19',
          num: 256
        },
        {
          title: 'Title3',
          format: 'CPP',
          url: '52',
          time: '2018-11-11',
          num: 256
        },
        {
          title: 'Title4',
          format: 'MP3',
          url: '342',
          time: '2018-12-1',
          num: 256
        },
        {
          title: 'Title5',
          format: 'MP3',
          url: '43242',
          time: '2018-11-7',
          num: 256
        },
        {
          title: 'Title6',
          format: 'MP3',
          url: '431431',
          time: '2018-11-7',
          num: 256
        },
        {
          title: 'Title7',
          format: 'MP3',
          url: '43',
          time: '2018-11-7',
          num: 256
        },
        {
          title: 'Title8',
          format: 'MP3',
          url: '865',
          time: '2018-11-7',
          num: 256
        },
        {
          title: 'Title9',
          format: 'MP3',
          url: '653',
          time: '2018-11-7',
          num: 256
        }
      ]
    }
  },
  methods: {
    handleResClicked: function (url) {
      this.$router.push({
        path: '/resource/article/' + url
      })
    }
  }
}
</script>

<style>
.newresitems{
  list-style-type: none;
  padding-left: 10px;
  padding-right: 10px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
.newresitem{
  border: 1px solid;
  border-color: #F2F3F4;
}
.newresitem:hover{
  background: #F2F3F4;
  cursor: pointer;
}
.newresitemcontent{
  height: 80px;
  width: 100%;
}
.newresitemtitle{
  color: #7B7D7D;
  padding-left: 10px;
  padding-top: 0px;
  margin-top: 10px;
  width: 60%;
  display: inline-block;
}
.newresitemformat{
  width: 30%;
  color: #626567;
  display: inline-block;
  text-align: right;
}
.newresitemtime{
  color: #7B7D7D;
  width: 50%;
  text-align: right;
  display: inline-block;
}
.newresitemnum{
  width: 40%;
  margin-left: 10px;
  color: #3498DB;
  display: inline-block;
}
.newresline{
  padding-left: 10px;
  margin-left: 30px;
  background: #2E86C1;
}
.newrestitle{
  color: #2E86C1;
  padding-left: 20px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  display: inline-block;
}
</style>
