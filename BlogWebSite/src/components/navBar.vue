<template>
  <div id='nav'>
    <ul class="navmenu">
      <li v-for="(item, index) in menu_items"
      class='navitem'
      v-bind:key='index'
      :class="{active:item.url==currentActiveItem_Computed}"
      v-on:click="changeActiveItem(item)">
        <span v-if="item.url == 'person'">{{username}}</span>{{item.name}}
      </li>
    </ul>
  </div>
</template>

<script>
export default{
  name: 'navBar',
  data () {
    return {
      menu_items: [
        {
          name: '推荐',
          url: 'recommand'
        },
        {
          name: '博客',
          url: 'blog'
        },
        {
          name: '论坛',
          url: 'question'
        },
        {
          name: '资源',
          url: 'resource'
        },
        {
          name: '个人中心',
          url: 'person'
        }
      ],
      currentItemActive: '',
      username: ''
    }
  },
  /* eslint-disable */
  computed: {
    currentActiveItem_Computed: {
      get: function () {
        this.currentItemActive = window.location.hash.substr(2)
        if (this.currentItemActive === '') {
          this.currentItemActive = 'recommand'
        }
        return this.currentItemActive
      },
      set: function (value) {
        this.currentItemActive = value
      }
    }
  },
  methods: {
    changeActiveItem (item) {
      //this.currentActiveItem_Computed = item.url
      this.$router.push({
        'path': item.url
        /*
        'query':{
        'item':this.currentActiveItem.url
        }
        */
      })
    }
  }
}
</script>

<style>
.navmenu{
  width: 100%;
  list-style-type:none;
  margin: 0;
  padding:0;
  overflow:hidden;
}
.navitem{
  display:inline;
  width:20%;
  color:#FFFFFF;
  background-color:#409EFF;
  text-align:center;
  padding-top:10px;
  padding-bottom:10px;
  float:left;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
.active{
  color:#409EFF;
  background-color:#D6EAF8;
}
.navitem:hover{
  cursor: pointer;
}
</style>
