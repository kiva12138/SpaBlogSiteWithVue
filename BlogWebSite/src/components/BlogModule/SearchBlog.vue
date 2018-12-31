<template>
  <div id="SearchBlog">
    <el-input placeholder="搜索博客"
              v-model="searchContent"
              clearable
              class='searchinput'/>
    <el-button type="primary"
               icon="el-icon-search"
               class="searchbutton">
              搜索
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'SearchBlog',
  data () {
    return {
      searchContent: ''
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
}
.searchbutton{
  margin-top: 20px;
  margin-right: 20px;
  width: 20%;
  display: inline-block;
}
</style>
