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
var express = require('express');
var router = express.Router();

router.get("/test", function (req,res, next) {
    res.render('test', {layout: null});
});

router.get("/guide.json", function (req,res) {
    res.json('guide.json');
});

/* GET diaryWrite page. */
router.use('/diaryWrite', function (req, res, next) {
    res.render('diaryWrite', {layout: null});
});

/* GET diary page. */
router.use('/diary', function (req, res, next) {
    res.render('diary', {layout: null});
});

/* GET planSearch page. */
router.use('/planSearch', function (req, res, next) {
    res.render('planSearch', {layout: null});
});

/* GET plan page. */
router.use('/plan', function (req, res, next) {
    res.render('plan', {layout: null});
});

/* GET underground page. */
router.use('/iInput', function(req, res, next) {
    res.render('iInput', { layout:null });
});

/* GET underground page. */
router.use('/underground', function(req, res, next) {
    res.render('underground', { layout:null });
});

/* GET index page. */
router.use('/index', function(req, res, next) {
    res.render('eleLogin', { layout:null });
});

/* GET mainLeft page. */
router.use('/mainLeft', function(req, res, next) {
    res.render('mainLeft', { layout:null });
});

/* GET Monitor page. */

router.use('/eleMonitor',function (req,res) {
    res.render('eleMonitor', { layout:null });
});
/* GET environment page. */
router.use('/environment', function(req, res, next) {
    res.render('environment', { layout:null });
});
/* GET warning page. */
router.use('/warning', function(req, res, next) {
    res.render('warning', { layout:null });
});
/* GET chart page. */
router.use('/chart', function(req, res, next) {
    res.render('chart', { layout:null });
});
/* GET harmonic page. */
router.use('/harmonic', function(req, res, next) {
    res.render('harmonic', { layout:null });
});
/* GET powerCheck page. */
router.use('/powerCheck', function(req, res, next) {
    res.render('powerCheck', { layout:null });
});
/* GET sheet page. */
router.use('/sheet', function(req, res, next) {
    res.render('sheet', { layout:null });
});
/* GET main page. */

router.use('/',function (req,res) {
    res.render('main', { layout:null });
});

 /*GET login page. */
router.use('/', function(req, res, next) {
    res.render('eleLogin', { layout:null });
});
module.exports = router;
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
var express = require('express');
var router = express.Router();

router.get("/test", function (req,res, next) {
    res.render('test', {layout: null});
});

router.get("/guide.json", function (req,res) {
    res.json('guide.json');
});

/* GET diaryWrite page. */
router.use('/diaryWrite', function (req, res, next) {
    res.render('diaryWrite', {layout: null});
});

/* GET diary page. */
router.use('/diary', function (req, res, next) {
    res.render('diary', {layout: null});
});

/* GET planSearch page. */
router.use('/planSearch', function (req, res, next) {
    res.render('planSearch', {layout: null});
});

/* GET plan page. */
router.use('/plan', function (req, res, next) {
    res.render('plan', {layout: null});
});

/* GET underground page. */
router.use('/iInput', function(req, res, next) {
    res.render('iInput', { layout:null });
});

/* GET underground page. */
router.use('/underground', function(req, res, next) {
    res.render('underground', { layout:null });
});

/* GET index page. */
router.use('/index', function(req, res, next) {
    res.render('eleLogin', { layout:null });
});

/* GET mainLeft page. */
router.use('/mainLeft', function(req, res, next) {
    res.render('mainLeft', { layout:null });
});

/* GET Monitor page. */

router.use('/eleMonitor',function (req,res) {
    res.render('eleMonitor', { layout:null });
});
/* GET environment page. */
router.use('/environment', function(req, res, next) {
    res.render('environment', { layout:null });
});
/* GET warning page. */
router.use('/warning', function(req, res, next) {
    res.render('warning', { layout:null });
});
/* GET chart page. */
router.use('/chart', function(req, res, next) {
    res.render('chart', { layout:null });
});
/* GET harmonic page. */
router.use('/harmonic', function(req, res, next) {
    res.render('harmonic', { layout:null });
});
/* GET powerCheck page. */
router.use('/powerCheck', function(req, res, next) {
    res.render('powerCheck', { layout:null });
});
/* GET sheet page. */
router.use('/sheet', function(req, res, next) {
    res.render('sheet', { layout:null });
});
/* GET main page. */

router.use('/',function (req,res) {
    res.render('main', { layout:null });
});

 /*GET login page. */
router.use('/', function(req, res, next) {
    res.render('eleLogin', { layout:null });
});
module.exports = router;
>>>>>>> dedd623 (first)
>>>>>>> 19b8a9c (first)
>>>>>>> 8f5179a (first)
>>>>>>> 87a8fdf (first)
>>>>>>> 1e8021d (first)
>>>>>>> 5938de4 (first)
>>>>>>> c55f785 (first)
