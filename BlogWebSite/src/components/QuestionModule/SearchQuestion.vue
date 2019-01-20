<template>
  <div id="SearchQuestion">
    <el-input placeholder="搜索论坛"
              v-model="searchContent"
              clearable
              class='searchquesinput'/>
    <el-button type="primary"
               icon="el-icon-search"
               class="searchquesbutton"
               v-on:click='handleQuesClicked'>
              搜索
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'SearchQuestion',
  data () {
    return {
      searchContent: ''
    }
  },
  methods: {
    handleQuesClicked: function () {
      this.$router.push({
        path: '/question/search/' + this.searchContent
      })
    }
  }
}
</script>

<style>
#SearchQuestion{
  margin-left: 40px;
  width: 100%;
}
.searchquesinput{
  margin-top: 10px;
  width: 70%;
}
.searchquesbutton{
  margin-top: 10px;
  margin-right: 20px;
  width: 20%;
  display: inline-block;
}
</style>
