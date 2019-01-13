<template>
  <div id="app" class='app'>
    <div class='appnav'>
      <navbar/>
    </div>
    <div class='appcontent'>
      <router-view/>
    </div>
    <div class='appfooter'>
      <appfooter/>
    </div>
  </div>
</template>

<script>
import navbar from './components/navBar.vue'
import footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    'navbar': navbar,
    'appfooter': footer
  }
}
</script>

<style>
  body{
    margin: 0px;
  }
  .appnav{
    position: fixed;
    z-index: 1;
    width: 100%;
  }
  .appcontent{
    width: 100%;
    overflow-x: auto;
  }
  .appfooter{
    margin-top: 60px;
    width: 100%;
  }
</style>
