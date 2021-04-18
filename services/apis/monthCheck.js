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
/**
 * Created by snoopy on 2018/5/28
 */
var keySql = require('../models/index').TsKey;
var ts1Sql = require('../models/index').TS_1;
var ts2Sql = require('../models/index').TS_2;
var ts3Sql = require('../models/index').TS_3;
var qsSql = require('../models/index').QS;
var qs1Sql = require('../models/index').QS1;
var tdSql = require('../models/index').TD;
var tjSql = require('../models/index').TJ;
var trSql = require('../models/index').TR;
var xsSql = require('../models/index').XS;
var monthCheck = module.exports = {};
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
monthCheck.search=function (params,res) {
    charA=params.key.split(",");        //数据切割
    keySql.findAll({
        attributes: ["value"],
        where:{
            key:charA
        }
    }).then(function (row){
        var charB=[];
        var firstRes = underscore.pluck(row, 'dataValues');
        for(var i=0;i<firstRes.length;i++){
            charB[i]=firstRes[i].value;      //转为数组格式
        }
        charB[(firstRes.length)]="DT";
        //判断配电所
        switch (params.home) {
            case "00":
                ts1Sql.findAll({
                    attributes: charB,
                    where: {
                        'DT': {
                            $between: [params.Time + ' 00:00:00', params.Time + ' 23:59:59']
                        }
                    }
                }).then(function (result) {
                    var jsonResult = underscore.pluck(result, 'dataValues');
                    underscore.map(jsonResult, function (item) {
                        item.DT = (moment(item.DT).format('HH:mm:ss'));
                    });
                    API_RESULT_MODEL.obj.data = jsonResult;
                    API_RESULT_MODEL.retcode = 200;
                    res.send(API_RESULT_MODEL);
                }).catch(function (error) {
                    API_RESULT_MODEL.msg.prompt = "系统内部错误";
                    API_RESULT_MODEL.msg.error = error.message;
                    API_RESULT_MODEL.retcode = 500;
                    res.send(API_RESULT_MODEL);
                });
                break;
            case "01":
                trSql.findAll({
                    attributes: charB,
                    where: {
                        'DT': {
                            $between: [params.Time + ' 00:00:00', params.Time + ' 23:59:59']
                        }
                    }
                }).then(function (result) {
                    var jsonResult = underscore.pluck(result, 'dataValues');
                    underscore.map(jsonResult, function (item) {
                        item.DT = (moment(item.DT).format('HH:mm:ss'));
                    });
                    API_RESULT_MODEL.obj.data = jsonResult;
                    API_RESULT_MODEL.retcode = 200;
                    res.send(API_RESULT_MODEL);
                }).catch(function (error) {
                    API_RESULT_MODEL.msg.prompt = "系统内部错误";
                    API_RESULT_MODEL.msg.error = error.message;
                    API_RESULT_MODEL.retcode = 500;
                    res.send(API_RESULT_MODEL);
                });
                break;
            case "02":
                tdSql.findAll({
                    attributes: charB,
                    where: {
                        'DT': {
                            $between: [params.Time + ' 00:00:00', params.Time + ' 23:59:59']
                        }
                    }
                }).then(function (result) {
                    var jsonResult = underscore.pluck(result, 'dataValues');
                    underscore.map(jsonResult, function (item) {
                        item.DT = (moment(item.DT).format('HH:mm:ss'));
                    });
                    API_RESULT_MODEL.obj.data = jsonResult;
                    API_RESULT_MODEL.retcode = 200;
                    res.send(API_RESULT_MODEL);
                }).catch(function (error) {
                    API_RESULT_MODEL.msg.prompt = "系统内部错误";
                    API_RESULT_MODEL.msg.error = error.message;
                    API_RESULT_MODEL.retcode = 500;
                    res.send(API_RESULT_MODEL);
                });
                break;
            case "03":
                tjSql.findAll({
                    attributes: charB,
                    where: {
                        'DT': {
                            $between: [params.Time + ' 00:00:00', params.Time + ' 23:59:59']
                        }
                    }
                }).then(function (result) {
                    var jsonResult = underscore.pluck(result, 'dataValues');
                    underscore.map(jsonResult, function (item) {
                        item.DT = (moment(item.DT).format('HH:mm:ss'));
                    });
                    API_RESULT_MODEL.obj.data = jsonResult;
                    API_RESULT_MODEL.retcode = 200;
                    res.send(API_RESULT_MODEL);
                }).catch(function (error) {
                    API_RESULT_MODEL.msg.prompt = "系统内部错误";
                    API_RESULT_MODEL.msg.error = error.message;
                    API_RESULT_MODEL.retcode = 500;
                    res.send(API_RESULT_MODEL);
                });
                break;
            case "04":
                qs1Sql.findAll({
                    attributes: charB,
                    where: {
                        'DT': {
                            $between: [params.Time + ' 00:00:00', params.Time + ' 23:59:59']
                        }
                    }
                }).then(function (result) {
                    var jsonResult = underscore.pluck(result, 'dataValues');
                    underscore.map(jsonResult, function (item) {
                        item.DT = (moment(item.DT).format('HH:mm:ss'));
                    });
                    API_RESULT_MODEL.obj.data = jsonResult;
                    API_RESULT_MODEL.retcode = 200;
                    res.send(API_RESULT_MODEL);
                }).catch(function (error) {
                    API_RESULT_MODEL.msg.prompt = "系统内部错误";
                    API_RESULT_MODEL.msg.error = error.message;
                    API_RESULT_MODEL.retcode = 500;
                    res.send(API_RESULT_MODEL);
                });
                break;
            case "05":
                xsSql.findAll({
                    attributes: charB,
                    where: {
                        'DT': {
                            $between: [params.Time + ' 00:00:00', params.Time + ' 23:59:59']
                        }
                    }
                }).then(function (result) {
                    var jsonResult = underscore.pluck(result, 'dataValues');
                    underscore.map(jsonResult, function (item) {
                        item.DT = (moment(item.DT).format('HH:mm:ss'));
                    });
                    API_RESULT_MODEL.obj.data = jsonResult;
                    API_RESULT_MODEL.retcode = 200;
                    res.send(API_RESULT_MODEL);
                }).catch(function (error) {
                    API_RESULT_MODEL.msg.prompt = "系统内部错误";
                    API_RESULT_MODEL.msg.error = error.message;
                    API_RESULT_MODEL.retcode = 500;
                    res.send(API_RESULT_MODEL);
                });
                break;
        }
    });
};
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
/**
 * Created by snoopy on 2018/5/28
 */
