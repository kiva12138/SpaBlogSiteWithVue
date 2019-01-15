<template>
  <div id="ContactUs">
    <span class=line></span>
    <h3 class='contactus'>联系我们</h3>
    <div class=wechat>
      <img src="./../../assets/wechat.jpg"
                alt="微信二维码"
                height='120px'/>
      <div class='wechathint'>扫一扫添加我们微信</div>
    </div>
    <div class=qq>QQ:
      <a href="http://wpa.qq.com/msgrd?v=3&uin=1574143668&site=qq&menu=yes">
        1574143668
      </a>
    </div>
    <div class=email>EMail:
      <a href="mailto:1574143668@qq.com">
        1574143668@qq.com
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactUs'
}
</script>

<style>
#ContactUs{
  margin-left: 20px;
}
.contactus{
  color: #2E86C1;
  padding-left: 20px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  display: inline-block;
}
.wechat{
  margin: 10px;
  text-align:center;
}
.wechathint{
  margin: 10px;
  color: #626567;
}
.qq{
  margin-top: 30px;
  color: #626567;
  text-align:center;
}
.email{
  margin-top: 30px;
  color: #626567;
  text-align:center;
}
</style>
