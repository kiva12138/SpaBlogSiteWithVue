<template>
    <div id="PicBlogRecommand">
  <el-carousel :interval="4000" type="card" height="250px">
    <el-carousel-item v-for="(item, index) in PicRecommands"
      :key="index"
      v-bind:style="{background: 'url(' + item.pic +')',backgroundRepeat:'no-repeat',backgroundPosition:'center center', backgroundSize: 'cover'}">
      <h3 v-on:click='handleBlogClicked(item.url)'>{{item.title}}</h3>
    </el-carousel-item>
  </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'PicBlogRecommand',
  data () {
    return {
      PicRecommands: [
        {
          title: 'Title 1',
          pic: require('../../assets/TitleDemo.png'),
          url: '123'
        },
        {
          title: 'Title 2',
          pic: require('../../assets/TitleDemo.png'),
          url: '123'
        },
        {
          title: 'Title 3',
          pic: require('../../assets/TitleDemo.png'),
          url: '123'
        },
        {
          title: 'Title 4',
          pic: require('../../assets/TitleDemo.png'),
          url: '123'
        }
      ]
    }
  },
  methods: {
    handleBlogClicked: function (url) {
      this.$router.push({
        path: '/blog/article/' + url
      })
    }
  }
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
  line-height: 250px;
  margin: 0;
  text-align: center;
  padding-top: 100px;
}
.el-carousel__item:nth-child(2n) {
  background-color: #EBF5FB;
}
.el-carousel__item:nth-child(2n+1) {
  background-color: #D6EAF8;
}
</style>
