<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view/> -->
     <!-- <transition name="fade"> -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  <!-- </transition> -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
// @import "../css/reset.css";
// @import "../css/root.less";
body{
    background-color: #f6f6f6;
    width: 1200px; // position: relative;
    margin: 0 auto;
    #app {
  width: 1200px;
  min-width: 1200px;
  margin:0 auto;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  box-shadow: 0px 0px 12px 4px rgba(51, 51, 51, 0.08);
}
}


</style>
