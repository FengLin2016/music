const router = require('koa-router')()
const music = require('../models/music')
var  moment = require('moment')
var  data = []
const multer = require('koa-multer');//加载koa-multer模块  

var storage = multer.diskStorage({  
  //文件保存路径  
  destination: function (req, file, cb) {  
    cb(null, 'public/uploads/')  
  },  
  //修改文件名称  
  filename: function (req, file, cb) {  
    //var fileFormat = (file.originalname).split(".");  
    cb(null, file.originalname);  
  }
}) 

//加载配置  
var upload = multer({ storage: storage })
router.prefix('/admin')

router.get('/', async (ctx, next) => {
  ctx.state.moment = moment
  data = await music.findAll()
  await ctx.render('admin/admin', {
  	title: '云音乐',
  	list: data
  })
})


router.post('/add',  upload.single('file'), async function (ctx, next) {
	console.log(ctx.req.file);
	if(ctx.req.body){
		if(ctx.req.body.id!=''){
			await music.update(ctx.req.body,{
				where:{
					id: ctx.req.body.id
				}
			})
		    ctx.redirect('/admin')
		}else{
			await music.create({
				title: ctx.req.body.title,
				singer: ctx.req.body.singer,
				mp3: ctx.req.file.originalname,
				description: ctx.req.body.description
			})
		    ctx.redirect('/admin')
		}
	}else{
		ctx.body = '没有参数'
	}
})
router.get('/edit/:id', async function (ctx, next) {
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
		ctx.state.edit = oneData
	}else{
		ctx.body = {
			msg: '没有参数',
			data: []
		}
	}
})
router.get('/del/:id', async function (ctx, next) {
	if(ctx.params.id){
		let oneData = await music.destroy({
			where:{
				id:ctx.params.id
			}
		})
		ctx.body = {
			msg: '删除成功',
			data: oneData
		}
	}else{
		ctx.body = {
			msg: '删除失败',
			data: []
		}
	}
})
module.exports = router
