<template>
  <div id="PersonalQues">
    <span class='personquesline'></span>
    <h3 class='personquestitle'>该用户提问的问题</h3>
    <div class='personques'>
      <el-table :data="displayedques" stripe style="width: 75%" class='personquestbl'>
        <el-table-column prop="title" label="问题摘要" width="350"></el-table-column>
        <el-table-column prop="time" label="提问日期" width="150"></el-table-column>
        <el-table-column prop="ans" label="回答量" width="150"></el-table-column>
        <el-table-column label="操作" width="120">
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
  name: 'PersonalQues',
  data () {
    return {
      numOfOnePage: 5,
      currentPage: 1,
      totalPageNum: 10,
      publishedques: [
        {
          title: 'Title1',
          url: '',
          time: '2018-12-29',
          ans: 256
        },
        {
          title: 'Title2',
          url: '',
          time: '2018-12-19',
          ans: 239
        },
        {
          title: 'Title3',
          url: '',
          time: '2018-11-11',
          ans: 98
        },
        {
          title: 'Title4',
          url: '',
          time: '2018-12-1',
          ans: 267
        },
        {
          title: 'Title5',
          url: '',
          time: '2018-11-7',
          ans: 132
        },
        {
          title: 'Title6',
          url: '',
          time: '2018-10-9',
          ans: 217
        },
        {
          title: 'Title7',
          url: '',
          time: '2018-10-26',
          ans: 24
        },
        {
          title: 'Title8',
          url: '',
          time: '2018-10-3',
          ans: 85
        },
        {
          title: 'Title9',
          url: '',
          time: '2018-10-4',
          ans: 56
        },
        {
          title: 'Title10',
          url: '',
          time: '2018-11-2',
          ans: 26
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
  margin-left: 80px;
}
</style>
