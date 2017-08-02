<template>
  <div class="home">
  	<h1>推荐歌单</h1>
	<ul class="gd">
		<li v-for = "item in menuList" v-if="item.title!='热歌榜单'"><router-link  :to="{path:'/theme', query: { type: item.id }}"><img :src="host+item.img" alt=""><p>{{item.title}}</p></router-link></li>
	</ul>
	
	<h1>最新音乐</h1>
	<List :data-list="dataList"></List>
  <div class="footer">
      <p>版权所有 ©2017</p> 
  </div>
  </div>
</template>

<script>
import List from '../List/List'
export default {
  data: function () {
    return {
      host: 'http://localhost:3000/uploads/',
      dataList: [],
      menuList: []
    }
  },
  components: {
    List: List
  },
  created: function () {
    this.$http.get('http://localhost:3000/api').then(function (res) {
      this.dataList = res.data.data
    })
    this.$http.get('http://localhost:3000/api/menu').then(function (res) {
      this.menuList = res.data.data
    })
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
