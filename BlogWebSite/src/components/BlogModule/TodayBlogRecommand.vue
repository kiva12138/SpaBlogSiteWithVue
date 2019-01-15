<template>
  <div id="TodayBlogRecommand">
    <span class=line></span>
    <h3 class='todayblogtitle'>今日博客推荐</h3>
    <ul class='todayblogitems'>
      <li v-for="(todayblogitem, index) in todayBlogItems"
          class='todayblogitem'
          v-bind:key='index'
          v-on:click='handleBlogClicked(todayblogitem.url)'>
        <div class='todayblogitempic'>
          <img src="./../../assets/vuelogo.png"
                v-bind:alt="todayblogitem.title"
                height='80px'/>
        </div>
        <div class='todayblogitemtitle'>{{todayblogitem.title}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TodayBlogRecommand',
  data () {
    return {
      todayBlogItems: [
        {
          title: 'This is Title1',
          url: '2334',
          picurl: './../../assets/vuelogo.png'
        },
        {
          title: 'This is Title2',
          url: '2334',
          picurl: './../../assets/vuelogo.png'
        },
        {
          title: 'This is Title3',
          url: '2334',
          picurl: './../../assets/vuelogo.png'
        },
        {
          title: 'This is Title4',
          url: '2334',
          picurl: './../../assets/vuelogo.png'
        },
        {
          title: 'This is Title5',
          url: '2334',
          picurl: './../../assets/vuelogo.png'
        }
      ]
    }
  },
  methods: {
    handleBlogClicked: function (url) {
      this.$router.push({
        path: '/blog/article/' + url
      })
    }
  }
}
</script>

<style>
#TodayBlogRecommand{
  margin-left: 20px;
}
.line{
  padding-left: 10px;
  margin-left: 30px;
  background: #2E86C1;
}
.todayblogtitle{
  color: #2E86C1;
  padding-left: 20px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  display: inline-block;
}
.todayblogitems{
  list-style-type:none;
  margin-left: 10px;
  margin-right: 10px;
  padding-left: 20px;
  padding-right: 20px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
.todayblogitem{
  margin: 10px;
  margin-left: 0;
  height: 100px;
  width: 100%;
}
.todayblogitem:hover{
  background: #F2F3F4;
  cursor: pointer;
}
.todayblogitempic{
  margin: 10px;
  width: 20%;
  display: inline-block;
  vertical-align: middle;
}
.todayblogitemtitle{
  width: 65%;
  display: inline-block;
  color: #626567;
  margin: 10px;
}
</style>
