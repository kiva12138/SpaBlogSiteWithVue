<template>
  <div id="PersonRes">
    <span class='personresline'></span>
    <h3 class='personrestitle'>该用户上传的资源</h3>
    <div class='personres'>
      <el-table :data="displayedres" stripe style="width: 83%" class='personrestbl'>
          <el-table-column prop="title" label="资源名称" width="350"></el-table-column>
          <el-table-column prop="title" label="资源格式" width="100"></el-table-column>
          <el-table-column prop="time" label="上传日期" width="150"></el-table-column>
          <el-table-column prop="download" label="下载量" width="100"></el-table-column>
          <el-table-column label="操作" width="150">
            <template slot-scope="scope">
              <el-button type="text" size="small">查看</el-button>
            </template>
        </el-table-column>
      </el-table>
      <el-pagination
        layout="prev, pager, next"
        :total="totalPageNum"
        :pageSize='5'
        @current-change="pageChanged"
        class='pagination'>
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonRes',
  data () {
    return {
      numOfOnePage: 5,
      currentPage: 1,
      totalPageNum: 10,
      publishedres: [
        {
          title: 'Title1',
          headline: 'Headline1',
          url: '',
          time: '2018-12-29',
          download: 256,
          comment: 9
        },
        {
          title: 'Title2',
          headline: 'Headline2',
          url: '',
          time: '2018-12-19',
          download: 239,
          comment: 9
        },
        {
          title: 'Title3',
          headline: 'Headline3',
          url: '',
          time: '2018-11-11',
          download: 98,
          comment: 9
        },
        {
          title: 'Title4',
          headline: 'Headline4',
          url: '',
          time: '2018-12-1',
          download: 267,
          comment: 9
        },
        {
          title: 'Title5',
          headline: 'Headline5',
          url: '',
          time: '2018-11-7',
          download: 132,
          comment: 9
        },
        {
          title: 'Title6',
          headline: 'Headline6',
          url: '',
          time: '2018-10-9',
          download: 217,
          comment: 9
        },
        {
          title: 'Title7',
          headline: 'Headline7',
          url: '',
          time: '2018-10-26',
          download: 24,
          comment: 9
        },
        {
          title: 'Title8',
          headline: 'Headline8',
          url: '',
          time: '2018-10-3',
          download: 85,
          comment: 9
        },
        {
          title: 'Title9',
          headline: 'Headline9',
          url: '',
          time: '2018-10-4',
          download: 56,
          comment: 9
        },
        {
          title: 'Title10',
          headline: 'Headline10',
          url: '',
          time: '2018-11-2',
          download: 26,
          comment: 9
        }
      ]
    }
  },
  methods: {
    pageChanged (val) {
      this.currentPage = val
    }
  },
  computed: {
    displayedres: function () {
      return this.publishedres.slice((this.currentPage - 1) * 5, this.currentPage * 5)
    }
  }
}
</script>

<style>
#PersonRes{
  margin-top: 20px;
  margin-left: 20px;
}
.personresline{
  padding-left: 10px;
  margin-left: 30px;
  background: #2E86C1;
}
.personrestitle{
  color: #2E86C1;
  padding-left: 20px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  display: inline-block;
}
.personres{
  text-align: center;
}
.personrestbl{
  margin-left: 80px;
}
</style>
