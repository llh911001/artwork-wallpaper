'use strict';
var pages = require('./controllers/pages');
var koa = require('koa');
var serve = require('koa-static');
var path = require('path');
var route = require('koa-route');

var app = koa();

app.use(route.get('/', pages.index));

app.use(serve(path.join(__dirname, 'public')));

app.listen(3000);
