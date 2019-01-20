<template>
  <div id="QuesSearch">
    <el-input v-bind:placeholder="this.$route.params.keywords"
              v-model="searchContent"
              clearable
              class='quessearchinput'/>
    <el-button type="primary"
               icon="el-icon-search"
               class="quessearchbutton"
               v-on:click='handleQuesSearch'>
              搜索
    </el-button>
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
}
.quessearchbutton{
  width: 15%;
}
</style>
