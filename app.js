<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 19b8a9c (first)
>>>>>>> 8f5179a (first)
>>>>>>> 87a8fdf (first)
>>>>>>> 1e8021d (first)
>>>>>>> 5938de4 (first)
>>>>>>> c55f785 (first)
var createError = require('http-errors');
var express = require('express');
var path = require('path');
//引入session模块
var session = require('express-session');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

global.appRoot=path.resolve(__dirname);
var app = express();

var router=require('./router');

process.env.NODE_ENV = 'development';

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// customize engine
var hbs= require('hbs');
app.set('view engine', 'html');
app.engine('html', hbs.__express);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, './')));

app.use(cookieParser());
// 设置 Session
app.use(session({
    secret: 'dreamtouch',
    name: 'zjems.dreamtouch',
    cookie: {maxAge: 120 * 60 * 1000}, //120min超时
    resave: true,
    rolling:true,
    saveUninitialized: false
}));

router.route(app);

app.use('/', indexRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
var createError = require('http-errors');
var express = require('express');
var path = require('path');
//引入session模块
var session = require('express-session');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

global.appRoot=path.resolve(__dirname);
var app = express();

var router=require('./router');

process.env.NODE_ENV = 'development';

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// customize engine
var hbs= require('hbs');
app.set('view engine', 'html');
app.engine('html', hbs.__express);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, './')));

app.use(cookieParser());
// 设置 Session
app.use(session({
    secret: 'dreamtouch',
    name: 'zjems.dreamtouch',
    cookie: {maxAge: 120 * 60 * 1000}, //120min超时
    resave: true,
    rolling:true,
    saveUninitialized: false
}));

router.route(app);

app.use('/', indexRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
>>>>>>> dedd623 (first)
>>>>>>> 19b8a9c (first)
>>>>>>> 8f5179a (first)
>>>>>>> 87a8fdf (first)
>>>>>>> 1e8021d (first)
>>>>>>> 5938de4 (first)
>>>>>>> c55f785 (first)
