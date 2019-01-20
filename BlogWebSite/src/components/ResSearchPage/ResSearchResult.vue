<template>
  <div id="ResSearchResult">
    <ul class='ressearchitems'>
      <li v-for="(res_item, index) in resItems"
          class='ressearchitem'
          v-bind:key='index'
          v-on:click='handleResClicked(res_item.url)'>
        <div class='ressearchitem'>
          <h3 class='ressearchitemtitle'>
            {{res_item.title}}
          </h3>
          <div class='ressearchitemdown'>
            <span>下载量</span>{{res_item.down}}
          </div>
          <div class='ressearchitemtime'>
            <span>上传时间</span>{{res_item.time}}
          </div>
          <div class='ressearchitemformat'>
              文件格式: {{res_item.format}}
            </div>
          <div class='resop'>
            <el-button type='primary' class='downbutton' v-on:click='downloadres'>下载</el-button>
          </div>
        </div>
      </li>
    </ul>
    <h3 class='ressearchnum'>一共{{allNum}}条数据</h3>
    <el-pagination
      layout="prev, pager, next"
      :total="allNum"
      :pageSize='10'
      @current-change="pageChanged"
      class='ressearchpagination'>
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'ResSearchResult',
  data () {
    return {
      resItems: [
        {
          title: 'Title1',
          url: '456',
          format: 'mp3',
          time: '2018-12-9',
          down: 45
        },
        {
          title: 'Title2',
          url: '456',
          format: 'mp3',
          time: '2018-12-9',
          down: 45
        },
        {
          title: 'Title3',
          url: '456',
          format: 'mp3',
          time: '2018-12-9',
          down: 45
        },
        {
          title: 'Title4',
          url: '456',
          format: 'mp3',
          time: '2018-12-9',
          down: 45
        },
        {
          title: 'Title5',
          url: '456',
          format: 'mp3',
          time: '2018-12-9',
          down: 45
        },
        {
          title: 'Title6',
          url: '456',
          format: 'mp3',
          time: '2018-12-9',
          down: 45
        },
        {
          title: 'Title7',
          url: '456',
          format: 'mp3',
          time: '2018-12-9',
          down: 45
        },
        {
          title: 'Title8',
          url: '456',
          format: 'mp3',
          time: '2018-12-9',
          down: 45
        },
        {
          title: 'Title9',
          url: '456',
          format: 'mp3',
          time: '2018-12-9',
          down: 45
        },
        {
          title: 'Title10',
          url: '456',
          format: 'mp3',
          time: '2018-12-9',
          down: 45
        }
      ],
      allNum: 34
    }
  },
  methods: {
    handleResClicked: function (url) {
      this.$router.push({
        path: '/resource/article/' + url
      })
    },
    pageChanged: function () {
    },
    downloadres: function () {
      event.stopPropagation()
    }
  }
}
</script>

<style>
#ResSearchResult{
  margin-left: 20px;
  width: 100%;
}
.ressearchitems{
  list-style-type:none;
  padding-left: 10px;
  padding-right: 40px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
.ressearchitem{
  border: 1px solid;
  border-color: #F2F3F4;
  z-index: 0;
}
.ressearchitem:hover{
  background: #F2F3F4;
  cursor: pointer;
}
.ressearchitemcontent{
  height: 120px;
  width: 100%;
  margin: 10px;
}
.ressearchitemtitle{
  color: #7B7D7D;
  padding: 10px;
  width: 65%;
  display: inline-block;
}
.ressearchitemtime{
  color: #7B7D7D;
  width: 20%;
  display: inline-block;
  text-align: right;
}
.ressearchitemdown{
  width: 10%;
  color: #3498DB;
  text-align: right;
  display: inline-block;
}
.ressearchitemformat{
  padding-left: 10px;
  width: 80%;
  color: #626567;
  margin-bottom: 10px;
  display: inline-block;
}
.ressearchnum{
  color: #626567;
  text-align: center;
}
.ressearchpagination{
  text-align: center;
}
.resop{
  text-align: right;
  width: 19%;
}
.downbutton{
  display: inline-block;
  margin-left: 60px;
  margin-bottom: 20px;
  z-index: 1;
}
</style>
