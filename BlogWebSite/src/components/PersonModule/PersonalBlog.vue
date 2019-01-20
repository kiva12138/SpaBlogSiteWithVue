<template>
  <div id="PersonalBlog">
    <span class='personblogline'></span>
    <h3 class='personblogtitle'>已发表博客</h3>
    <div class='personblogs'>
      <el-table :data="displayedblogs" stripe style="width: 94%">
        <el-table-column prop="title" label="标题" width="300"></el-table-column>
        <el-table-column prop="time" label="日期" width="100"></el-table-column>
        <el-table-column prop="headline" label="摘要" width="500"></el-table-column>
        <el-table-column prop="read" label="阅读量" width="100"></el-table-column>
        <el-table-column prop="comment" label="评论量" width="100"></el-table-column>
        <el-table-column label="操作" width="150">
          <template slot-scope="scope">
            <el-button type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
            <el-button type="text" size="small">删除</el-button>
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
      totalPageNum: null,
      publishedblogs: null
    }
  },
  created () {
    this.publishedblogs = JSON.parse(this.$cookie.get('userblogs'))
    this.totalPageNum = this.publishedblogs.length
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
