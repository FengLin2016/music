<template>
  <div class="song">
    <div class="bg"></div>
    <div class="zz"></div>
    <div class="gp"><img src="/static/images/temp.jpg" width="45" alt=""></div>
    <div class="title">
      <h1>刚好遇见你</h1>
      <p>李玉刚</p>
    </div>
    <div class="liner">
      <span>00:00</span>
      <div><span></span><i></i></div>
      <span>03:20</span>
    </div>
    <div class="player">
      <i class="iconfont">&#xe601;</i>
      <i class="iconfont">&#xe623;</i>
      <i class="iconfont">&#xe600;</i>
    </div>
    <audio ref="mAudio" src="/static/李玉刚 - 刚好遇见你.mp3" autoplay></audio>
  </div>
</template>

<script>
export default {
  data:{
    startTime:'00:00',
    endTime:'00:00',
  },
  mounted: function () {
    let that = this
    var s = ((that.$refs.mAudio.duration)%60) > 9?((that.$refs.mAudio.duration)%60):'0' + ((that.$refs.mAudio.duration)%60)
    var m = parseInt((that.$refs.mAudio.duration)/60) > 9:parseInt((that.$refs.mAudio.duration)/60):'0'+parseInt((that.$refs.mAudio.duration)/60)
     that.endTime = m + ':' + s
    var t = setInterval(function () {
      console.log(that.$refs.mAudio.duration)
    }, 1000)
    if(that.$refs.mAudio.ended){
      clearInterval(t);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
@keyframes gd
 from
  transform: rotate(0deg);
 to
  transform: rotate(360deg);
.song
 position:absolute;
 background:#333;
 top:0;
 left:0;
 width:100%;
 height:100%;
 overflow:hidden;
 .zz
  position:absolute;
  width:10rem;
  height:14.3rem;
  background:transparent url(/static/images/zz.png) no-repeat center top;
  background-size:100% auto;
  z-index:99991;
  right:50%;
  margin-right:-7rem;
 .bg
  position:absolute;
  background:#000 url(/static/images/temp.jpg) no-repeat center top;
  background-size:auto 100%;
  filter: blur(5px) brightness(50%);
  z-index:999;
  top:0;
  left:0;
  width:100%;
  height:100%;
 .gp
  position:relative;
  top:0;
  z-index:9999;
  background:transparent url(/static/images/bg.png) no-repeat center center;
  height:24.6rem;
  width:24.6rem;
  margin:8rem auto 0;
  background-size:100% 100%;
  animation: gd 10s linear infinite;
  img
   position:relative;
   z-index:999;
   height:15.6rem;
   left:4.5rem;
   top:4.5rem;
   width:15.6rem;
   border-radius:50%;
 .liner
  position:absolute;
  bottom:7.5rem;
  width:100%;
  display:flex;
  z-index:9999;
  color:#fff;
  span
   display:block;
   width:4rem;
   text-align:right;
  span:last-child
   text-align:left;
  >div
   margin:.35rem 1rem 0;
   flex:1;
   height:.2rem;
   background:#fff;
   position:relative;
   >span
    width:20%;
    height:.2rem;
    display:block;
    background:#0088d6;
   >i
    position:absolute;
    left:20%;
    width:1rem;
    height:1rem;
    top:-.4rem;
    background:#fff;
    border-radius:50%;
 .player
  width:100%;
  display:flex;
  position:absolute;
  z-index:9999;
  color:#fff;
  bottom:0;
  line-height:7.5rem;
  i
   flex:1;
   display:block;
   text-align:center;
   font-size:4rem;
 .title
  position:relative;
  z-index:9999;
  color:#fff;
  text-align:center;
  padding-top:1rem;
  >h1
   font-size:3rem;
   line-height:8rem;
  >p
   font-size:1.6rem;
</style>
