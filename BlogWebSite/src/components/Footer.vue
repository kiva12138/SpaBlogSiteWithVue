<template>
  <div id='Footer'>
    <span class='footerline'></span>
    <h3 class='footertitle'>传送门</h3>
    <div class='leftfooter'>
      <div class='google'>
        <a href="https://www.google.com" target='_blank'>谷歌(www.google.com)</a>
      </div>
      <div class='baidu'>
        <a href="https://www.baidu.com" target='_blank'>百度(www.baidu.com)</a>
      </div>
      <div class='bing'>
        <a href="https://www.bing.com" target='_blank'>必应(www.bing.com)</a>
      </div>
    </div>
    <div class='midfooter'>
      <div class='illegal'>
        <a href="http://www.cyberpolice.cn" target='_blank'>网络110报警服务</a>
      </div>
      <div class='bjillegal'>
        <a href="http://www.bjjubao.org/" target='_blank'>北京互联网违法和不良信息举报中心</a>
      </div>
      <div class='cninet'>
        <a href="http://www.12377.cn/" target='_blank'>中国互联网举报中心</a>
      </div>
    </div>
    <div class='rightfooter'>
      <div class='csdn'>
        <a href="https://www.csdn.net/" target='_blank'>CSDN</a>
      </div>
      <div class='sto'>
        <a href="https://stackoverflow.com/" target='_blank'>Stack Overflow</a>
      </div>
      <div class='mooc'>
        <a href="https://www.imooc.com/" target='_blank'>慕课网</a>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  name: 'Footer'
}
</script>

<style>
.footerline{
  padding-left: 10px;
  margin-left: 30px;
  background: #409EFF;
}
.footertitle{
  color: #409EFF;
  padding-left: 20px;
  width: 80%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  display: inline-block;
}
.leftfooter{
  margin-left: 60px;
  margin-bottom: 40px;
  width: 30%;
  display: inline-block;
  text-align: center;
  line-height: 30px;
}
.midfooter{
  width: 30%;
  display: inline-block;
  text-align: center;
  line-height: 30px;
}
.rightfooter{
  width: 30%;
  display: inline-block;
  text-align: center;
  line-height: 30px;
}
a:link {
  text-decoration:none;
  color: #409EFF;
}
a:visited {
  text-decoration:none;
  color: #409EFF;
}
a:hover {
  text-decoration:underline;
  color: #409EFF;
}
a:active {
  text-decoration:underline;
  color: #409EFF;
}
</style>
