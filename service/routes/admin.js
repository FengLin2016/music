const router = require('koa-router')()
const music = require('../models/music')
const menu = require('../models/menu')
var  moment = require('moment')
var  musicData = []
var  menuData = []
const multer = require('koa-multer');//加载koa-multer模块  

var storage = multer.diskStorage({  
  //文件保存路径  
  destination: function (req, file, cb) {  
    cb(null, 'public/uploads/')  
  },  
  //修改文件名称  
  filename: function (req, file, cb) {  
    var fileFormat = (file.originalname).split(".");  
    // cb(null, file.originalname);  
    cb(null,Date.now() + "." + fileFormat[fileFormat.length - 1]);
  }
}) 

// menu.sync()
// music.sync()
//加载配置  
var upload = multer({ storage: storage })
router.prefix('/admin')

router.get('/', async (ctx, next) => {
  ctx.state.moment = moment
  musicData = await music.findAll({
  	 include: [{ model: menu, as: 'Menu' }]
  })
  menuData = await menu.findAll()
  await ctx.render('admin/admin', {
  	title: '云音乐',
  	list: musicData,
  	menuData: menuData
  })
})
/**
 * 菜单
 */
router.get('/menu', async (ctx, next) => {
  ctx.state.moment = moment
  menuData = await menu.findAll()
  await ctx.render('admin/menu', {
  	title: '云音乐',
  	list: menuData,
  })
})


/**
 * 添加菜单  
 */
router.post('/menu',  upload.single('imgFile'), async function (ctx, next) {
	console.log(ctx.req.file)
	if(ctx.req.body){
		if(ctx.req.body.id!=''){
			await menu.update({
				title: ctx.req.body.title,
				img: ctx.req.file?ctx.req.file.filename:ctx.req.body.imgFileMenu2,
				description: ctx.req.body.description
			},{
				where:{
					id: ctx.req.body.id
				}
			})
		    ctx.redirect('/admin/menu')
		}else{
			await menu.create({
				title: ctx.req.body.title,
				img: ctx.req.file.filename,
				description: ctx.req.body.description
			})
		    ctx.redirect('/admin/menu')
		}
	}else{
		ctx.body = '没有参数'
	}
})

/**
 * 添加歌曲
 */
router.post('/add',  upload.array('imgFile',2), async function (ctx, next) {
	console.log(ctx.req)
	if(ctx.req.body){
		if(ctx.req.body.id!=''){
			await music.update({
				title: ctx.req.body.title,
				img: ctx.req.files?ctx.req.files[0].filename:ctx.req.body.imgFile2,
				menu: ctx.req.body.menu,
				singer: ctx.req.body.singer,
				mp3: ctx.req.files?ctx.req.files[1].filename:ctx.req.body.mp3,
				description: ctx.req.body.description
			},{
				where:{
					id: ctx.req.body.id
				}
			})
		    ctx.redirect('/admin')
		}else{
			await music.create({
				title: ctx.req.body.title,
				img: ctx.req.files[0].filename,
				menu: ctx.req.body.menu,
				singer: ctx.req.body.singer,
				mp3: ctx.req.files[1].filename,
				description: ctx.req.body.description
			})
		    ctx.redirect('/admin')
		}
	}else{
		ctx.body = '没有参数'
	}
})


/**
 * 修改菜单 
 */
router.get('/menu/:id', async function (ctx, next) {
	if(ctx.params.id){
		let oneData = await menu.findOne({
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

/**
 * 修改歌曲  
 */
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
/**
 * 删除菜单  
 */
router.get('/delMenu/:id', async function (ctx, next) {
	if(ctx.params.id){
		let oneData = await menu.destroy({
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

/**
 * 删除歌曲 
 */
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
