<template>
  <div id="BlogSearch">
    <el-input v-bind:placeholder="this.$route.params.keywords"
              v-model="searchContent"
              clearable
              class='blogsearchinput'/>
    <el-button type="primary"
               icon="el-icon-search"
               class="blogsearchbutton">
              搜索
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'BlogSearch',
  data () {
    return {
      searchContent: ''
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
}
.blogsearchbutton{
  width: 15%;
}
</style>
