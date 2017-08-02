<template>
  <div class="hot">
    <div class="title">
	  	<img src="/static/images/hot.jpg" width="100%" alt="">
	  	<span>更新时间：2017-07-24</span>
	</div>
  	<div class="HotList">
  		<ul>
  			<li v-for="item,index in hotList"><router-link  :to="{path:'/song', query: { id: item.id }}">
  				<span>{{(index+1<10)?'0'+(index+1):(index+1)}}</span>
  				<div>
  					<i class="iconfont">&#xe623;</i>
  					<h2>{{item.title}}</h2><p><i class="iconfont">&#xe603;</i>{{item.singer}}-{{item.title}}</p>
  				</div>
  			</router-link></li>
  		</ul>
  	</div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      hotList: []
    }
  },
  created: function () {
    this.$http.get('http://localhost:3000/api/menu/5').then(function (res) {
      this.hotList = res.data.data
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
.hot
 .title
  overflow:hidden;
  position:relative;
  span
   position:absolute;
   right:2rem;
   bottom:1.5rem;
   color:#555;
   font:normal 1.2rem/1 'microsoft yahei';
.HotList
  overflow:hidden;
  li:nth-child(1) a span
  li:nth-child(2) a span
  li:nth-child(3) a span
    color:#ffa300;
  li a
   display:flex;
   color:#000;
   font:normal 1.8rem/1.5 'microsoft yahei';
   text-decoration:none;
   span
    display:block;
    width:4rem;
    line-height:6.6rem;
    text-align:center;
    color:#9d9d9d;
   div
    flex:1;
    overflow:hidden;
    padding:1rem 0 .5rem 0;
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
    p
     color:#9d9d9d;
     font:normal 1.4rem/1.3 'microsoft yahei';
     i
      color:#0088d6;
      padding-right:.2rem;
    >i
     float:right;
     font-size:2.2rem;
     color:#9d9d9d;
     padding:.5rem 1.3rem 0 0;
</style>
