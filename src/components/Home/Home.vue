<template>
  <div class="home">
  	<h1>推荐歌单</h1>
	<ul class="gd">
		<li><router-link  :to="{path:'/song', query: { type: 1 }}"><img src="/static/images/temp.jpg" alt=""><p>林肯公园主唱离世 | 我努力过 但终究徒劳</p></router-link></li>
		<li><router-link :to="{path:'/theme', query: { type: 2 }}"><img src="/static/images/temp.jpg" alt=""><p>林肯公园主唱离世 | 我努力过 但终究徒劳</p></router-link></li>
    <li><router-link :to="{path:'/theme', query: { type: 3 }}"><img src="/static/images/temp.jpg" alt=""><p>林肯公园主唱离世 | 我努力过 但终究徒劳</p></router-link></li>
    <li><router-link :to="{path:'/theme', query: { type: 4 }}"><img src="/static/images/temp.jpg" alt=""><p>林肯公园主唱离世 | 我努力过 但终究徒劳</p></router-link></li>
    <li><router-link :to="{path:'/theme', query: { type: 5 }}"><img src="/static/images/temp.jpg" alt=""><p>林肯公园主唱离世 | 我努力过 但终究徒劳</p></router-link></li>
    <li><router-link :to="{path:'/theme', query: { type: 6 }}"><img src="/static/images/temp.jpg" alt=""><p>林肯公园主唱离世 | 我努力过 但终究徒劳</p></router-link></li>
	</ul>
	
	<h1>最新音乐</h1>
	<List></List>
  <div class="footer">
      <p>版权所有 ©2017</p> 
  </div>
  </div>
</template>

<script>
import List from '../List/List'
export default {
  components: {
    List: List
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
.home
  h1
   clear:both;
   display:inline-block;
   font:normal 1.8rem/1 'microsoft yahei';
   margin:2rem 0 1.8rem;
   border-left:2px solid #0088d6;
   text-indent:.7rem;
  ul.gd li
  	float:left;
  	width:32%;
  	margin-bottom:.5rem;
  	&:nth-child(3n+2)
  	  margin:0 2%;
  	img
  	  width:100%;
  	  height:12.2rem;
  	p
  	  margin:.5rem 0 1rem;
  	  padding:0 0 0 .5rem;
  	  font:normal 1.2rem/1.4 'microsoft yahei';
    a
     text-decoration:none;
     color:#000;
     display:block;
.footer
 padding:4rem 0 1rem;
 color:#aaa;
 text-align:center;
 background:#f5f5f5 url(/static/images/footer.png) no-repeat center 1rem;
 background-size:11.2rem 5rem;
 p
  font:normal 1.2rem/1.5 'microsoft yahei';
  padding-top:1.5rem;
</style>
