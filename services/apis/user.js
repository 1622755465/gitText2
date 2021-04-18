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
var UserInfo = require('../models/index').UserInfo;
var crypto=require('crypto');

var user = module.exports = {};

user.Login=function(params, res){
//
    API_RESULT_MODEL = {
        "obj": {
            "data":""
        },
        "msg": {
            "error": "",
            "prompt": ""
        },
        "retcode":""//查询成功返回200，没有数据返回404
    };
    var jsonResult=JSON.parse(JSON.stringify(API_RESULT_MODEL));
   // md5
    var md5=crypto.createHash("md5");
    md5.update(params.userPwd);
    var md5Pwd=md5.digest('hex').toLowerCase();
    UserInfo.count({
        where :{
            UserName:params.userName,
            UserPwd:md5Pwd
        }
    }).then(function (result) {
        jsonResult.obj.data=result;
        jsonResult.retcode=200*result;//!
        if(!jsonResult.retcode){
            jsonResult.msg.prompt="账户名或密码错误";
            jsonResult.msg.error=error.message;
        }
        res.send(jsonResult);
    }).catch(function(error){
        jsonResult.msg.prompt="账户名或密码错误";
        jsonResult.msg.error="account or pass wrong!";
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
var UserInfo = require('../models/index').UserInfo;
var crypto=require('crypto');

var user = module.exports = {};

user.Login=function(params, res){
//
    API_RESULT_MODEL = {
        "obj": {
            "data":""
        },
        "msg": {
            "error": "",
            "prompt": ""
        },
        "retcode":""//查询成功返回200，没有数据返回404
    };
    var jsonResult=JSON.parse(JSON.stringify(API_RESULT_MODEL));
   // md5
    var md5=crypto.createHash("md5");
    md5.update(params.userPwd);
    var md5Pwd=md5.digest('hex').toLowerCase();
    UserInfo.count({
        where :{
            UserName:params.userName,
            UserPwd:md5Pwd
        }
    }).then(function (result) {
        jsonResult.obj.data=result;
        jsonResult.retcode=200*result;//!
        if(!jsonResult.retcode){
            jsonResult.msg.prompt="账户名或密码错误";
            jsonResult.msg.error=error.message;
        }
        res.send(jsonResult);
    }).catch(function(error){
        jsonResult.msg.prompt="账户名或密码错误";
        jsonResult.msg.error="account or pass wrong!";
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