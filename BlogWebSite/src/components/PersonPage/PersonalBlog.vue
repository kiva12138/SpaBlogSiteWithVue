<template>
  <div id="PersonalBlog">
    <span class='personblogline'></span>
    <h3 class='personblogtitle'>该用户的博客</h3>
    <div class='personblogs'>
      <el-table :data="displayedblogs" stripe style="width: 98%">
        <el-table-column prop="title" label="标题" width="350"></el-table-column>
        <el-table-column prop="time" label="日期" width="150"></el-table-column>
        <el-table-column prop="read" label="阅读量" width="100"></el-table-column>
        <el-table-column prop="comment" label="评论量" width="100"></el-table-column>
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
  name: 'PersonalBlog',
  data () {
    return {
      numOfOnePage: 5,
      currentPage: 1,
      totalPageNum: 10,
      publishedblogs: [
        {
          title: 'Title1',
          url: '',
          time: '2018-12-29',
          read: 256,
          comment: 9
        },
        {
          title: 'Title2',
          url: '',
          time: '2018-12-19',
          read: 239,
          comment: 9
        },
        {
          title: 'Title3',
          url: '',
          time: '2018-11-11',
          read: 98,
          comment: 9
        },
        {
          title: 'Title4',
          url: '',
          time: '2018-12-1',
          read: 267,
          comment: 9
        },
        {
          title: 'Title5',
          url: '',
          time: '2018-11-7',
          read: 132,
          comment: 9
        },
        {
          title: 'Title6',
          url: '',
          time: '2018-10-9',
          read: 217,
          comment: 9
        },
        {
          title: 'Title7',
          url: '',
          time: '2018-10-26',
          read: 24,
          comment: 9
        },
        {
          title: 'Title8',
          url: '',
          time: '2018-10-3',
          read: 85,
          comment: 9
        },
        {
          title: 'Title9',
          url: '',
          time: '2018-10-4',
          read: 56,
          comment: 9
        },
        {
          title: 'Title10',
          url: '',
          time: '2018-11-2',
          read: 26,
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
    displayedblogs: function () {
      return this.publishedblogs.slice((this.currentPage - 1) * 5, this.currentPage * 5)
    }
  }
}
</script>

<style>
#PersonalBlog{
  margin-left: 20px;
  margin-top: 20px;
}
.personblogline{
  padding-left: 10px;
  margin-left: 30px;
  background: #2E86C1;
}
.personblogtitle{
  color: #2E86C1;
  padding-left: 20px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  display: inline-block;
}
.personblogs{
  margin-left: 80px;
  margin-right: 80px;
  text-align: center;
}
</style>
