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
var apiRouter=require("./services/apis/index");
var frontRouter=require("./routes/index");
var LoginRouter=require("./routes/eleLogin");
var Router = module.exports = {};
Router.route=function (app) {


    //Login验证
    app.use('/Login',LoginRouter);

    //api路由
    app.use('/api',apiRouter);

    //前台路由
    app.use('/front',frontRouter);



    // catch 404 and forward to error handler
    app.use(function(req, res, next) {
        var err = new Error('页面'+req.originalUrl+'不存在');
        err.status = 404;
        next(err);
    });

    // error handler
    app.use(function(err, req, res, next) {
        // set locals, only providing error in development
        res.locals.message = err.message;
        console.error(err);
        res.locals.error = req.app.get('env') === 'development' ? err : {};

        // render the error page
        res.status(err.status || 500);
        res.send(err.toString());

    });
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
var apiRouter=require("./services/apis/index");
var frontRouter=require("./routes/index");
var LoginRouter=require("./routes/eleLogin");
var Router = module.exports = {};
Router.route=function (app) {


    //Login验证
    app.use('/Login',LoginRouter);

    //api路由
    app.use('/api',apiRouter);

    //前台路由
    app.use('/front',frontRouter);



    // catch 404 and forward to error handler
    app.use(function(req, res, next) {
        var err = new Error('页面'+req.originalUrl+'不存在');
        err.status = 404;
        next(err);
    });

    // error handler
    app.use(function(err, req, res, next) {
        // set locals, only providing error in development
        res.locals.message = err.message;
        console.error(err);
        res.locals.error = req.app.get('env') === 'development' ? err : {};

        // render the error page
        res.status(err.status || 500);
        res.send(err.toString());

    });
>>>>>>> dedd623 (first)
>>>>>>> 19b8a9c (first)
>>>>>>> 8f5179a (first)
>>>>>>> 87a8fdf (first)
>>>>>>> 1e8021d (first)
>>>>>>> 5938de4 (first)
>>>>>>> c55f785 (first)
};