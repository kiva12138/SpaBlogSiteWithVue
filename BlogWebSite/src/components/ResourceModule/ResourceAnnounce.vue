<template>
  <div id="ResourceAnnounce">
    <span class=resannouline></span>
    <h3 class='resannoutitle'>资源置顶公告</h3>
    <ul class='resannouitems'>
      <li v-for="(resannouitem, index) in resAnnounceItems"
          v-bind:key='index'
          class='resannouitem'>
        <div class='resannouitemtitle'>{{resannouitem.title}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ResourceAnnounce',
  data () {
    return {
      resAnnounceItems: [
        {
          title: '本资源区仅供网友互相分享代码、图片等文件所用，严禁用于任何形式的商业用途。',
          url: ''
        },
        {
          title: '请大家尊重版权，如果转载请注明出处与作者，同时需要取得原作者的许可。',
          url: ''
        },
        {
          title: '本资源区严禁提供任何形式的暴力、恐怖、违法、反动、邪教、盗版等资源，如果发现任何形式的违规资源，请立即举报。',
          url: ''
        }
      ]
    }
  }
}
</script>

<style>
#ResourceAnnounce{
  margin-left: 20px;
}
.resannouline{
  padding-left: 10px;
  margin-left: 30px;
  background: #2E86C1;
}
.resannoutitle{
  color: #2E86C1;
  padding-left: 20px;
  margin-bottom: 10px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  display: inline-block;
}
.resannouitems{
  list-style-type:none;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 0;
  padding-left: 20px;
  padding-right: 20px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
.resannouitem{
  margin: 0;
  height: 30px;
  width: 100%;
}
.resannouitem:hover{
  background: #F2F3F4;
  cursor: pointer;
}
.resannouitemtitle{
  color: #626567;
  margin-top:5px;
  margin-left: 5px;
  vertical-align: middle;
}
</style>
