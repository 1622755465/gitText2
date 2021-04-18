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
var planModel = require('../models/index').plan_list;
var plan = module.exports = {};
var helper = require('../helpers/helpers');
var underscore = require('underscore');
var moment = require('moment');
var diaryModel = require('../models/index').diary_list;
var DbConnection = require('../helpers/db-connection');
var sequelize = new DbConnection().sequelize;
var xl = require('xlsx')

//插入数据
plan.insertPlan = function (params, res) {
    var resultObj = JSON.parse(JSON.stringify(helper.API_RESULT_MODEL));
    var id = helper.getAutoId();
    var home = params.home;
    var executorName = params.executorName;
    var startTime = params.startTime;
    var endTime = params.endTime;
    var remindTime = params.remindTime;
    var content = params.content;
    var isCheck = params.isCheck || 0;
    //插入到数据库里要带''号，然后"'"来识别这个引号
    var sqlWord = "INSERT INTO plan_list VALUES (" + "'" +  remindTime+ "'" + "," + "'" + executorName + "'" + "," + "'" +  id + "'" + "," + "'" + startTime + "'" + "," + "'" + content  + "'" + "," + "'" +  isCheck + "'" + "," + "'" +   endTime+ "'" + "," + "'" +  home + "'" + ")";
    sequelize.query(sqlWord).spread(function (args) {
        resultObj.msg.prompt = "插入数据成功";
        resultObj.retcode = 200;
        res.send(resultObj);
    }).catch(function (reason) {
        resultObj.msg.prompt = "插入数据失败";
        resultObj.msg.error = reason.message;
        res.send(resultObj);
    })

};
//查询定制计划
plan.checkPlan = function (params, res) {
    var resultObj = JSON.parse(JSON.stringify(helper.API_RESULT_MODEL));
    var executorName = params.executorName || "";
    var startTime = params.startTime;
    var endTime = params.endTime;
    var Search = {
        attributes: ['home', 'executor', 'startTime', 'endTime', 'remindTime', 'content', 'isCheck','id'],
        where: {
            executor: executorName,
            startTime: {
               $gte: startTime
            },
            endTime:
                {
                    $lte: endTime
                }
        }
    };
    if (executorName === "") {
        delete Search.where.executor
    }
    planModel.findAll(
        Search
    ).then(function (value) {
        resultObj.retcode = 200;
        resultObj.msg.prompt = "查询数据成功";
        resultObj.obj = value;
        res.send(resultObj);
    }).catch(function (reason) {
        resultObj.retcode = -500;
        resultObj.msg.prompt = "查询数据失败";
        resultObj.msg.error = reason.message;
        res.send(resultObj);
    })
};

//巡查计划状态修改
plan.finishPlan = function(params,res) {
    var resultObj = JSON.parse(JSON.stringify(helper.API_RESULT_MODEL));
    var id = params.id;
    var executor = params.executor;      //获取计划编号和执行人员姓名
    var updateSql = "update plan_list set isCheck = 1 where id = "+"'"+id+"' and executor ="+"'"+executor+"'";
    sequelize.query(updateSql).spread(function (results, metadata) {    //results包含结果的数组，metadata一个元数据对象
        resultObj.msg.prompt = '巡查计划完成';
        resultObj.retcode = 200;
        res.send(resultObj);
    }).catch(function (reason) {
        resultObj.msg.prompt = '系统内部出错';
        resultObj.msg.error = reason;
        resultObj.retcode = -500;
        res.send(resultObj);
    });
};

//app端搜索巡查计划
plan.GetAppPlan = function(params,res) {
    var resultObj = JSON.parse(JSON.stringify(helper.API_RESULT_MODEL));
    var home = params.home;
    var startTime = params.startTime;
    var endTime =params.endTime;
    var isCheck = params.isCheck;                                       //获取建筑代号，起始时间，完成情况
    var Search = {
        where:
            {
                home:home,
                startTime: {
                    $gte: startTime
                },
                endTime:
                    {
                        $lte: endTime
                    },
                isCheck:isCheck
            },
        attributes: ['home', 'executor', 'startTime', 'endTime', 'remindTime', 'content', 'isCheck','id']
    };                                                                  //创建搜索条件
    if(isCheck === "")
    {
        delete Search.where.isCheck;
    }
    console.log(Search);
    planModel.findAll(
        Search
    ).then(function (value) {
        var results =underscore.pluck(value,'dataValues');
        resultObj.obj.data = results;
        resultObj.retcode = 200;
        res.send(resultObj);
    }).catch(function (reason) {
        resultObj.retcode=-500;
        resultObj.msg.error =reason;
        resultObj.msg.prompt = "系统内部错误";
        res.send(resultObj);
    })
};


