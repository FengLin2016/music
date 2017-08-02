<template>
  <div class="theme">
    <div class="title">
      <h1>{{title}}</h1>
	  	<img :src="img" width="100%" height="200" alt="">
	  	<span>更新时间：{{nowDate}}</span>
	</div>
  	<div class="HotList">
  		<ul>
  			<li v-for="item,index in dataList"><router-link  :to="{path:'/song', query: { id: item.id }}">
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
var now = new Date()
export default {
  data: function () {
    return {
      dataList: [],
      img: '',
      title: '',
      nowDate: (now.getFullYear() + '年' + (((now.getMonth() + 1) < 10) ? '0' + (now.getMonth() + 1) : (now.getMonth() + 1)) + '月' + ((now.getDate() < 10) ? '0' + now.getDate() : now.getDate()) + '日')
    }
  },
  created: function () {
    var that = this
    this.$http.get('http://localhost:3000/api/menu/' + this.$route.query.type).then(function (res) {
      this.dataList = res.data.data
    })
    // 这里可以在后台处理成一个请求 实现联合查询 或者 保存之前的数据（数据缓存）
    this.$http.get('http://localhost:3000/api/menu/').then(function (res) {
      res.data.data.forEach(function (item) {
        if (parseInt(item.id) === parseInt(that.$route.query.type)) {
          that.img = 'http://localhost:3000/uploads/' + item.img
          that.title = item.title
        }
      })
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
.theme
 position:absolute;
 z-index:9999;
 width:100%;
 top:0;
 left:0;
 .title
  overflow:hidden;
  position:relative;
  h1
   position:absolute;
   color:#fff;
   font-size:2.2rem;
   z-index:9999;
   line-height:2;
   padding:3rem 1.5rem 0 1.5rem;
  img
   filter: blur(0);
  span
   position:absolute;
   right:2rem;
   bottom:1.5rem;
   color:#fff;
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
