$(function() {
  'use strict';

  var apiKey, url;
  apiKey = '4dff88a0423651b3570253b10b745b2c';
  url = 'http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&api_key=4dff88a0423651b3570253b10b745b2c&format=json&user=fakelbst';

  return $.getJSON(url, function(datas) {
    var canvas, ctx, imgObj;
    console.log(datas);
    canvas = document.getElementById("cav");
    ctx = canvas.getContext("2d");
    imgObj = new Image();
    imgObj.onload = function() {
      return ctx.drawImage(imgObj, 50, 50);
    };
    imgObj.src = datas.topalbums.album[0].image[1]['#text'];
    $('#download').on('click', function() {
      return canvas.toBlob(function(blob) {
        return saveAs(blob, "pretty image.png");
      });
    });
  });
});
