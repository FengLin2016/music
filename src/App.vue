<template>
  <div id="app">
    <div class="header"></div>
    <div class="tab">
      <div class="item"><router-link replace to="home">推荐音乐</router-link></div>
      <div class="item"><router-link replace to="hot">热歌榜</router-link></div>
      <div class="item"><router-link replace to="search">搜索</router-link></div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.header
  background:#0088d6 url(/static/images/logo.png) no-repeat 1.5rem center;
  background-size:11.2rem 5rem;
  color:#fff;
  height:6.4rem;
  font:normal 2.2rem/6.4rem 'microsoft yahei';
.tab
  height:3.9rem;
  line-height:3.9rem;
  display:flex;
  position:relative;
  &:after
    position:absolute;
    content:'';
    border-bottom:1px solid #e5e5e5;
    width:200%;
    height:200%;
    transform:scale(0.5,0.5);
    transform-origin:0 0;
    box-sizing:border-box;
    top:0;
    left:0;
  .item
    flex:1;
    text-align:center;
    font:normal 1.4rem/3.9rem 'microsoft yahei';
    position:relative;
    z-index:999;
    a
      position:relative;
      z-index:999;
      font:normal 1.4rem/3.9rem 'microsoft yahei';
      display:block;
      text-decoration:none;
      color:#000;
      &.router-link-active
        color:#0088d6;
        &:after
          position:absolute;
          content:'';
          border-bottom:1px solid #0088d6;
          width:200%;
          height:200%;
          transform:scale(0.5,0.5);
          transform-origin:0 0;
          box-sizing:border-box;
          top:0;
          left:0;

</style>
