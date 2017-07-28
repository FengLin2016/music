<template>
  <ul class="list">
    <li v-for="item in dataList"><router-link  :to="{path:'/song', query: { id: item.id }}"><i class="iconfont">&#xe623;</i><h2>{{item.title}}</h2><p><i class="iconfont">&#xe603;</i>{{item.singer}}-{{item.title}}</p></router-link></li>
  </ul>
</template>

<script>
export default {
  data: function () {
    return {
    }
  },
  props: ['dataList']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
.list
 padding:0 1rem;
 margin-top:-1rem;
 li
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
  &:last-child:after
    display:none;
  a
   text-decoration:none;
   padding:1rem 0 .5rem 0;
   display:block;
   position:relative;
   z-index:9999;
   h2
    font:normal 1.8rem/1 'microsoft yahei';
    color:#000;
   p
    font:normal 1.2rem/2 'microsoft yahei';
    color:#9d9d9d;
    i
     color:#0088d6;
     padding-right:.2rem;
   >i
    float:right;
    font-size:2.2rem;
    color:#9d9d9d;
    margin-top:.5rem;
</style>
