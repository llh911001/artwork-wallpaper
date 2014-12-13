'use strict';

var views = require('co-views');
var request = require('request');

var render = views(__dirname + "/../views", {
  map: { html: "swig"}
});

exports.index = function *index(){

  var url = 'http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=fakelbst&api_key=4dff88a0423651b3570253b10b745b2c&format=json';

  var img;
  request(url, function (error, response, body) {
      if (!error && response.statusCode == 200) {
          console.log(response)
      }
  });

  this.body = yield render("index", {images: img});
}

