<template>
  <div id="ResSearch">
    <el-input v-bind:placeholder="this.$route.params.keywords"
              v-model="searchContent"
              clearable
              class='ressearchinput'/>
    <el-button type="primary"
               icon="el-icon-search"
               class="ressearchbutton"
               v-on:click='handleResSearch'>
              搜索
    </el-button>
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
}
.ressearchbutton{
  width: 15%;
}
</style>
