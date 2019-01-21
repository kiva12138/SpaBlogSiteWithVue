<template>
  <div id="SearchBlog">
    <div class='searchinput'>
      <el-input placeholder="搜索博客"
              v-model="searchContent"
              clearable/>
    </div>
    <div class="searchbutton">
      <el-button type="primary"
                 icon="el-icon-search"
                 v-on:click='handleBlogSearch'>
                搜索
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBlog',
  data () {
    return {
      searchContent: ''
    }
  },
  methods: {
    handleBlogSearch: function () {
      this.$router.push({
        path: '/blog/search/' + this.searchContent
      })
    }
  }
}
</script>

<style>
#SearchBlog{
  margin-left: 20px;
  width: 100%;
}
.searchinput{
  margin-top: 20px;
  width: 70%;
  display: inline-block;
}
.searchbutton{
  margin-top: 20px;
  margin-right: 20px;
  width: 20%;
  display: inline-block;
}
</style>
