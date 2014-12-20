'use strict';
var pages = require('./controllers/pages');
var koa = require('koa');
var serve = require('koa-static');
var path = require('path');
var route = require('koa-route');

var app = koa();

app.use(route.get('/', pages.index));
app.use(route.get('/image', pages.image));
app.use(route.get('/test', pages.test));

app.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms);
});

app.use(serve(path.join(__dirname, 'public')));

app.listen(3000);
console.log('Listening on port 3000...');
