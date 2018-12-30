<template>
  <div id="ContactUsAboutResource">
    <span class=contactusaboutresline></span>
    <h3 class='contactusaboutres'>举报资源或联系我们</h3>
    <div class=contactusaboutreswechat>
      <img src="./../../assets/wechat.jpg" 
                alt="微信二维码"
                height='120px'/>
      <div class='contactusaboutreswechathint'>扫一扫添加我们微信</div>
    </div>
    <div class=contactusaboutresqq>QQ: 
      <a href="http://wpa.qq.com/msgrd?v=3&uin=1574143668&site=qq&menu=yes">
        1574143668
      </a>
    </div>
    <div class=contactusaboutresemail>EMail: 
      <a href="mailto:1574143668@qq.com">
        1574143668@qq.com
      </a>
    </div>
  </div>
</template>

<script>
export default {
	name:'ContactUsAboutResource'
}
</script>

<style>
#ContactUsAboutResource{
  margin-left: 20px;
}
.contactusaboutresline{
  padding-left: 10px;
  margin-left: 30px;
  background: #2E86C1;
}
.contactusaboutres{
  color: #2E86C1;
  padding-left: 20px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  display: inline-block;
}
.contactusaboutreswechat{
  margin: 10px;
  text-align:center;
}
.contactusaboutreswechathint{
  margin: 10px;
  color: #626567;
}
.contactusaboutresqq{
  margin-top: 30px;
  color: #626567;
  text-align:center;
}
.contactusaboutresemail{
  margin-top: 30px;
  color: #626567;
  text-align:center;
}
</style>
