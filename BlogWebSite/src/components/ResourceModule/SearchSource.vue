<template>
  <div id="SearchResource">
    <div class='searchresinput'>
      <el-input placeholder="搜索资源"
                v-model="searchContent"
                clearable/>
    </div>
    <div class="searchresbutton">
      <el-button type="primary"
                 icon="el-icon-search"
                 v-on:click='handleResSearch'>
                搜索
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchResource',
  data () {
    return {
      searchContent: ''
    }
  },
  methods: {
    handleResSearch: function () {
      this.$router.push({
        path: '/resource/search/' + this.searchContent
      })
    }
  }
}
</script>

<style>
#SearchResource{
  margin-left: 40px;
  width: 100%;
}
.searchresinput{
  margin-top: 10px;
  width: 70%;
  display: inline-block;
}
.searchresbutton{
  margin-top: 10px;
  margin-right: 20px;
  width: 20%;
  display: inline-block;
}
</style>
