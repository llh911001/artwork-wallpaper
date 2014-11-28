'use strict'
koa = require('koa')
serve = require('koa-static')
path = require('path')
app = koa()

app.use(serve(path.join(__dirname, 'public')))

app.listen(3000)
