<template>
  	<div id="PicBlogRecommand">
	<el-carousel :interval="4000" type="card" height="250px">
		<el-carousel-item v-for="item in 6" :key="item">
			<h3>{{ item }}</h3>
		</el-carousel-item>
	</el-carousel>
	</div> 
</template>

<script>
export default {
	name:'PicBlogRecommand'
}
</script>

<style>
	.el-carousel{
		z-index: 0;
	}
	.el-carousel__item h3 {
		color: #475669;
		font-size: 18px;
		opacity: 0.75;
		line-height: 300px;
		margin: 0;
		text-align: center;
	}
	.el-carousel__item:nth-child(2n) {
		background-color: #EBF5FB;
	}
	.el-carousel__item:nth-child(2n+1) {
		background-color: #D6EAF8;
	}
	 
</style>
