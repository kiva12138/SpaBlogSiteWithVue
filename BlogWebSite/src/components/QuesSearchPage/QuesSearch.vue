<template>
  <div id="QuesSearch">
  <div class='quessearchinput'>
    <el-input v-bind:placeholder="this.$route.params.keywords"
              v-model="searchContent"
              clearable/>
  </div>
  <div class="quessearchbutton">
    <el-button type="primary"
               icon="el-icon-search"
               v-on:click='handleQuesSearch'>
              搜索
    </el-button>
  </div>
  </div>
</template>

<script>
export default {
  name: 'QuesSearch',
  data () {
    return {
      searchContent: ''
    }
  },
  methods: {
    handleQuesSearch: function () {
      this.$router.push({
        path: '/question/search/' + this.searchContent
      })
    }
  }
}
</script>

<style>
#QuesSearch{
  margin-left: 20px;
  width: 100%;
  margin-top: 20px;
}
.quessearchinput{
  width: 80%;
  margin-left: 10px;
  display: inline-block;
}
.quessearchbutton{
  width: 15%;
  display: inline-block;
}
</style>
