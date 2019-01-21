<template>
  <div id="BlogSearch">
    <div class='blogsearchinput'>
      <el-input v-bind:placeholder="this.$route.params.keywords"
                v-model="searchContent"
                clearable/>
    </div>
    <div class="blogsearchbutton">
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
  name: 'BlogSearch',
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
#BlogSearch{
  margin-left: 20px;
  width: 100%;
  margin-top: 20px;
}
.blogsearchinput{
  width: 80%;
  margin-left: 10px;
  display: inline-block;
}
.blogsearchbutton{
  width: 15%;
  display: inline-block;
}
</style>
