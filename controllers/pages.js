'use strict';

var views   = require('co-views')
var request = require('co-request')
var lwip    = require('lwip')
var rreq    = require('request')
var createWriteStream = require('../lib/write-stream')

var render = views(__dirname + "/../views", {
  map: { html: "swig"}
});

function pipeResponse(resp, writeThunk) {
  return function(cb) {
    resp.pipe(writeThunk(cb))
  }
}

exports.index = function *index(){
  this.body = yield render("index");
}

exports.image = function *image() {
  var url     = 'http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&api_key=4dff88a0423651b3570253b10b745b2c&format=json&user=' + this.query.user;
  var resp    = yield request.get(url)

  var result  = JSON.parse(resp.body) || {}
  if (result.topalbums && result.topalbums.album) {
    var imgUrls = result.topalbums.album.map(function(item){
      return item.image[2]['#text']
    })
    yield imgUrls.map(function(url){
      var _tmp  = url.split('/')
      var fname = _tmp[_tmp.length - 1]
      return pipeResponse(rreq.get(url), createWriteStream('public/tmp/' + fname))
    })
    this.body = {urls: imgUrls}
  } else {
    this.status = 404
    this.body   = {error: 'no data'}
  }
}
