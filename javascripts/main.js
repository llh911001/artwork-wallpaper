(function() {
  'use strict';
  var apiKey, url;
  apiKey = '4dff88a0423651b3570253b10b745b2c';
  url = 'http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=fakelbst&api_key=4dff88a0423651b3570253b10b745b2c&format=json';
  return $.get(url, function(datas) {
    return console.log(datas);
  });
})();
