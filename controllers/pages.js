'use strict';

var views = require('co-views');
var request = require('co-request');

var render = views(__dirname + "/../views", {
  map: { html: "swig"}
});

exports.index = function *index(){
  this.body = yield render("index");
}

exports.image = function *image() {
  var url    = 'http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=fakelbst&api_key=4dff88a0423651b3570253b10b745b2c&format=json';
  var resp   = yield request.get(url)

  var result = JSON.parse(res.body)
  var img    = result.topalbums.album.map(function(item){
    return item.image[1]
  })

  this.body = yield render('index', {image: img})
}

