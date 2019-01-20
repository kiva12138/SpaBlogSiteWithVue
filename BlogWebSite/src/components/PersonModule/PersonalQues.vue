<template>
  <div id="PersonalQues">
    <span class='personquesline'></span>
    <h3 class='personquestitle'>已提问问题</h3>
    <div class='personques'>
      <el-table :data="displayedques" stripe style="width: 87%" class='personquestbl'>
        <el-table-column prop="title" label="问题摘要" width="300"></el-table-column>
        <el-table-column prop="time" label="提问日期" width="120"></el-table-column>
        <el-table-column prop="ans" label="回答量" width="100"></el-table-column>
        <el-table-column label="操作" width="120">
          <template slot-scope="scope">
            <el-button type="text" size="small">查看</el-button>
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
  name: 'PersonalQues',
  data () {
    return {
      numOfOnePage: 5,
      currentPage: 1,
      totalPageNum: null,
      publishedques: null
    }
  },
  created () {
    this.publishedques = JSON.parse(this.$cookie.get('userques'))
    this.totalPageNum = this.publishedques.length
  },
  methods: {
    pageChanged (val) {
      this.currentPage = val
    }
  },
  computed: {
    displayedques: function () {
      return this.publishedques.slice((this.currentPage - 1) * 5, this.currentPage * 5)
    }
  }
}
</script>

<style>
#PersonalQues{
  margin-left: 20px;
  margin-top: 20px;
}
.personquesline{
  padding-left: 10px;
  margin-left: 30px;
  background: #2E86C1;
}
.personquestitle{
  color: #2E86C1;
  padding-left: 20px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  display: inline-block;
}
.personques{
  text-align: center;
}
.personquestbl{
  margin-left: 60px;
}
</style>