//查看日志
plan.getDiary = function (params, res) {
    var resultObj = JSON.parse(JSON.stringify(helper.API_RESULT_MODEL));
    var diaryType = params.diaryType;
    var executorName = params.executorName || "";
    var startTime = params.startTime;
    var endTime = params.endTime;
    var Search = {
        attributes: ['executorName', 'description', 'productName', 'handleTime', 'handleMethod', 'handleResult', 'diaryType', 'startTime', 'endTime','diaryId'],
        where: {
            diaryType: diaryType,
            executorName: executorName,
            startTime: {
               $gte: startTime
            },
            endTime: {
                $lte: endTime
            }
        }
    };
    if (executorName === "") {
        delete Search.where.executorName;
    }
    diaryModel.findAll(
        Search
    ).then(function (value) {
        var result = underscore.pluck(value, 'dataValues');
        underscore.map(result, function (item) {
            item.handleTime = moment().format('YYYY-MM-DD hh:mm:ss');
        });
        resultObj.obj = result;
        resultObj.msg.prompt = '查询日志成功';
        resultObj.retcode = 200;
        res.send(resultObj);
    }).catch(function (reason) {
        resultObj.msg.prompt = '查询日志失败';
        resultObj.msg.error = reason.message;
        resultObj.retcode = -500;
        res.send(resultObj);
    })
};


//插入日志
plan.insertDiary = function (params, res) {
    var resultObj = JSON.parse(JSON.stringify(helper.API_RESULT_MODEL));
    var executorName = params.executorName;
    var diaryType = params.diaryType;
    var startTime = params.startTime;
    var endTime = params.endTime;
    var description = params.description;
    var handleMethod = params.handleMethod;
    var handleResult = params.handleResult;
    var productName = params.productName;
    var handleTime = params.handleTime;
    var id = helper.getAutoId();
    var sqlWord = "INSERT INTO diary_list (diaryId,executorName, startTime,endTime,description,diaryType,handleMethod,handleResult,productName,handleTime ) VALUES (" + "'" + id + "'" + "," + "'" + executorName + "'" + "," + "'" + startTime + "'" + "," + "'" + endTime + "'" + "," + "'" + description + "'" + "," + "'" + diaryType + "'" + "," + "'" + handleMethod + "'" +","+"'" + handleResult + "'"+","+"'" + productName + "'"+","+"'" + handleTime + "'"+")";
    sequelize.query(sqlWord).spread(function () {
        resultObj.msg.prompt = "插入数据成功";
        resultObj.retcode = 200;
        res.send(resultObj);
    }).catch(function (reason) {
        resultObj.msg.prompt = "插入数据失败";
        resultObj.msg.error = reason.message;
        res.send(resultObj);
    })
};

//删除日志
plan.deleteDairy=function (params,res) {
    var resultObj = JSON.parse(JSON.stringify(helper.API_RESULT_MODEL));
    var id = params.id;
    diaryModel.destroy(
        {
            where:{
                diaryId:id
            }
        }).then(function () {
            resultObj.msg.prompt='删除成功';
            resultObj.retcode=200;
            res.send(resultObj);
    }).catch(function (reason) {
        resultObj.msg.prompt='删除失败';
        resultObj.msg.error=reason.message;
        resultObj.retcode=-500;
        res.send(resultObj);
    })
};

//删除计划
plan.deletePlan=function (params,res) {
    var resultObj = JSON.parse(JSON.stringify(helper.API_RESULT_MODEL));
    var id = params.id;
    planModel.destroy(
        {
            where:{
                id:id
            }
        }).then(function () {
        resultObj.msg.prompt='删除成功';
        resultObj.retcode=200;
        res.send(resultObj);
    }).catch(function (reason) {
        resultObj.msg.prompt='删除失败';
        resultObj.msg.error=reason.message;
        resultObj.retcode=-500;
        res.send(resultObj);
    })
};

