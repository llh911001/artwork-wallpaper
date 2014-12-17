var fs = require('fs')

var __slice = Array.prototype.slice

module.exports = thunkifyWriteStream(fs.createWriteStream)

function thunkifyWriteStream(fn) {
  return function() {
    var args = __slice.call(arguments)
      , ctx  = this
    return function(done) {
      return fn.apply(ctx, args).on('finish', function(err, res){
        done(err, res)
      })
    }
  }
}
