<template>
  <div id="PicRecommand">
	<el-carousel indicator-position="outside">
		<el-carousel-item v-for="item in 4" :key="item">
			<h3>{{ item }}</h3>
		</el-carousel-item>
	</el-carousel>
  </div>
</template>

<script>
export default {
	name:'PicRecommand'
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
