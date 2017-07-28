<template>
  <div class="song">
    <div class="bg"></div>
    <div class="zz"></div>
    <div class="gp animated" ref="gp"><img src="/static/images/temp.jpg" width="45" alt=""></div>
    <div class="title">
      <h1>{{title}}</h1>
      <p >{{singer}}</p>
    </div>
    <div class="liner">
      <span>{{startTime}}</span>
      <div><span ref="progressBar"></span><i ref="dot"></i></div>
      <span>{{endTime}}</span>
    </div>
    <div class="player">
      <i class="iconfont">&#xe601;</i>
      <i class="iconfont" @click="control" :class="icon"></i>
      <i class="iconfont">&#xe600;</i>
    </div>
    <audio ref="mAudio" :src="mp3" autoplay></audio>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      startTime: '00:00',
      endTime: '00:00',
      obj: '',
      icon: 'playIcon',
      t: '',
      ss: '00',
      mm: '00',
      s: '',
      m: '',
      percent: '',
      mp3: 'http://localhost:3000/uploads/',
      title: '',
      singer: ' '
    }
  },
  created: function () {
    this.$http.get('http://localhost:3000/api/' + this.$route.query.id).then(function (res) {
      this.mp3 = this.mp3 + res.data.data.mp3
      this.title = res.data.data.title
      this.singer = res.data.data.singer
    })
    console.log(this.$route.query.id)
  },
  methods: {
    control: function () {
      if (this.obj.paused) {
        if (this.percent >= 100) {
          this.ss = '00'
          this.mm = '00'
          this.percent = 0
        }
        this.obj.play()
        this.timer()
        this.$refs.gp.classList.add('animated')
        this.icon = 'playIcon'
      } else {
        this.obj.pause()
        clearInterval(this.t)
        this.$refs.gp.classList.remove('animated')
        this.icon = 'pauseIcon'
      }
    },
    timer: function () {
      var that = this
      that.t = setInterval(function () {
        var currTime = parseInt(that.obj.currentTime)
        if (currTime >= 60) {
          that.mm = parseInt(currTime / 60)
          that.mm = (that.mm) > 9 ? (that.mm) : '0' + (that.mm)
          that.ss = parseInt(currTime % 60) > 9 ? parseInt(currTime % 60) : '0' + parseInt(currTime % 60)
        } else {
          that.ss = (currTime) > 9 ? (currTime) : '0' + (currTime)
        }
        that.startTime = that.mm + ':' + that.ss
        that.percent = ((parseInt(that.mm) * 60 + parseInt(that.ss)) / parseInt(that.obj.duration)) * 100
        that.$refs.dot.style.left = (that.percent - 3) + '%'
        that.$refs.progressBar.style.width = that.percent + '%'
        if (that.percent >= 100) {
          clearInterval(that.t)
          that.$refs.gp.classList.remove('animated')
          that.icon = 'pauseIcon'
        }
      }, 1000)
    }
  },
  mounted: function () {
    var that = this
    that.$refs.gp.classList.remove('animated')
    that.icon = 'pauseIcon'
    that.obj = that.$refs.mAudio
    that.obj.addEventListener('canplay', function () {
      if (!that.obj.paused) {
        that.$refs.gp.classList.add('animated')
        that.icon = 'playIcon'
        that.timer()
      }
      that.s = parseInt((that.obj.duration) % 60) > 9 ? parseInt((that.obj.duration) % 60) : '0' + parseInt((that.obj.duration) % 60)
      that.m = parseInt((that.obj.duration) / 60) > 9 ? parseInt((that.obj.duration) / 60) : '0' + parseInt((that.obj.duration) / 60)
      that.endTime = that.m + ':' + that.s
    })
  },
  beforeDestroy: function () {
    clearInterval(this.t)
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
.playIcon:after
 content:'\e66a'
 font-family:'iconfont'
.pauseIcon:after
 content:'\e623'
 font-family:'iconfont'
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
  &.animated
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
    width:0;
    height:.2rem;
    display:block;
    background:#0088d6;
   >i
    position:absolute;
    left:-3%;
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
