<template>
  <div id="QuesSearchResult">
    <ul class='quessearchitems'>
      <li v-for="(ques_item, index) in quesItems"
          class='quessearchitem'
          v-bind:key='index'
          v-on:click='handleQuesClicked(ques_item.url)'>
        <div class='quessearchitem'>
          <h3 class='quessearchitemtitle'>
            {{ques_item.title}}
          </h3>
          <div class='quessearchitemread'>
            <span>回答量</span>{{ques_item.ans}}
          </div>
          <div class='quessearchitemtime'>
            <span>最后回答于</span>{{ques_item.time}}
          </div>
          <div class='quessearchitemheadline'>
            {{ques_item.headline}}
          </div>
        </div>
      </li>
    </ul>
    <h3 class='quessearchnum'>一共{{allNum}}条数据</h3>
    <el-pagination
      layout="prev, pager, next"
      :total="allNum"
      :pageSize='10'
      @current-change="pageChanged"
      class='quessearchpagination'>
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'QuesSearchResult',
  data () {
    return {
      quesItems: [
        {
          title: 'Title1',
          url: '456',
          headline: 'Headline headline headline',
          time: '2018-12-9',
          ans: 45
        },
        {
          title: 'Title2',
          url: '456',
          headline: 'Headline headline headline',
          time: '2018-12-9',
          ans: 45
        },
        {
          title: 'Title3',
          url: '456',
          headline: 'Headline headline headline',
          time: '2018-12-9',
          ans: 45
        },
        {
          title: 'Title4',
          url: '456',
          headline: 'Headline headline headline',
          time: '2018-12-9',
          ans: 45
        },
        {
          title: 'Title5',
          url: '456',
          headline: 'Headline headline headline',
          time: '2018-12-9',
          ans: 45
        },
        {
          title: 'Title6',
          url: '456',
          headline: 'Headline headline headline',
          time: '2018-12-9',
          ans: 45
        },
        {
          title: 'Title7',
          url: '456',
          headline: 'Headline headline headline',
          time: '2018-12-9',
          ans: 45
        },
        {
          title: 'Title8',
          url: '456',
          headline: 'Headline headline headline',
          time: '2018-12-9',
          ans: 45
        },
        {
          title: 'Title9',
          url: '456',
          headline: 'Headline headline headline',
          time: '2018-12-9',
          ans: 45
        },
        {
          title: 'Title10',
          url: '456',
          headline: 'Headline headline headline',
          time: '2018-12-9',
          ans: 45
        }
      ],
      allNum: 34
    }
  },
  methods: {
    handleQuesClicked: function (url) {
      this.$router.push({
        path: '/question/article/' + url
      })
    },
    pageChanged: function () {
    }
  }
}
</script>

<style>
#QuesSearchResult{
  margin-left: 20px;
  width: 100%;
}
.quessearchitems{
  list-style-type:none;
  padding-left: 10px;
  padding-right: 40px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
.quessearchitem{
  border: 1px solid;
  border-color: #F2F3F4;
}
.quessearchitem:hover{
  background: #F2F3F4;
  cursor: pointer;
}
.quessearchitemcontent{
  height: 120px;
  width: 100%;
  margin: 10px;
}
.quessearchitemtitle{
  color: #7B7D7D;
  padding: 10px;
  width: 65%;
  display: inline-block;
}
.quessearchitemtime{
  color: #7B7D7D;
  width: 20%;
  display: inline-block;
  text-align: right;
}
.quessearchitemread{
  width: 10%;
  color: #3498DB;
  text-align: right;
  display: inline-block;
}
.quessearchitemheadline{
  padding-left: 10px;
  width: 100%;
  color: #626567;
  margin-bottom: 10px;
}
.quessearchnum{
  color: #626567;
  text-align: center;
}
.quessearchpagination{
  text-align: center;
}
</style>
