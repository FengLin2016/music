<template>
  <div class="search">
  	<div class="input">
  		<input type="text" name="keywords" placeholder="搜索歌曲、歌手、专辑" @blur="search" @keyup.enter="search" v-model="keywords">
  	</div>
  	<div class="hotSearch">
  		<h1>热门搜索</h1>
  		<a href="javascript:void(0);" @click="clickRecord('双世宠妃')" >双世宠妃</a><a href="javascript:void(0);" @click="clickRecord('如果我爱你')" >如果我爱你</a><a href="javascript:void(0);" @click="clickRecord('林肯公园')" >林肯公园</a>
  		<a href="javascript:void(0);" @click="clickRecord('我的一个道姑朋友')" >我的一个道姑朋友</a><a href="javascript:void(0);" @click="clickRecord('I Am You')" >I Am You</a><a href="javascript:void(0);" @click="clickRecord('不用去猜')" >不用去猜</a><a href="javascript:void(0);" @click="clickRecord('陈奕迅')" >陈奕迅</a><a href="javascript:void(0);" @click="clickRecord('春风十里不如你')" >春风十里不如你</a><a href="javascript:void(0);" @click="clickRecord('Linkin Park')" >Linkin Park</a>
  	</div>
  	<div class="searchRecord">
  		<h1>搜索记录</h1>
  		<ul>
  			<li v-for="item in recordList"><i class="iconfont">&#xe60e;</i><a @click="clickRecord(item)" href="javascript:void(0);">{{item}}</a><i @click="clearRecord(item)" class="iconfont">&#xe6c4;</i></li>
  		</ul>
  	</div>
    <div class="resList" v-if="searchList.length">
      <List :data-list="searchList"></List>
    </div>
  </div>
</template>

<script>
import List from '../List/List'
export default {
  data () {
    return {
      keywords: '',
      recordList: [],
      searchList: []
    }
  },
  created: function () {
    this.recordList = localStorage.keywords ? localStorage.keywords.split(',') : []
  },
  methods: {
    // 搜索
    search: function () {
      var that = this
      var arr = localStorage.keywords ? localStorage.keywords.split(',') : []
      if (arr.length > 2 && arr[arr.length - 2] === localStorage.keywords || this.keywords === '') {
        return false
      }
      arr.forEach(function (item, i) {
        if (item === that.keywords) {
          arr.splice(i, 1)
        }
      })
      arr.unshift(that.keywords)
      that.recordList = arr
      console.log(arr)
      localStorage.keywords = arr.join(',')
      that.$http.get('http://localhost:3000/api/search/' + that.keywords).then(function (res) {
        that.searchList = res.data.data
      })
    },
    // 删除历史
    clearRecord: function (record) {
      var arr = localStorage.keywords ? localStorage.keywords.split(',') : []
      arr.forEach(function (item, i) {
        if (item === record) {
          arr.splice(i, 1)
        }
      })
      this.recordList = arr
      localStorage.keywords = arr.join(',')
    },
    // 点击历史或热门搜索
    clickRecord: function (record) {
      this.keywords = record
      this.search()
    }
  },
  components: {
    List: List
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
.search
 position:relative;
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
    position:relative;
    z-index:9999;
   i:first-child
    padding-right:.5rem;
    color:#999;
    position:relative;
    z-index:9999;
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
 .resList
  background:#fff;
  padding-top:1rem;
  z-index:99999;
  position:absolute;
  top:4.1rem;
  width:100%;
  height:100%;
</style>
