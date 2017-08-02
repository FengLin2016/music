const router = require('koa-router')()
const music = require('../models/music')
const menu = require('../models/menu')
var  moment = require('moment')
var  data = []
router.prefix('/api')
/**
 * 最新歌曲
 */
router.get('/',  async function (ctx, next) {
		let oneData = await music.findAll({
			limit: 10,
			order: [
		        ["id", "DESC"]   //按名字降序排列
		    ]
		})
		ctx.body = {
			msg: '请求成功',
			data: oneData
		}
})
/**
 * 获取固定菜单下的歌曲
 */
router.get('/menu/:id',  async function (ctx, next) {
		let oneData = await music.findAll({
			where:{
				menu:ctx.params.id
			}
		})
		ctx.body = {
			msg: '请求成功',
			data: oneData
		}
})
/**
 * 菜单
 */
router.get('/menu',  async function (ctx, next) {
		let oneData = await menu.findAll()
		ctx.body = {
			msg: '请求成功',
			data: oneData
		}
})

/**
 * 搜索歌曲
 */ 
router.get('/search/:keywords', async function (ctx, next) {
	if(ctx.params.keywords){
		let oneData = await music.findAll({
			where:{
				$or:[{
					title:{like:'%'+ctx.params.keywords+'%'}
				},{
					singer:{like:'%'+ctx.params.keywords+'%'}
				},{
					description:{like:'%'+ctx.params.keywords+'%'}
				}]
			}
		})
		ctx.body = {
			msg: '请求成功',
			data: oneData
		}
	}else{
		ctx.body = {
			msg: '没有参数',
			data: []
		}
	}
})

/**
 * 歌曲详情
 */
router.get('/:id', async function (ctx, next) {
	if(ctx.params.id){
		let oneData = await music.findOne({
			where:{
				id:ctx.params.id
			}
		})
		ctx.body = {
			msg: '请求成功',
			data: oneData
		}
	}else{
		ctx.body = {
			msg: '没有参数',
			data: []
		}
	}
})
module.exports = router
