<template>
  <div id="ResourceStar">
    <span class='resstarline'></span>
    <h3 class='resstartitle'>分享明星</h3>
    <ul class='resstaritems'>
      <li v-for="(resstaritem, index) in resStarItems"
          v-bind:key='index'
          class='resstaritem'
          v-on:click='handlePersonClicked(resstaritem.url)'>
        <div class='resstaritempic'>
          <img v-bind:src="resstaritem.headurl"
                v-bind:alt="resstaritem.name+'的头像'"
                height='80px'/>
        </div>
        <div class='resstarcontent'>
          <div class='resstaritemname'>{{resstaritem.name}}</div>
          <div class='resstaritemnum'>
            <span>分享数量:</span>{{resstaritem.sharenum}}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ResourceStar',
  data () {
    return {
      resStarItems: [
        {
          name: 'Name1',
          sharenum: 20,
          url: '321',
          headurl: require('./../../assets/head.png')
        },
        {
          name: 'Name2',
          sharenum: 20,
          url: '321',
          headurl: require('./../../assets/head.png')
        },
        {
          name: 'Name3',
          sharenum: 20,
          url: '321',
          headurl: require('./../../assets/head.png')
        },
        {
          name: 'Name4',
          sharenum: 20,
          url: '12',
          headurl: require('./../../assets/head.png')
        },
        {
          name: 'Name5',
          sharenum: 20,
          url: '321',
          headurl: require('./../../assets/head.png')
        }
      ]
    }
  },
  methods: {
    handlePersonClicked: function (url) {
      this.$router.push({
        path: '/person/detail/' + url
      })
    }
  }
}
</script>

<style>
#ResourceStar{
  margin-left: 20px;
  margin-top: 20px;
}
.resstarline{
  padding-left: 10px;
  margin-left: 30px;
  background: #2E86C1;
}
.resstartitle{
  color: #2E86C1;
  padding-left: 20px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  display: inline-block;
}
.resstaritems{
  list-style-type:none;
  margin-left: 10px;
  margin-right: 10px;
  padding-left: 20px;
  padding-right: 20px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
.resstaritem{
  margin: 10px;
  margin-left: 0;
  height: 100px;
  width: 100%;
}
.resstaritem:hover{
  background: #F2F3F4;
  cursor: pointer;
}
.resstaritempic{
  margin: 10px;
  width: 20%;
  display: inline-block;
  vertical-align: middle;
}
.resstarcontent{
  margin: 10px;
  width: 65%;
  display: inline-block;
  vertical-align: middle;
}
.resstaritemname{
  color: #626567;
  margin: 10px;
}
.resstaritemnum{
  color: #626567;
  margin: 10px;
}
</style>
