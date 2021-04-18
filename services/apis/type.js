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
var typeModel = require('../models/index').type_key;
var helper = require('../helpers/helpers');
var type = module.exports={};

type.search=function (params,res) {
    var resultObj = JSON.parse(JSON.stringify(helper.API_RESULT_MODEL));
    var key = params.key;
    typeModel.count({
        where:{
            key:key
        }
    }).then(function (value) {
        resultObj.obj=value;
        resultObj.retcode=200;
        resultObj.msg.prompt="查询成功";
        res.send(resultObj);
    }).catch(function (reason) {
        resultObj.msg.error=reason.message;
        resultObj.msg.prompt="查询失败";
        res.send(resultObj);
    })
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
var typeModel = require('../models/index').type_key;
var helper = require('../helpers/helpers');
var type = module.exports={};

type.search=function (params,res) {
    var resultObj = JSON.parse(JSON.stringify(helper.API_RESULT_MODEL));
    var key = params.key;
    typeModel.count({
        where:{
            key:key
        }
    }).then(function (value) {
        resultObj.obj=value;
        resultObj.retcode=200;
        resultObj.msg.prompt="查询成功";
        res.send(resultObj);
    }).catch(function (reason) {
        resultObj.msg.error=reason.message;
        resultObj.msg.prompt="查询失败";
        res.send(resultObj);
    })
>>>>>>> dedd623 (first)
>>>>>>> 19b8a9c (first)
>>>>>>> 8f5179a (first)
>>>>>>> 87a8fdf (first)
>>>>>>> 1e8021d (first)
>>>>>>> 5938de4 (first)
>>>>>>> c55f785 (first)
};