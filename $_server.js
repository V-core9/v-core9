
var express = require('express');
var app = express();

var compression = require('compression');

app.use(compression());

app.use(express.static('./public'));

app.listen(2000, function () {
    console.log(`listening on 2000`);
});