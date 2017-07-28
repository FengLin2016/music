const router = require('koa-router')()
const music = require('../models/music')
var  moment = require('moment')
var  data = []
router.prefix('/api')

router.get('/',  async function (ctx, next) {
		let oneData = await music.findAll()
		ctx.body = {
			msg: '请求成功',
			data: oneData
		}
})
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
