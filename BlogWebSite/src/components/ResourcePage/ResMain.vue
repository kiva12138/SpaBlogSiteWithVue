<template>
  <div id='ResMain'>
    <h3 class='restitle'>{{resTitle}}</h3>
    <div class='resdes'>
      <img v-bind:src="resIcon" alt="Icon Of This Resource" height='100px' class='resicon'>
      <div class='moreresinfo'>
        <div>{{resDescription}}</div>
        <div class='timeanddown'>
          <div class='resdownnum'>下载数量：{{resDownNum}}</div>
          <div class='restime'>上传时间：{{resTime}}</div>
        </div>
      </div>
    </div>
    <div class='resop'>
      <el-row>
        <el-button type='primary'
          v-on:click='handleDownClicked'
          style='margin: 5px;'>
          下载
        </el-button>
      </el-row>
      <el-row>
        <el-button type='danger'
          v-on:click='handleReportClicked'
          style='margin: 5px;'>
          举报
        </el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResMain',
  data () {
    return {
      resTitle: '',
      resUrl: '',
      resDownNum: '',
      resDescription: '',
      resIcon: '',
      resTime: ''
    }
  },
  created: function () {
    this.resTitle = 'Title Of This Resource'
    this.resDescription = 'Description Of This Resource, Description Of This Resouce'
    this.url = 'demourl'
    this.resDownNum = 23
    this.resIcon = require('../../assets/mp3_icon.png')
    this.resTime = '2018-3-27'
  },
  methods: {
    handleDownClicked: function () {},
    handleReportClicked: function () {}
  }
}
</script>

<style>
#ResMain{
  margin-top: 20px;
  margin-left: 80px;
  margin-right: 40px;
}
.restitle{
  color: #626567;
}
.resdes{
  color: #424242;
  display: inline-block;
  vertical-align: top;
  width: 80%;
}
.resicon{
  vertical-align: top;
}
.moreresinfo{
  display: inline-block;
  vertical-align: top;
  margin-left: 20px;
  margin-top: 10px;
  width: 80%;
}
.timeanddown{
  text-align: right;
  margin-top: 20px;
}
.resdownnum{
  width: 30%;
  display: inline-block;
  vertical-align: top;
}
.restime{
  width: 40%;
  display: inline-block;
  vertical-align: top;
}
.resop{
  width: 10%;
  display: inline-block;
}
</style>
