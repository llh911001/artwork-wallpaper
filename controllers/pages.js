'use strict';

var views = require('co-views');

var render = views(__dirname + "/../views", {
  map: {
    html: "swig"
  }
});

module.exports.index = function *index(){
  this.body = yield render("index", {})
}
