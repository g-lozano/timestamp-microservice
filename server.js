//to do: send date as month day, year

var express = require('express')
var app = express()
var port = 8080

function getJSON(unix, natural) {
    //format date here
    return {
        unix: unix,
        natural: natural
    }
}

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
})

app.use('/', function(req, res) {

    var param = decodeURIComponent(req.url.split('/')[1])
    var number = /^[0-9]/.test(param)
    var letter = /^[a-z]/gi.test(param)

    var unix = null
    var natural = null

    if (number) {
        var natural = new Date(Number(param * 1000)); //convert unix, get natural
        var unix = new Date(natural).getTime() / 1000; //convert natural, get unix

        if (unix) {
            unix = unix
            natural = natural
        }
    }
    else if (letter) {
        var unix = new Date(param).getTime() / 1000; //convert natural, get unix
        var natural = new Date(unix * 1000); //convert unix, get natural

        if (unix) {
            unix = unix
            natural = natural
        }
    }

    res.send(getJSON(unix, natural))

})

app.listen(port)