var keySql = require('../models/index').TsKey;
var ts1Sql = require('../models/index').TS_1;
var ts2Sql = require('../models/index').TS_2;
var ts3Sql = require('../models/index').TS_3;
var qsSql = require('../models/index').QS;
var qs1Sql = require('../models/index').QS1;
var tdSql = require('../models/index').TD;
var tjSql = require('../models/index').TJ;
var trSql = require('../models/index').TR;
var xsSql = require('../models/index').XS;
var monthCheck = module.exports = {};
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
monthCheck.search=function (params,res) {
    charA=params.key.split(",");        //数据切割
    keySql.findAll({
        attributes: ["value"],
        where:{
            key:charA
        }
    }).then(function (row){
        var charB=[];
        var firstRes = underscore.pluck(row, 'dataValues');
        for(var i=0;i<firstRes.length;i++){
            charB[i]=firstRes[i].value;      //转为数组格式
        }
        charB[(firstRes.length)]="DT";
        //判断配电所
        switch (params.home) {
            case "00":
                ts1Sql.findAll({
                    attributes: charB,
                    where: {
                        'DT': {
                            $between: [params.Time + ' 00:00:00', params.Time + ' 23:59:59']
                        }
                    }
                }).then(function (result) {
                    var jsonResult = underscore.pluck(result, 'dataValues');
                    underscore.map(jsonResult, function (item) {
                        item.DT = (moment(item.DT).format('HH:mm:ss'));
                    });
                    API_RESULT_MODEL.obj.data = jsonResult;
                    API_RESULT_MODEL.retcode = 200;
                    res.send(API_RESULT_MODEL);
                }).catch(function (error) {
                    API_RESULT_MODEL.msg.prompt = "系统内部错误";
                    API_RESULT_MODEL.msg.error = error.message;
                    API_RESULT_MODEL.retcode = 500;
                    res.send(API_RESULT_MODEL);
                });
                break;
            case "01":
                trSql.findAll({
                    attributes: charB,
                    where: {
                        'DT': {
                            $between: [params.Time + ' 00:00:00', params.Time + ' 23:59:59']
                        }
                    }
                }).then(function (result) {
                    var jsonResult = underscore.pluck(result, 'dataValues');
                    underscore.map(jsonResult, function (item) {
                        item.DT = (moment(item.DT).format('HH:mm:ss'));
                    });
                    API_RESULT_MODEL.obj.data = jsonResult;
                    API_RESULT_MODEL.retcode = 200;
                    res.send(API_RESULT_MODEL);
                }).catch(function (error) {
                    API_RESULT_MODEL.msg.prompt = "系统内部错误";
                    API_RESULT_MODEL.msg.error = error.message;
                    API_RESULT_MODEL.retcode = 500;
                    res.send(API_RESULT_MODEL);
                });
                break;
            case "02":
                tdSql.findAll({
                    attributes: charB,
                    where: {
                        'DT': {
                            $between: [params.Time + ' 00:00:00', params.Time + ' 23:59:59']
                        }
                    }
                }).then(function (result) {
                    var jsonResult = underscore.pluck(result, 'dataValues');
                    underscore.map(jsonResult, function (item) {
                        item.DT = (moment(item.DT).format('HH:mm:ss'));
                    });
                    API_RESULT_MODEL.obj.data = jsonResult;
                    API_RESULT_MODEL.retcode = 200;
                    res.send(API_RESULT_MODEL);
                }).catch(function (error) {
                    API_RESULT_MODEL.msg.prompt = "系统内部错误";
                    API_RESULT_MODEL.msg.error = error.message;
                    API_RESULT_MODEL.retcode = 500;
                    res.send(API_RESULT_MODEL);
                });
                break;
            case "03":
                tjSql.findAll({
                    attributes: charB,
                    where: {
                        'DT': {
                            $between: [params.Time + ' 00:00:00', params.Time + ' 23:59:59']
                        }
                    }
                }).then(function (result) {
                    var jsonResult = underscore.pluck(result, 'dataValues');
                    underscore.map(jsonResult, function (item) {
                        item.DT = (moment(item.DT).format('HH:mm:ss'));
                    });
                    API_RESULT_MODEL.obj.data = jsonResult;
                    API_RESULT_MODEL.retcode = 200;
                    res.send(API_RESULT_MODEL);
                }).catch(function (error) {
                    API_RESULT_MODEL.msg.prompt = "系统内部错误";
                    API_RESULT_MODEL.msg.error = error.message;
                    API_RESULT_MODEL.retcode = 500;
                    res.send(API_RESULT_MODEL);
                });
                break;
            case "04":
                qs1Sql.findAll({
                    attributes: charB,
                    where: {
                        'DT': {
                            $between: [params.Time + ' 00:00:00', params.Time + ' 23:59:59']
                        }
                    }
                }).then(function (result) {
                    var jsonResult = underscore.pluck(result, 'dataValues');
                    underscore.map(jsonResult, function (item) {
                        item.DT = (moment(item.DT).format('HH:mm:ss'));
                    });
                    API_RESULT_MODEL.obj.data = jsonResult;
                    API_RESULT_MODEL.retcode = 200;
                    res.send(API_RESULT_MODEL);
                }).catch(function (error) {
                    API_RESULT_MODEL.msg.prompt = "系统内部错误";
                    API_RESULT_MODEL.msg.error = error.message;
                    API_RESULT_MODEL.retcode = 500;
                    res.send(API_RESULT_MODEL);
                });
                break;
            case "05":
                xsSql.findAll({
                    attributes: charB,
                    where: {
                        'DT': {
                            $between: [params.Time + ' 00:00:00', params.Time + ' 23:59:59']
                        }
                    }
                }).then(function (result) {
                    var jsonResult = underscore.pluck(result, 'dataValues');
                    underscore.map(jsonResult, function (item) {
                        item.DT = (moment(item.DT).format('HH:mm:ss'));
                    });
                    API_RESULT_MODEL.obj.data = jsonResult;
                    API_RESULT_MODEL.retcode = 200;
                    res.send(API_RESULT_MODEL);
                }).catch(function (error) {
                    API_RESULT_MODEL.msg.prompt = "系统内部错误";
                    API_RESULT_MODEL.msg.error = error.message;
                    API_RESULT_MODEL.retcode = 500;
                    res.send(API_RESULT_MODEL);
                });
                break;
        }
    });
};
>>>>>>> dedd623 (first)
>>>>>>> 19b8a9c (first)
>>>>>>> 8f5179a (first)
>>>>>>> 87a8fdf (first)
>>>>>>> 1e8021d (first)
>>>>>>> 5938de4 (first)
>>>>>>> c55f785 (first)
