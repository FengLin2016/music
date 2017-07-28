<template>
  <div class="search">
  	<div class="input">
  		<input type="text" name="keywords" placeholder="搜索歌曲、歌手、专辑" v-model="keywords">
  	</div>
  	<div class="hotSearch">
  		<h1>热门搜索</h1>
  		<a href="#">双世宠妃</a><a href="#">如果我爱你</a><a href="#">林肯公园</a>
  		<a href="#">我的一个道姑朋友</a><a href="#">I Am You</a><a href="#">不用去猜</a><a href="#">陈奕迅</a><a href="#">春风十里不如你</a><a href="#">Linkin Park</a>
  	</div>
  	<div class="searchRecord">
  		<h1>搜索记录</h1>
  		<ul>
  			<li><i class="iconfont">&#xe60e;</i><a href="#">不用去猜</a><i class="iconfont">&#xe6c4;</i></li>
  			<li><i class="iconfont">&#xe60e;</i><a href="#">不用去猜</a><i class="iconfont">&#xe6c4;</i></li>
  			<li><i class="iconfont">&#xe60e;</i><a href="#">不用去猜</a><i class="iconfont">&#xe6c4;</i></li>
  			<li><i class="iconfont">&#xe60e;</i><a href="#">不用去猜</a><i class="iconfont">&#xe6c4;</i></li>
  		</ul>
  	</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      keywords: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
.search
 overflow:hidden;
 margin-top:1rem;
 >div.input
  padding:0 1.5rem;
  display:flex;
  input
   display:block;
   flex:1;
   height:2rem;
   border:0;
   border-radius:2rem;
   padding:.5rem 1.5rem;
   background:#ebecec;
   line-height:2rem;
   color:#000;
 .hotSearch
  position:relative;
  margin-top:1rem;
  padding-top:1rem;
  padding-left:1rem;
  h1
   font:normal 1.4rem/1.5 'microsoft yahei';
   margin-bottom:.5rem;
   color:#555;
  &:after
    position:absolute;
    content:'';
    border-top:1px solid #e5e5e5;
    border-bottom:1px solid #e5e5e5;
    width:200%;
    height:200%;
    transform:scale(0.5,0.5);
    transform-origin:0 0;
    box-sizing:border-box;
    top:0;
    left:0;
  a
   display:inline-block;
   font:normal 1.2rem/1.2 'microsoft yahei';
   text-decoration:none;
   position:relative;
   padding:.5rem 1.5rem;
   margin:0 .5rem 1rem;
   color:#555;
   &:after
    position:absolute;
    content:'';
    border:1px solid #e5e5e5;
    width:200%;
    height:200%;
    transform:scale(0.5,0.5);
    transform-origin:0 0;
    box-sizing:border-box;
    border-radius:4rem;
    top:0;
    left:0;
    z-index:999;
 .searchRecord
  position:relative;
  padding-top:1rem;
  h1
   font:normal 1.4rem/1.5 'microsoft yahei';
   color:#555;
   padding-left:1rem;
  ul li
   display:flex;
   padding:1.5rem 0 1.5rem 1rem;
   position:relative;
   i:last-child
    padding-right:1.5rem;
    color:#ccc;
   i:first-child
    padding-right:.5rem;
    color:#999;
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
  ul li a
   position:relative;
   flex:1;
   font:normal 1.4rem/1 'microsoft yahei';
   text-decoration:none;
   color:#555;
   z-index:999;
</style>
