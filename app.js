var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var mockRouter = require('./routes/mockapi.js');

var app = express();
port = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/mockapi/actions', mockRouter);
app.use('/', indexRouter);


module.exports = app;

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);