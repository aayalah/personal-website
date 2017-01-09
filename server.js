"use strict";
var express = require('express');
var React = require('react');
var path = require('path');

var app = express();


var port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname,"/app")))

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname,"/app/index.html"));
});

app.listen(port, function () {

  console.log('Example app listening on port ${port}')

})
