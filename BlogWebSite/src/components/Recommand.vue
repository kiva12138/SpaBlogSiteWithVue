<template>
  <div id="Recommand">
  	<div id='LeftRecommand'>
		<picrecommand id='PicRecommand'/>
		<mainrecommand id='MainRecommand'/>
  	</div>
    <div id='RightRecommand'>
		<todayrecommand id='TodayRecommand'/>
		<contactus id='ContactUs'/>
    </div>
  </div>
</template>

<script>
import PicRecommand from './RecommandModule/PicRecommand.vue'
import MainRecommand from './RecommandModule/MainRecommand.vue'
import TodayRecommand from './RecommandModule/TodayRecommand.vue'
import ContactUs from './RecommandModule/ContactUs.vue'
export default {
	name:'Recommand',
	components:{
		'picrecommand':PicRecommand,
		'mainrecommand':MainRecommand,
		'todayrecommand':TodayRecommand,
		'contactus':ContactUs
	}
}
</script>

<!--
	margin 4个顺序 上右下左
-->
<style>
#Recommand {
	width: 100%;
	margin: 0;
	padding: 0;
	margin-top: 50px;
}
#LeftRecommand{
	height: 100%;
	width: 70%;
	float: left;
}
#RightRecommand{
	height: 100%;
	width: 30%;
	float: left;
}
#PicRecommand {
	margin-left: 10px;
	margin-right: 10px;
}
#MainRecommand {
	margin-left: 10px;
	margin-right: 10px;
}
#TodayRecommand {
	margin-left: 10px;
	margin-right: 10px;
}
#ContactUs {
	margin-left: 10px;
	margin-right: 10px;
}
</style>
