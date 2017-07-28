const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const cors = require('koa2-cors')



const logger = require('koa-logger')

const index = require('./routes/index')
const users = require('./routes/users')
const admin = require('./routes/admin')
const api = require('./routes/api')

var  dbmusic = require('./models/music')


// error handler
onerror(app)

 
app.use(cors());
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(admin.routes(), admin.allowedMethods())
app.use(api.routes(), api.allowedMethods())
module.exports = app
