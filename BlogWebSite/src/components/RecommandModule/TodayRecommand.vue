<template>
  <div id="TodayRecommand">
    <span class=line></span>
    <h3 class='todaytitle'>今日推荐</h3>
    <ul class='todayitems'>
      <li v-for="(todayitem, index) in todayItems"
          class='todayitem'
          v-bind:key='index'
          v-on:click='handleBlogClicked(todayitem.url)'>
        <div class='todayitempic'>
          <img src="./../../assets/vuelogo.png"
                v-bind:alt="todayitem.title"
                height='80px'/>
        </div>
        <div class='todayitemtitle'>{{todayitem.title}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TodayRecommand',
  data () {
    return {
      todayItems: [
        {
          title: 'This is Title1',
          url: '654',
          picurl: './../../assets/vuelogo.png'
        },
        {
          title: 'This is Title2',
          url: '654',
          picurl: './../../assets/vuelogo.png'
        },
        {
          title: 'This is Title3',
          url: '654',
          picurl: './../../assets/vuelogo.png'
        },
        {
          title: 'This is Title4',
          url: '654',
          picurl: './../../assets/vuelogo.png'
        },
        {
          title: 'This is Title5',
          url: '654',
          picurl: './../../assets/vuelogo.png'
        },
        {
          title: 'This is Title6',
          url: '654',
          picurl: './../../assets/vuelogo.png'
        },
        {
          title: 'This is Title7',
          url: '654',
          picurl: './../../assets/vuelogo.png'
        },
        {
          title: 'This is Title8',
          url: '654',
          picurl: './../../assets/vuelogo.png'
        },
        {
          title: 'This is Title9',
          url: '654',
          picurl: './../../assets/vuelogo.png'
        },
        {
          title: 'This is Title10',
          url: '654',
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
#TodayRecommand{
  margin-left: 20px;
}
.line{
  padding-left: 10px;
  margin-left: 30px;
  background: #2E86C1;
}
.todaytitle{
  color: #2E86C1;
  padding-left: 20px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  display: inline-block;
}
.todayitems{
  list-style-type:none;
  margin-left: 10px;
  margin-right: 10px;
  padding-left: 20px;
  padding-right: 20px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
.todayitem{
  margin: 10px;
  margin-left: 0;
  height: 100px;
  width: 100%;
}
.todayitem:hover{
  background: #F2F3F4;
  cursor: pointer;
}
.todayitempic{
  margin: 10px;
  width: 20%;
  display: inline-block;
  vertical-align: middle;
}
.todayitemtitle{
  width: 65%;
  display: inline-block;
  color: #626567;
  margin: 10px;
}
</style>
