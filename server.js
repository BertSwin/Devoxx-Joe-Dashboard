var livereload = require('livereload');
var http = require('http');
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/static'));
app.listen(process.env.PORT || 3000);

reload = livereload.createServer({});
reload.watch(__dirname + "/static");
