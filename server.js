var express = require("express");
var app = express();

var votes = {
    grfindor: 0,
    slytherin: 0,
    hufflepuff: 0,
    ravenclaw: 0 
}

app.use(express.static(__dirname + '/public'));

app.get("/votes", function(res, res) {
    res.send(votes);
})

app.post("/votes", function(req, res) {
    votes[req.query.house] = votes[req.query.house] + 1
    res.sendStatus(200);
})

var server = app.listen(process.env.PORT || 8082, function (){
    var port = server.address().port;
    console.log("Server running at port %s", port);
});


