<template>
  <div id="BlogStar">
    <span class='line'></span>
    <h3 class='startitle'>博客达人</h3>
    <ul class='staritems'>
      <li v-for="(staritem, index) in starItems"
          class='staritem'
          v-bind:key='index'
          v-on:click='handlePersonClicked(staritem.url)'>
        <div class='staritempic'>
          <img v-bind:src="staritem.headurl"
                v-bind:alt="staritem.name+'的头像'"
                height='80px'/>
        </div>
        <div class='starcontent'>
          <div class='staritemname'>{{staritem.name}}</div>
          <div class='staritemdes'>{{staritem.description}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BlogStar',
  data () {
    return {
      starItems: [
        {
          name: 'Name1',
          description: 'Description1',
          url: '222',
          headurl: require('./../../assets/head.png')
        },
        {
          name: 'Name2',
          description: 'Description2',
          url: '222',
          headurl: require('./../../assets/head.png')
        },
        {
          name: 'Name3',
          description: 'Description3',
          url: '222',
          headurl: require('./../../assets/head.png')
        },
        {
          name: 'Name4',
          description: 'Description4',
          url: '222',
          headurl: require('./../../assets/head.png')
        },
        {
          name: 'Name5',
          description: 'Description5',
          url: '222',
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
#BlogStar{
  margin-left: 20px;
  margin-top: 20px;
}
.line{
  padding-left: 10px;
  margin-left: 30px;
  background: #2E86C1;
}
.startitle{
  color: #2E86C1;
  padding-left: 20px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  display: inline-block;
}
.staritems{
  list-style-type:none;
  margin-left: 10px;
  margin-right: 10px;
  padding-left: 20px;
  padding-right: 20px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
.staritem{
  margin: 10px;
  margin-left: 0;
  height: 100px;
  width: 100%;
}
.staritem:hover{
  background: #F2F3F4;
  cursor: pointer;
}
.staritempic{
  margin: 10px;
  width: 20%;
  display: inline-block;
  vertical-align: middle;
}
.starcontent{
  margin: 10px;
  width: 65%;
  display: inline-block;
  vertical-align: middle;
}
.staritemname{
  color: #626567;
  margin: 10px;
}
.staritemdes{
  color: #626567;
  margin: 10px;
}
</style>
