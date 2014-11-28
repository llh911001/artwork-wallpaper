(->
  'use strict'
  apiKey = '4dff88a0423651b3570253b10b745b2c'
  url = 'http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=fakelbst&api_key=4dff88a0423651b3570253b10b745b2c&format=json'
  $.get url, (datas)->
    console.log datas

    canvas = document.getElementById("cav")
    ctx = canvas.getContext("2d")

    imgObj = new Image()

    imgObj.onload = ->
      ctx.drawImage imgObj, 50, 50

    imgObj.src = datas.topalbums.album[0].image[1]['#text']
    $('body').append('<button>download</button>')
    $('button').on 'click', ->
      canvas.toBlob (blob)->
          saveAs(blob, "pretty image.png")
    return
)()
