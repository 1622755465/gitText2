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
var TS_1 = require('../models/index').TS_1;

var ts = module.exports = {};

API_RESULT_MODEL= {
    "obj": {
        "retcode":0
    },
    "msg": {
        "error": "",
            "prompt": ""
    },
    "retcode": 0
};

ts.test=function(params, res){
    var jsonResult=JSON.parse(JSON.stringify(API_RESULT_MODEL));
    TS_1.findAll({
        attributes:['ts299']
    }).then(function (result) {
        jsonResult.obj.data=result;
        res.send(jsonResult);
    }).catch(function(error){
        jsonResult.msg.prompt="系统内部错误";
        jsonResult.msg.error=error.message;
        jsonResult.retcode=-500;
        res.send(jsonResult);
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
var TS_1 = require('../models/index').TS_1;

var ts = module.exports = {};

API_RESULT_MODEL= {
    "obj": {
        "retcode":0
    },
    "msg": {
        "error": "",
            "prompt": ""
    },
    "retcode": 0
};

ts.test=function(params, res){
    var jsonResult=JSON.parse(JSON.stringify(API_RESULT_MODEL));
    TS_1.findAll({
        attributes:['ts299']
    }).then(function (result) {
        jsonResult.obj.data=result;
        res.send(jsonResult);
    }).catch(function(error){
        jsonResult.msg.prompt="系统内部错误";
        jsonResult.msg.error=error.message;
        jsonResult.retcode=-500;
        res.send(jsonResult);
    });
>>>>>>> dedd623 (first)
>>>>>>> 19b8a9c (first)
>>>>>>> 8f5179a (first)
>>>>>>> 87a8fdf (first)
>>>>>>> 1e8021d (first)
>>>>>>> 5938de4 (first)
>>>>>>> c55f785 (first)
};