plan.exportDiaryExcel = function (params,res) {
    var resultObj = JSON.parse(JSON.stringify(helper.API_RESULT_MODEL));
    var diaryType = params.diaryType;
    var executorName = params.executorName || "";
    var startTime = params.startTime;
    var endTime = params.endTime;
    var Search = {
        attributes: [['executorName','填写人'], ['description','日志内容'], ['productName','产品名称'], ['handleTime','处理时间'], ['handleMethod','处理方法'], ['handleResult','处理结果'], ['diaryType','日志类型'], ['startTime','开始时间'], ['endTime','结束时间'],['diaryId','日志ID']],
        where: {
            diaryType: diaryType,
            executorName: executorName,
            startTime: {
                $gte: startTime
            },
            endTime: {
                $lte: endTime
            }
        }
    };
    if (executorName === "") {
        delete Search.where.executorName;
    }
    diaryModel.findAll(
        Search
    ).then(function (value) {
        if(value.length){
            var jsonResult = underscore.pluck(value, 'dataValues');
            underscore.map(jsonResult, function (item) {
                item.handleTime = moment().format('YYYY-MM-DD hh:mm:ss');
            });

            let  sheetNames = [], convertSheets = {};
            convertSheets["sheet1"] = xl.utils.json_to_sheet(jsonResult);
            sheetNames.push("sheet1");
            let book = {
                SheetNames: sheetNames,
                Sheets: convertSheets
            };
            let wopts = {bookType: 'xlsx', type: 'binary'};  //写入的样式
            resultObj.obj.blob = xl.write(book, wopts);
            resultObj.msg.prompt = '查询日志成功';
            resultObj.retcode = 200;
            res.send(resultObj);
        }else{
            resultObj.obj.blob = null;
            resultObj.retcode = 200;
            res.json(resultObj);
        }

    }).catch(function (reason) {
        resultObj.msg.prompt = '查询日志失败';
        resultObj.msg.error = reason.message;
        resultObj.retcode = -500;
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
var planModel = require('../models/index').plan_list;
var plan = module.exports = {};
var helper = require('../helpers/helpers');
var underscore = require('underscore');
var moment = require('moment');
var diaryModel = require('../models/index').diary_list;
var DbConnection = require('../helpers/db-connection');
var sequelize = new DbConnection().sequelize;
var xl = require('xlsx')

//插入数据
plan.insertPlan = function (params, res) {
    var resultObj = JSON.parse(JSON.stringify(helper.API_RESULT_MODEL));
    var id = helper.getAutoId();
    var home = params.home;
    var executorName = params.executorName;
    var startTime = params.startTime;
    var endTime = params.endTime;
    var remindTime = params.remindTime;
    var content = params.content;
    var isCheck = params.isCheck || 0;
    //插入到数据库里要带''号，然后"'"来识别这个引号
    var sqlWord = "INSERT INTO plan_list VALUES (" + "'" +  remindTime+ "'" + "," + "'" + executorName + "'" + "," + "'" +  id + "'" + "," + "'" + startTime + "'" + "," + "'" + content  + "'" + "," + "'" +  isCheck + "'" + "," + "'" +   endTime+ "'" + "," + "'" +  home + "'" + ")";
    sequelize.query(sqlWord).spread(function (args) {
        resultObj.msg.prompt = "插入数据成功";
        resultObj.retcode = 200;
        res.send(resultObj);
    }).catch(function (reason) {
        resultObj.msg.prompt = "插入数据失败";
        resultObj.msg.error = reason.message;
        res.send(resultObj);
    })

};
//查询定制计划
plan.checkPlan = function (params, res) {
    var resultObj = JSON.parse(JSON.stringify(helper.API_RESULT_MODEL));
    var executorName = params.executorName || "";
    var startTime = params.startTime;
    var endTime = params.endTime;
    var Search = {
        attributes: ['home', 'executor', 'startTime', 'endTime', 'remindTime', 'content', 'isCheck','id'],
        where: {
            executor: executorName,
            startTime: {
               $gte: startTime
            },
            endTime:
                {
                    $lte: endTime
                }
        }
    };
    if (executorName === "") {
        delete Search.where.executor
    }
    planModel.findAll(
        Search
    ).then(function (value) {
        resultObj.retcode = 200;
        resultObj.msg.prompt = "查询数据成功";
        resultObj.obj = value;
        res.send(resultObj);
    }).catch(function (reason) {
        resultObj.retcode = -500;
        resultObj.msg.prompt = "查询数据失败";
        resultObj.msg.error = reason.message;
        res.send(resultObj);
    })
};

//巡查计划状态修改
plan.finishPlan = function(params,res) {
    var resultObj = JSON.parse(JSON.stringify(helper.API_RESULT_MODEL));
    var id = params.id;
    var executor = params.executor;      //获取计划编号和执行人员姓名
    var updateSql = "update plan_list set isCheck = 1 where id = "+"'"+id+"' and executor ="+"'"+executor+"'";
    sequelize.query(updateSql).spread(function (results, metadata) {    //results包含结果的数组，metadata一个元数据对象
        resultObj.msg.prompt = '巡查计划完成';
        resultObj.retcode = 200;
        res.send(resultObj);
    }).catch(function (reason) {
        resultObj.msg.prompt = '系统内部出错';
        resultObj.msg.error = reason;
        resultObj.retcode = -500;
        res.send(resultObj);
    });
};

//app端搜索巡查计划
plan.GetAppPlan = function(params,res) {
    var resultObj = JSON.parse(JSON.stringify(helper.API_RESULT_MODEL));
    var home = params.home;
    var startTime = params.startTime;
    var endTime =params.endTime;
    var isCheck = params.isCheck;                                       //获取建筑代号，起始时间，完成情况
    var Search = {
        where:
            {
                home:home,
                startTime: {
                    $gte: startTime
                },
                endTime:
                    {
                        $lte: endTime
                    },
                isCheck:isCheck
            },
        attributes: ['home', 'executor', 'startTime', 'endTime', 'remindTime', 'content', 'isCheck','id']
    };                                                                  //创建搜索条件
    if(isCheck === "")
    {
        delete Search.where.isCheck;
    }
    console.log(Search);
    planModel.findAll(
        Search
    ).then(function (value) {
        var results =underscore.pluck(value,'dataValues');
        resultObj.obj.data = results;
        resultObj.retcode = 200;
        res.send(resultObj);
    }).catch(function (reason) {
        resultObj.retcode=-500;
        resultObj.msg.error =reason;
        resultObj.msg.prompt = "系统内部错误";
        res.send(resultObj);
    })
};


//查看日志
plan.getDiary = function (params, res) {
    var resultObj = JSON.parse(JSON.stringify(helper.API_RESULT_MODEL));
    var diaryType = params.diaryType;
    var executorName = params.executorName || "";
    var startTime = params.startTime;
    var endTime = params.endTime;
    var Search = {
        attributes: ['executorName', 'description', 'productName', 'handleTime', 'handleMethod', 'handleResult', 'diaryType', 'startTime', 'endTime','diaryId'],
        where: {
            diaryType: diaryType,
            executorName: executorName,
            startTime: {
               $gte: startTime
            },
            endTime: {
                $lte: endTime
            }
        }
    };
    if (executorName === "") {
        delete Search.where.executorName;
    }
    diaryModel.findAll(
        Search
    ).then(function (value) {
        var result = underscore.pluck(value, 'dataValues');
        underscore.map(result, function (item) {
            item.handleTime = moment().format('YYYY-MM-DD hh:mm:ss');
        });
        resultObj.obj = result;
        resultObj.msg.prompt = '查询日志成功';
        resultObj.retcode = 200;
        res.send(resultObj);
    }).catch(function (reason) {
        resultObj.msg.prompt = '查询日志失败';
        resultObj.msg.error = reason.message;
        resultObj.retcode = -500;
        res.send(resultObj);
    })
};


//插入日志
plan.insertDiary = function (params, res) {
    var resultObj = JSON.parse(JSON.stringify(helper.API_RESULT_MODEL));
    var executorName = params.executorName;
    var diaryType = params.diaryType;
    var startTime = params.startTime;
    var endTime = params.endTime;
    var description = params.description;
    var handleMethod = params.handleMethod;
    var handleResult = params.handleResult;
    var productName = params.productName;
    var handleTime = params.handleTime;
    var id = helper.getAutoId();
    var sqlWord = "INSERT INTO diary_list (diaryId,executorName, startTime,endTime,description,diaryType,handleMethod,handleResult,productName,handleTime ) VALUES (" + "'" + id + "'" + "," + "'" + executorName + "'" + "," + "'" + startTime + "'" + "," + "'" + endTime + "'" + "," + "'" + description + "'" + "," + "'" + diaryType + "'" + "," + "'" + handleMethod + "'" +","+"'" + handleResult + "'"+","+"'" + productName + "'"+","+"'" + handleTime + "'"+")";
    sequelize.query(sqlWord).spread(function () {
        resultObj.msg.prompt = "插入数据成功";
        resultObj.retcode = 200;
        res.send(resultObj);
    }).catch(function (reason) {
        resultObj.msg.prompt = "插入数据失败";
        resultObj.msg.error = reason.message;
        res.send(resultObj);
    })
};

//删除日志
plan.deleteDairy=function (params,res) {
    var resultObj = JSON.parse(JSON.stringify(helper.API_RESULT_MODEL));
    var id = params.id;
    diaryModel.destroy(
        {
            where:{
                diaryId:id
            }
        }).then(function () {
            resultObj.msg.prompt='删除成功';
            resultObj.retcode=200;
            res.send(resultObj);
    }).catch(function (reason) {
        resultObj.msg.prompt='删除失败';
        resultObj.msg.error=reason.message;
        resultObj.retcode=-500;
        res.send(resultObj);
    })
};

//删除计划
plan.deletePlan=function (params,res) {
    var resultObj = JSON.parse(JSON.stringify(helper.API_RESULT_MODEL));
    var id = params.id;
    planModel.destroy(
        {
            where:{
                id:id
            }
        }).then(function () {
        resultObj.msg.prompt='删除成功';
        resultObj.retcode=200;
        res.send(resultObj);
    }).catch(function (reason) {
        resultObj.msg.prompt='删除失败';
        resultObj.msg.error=reason.message;
        resultObj.retcode=-500;
        res.send(resultObj);
    })
};

plan.exportDiaryExcel = function (params,res) {
    var resultObj = JSON.parse(JSON.stringify(helper.API_RESULT_MODEL));
    var diaryType = params.diaryType;
    var executorName = params.executorName || "";
    var startTime = params.startTime;
    var endTime = params.endTime;
    var Search = {
        attributes: [['executorName','填写人'], ['description','日志内容'], ['productName','产品名称'], ['handleTime','处理时间'], ['handleMethod','处理方法'], ['handleResult','处理结果'], ['diaryType','日志类型'], ['startTime','开始时间'], ['endTime','结束时间'],['diaryId','日志ID']],
        where: {
            diaryType: diaryType,
            executorName: executorName,
            startTime: {
                $gte: startTime
            },
            endTime: {
                $lte: endTime
            }
        }
    };
    if (executorName === "") {
        delete Search.where.executorName;
    }
    diaryModel.findAll(
        Search
    ).then(function (value) {
        if(value.length){
            var jsonResult = underscore.pluck(value, 'dataValues');
            underscore.map(jsonResult, function (item) {
                item.handleTime = moment().format('YYYY-MM-DD hh:mm:ss');
            });

            let  sheetNames = [], convertSheets = {};
            convertSheets["sheet1"] = xl.utils.json_to_sheet(jsonResult);
            sheetNames.push("sheet1");
            let book = {
                SheetNames: sheetNames,
                Sheets: convertSheets
            };
            let wopts = {bookType: 'xlsx', type: 'binary'};  //写入的样式
            resultObj.obj.blob = xl.write(book, wopts);
            resultObj.msg.prompt = '查询日志成功';
            resultObj.retcode = 200;
            res.send(resultObj);
        }else{
            resultObj.obj.blob = null;
            resultObj.retcode = 200;
            res.json(resultObj);
        }

    }).catch(function (reason) {
        resultObj.msg.prompt = '查询日志失败';
        resultObj.msg.error = reason.message;
        resultObj.retcode = -500;
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