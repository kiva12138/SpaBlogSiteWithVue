<template>
  <div id="ResSearch">
  <div class='ressearchinput'>
    <el-input v-bind:placeholder="this.$route.params.keywords"
              v-model="searchContent"
              clearable/>
  </div>
  <div class="ressearchbutton">
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
  name: 'ResSearch',
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
#ResSearch{
  margin-left: 20px;
  width: 100%;
}
.ressearchinput{
  width: 80%;
  margin-left: 10px;
  display: inline-block;
}
.ressearchbutton{
  width: 15%;
  display: inline-block;
}
</style>
