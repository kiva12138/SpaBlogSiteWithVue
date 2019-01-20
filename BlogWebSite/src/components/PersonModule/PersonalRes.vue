<template>
  <div id="PersonRes">
    <span class='personresline'></span>
    <h3 class='personrestitle'>已上传资源</h3>
    <div class='personres'>
      <el-table :data="displayedres" stripe style="width: 98%" class='personrestbl'>
          <el-table-column prop="title" label="资源名称" width="200"></el-table-column>
          <el-table-column prop="title" label="资源格式" width="100"></el-table-column>
          <el-table-column prop="time" label="上传日期" width="100"></el-table-column>
          <el-table-column prop="download" label="下载量" width="100"></el-table-column>
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
  name: 'PersonRes',
  data () {
    return {
      numOfOnePage: 5,
      currentPage: 1,
      totalPageNum: null,
      publishedres: null
    }
  },
  created () {
    if (!this.$session.exists()) {
      this.$router.push('/login')
    } else if (!(this.$cookie.get('login') === '1')) {
      this.$router.push('/login')
    } else {
      this.publishedres = JSON.parse(this.$cookie.get('userres'))
      this.totalPageNum = this.publishedres.length
    }
  },
  methods: {
    pageChanged (val) {
      this.currentPage = val
    }
  },
  computed: {
    displayedres: function () {
      if (!(this.publishedres === null)) {
        return this.publishedres.slice((this.currentPage - 1) * 5, this.currentPage * 5)
      }
    }
  }
}
</script>

<style>
#PersonRes{
  margin-top: 20px;
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
  margin-left: 60px;
}
</style>
