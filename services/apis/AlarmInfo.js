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
 * Created by snoopy on 2018/7/2
 */

//model引用
var tsModel = require('../models/index').TS;
var trModel = require('../models/index').TR;
var tdModel = require('../models/index').TD;
var tjModel = require('../models/index').TJ;
var xsModel = require('../models/index').XS;
var yqModel = require('../models/index').YQ;
var rqModel = require('../models/index').RQ;
//二期宿舍没有数据库表，无法查询,学院路数据指向不明确，暂时没有添加
var zsModel = require('../models/index').ZS;
var xyModel = require('../models/index').XY;
var sqbModel = require('../models/index').SQB;
var qsbModel = require('../models/index').QSB;
var xylbModel = require('../models/index').XYLB;
var alarmModel = require('../models/index').alarm_key;
var breaker_key = require('../models/index').breaker_key;
var moment = require('moment');
var promise = require('bluebird');
var underscore = require('underscore');
var AlarmInfo = module.exports = {};
var helper = require('../helpers/helpers');
AlarmInfo.search = function (params, res) {
    var resultObj = JSON.parse(JSON.stringify(helper.API_RESULT_MODEL));
    var findWhere = "";
    var findType = "";
    var home = params.home;
    var type = params.type;
    var startTime = params.startTime;
    var endTime = params.endTime;
    //判断配电所
    switch (home) {
        //图书馆
        case '00':
            findWhere = 'TS%';
            break;
        case '01':
            findWhere = 'TR%';
            break;
        case '02':
            findWhere = 'TD%';
            break;
        case '03':
            findWhere = 'TJ%';
            break;
        case '04':
            findWhere = 'XS%';
            break;
        case '05':
            findWhere = 'YQ%';
            break;
        case '06':
            findWhere = 'RQ%';
            break;
        case '07':
            findWhere = 'ZS%';
            break;
        case '08':
            findWhere = 'XY%';
            break;
        case '09':
            findWhere = 'QSB%';
            break;
        case '10':
            findWhere = 'SQB%';
            break;
        case '11':
            findWhere = 'XYLB%';
            break;
        default:
            resultObj.msg.prompt = "无此配电所";
            res.send(resultObj);
    }
    //判断查询数据类型
    switch (type) {
        case 0:
            findType = "%00";
            break;
        case 1:
            findType = "%01";
            break;
        case 2:
            findType = "%02";
            break;
        case 3:
            findType = "%03";
            break;
        case 4:
            findType = "%04";
            break;
        case 5:
            findType = "%05";
            break;
        case 6:
            findType = "%66";
            break;
        case 7:
            findType = "%67";
            break;
        default:
            resultObj.msg.prompt = "无此数据类型";
            res.send(resultObj);
    }

    //key查询
    var Search =
        {
            attributes: ['value'],
            where: {
                key: {
                    $like: findType
                },
                value: {
                    $like: findWhere,
                    $and: {
                        $notLike: 'XYLB%',
                        $like: findWhere
                    }

                }
            }
        };
    if (home !== "08") {
        delete Search.where.value.$and.$notLike;
    }
    alarmModel.findAll(
        Search
    ).then(function (value) {
        var keyResult = [];
        finalChar = [];
        var result = underscore.pluck(value, 'dataValues');          //萃取dataValue值
        underscore.map(result, function (item) {
            keyResult.push(item.value);
        });
        keyResult.push('DT');
        switch (home) {
            case '00':
                tsModel.findAll({
                    attributes: keyResult,
                    where: {
                        DT: {
                            $between: [startTime + ' 00:00:00', endTime + ' 23:59:59']
                        }
                    },
                    order: [['DT', 'ASC']]
                }).then(function (value) {
                    var valueResult = underscore.pluck(value, 'dataValues');
                    var i = 0;
                    var valueChar = [];
                    var dtChar = [];
                    underscore.map(valueResult, function (item) {
                        for (var list in item) {          //找出所有为0的键值对，进行删除，使用map好像也行，待测试
                            if (item[list] === 0) {
                                delete item[list];
                            }
                        }
                    });
                    finalResult = valueResult.filter(function (item) {        //filter不会改变原数组
                        return underscore.size(item) > 1;
                    });
                    underscore.map(finalResult, function (item) {               //将DT取出放在dtChar中
                        dtChar.push(item.DT);
                        delete item.DT;
                    });
                    underscore.map(finalResult, function (item) {
                        finalChar.push(underscore.keys(item));      //concat方法不改原数组
                    });
                    var promises = underscore.map(finalChar, function (item) {
                        return alarmModel.findAll({
                            attributes: ['key'],
                            where: {
                                value: {
                                    $in: item
                                }
                            }
                        }).then(function (value) {
                            var mapValue = underscore.pluck(value, 'dataValues');
                            underscore.map(mapValue, function (item) {
                                item = helper.search(item);
                                delete item.key;
                                item.DT = dtChar[i];                                //添加时间
                                valueChar.push(item);
                            });
                            i++;
                        }).catch(function (reason) {
                            resultObj.msg.prompt = "查询key表失败";
                            resultObj.msg.error = reason.message;
                            resultObj.retcode = -500;
                            res.send(resultObj);
                        });
                    });
                    promise.all(promises).then(function () {
                        resultObj.obj = valueChar;
                        resultObj.retcode = 200;
                        resultObj.msg.prompt = "查询成功";
                        res.send(resultObj);
                    });
                }).catch(function (reason) {
                    resultObj.msg.prompt = "查询key表失败";
                    resultObj.msg.error = reason.message;
                    resultObj.retcode = -500;
                    res.send(resultObj);
                });
                break;
            case '01':
                trModel.findAll({
                    attributes: keyResult,
                    where: {
                        DT: {
                            $between: [startTime + ' 00:00:00', endTime + ' 23:59:59']
                        }
                    },
                    order: [['DT', 'ASC']]
                }).then(function (value) {
                    var valueResult = underscore.pluck(value, 'dataValues');
                    var i = 0;
                    var valueChar = [];
                    var dtChar = [];
                    underscore.map(valueResult, function (item) {
                        for (var list in item) {          //找出所有为0的键值对，进行删除，使用map好像也行，待测试
                            if (item[list] === 0) {
                                delete item[list];
                            }
                        }
                    });
                    finalResult = valueResult.filter(function (item) {        //filter不会改变原数组
                        return underscore.size(item) > 1;
                    });
                    underscore.map(finalResult, function (item) {               //将DT取出放在dtChar中
                        dtChar.push(item.DT);
                        delete item.DT;
                    });
                    underscore.map(finalResult, function (item) {
                        finalChar.push(underscore.keys(item));      //concat方法不改原数组
                    });
                    var promises = underscore.map(finalChar, function (item) {
                        return alarmModel.findAll({
                            attributes: ['key'],
                            where: {
                                value: {
                                    $in: item
                                }
                            }
                        }).then(function (value) {
                            var mapValue = underscore.pluck(value, 'dataValues');
                            underscore.map(mapValue, function (item) {
                                item = helper.search(item);
                                delete item.key;
                                item.DT = dtChar[i];                                //添加时间
                                valueChar.push(item);
                            });
                            i++;
                        }).catch(function (reason) {
                            resultObj.msg.prompt = "查询key表失败";
                            resultObj.msg.error = reason.message;
                            resultObj.retcode = -500;
                            res.send(resultObj);
                        });
                    });
                    promise.all(promises).then(function () {
                        resultObj.obj = valueChar;
                        resultObj.retcode = 200;
                        resultObj.msg.prompt = "查询成功";
                        res.send(resultObj);
                    });
                }).catch(function (reason) {
                    resultObj.msg.prompt = "查询key表失败";
                    resultObj.msg.error = reason.message;
                    resultObj.retcode = -500;
                    res.send(resultObj);
                });
                break;
            case '02':
                tdModel.findAll({
                    attributes: keyResult,
                    where: {
                        DT: {
                            $between: [startTime + ' 00:00:00', endTime + ' 23:59:59']
                        }
                    },
                    order: [['DT', 'ASC']]
                }).then(function (value) {
                    var valueResult = underscore.pluck(value, 'dataValues');
                    var i = 0;
                    var valueChar = [];
                    var dtChar = [];
                    underscore.map(valueResult, function (item) {
                        for (var list in item) {          //找出所有为0的键值对，进行删除，使用map好像也行，待测试
                            if (item[list] === 0) {
                                delete item[list];
                            }
                        }
                    });
                    finalResult = valueResult.filter(function (item) {        //filter不会改变原数组
                        return underscore.size(item) > 1;
                    });
                    underscore.map(finalResult, function (item) {               //将DT取出放在dtChar中
                        dtChar.push(item.DT);
                        delete item.DT;
                    });
                    underscore.map(finalResult, function (item) {
                        finalChar.push(underscore.keys(item));      //concat方法不改原数组
                    });
                    var promises = underscore.map(finalChar, function (item) {
                        return alarmModel.findAll({
                            attributes: ['key'],
                            where: {
                                value: {
                                    $in: item
                                }
                            }
                        }).then(function (value) {
                            var mapValue = underscore.pluck(value, 'dataValues');
                            underscore.map(mapValue, function (item) {
                                item = helper.search(item);
                                delete item.key;
                                item.DT = dtChar[i];                                //添加时间
                                valueChar.push(item);
                            });
                            i++;
                        }).catch(function (reason) {
                            resultObj.msg.prompt = "查询key表失败";
                            resultObj.msg.error = reason.message;
                            resultObj.retcode = -500;
                            res.send(resultObj);
                        });
                    });
                    promise.all(promises).then(function () {
                        resultObj.obj = valueChar;
                        resultObj.retcode = 200;
                        resultObj.msg.prompt = "查询成功";
                        res.send(resultObj);
                    });
                }).catch(function (reason) {
                    resultObj.msg.prompt = "查询key表失败";
                    resultObj.msg.error = reason.message;
                    resultObj.retcode = -500;
                    res.send(resultObj);
                });
                break;
            case '03':
                tjModel.findAll({
                    attributes: keyResult,
                    where: {
                        DT: {
                            $between: [startTime + ' 00:00:00', endTime + ' 23:59:59']
                        }
                    },
                    order: [['DT', 'ASC']]
                }).then(function (value) {
                    var valueResult = underscore.pluck(value, 'dataValues');
                    var i = 0;
                    var valueChar = [];
                    var dtChar = [];
                    underscore.map(valueResult, function (item) {
                        for (var list in item) {          //找出所有为0的键值对，进行删除，使用map好像也行，待测试
                            if (item[list] === 0) {
                                delete item[list];
                            }
                        }
                    });
                    finalResult = valueResult.filter(function (item) {        //filter不会改变原数组
                        return underscore.size(item) > 1;
                    });
                    underscore.map(finalResult, function (item) {               //将DT取出放在dtChar中
                        dtChar.push(item.DT);
                        delete item.DT;
                    });
                    underscore.map(finalResult, function (item) {
                        finalChar.push(underscore.keys(item));      //concat方法不改原数组
                    });
                    var promises = underscore.map(finalChar, function (item) {
                        return alarmModel.findAll({
                            attributes: ['key'],
                            where: {
                                value: {
                                    $in: item
                                }
                            }
                        }).then(function (value) {
                            var mapValue = underscore.pluck(value, 'dataValues');
                            underscore.map(mapValue, function (item) {
                                item = helper.search(item);
                                delete item.key;
                                item.DT = dtChar[i];                                //添加时间
                                valueChar.push(item);
                            });
                            i++;
                        }).catch(function (reason) {
                            resultObj.msg.prompt = "查询key表失败";
                            resultObj.msg.error = reason.message;
                            resultObj.retcode = -500;
                            res.send(resultObj);
                        });
                    });
                    promise.all(promises).then(function () {
                        resultObj.obj = valueChar;
                        resultObj.retcode = 200;
                        resultObj.msg.prompt = "查询成功";
                        res.send(resultObj);
                    });
                }).catch(function (reason) {
                    resultObj.msg.prompt = "查询key表失败";
                    resultObj.msg.error = reason.message;
                    resultObj.retcode = -500;
                    res.send(resultObj);
                });
                break;
            case '04':
                xsModel.findAll({
                    attributes: keyResult,
                    where: {
                        DT: {
                            $between: [startTime + ' 00:00:00', endTime + ' 23:59:59']
                        }
                    },
                    order: [['DT', 'ASC']]
                }).then(function (value) {
                    var valueResult = underscore.pluck(value, 'dataValues');
                    var i = 0;
                    var valueChar = [];
                    var dtChar = [];
                    underscore.map(valueResult, function (item) {
                        for (var list in item) {          //找出所有为0的键值对，进行删除，使用map好像也行，待测试
                            if (item[list] === 0) {
                                delete item[list];
                            }
                        }
                    });
                    finalResult = valueResult.filter(function (item) {        //filter不会改变原数组
                        return underscore.size(item) > 1;
                    });
                    underscore.map(finalResult, function (item) {               //将DT取出放在dtChar中
                        dtChar.push(item.DT);
                        delete item.DT;
                    });
                    underscore.map(finalResult, function (item) {
                        finalChar.push(underscore.keys(item));      //concat方法不改原数组
                    });
                    var promises = underscore.map(finalChar, function (item) {
                        return alarmModel.findAll({
                            attributes: ['key'],
                            where: {
                                value: {
                                    $in: item
                                }
                            }
                        }).then(function (value) {
                            var mapValue = underscore.pluck(value, 'dataValues');
                            underscore.map(mapValue, function (item) {
                                item = helper.search(item);
                                delete item.key;
                                item.DT = dtChar[i];                                //添加时间
                                valueChar.push(item);
                            });
                            i++;
                        }).catch(function (reason) {
                            resultObj.msg.prompt = "查询key表失败";
                            resultObj.msg.error = reason.message;
                            resultObj.retcode = -500;
                            res.send(resultObj);
                        });
                    });
                    promise.all(promises).then(function () {
                        resultObj.obj = valueChar;
                        resultObj.retcode = 200;
                        resultObj.msg.prompt = "查询成功";
                        res.send(resultObj);
                    });
                }).catch(function (reason) {
                    resultObj.msg.prompt = "查询key表失败";
                    resultObj.msg.error = reason.message;
                    resultObj.retcode = -500;
                    res.send(resultObj);
                });
                break;
            case '05':
                yqModel.findAll({
                    attributes: keyResult,
                    where: {
                        DT: {
                            $between: [startTime + ' 00:00:00', endTime + ' 23:59:59']
                        }
                    },
                    order: [['DT', 'ASC']]
                }).then(function (value) {
                    var valueResult = underscore.pluck(value, 'dataValues');
                    var i = 0;
                    var valueChar = [];
                    var dtChar = [];
                    underscore.map(valueResult, function (item) {
                        for (var list in item) {          //找出所有为0的键值对，进行删除，使用map好像也行，待测试
                            if (item[list] === 0) {
                                delete item[list];
                            }
                        }
                    });
                    finalResult = valueResult.filter(function (item) {        //filter不会改变原数组
                        return underscore.size(item) > 1;
                    });
                    underscore.map(finalResult, function (item) {               //将DT取出放在dtChar中
                        dtChar.push(item.DT);
                        delete item.DT;
                    });
                    underscore.map(finalResult, function (item) {
                        finalChar.push(underscore.keys(item));      //concat方法不改原数组
                    });
                    var promises = underscore.map(finalChar, function (item) {
                        return alarmModel.findAll({
                            attributes: ['key'],
                            where: {
                                value: {
                                    $in: item
                                }
                            }
                        }).then(function (value) {
                            var mapValue = underscore.pluck(value, 'dataValues');
                            underscore.map(mapValue, function (item) {
                                item = helper.search(item);
                                delete item.key;
                                item.DT = dtChar[i];                                //添加时间
                                valueChar.push(item);
                            });
                            i++;
                        }).catch(function (reason) {
                            resultObj.msg.prompt = "查询key表失败";
                            resultObj.msg.error = reason.message;
                            resultObj.retcode = -500;
                            res.send(resultObj);
                        });
                    });
                    promise.all(promises).then(function () {
                        resultObj.obj = valueChar;
                        resultObj.retcode = 200;
                        resultObj.msg.prompt = "查询成功";
                        res.send(resultObj);
                    });
                }).catch(function (reason) {
                    resultObj.msg.prompt = "查询key表失败";
                    resultObj.msg.error = reason.message;
                    resultObj.retcode = -500;
                    res.send(resultObj);
                });
                break;
            case '06':
                rqModel.findAll({
                    attributes: keyResult,
                    where: {
                        DT: {
                            $between: [startTime + ' 00:00:00', endTime + ' 23:59:59']
                        }
                    },
                    order: [['DT', 'ASC']]
                }).then(function (value) {
                    var valueResult = underscore.pluck(value, 'dataValues');
                    var i = 0;
                    var valueChar = [];
                    var dtChar = [];
                    underscore.map(valueResult, function (item) {
                        for (var list in item) {          //找出所有为0的键值对，进行删除，使用map好像也行，待测试
                            if (item[list] === 0) {
                                delete item[list];
                            }
                        }
                    });
                    finalResult = valueResult.filter(function (item) {        //filter不会改变原数组
                        return underscore.size(item) > 1;
                    });
                    underscore.map(finalResult, function (item) {               //将DT取出放在dtChar中
                        dtChar.push(item.DT);
                        delete item.DT;
                    });
                    underscore.map(finalResult, function (item) {
                        finalChar.push(underscore.keys(item));      //concat方法不改原数组
                    });
                    var promises = underscore.map(finalChar, function (item) {
                        return alarmModel.findAll({
                            attributes: ['key'],
                            where: {
                                value: {
                                    $in: item
                                }
                            }
                        }).then(function (value) {
                            var mapValue = underscore.pluck(value, 'dataValues');
                            underscore.map(mapValue, function (item) {
                                item = helper.search(item);
                                delete item.key;
                                item.DT = dtChar[i];                                //添加时间
                                valueChar.push(item);
                            });
                            i++;
                        }).catch(function (reason) {
                            resultObj.msg.prompt = "查询key表失败";
                            resultObj.msg.error = reason.message;
                            resultObj.retcode = -500;
                            res.send(resultObj);
                        });
                    });
                    promise.all(promises).then(function () {
                        resultObj.obj = valueChar;
                        resultObj.retcode = 200;
                        resultObj.msg.prompt = "查询成功";
                        res.send(resultObj);
                    });
                }).catch(function (reason) {
                    resultObj.msg.prompt = "查询key表失败";
                    resultObj.msg.error = reason.message;
                    resultObj.retcode = -500;
                    res.send(resultObj);
                });
                break;
            case '07':
                zsModel.findAll({
                    attributes: keyResult,
                    where: {
                        DT: {
                            $between: [startTime + ' 00:00:00', endTime + ' 23:59:59']
                        }
                    },
                    order: [['DT', 'ASC']]
                }).then(function (value) {
                    var valueResult = underscore.pluck(value, 'dataValues');
                    var i = 0;
                    var valueChar = [];
                    var dtChar = [];
                    underscore.map(valueResult, function (item) {
                        for (var list in item) {          //找出所有为0的键值对，进行删除，使用map好像也行，待测试
                            if (item[list] === 0) {
                                delete item[list];
                            }
                        }
                    });
                    finalResult = valueResult.filter(function (item) {        //filter不会改变原数组
                        return underscore.size(item) > 1;
                    });
                    underscore.map(finalResult, function (item) {               //将DT取出放在dtChar中
                        dtChar.push(item.DT);
                        delete item.DT;
                    });
                    underscore.map(finalResult, function (item) {
                        finalChar.push(underscore.keys(item));      //concat方法不改原数组
                    });
                    var promises = underscore.map(finalChar, function (item) {
                        return alarmModel.findAll({
                            attributes: ['key'],
                            where: {
                                value: {
                                    $in: item
                                }
                            }
                        }).then(function (value) {
                            var mapValue = underscore.pluck(value, 'dataValues');
                            underscore.map(mapValue, function (item) {
                                item = helper.search(item);
                                delete item.key;
                                item.DT = dtChar[i];                                //添加时间
                                valueChar.push(item);
                            });
                            i++;
                        }).catch(function (reason) {
                            resultObj.msg.prompt = "查询key表失败";
                            resultObj.msg.error = reason.message;
                            resultObj.retcode = -500;
                            res.send(resultObj);
                        });
                    });
                    promise.all(promises).then(function () {
                        resultObj.obj = valueChar;
                        resultObj.retcode = 200;
                        resultObj.msg.prompt = "查询成功";
                        res.send(resultObj);
                    });
                }).catch(function (reason) {
                    resultObj.msg.prompt = "查询key表失败";
                    resultObj.msg.error = reason.message;
                    resultObj.retcode = -500;
                    res.send(resultObj);
                });
                break;
            case '08':
                xyModel.findAll({
                    attributes: keyResult,
                    where: {
                        DT: {
                            $between: [startTime + ' 00:00:00', endTime + ' 23:59:59']
                        }
                    },
                    order: [['DT', 'ASC']]
                }).then(function (value) {
                    var valueResult = underscore.pluck(value, 'dataValues');
                    var i = 0;
                    var valueChar = [];
                    var dtChar = [];
                    underscore.map(valueResult, function (item) {
                        for (var list in item) {          //找出所有为0的键值对，进行删除，使用map好像也行，待测试
                            if (item[list] === 0) {
                                delete item[list];
                            }
                        }
                    });
                    finalResult = valueResult.filter(function (item) {        //filter不会改变原数组
                        return underscore.size(item) > 1;
                    });
                    underscore.map(finalResult, function (item) {               //将DT取出放在dtChar中
                        dtChar.push(item.DT);
                        delete item.DT;
                    });
                    underscore.map(finalResult, function (item) {
                        finalChar.push(underscore.keys(item));      //concat方法不改原数组
                    });
                    var promises = underscore.map(finalChar, function (item) {
                        return alarmModel.findAll({
                            attributes: ['key'],
                            where: {
                                value: {
                                    $in: item
                                }
                            }
                        }).then(function (value) {
                            var mapValue = underscore.pluck(value, 'dataValues');
                            underscore.map(mapValue, function (item) {
                                item = helper.search(item);
                                delete item.key;
                                item.DT = dtChar[i];                                //添加时间
                                valueChar.push(item);
                            });
                            i++;
                        }).catch(function (reason) {
                            resultObj.msg.prompt = "查询key表失败";
                            resultObj.msg.error = reason.message;
                            resultObj.retcode = -500;
                            res.send(resultObj);
                        });
                    });
                    promise.all(promises).then(function () {
                        resultObj.obj = valueChar;
                        resultObj.retcode = 200;
                        resultObj.msg.prompt = "查询成功";
                        res.send(resultObj);
                    });
                }).catch(function (reason) {
                    resultObj.msg.prompt = "查询key表失败";
                    resultObj.msg.error = reason.message;
                    resultObj.retcode = -500;
                    res.send(resultObj);
                });
                break;
            case '09':
                qsbModel.findAll({
                    attributes: keyResult,
                    where: {
                        DT: {
                            $between: [startTime + ' 00:00:00', endTime + ' 23:59:59']
                        }
                    },
                    order: [['DT', 'ASC']]
                }).then(function (value) {
                    var valueResult = underscore.pluck(value, 'dataValues');
                    var i = 0;
                    var valueChar = [];
                    var dtChar = [];
                    underscore.map(valueResult, function (item) {
                        for (var list in item) {          //找出所有为0的键值对，进行删除，使用map好像也行，待测试
                            if (item[list] === 0) {
                                delete item[list];
                            }
                        }
                    });
                    finalResult = valueResult.filter(function (item) {        //filter不会改变原数组
                        return underscore.size(item) > 1;
                    });
                    underscore.map(finalResult, function (item) {               //将DT取出放在dtChar中
                        dtChar.push(item.DT);
                        delete item.DT;
                    });
                    underscore.map(finalResult, function (item) {
                        finalChar.push(underscore.keys(item));      //concat方法不改原数组
                    });
                    var promises = underscore.map(finalChar, function (item) {
                        return alarmModel.findAll({
                            attributes: ['key'],
                            where: {
                                value: {
                                    $in: item
                                }
                            }
                        }).then(function (value) {
                            var mapValue = underscore.pluck(value, 'dataValues');
                            underscore.map(mapValue, function (item) {
                                item = helper.search(item);
                                delete item.key;
                                item.DT = dtChar[i];                                //添加时间
                                valueChar.push(item);
                            });
                            i++;
                        }).catch(function (reason) {
                            resultObj.msg.prompt = "查询key表失败";
                            resultObj.msg.error = reason.message;
                            resultObj.retcode = -500;
                            res.send(resultObj);
                        });
                    });
                    promise.all(promises).then(function () {
                        resultObj.obj = valueChar;
                        resultObj.retcode = 200;
                        resultObj.msg.prompt = "查询成功";
                        res.send(resultObj);
                    });
                }).catch(function (reason) {
                    resultObj.msg.prompt = "查询key表失败";
                    resultObj.msg.error = reason.message;
                    resultObj.retcode = -500;
                    res.send(resultObj);
                });
                break;
            case '10':
                sqbModel.findAll({
                    attributes: keyResult,
                    where: {
                        DT: {
                            $between: [startTime + ' 00:00:00', endTime + ' 23:59:59']
                        }
                    },
                    order: [['DT', 'ASC']]
                }).then(function (value) {
                    var valueResult = underscore.pluck(value, 'dataValues');
                    var i = 0;
                    var valueChar = [];
                    var dtChar = [];
                    underscore.map(valueResult, function (item) {
                        for (var list in item) {          //找出所有为0的键值对，进行删除，使用map好像也行，待测试
                            if (item[list] === 0) {
                                delete item[list];
                            }
                        }
                    });
                    finalResult = valueResult.filter(function (item) {        //filter不会改变原数组
                        return underscore.size(item) > 1;
                    });
                    underscore.map(finalResult, function (item) {               //将DT取出放在dtChar中
                        dtChar.push(item.DT);
                        delete item.DT;
                    });
                    underscore.map(finalResult, function (item) {
                        finalChar.push(underscore.keys(item));      //concat方法不改原数组
                    });
                    var promises = underscore.map(finalChar, function (item) {
                        return alarmModel.findAll({
                            attributes: ['key'],
                            where: {
                                value: {
                                    $in: item
                                }
                            }
                        }).then(function (value) {
                            var mapValue = underscore.pluck(value, 'dataValues');
                            underscore.map(mapValue, function (item) {
                                item = helper.search(item);
                                delete item.key;
                                item.DT = dtChar[i];                                //添加时间
                                valueChar.push(item);
                            });
                            i++;
                        }).catch(function (reason) {
                            resultObj.msg.prompt = "查询key表失败";
                            resultObj.msg.error = reason.message;
                            resultObj.retcode = -500;
                            res.send(resultObj);
                        });
                    });
                    promise.all(promises).then(function () {
                        resultObj.obj = valueChar;
                        resultObj.retcode = 200;
                        resultObj.msg.prompt = "查询成功";
                        res.send(resultObj);
                    });
                }).catch(function (reason) {
                    resultObj.msg.prompt = "查询key表失败";
                    resultObj.msg.error = reason.message;
                    resultObj.retcode = -500;
                    res.send(resultObj);
                });
                break;
            case '11':
                xylbModel.findAll({
                    attributes: keyResult,
                    where: {
                        DT: {
                            $between: [startTime + ' 00:00:00', endTime + ' 23:59:59']
                        }
                    },
                    order: [['DT', 'ASC']]
                }).then(function (value) {
                    var valueResult = underscore.pluck(value, 'dataValues');
                    var i = 0;
                    var valueChar = [];
                    var dtChar = [];
                    underscore.map(valueResult, function (item) {
                        for (var list in item) {          //找出所有为0的键值对，进行删除，使用map好像也行，待测试
                            if (item[list] === 0) {
                                delete item[list];
                            }
                        }
                    });
                    finalResult = valueResult.filter(function (item) {        //filter不会改变原数组
                        return underscore.size(item) > 1;
                    });
                    underscore.map(finalResult, function (item) {               //将DT取出放在dtChar中
                        dtChar.push(item.DT);
                        delete item.DT;
                    });
                    underscore.map(finalResult, function (item) {
                        finalChar.push(underscore.keys(item));      //concat方法不改原数组
                    });
                    var promises = underscore.map(finalChar, function (item) {
                        return alarmModel.findAll({
                            attributes: ['key'],
                            where: {
                                value: {
                                    $in: item
                                }
                            }
                        }).then(function (value) {
                            var mapValue = underscore.pluck(value, 'dataValues');
                            underscore.map(mapValue, function (item) {
                                item = helper.search(item);
                                delete item.key;
                                item.DT = dtChar[i];                                //添加时间
                                valueChar.push(item);
                            });
                            i++;
                        }).catch(function (reason) {
                            resultObj.msg.prompt = "查询key表失败";
                            resultObj.msg.error = reason.message;
                            resultObj.retcode = -500;
                            res.send(resultObj);
                        });
                    });
                    promise.all(promises).then(function () {
                        resultObj.obj = valueChar;
                        resultObj.retcode = 200;
                        resultObj.msg.prompt = "查询成功";
                        res.send(resultObj);
                    });
                }).catch(function (reason) {
                    resultObj.msg.prompt = "查询key表失败";
                    resultObj.msg.error = reason.message;
                    resultObj.retcode = -500;
                    res.send(resultObj);
                });
                break;
        }
    }).catch(function (reason) {
        resultObj.msg.prompt = "查询key表失败";
        resultObj.msg.error = reason.message;
        resultObj.retcode = -500;
        res.send(resultObj);
    }).catch(function (reason) {
        resultObj.msg.prompt = "查询key表失败";
        resultObj.msg.error = reason.message;
        resultObj.retcode = -500;
        res.send(resultObj);
    })
};

AlarmInfo.break = function (params, res) {
    var resultObj = JSON.parse(JSON.stringify(helper.API_RESULT_MODEL));
    var startTime = params.startTime;
    var endTime = params.endTime;
    var home = params.home;
    switch (home) {
        case '00':
            tsModel.findAll({
                attributes: ['TS884', 'TS885', 'TS886', 'TS887', 'TS888', 'TS889', 'TS890', 'TS891', 'TS892', 'TS893', 'TS894',
                    'TS895', 'TS896', 'TS897', 'TS898', 'TS899', 'TS900', 'TS901', 'TS902', 'TS903', 'TS904', 'DT'],
                order: [['DT', 'DESC']],
                where: {
                    DT: {
                        $between: [startTime + ' 00:00:00', endTime + ' 23:59:59']
                    }
                }
            }).then(function (value) {
                var valueResult = underscore.pluck(value, 'dataValues');
                var promises = underscore.map(valueResult, function (item) {
                    var count = 0;
                    var result = [];
                    var keyResult = Object.keys(item);
                    for (var i = 0; i < keyResult.length; i++) {
                        if (item[keyResult[i]] === 1) {
                            result.push(keyResult[i]);
                            count=1;
                        }
                    }
                    if (count === 1) {
                        return breaker_key.findAll({
                            attributes: ['box', 'loop', 'event'],
                            where: {
                                key: result
                            }
                        }).then(function (value1) {
                            var finalResult = underscore.pluck(value1, 'dataValues');
                            var resultList=[];
                            underscore.map(finalResult,function (packet) {
                                var result={
                                    boxName:packet.box,
                                    loopName:packet.loop,
                                    event:packet.event,
                                    DT:item.DT
                                };
                                resultList.push(result)
                            });
                            return resultList;
                        }).catch(function (reason) {
                            console.log(reason);
                        });
                    }
                });      //map
                promise.all(promises).then(function (finalValue) {
                    var result=underscore.filter(finalValue,function (item) {
                        return item!==undefined
                    });
                    var list=underscore.flatten(result,true);
                    resultObj.obj = list;
                    resultObj.retcode = 200;
                    resultObj.msg.prompt = "查询成功";
                    res.send(resultObj);
                })
            }).catch(function (reason) {
                resultObj.msg.error = reason.message;
                resultObj.retcode = -500;
                res.send(resultObj);
            });
            break;
        case '01':
            var search=[];
            for(var i =0 ; i<56;i++){
                search.push('TR'+(758+i));
            }
            search.push('DT');
            trModel.findAll({
                attributes: search,
                where: {
                    DT: {
                        $between: [startTime + ' 00:00:00', endTime + ' 23:59:59']
                    }
                },
                order: [['DT', 'DESC']]
            }).then(function (value) {
                var valueResult = underscore.pluck(value, 'dataValues');
                var promises = underscore.map(valueResult, function (item) {
                    var count = 0;
                    var result = [];
                    var keyResult = Object.keys(item);
                    for (var i = 0; i < keyResult.length; i++) {
                        if (item[keyResult[i]] === 1) {
                            result.push(keyResult[i]);
                            count=1;
                        }
                    }
                    if (count === 1) {
                        return breaker_key.findAll({
                            attributes: ['box', 'loop', 'event'],
                            where: {
                                key: result
                            }
                        }).then(function (value1) {
                            var finalResult = underscore.pluck(value1, 'dataValues');
                            var resultList=[];
                            underscore.map(finalResult,function (packet) {
                                var result={
                                    boxName:packet.box,
                                    loopName:packet.loop,
                                    event:packet.event,
                                    DT:item.DT
                                };
                                resultList.push(result)
                            });
                            return resultList;
                        }).catch(function (reason) {
                            console.log(reason);
                        });
                    }
                });      //map
                promise.all(promises).then(function (finalValue) {
                    var result=underscore.filter(finalValue,function (item) {
                        return item!==undefined
                    });
                    var list=underscore.flatten(result,true);
                    resultObj.obj = list;
                    resultObj.retcode = 200;
                    resultObj.msg.prompt = "查询成功";
                    res.send(resultObj);
                })
            }).catch(function (reason) {
                resultObj.msg.error = reason.message;
                resultObj.retcode = -500;
                res.send(resultObj);
            });
            break;
        case '02':
            var search=[];
            for(var i =0 ; i<21;i++){
                search.push('TD'+(579+i));
            }
            search.push('DT');
            tdModel.findAll({
                attributes:search,
                where: {
                    DT: {
                        $between: [startTime + ' 00:00:00', endTime + ' 23:59:59']
                    }
                },
                order: [['DT', 'DESC']]
            }).then(function (value) {
                var valueResult = underscore.pluck(value, 'dataValues');
                var promises = underscore.map(valueResult, function (item) {
                    var count = 0;
                    var result = [];
                    var keyResult = Object.keys(item);
                    for (var i = 0; i < keyResult.length; i++) {
                        if (item[keyResult[i]] === 1) {
                            result.push(keyResult[i]);
                            count=1;
                        }
                    }
                    if (count === 1) {
                        return breaker_key.findAll({
                            attributes: ['box', 'loop', 'event'],
                            where: {
                                key: result
                            }
                        }).then(function (value1) {
                            var finalResult = underscore.pluck(value1, 'dataValues');
                            var resultList=[];
                            underscore.map(finalResult,function (packet) {
                                var result={
                                    boxName:packet.box,
                                    loopName:packet.loop,
                                    event:packet.event,
                                    DT:item.DT
                                };
                                resultList.push(result)
                            });
                            return resultList;
                        }).catch(function (reason) {
                            console.log(reason);
                        });
                    }
                });      //map
                promise.all(promises).then(function (finalValue) {
                    var result=underscore.filter(finalValue,function (item) {
                        return item!==undefined
                    });
                    var list=underscore.flatten(result,true);
                    resultObj.obj = list;
                    resultObj.retcode = 200;
                    resultObj.msg.prompt = "查询成功";
                    res.send(resultObj);
                })
            }).catch(function (reason) {
                resultObj.msg.error = reason.message;
                resultObj.retcode = -500;
                res.send(resultObj);
            });
            break;
        case '03':
            var search=[];
            for(var i =0 ; i<21;i++){
                search.push('TJ'+(656+i));
            }
            search.push('DT');
            tjModel.findAll({
                attributes:search,
                where: {
                    DT: {
                        $between: [startTime + ' 00:00:00', endTime + ' 23:59:59']
                    }
                },
                order: [['DT', 'DESC']]
            }).then(function (value) {
                var valueResult = underscore.pluck(value, 'dataValues');
                var promises = underscore.map(valueResult, function (item) {
                    var count = 0;
                    var result = [];
                    var keyResult = Object.keys(item);
                    for (var i = 0; i < keyResult.length; i++) {
                        if (item[keyResult[i]] === 1) {
                            result.push(keyResult[i]);
                            count=1;
                        }
                    }
                    if (count === 1) {
                        return breaker_key.findAll({
                            attributes: ['box', 'loop', 'event'],
                            where: {
                                key: result
                            }
                        }).then(function (value1) {
                            var finalResult = underscore.pluck(value1, 'dataValues');
                            var resultList=[];
                            underscore.map(finalResult,function (packet) {
                                var result={
                                    boxName:packet.box,
                                    loopName:packet.loop,
                                    event:packet.event,
                                    DT:item.DT
                                };
                                resultList.push(result)
                            });
                            return resultList;
                        }).catch(function (reason) {
                            console.log(reason);
                        });
                    }
                });      //map
                promise.all(promises).then(function (finalValue) {
                    var result=underscore.filter(finalValue,function (item) {
                        return item!==undefined
                    });
                    var list=underscore.flatten(result,true);
                    resultObj.obj = list;
                    resultObj.retcode = 200;
                    resultObj.msg.prompt = "查询成功";
                    res.send(resultObj);
                })
            }).catch(function (reason) {
                resultObj.msg.error = reason.message;
                resultObj.retcode = -500;
                res.send(resultObj);
            });
            break;
        case '04':
            var search=[];
            for(var i =0 ; i<7;i++){
                search.push('XS'+(838+i));
            }
            search.push('DT');
            xsModel.findAll({
                attributes:search,
                where: {
                    DT: {
                        $between: [startTime + ' 00:00:00', endTime + ' 23:59:59']
                    }
                },
                order: [['DT', 'DESC']]
            }).then(function (value) {
                var valueResult = underscore.pluck(value, 'dataValues');
                var promises = underscore.map(valueResult, function (item) {
                    var count = 0;
                    var result = [];
                    var keyResult = Object.keys(item);
                    for (var i = 0; i < keyResult.length; i++) {
                        if (item[keyResult[i]] === 1) {
                            result.push(keyResult[i]);
                            count=1;
                        }
                    }
                    if (count === 1) {
                        return breaker_key.findAll({
                            attributes: ['box', 'loop', 'event'],
                            where: {
                                key: result
                            }
                        }).then(function (value1) {
                            var finalResult = underscore.pluck(value1, 'dataValues');
                            var resultList=[];
                            underscore.map(finalResult,function (packet) {
                                var result={
                                    boxName:packet.box,
                                    loopName:packet.loop,
                                    event:packet.event,
                                    DT:item.DT
                                };
                                resultList.push(result)
                            });
                            return resultList;
                        }).catch(function (reason) {
                            console.log(reason);
                        });
                    }
                });      //map
                promise.all(promises).then(function (finalValue) {
                    var result=underscore.filter(finalValue,function (item) {
                        return item!==undefined
                    });
                    var list=underscore.flatten(result,true);
                    resultObj.obj = list;
                    resultObj.retcode = 200;
                    resultObj.msg.prompt = "查询成功";
                    res.send(resultObj);
                })
            }).catch(function (reason) {
                resultObj.msg.error = reason.message;
                resultObj.retcode = -500;
                res.send(resultObj);
            });
            break;
        case '05':
            var search=[];
            for(var i =0 ; i<28;i++){
                search.push('YQ'+(759+i));
            }
            search.push('DT');
            yqModel.findAll({
                attributes:search,
                where: {
                    DT: {
                        $between: [startTime + ' 00:00:00', endTime + ' 23:59:59']
                    }
                },
                order: [['DT', 'DESC']]
            }).then(function (value) {
                var valueResult = underscore.pluck(value, 'dataValues');
                var promises = underscore.map(valueResult, function (item) {
                    var count = 0;
                    var result = [];
                    var keyResult = Object.keys(item);
                    for (var i = 0; i < keyResult.length; i++) {
                        if (item[keyResult[i]] === 1) {
                            result.push(keyResult[i]);
                            count=1;
                        }
                    }
                    if (count === 1) {
                        return breaker_key.findAll({
                            attributes: ['box', 'loop', 'event'],
                            where: {
                                key: result
                            }
                        }).then(function (value1) {
                            var finalResult = underscore.pluck(value1, 'dataValues');
                            var resultList=[];
                            underscore.map(finalResult,function (packet) {
                                var result={
                                    boxName:packet.box,
                                    loopName:packet.loop,
                                    event:packet.event,
                                    DT:item.DT
                                };
                                resultList.push(result)
                            });
                            return resultList;
                        }).catch(function (reason) {
                            console.log(reason);
                        });
                    }
                });      //map
                promise.all(promises).then(function (finalValue) {
                    var result=underscore.filter(finalValue,function (item) {
                        return item!==undefined
                    });
                    var list=underscore.flatten(result,true);
                    resultObj.obj = list;
                    resultObj.retcode = 200;
                    resultObj.msg.prompt = "查询成功";
                    res.send(resultObj);
                })
            }).catch(function (reason) {
                resultObj.msg.error = reason.message;
                resultObj.retcode = -500;
                res.send(resultObj);
            });
            break;
        case '06':
            var search=[];
            for(var i =0 ; i<28;i++){
                search.push('RQ'+(617+i));
            }
            search.push('DT');
            rqModel.findAll({
                attributes:search,
                where: {
                    DT: {
                        $between: [startTime + ' 00:00:00', endTime + ' 23:59:59']
                    }
                },
                order: [['DT', 'DESC']]
            }).then(function (value) {
                var valueResult = underscore.pluck(value, 'dataValues');
                var promises = underscore.map(valueResult, function (item) {
                    var count = 0;
                    var result = [];
                    var keyResult = Object.keys(item);
                    for (var i = 0; i < keyResult.length; i++) {
                        if (item[keyResult[i]] === 1) {
                            result.push(keyResult[i]);
                            count=1;
                        }
                    }
                    if (count === 1) {
                        return breaker_key.findAll({
                            attributes: ['box', 'loop', 'event'],
                            where: {
                                key: result
                            }
                        }).then(function (value1) {
                            var finalResult = underscore.pluck(value1, 'dataValues');
                            var resultList=[];
                            underscore.map(finalResult,function (packet) {
                                var result={
                                    boxName:packet.box,
                                    loopName:packet.loop,
                                    event:packet.event,
                                    DT:item.DT
                                };
                                resultList.push(result)
                            });
                            return resultList;
                        }).catch(function (reason) {
                            console.log(reason);
                        });
                    }
                });      //map
                promise.all(promises).then(function (finalValue) {
                    var result=underscore.filter(finalValue,function (item) {
                        return item!==undefined
                    });
                    var list=underscore.flatten(result,true);
                    resultObj.obj = list;
                    resultObj.retcode = 200;
                    resultObj.msg.prompt = "查询成功";
                    res.send(resultObj);
                })
            }).catch(function (reason) {
                resultObj.msg.error = reason.message;
                resultObj.retcode = -500;
                res.send(resultObj);
            });
            break;
        case '07':
            var search=[];
            for(var i =0 ; i<7;i++){
                search.push('ZS'+(116+i));
            }
            search.push('DT');
            zsModel.findAll({
                attributes:search,
                where: {
                    DT: {
                        $between: [startTime + ' 00:00:00', endTime + ' 23:59:59']
                    }
                },
                order: [['DT', 'DESC']]
            }).then(function (value) {
                var valueResult = underscore.pluck(value, 'dataValues');
                var promises = underscore.map(valueResult, function (item) {
                    var count = 0;
                    var result = [];
                    var keyResult = Object.keys(item);
                    for (var i = 0; i < keyResult.length; i++) {
                        if (item[keyResult[i]] === 1) {
                            result.push(keyResult[i]);
                            count=1;
                        }
                    }
                    if (count === 1) {
                        return breaker_key.findAll({
                            attributes: ['box', 'loop', 'event'],
                            where: {
                                key: result
                            }
                        }).then(function (value1) {
                            var finalResult = underscore.pluck(value1, 'dataValues');
                            var resultList=[];
                            underscore.map(finalResult,function (packet) {
                                var result={
                                    boxName:packet.box,
                                    loopName:packet.loop,
                                    event:packet.event,
                                    DT:item.DT
                                };
                                resultList.push(result)
                            });
                            return resultList;
                        }).catch(function (reason) {
                            console.log(reason);
                        });
                    }
                });      //map
                promise.all(promises).then(function (finalValue) {
                    var result=underscore.filter(finalValue,function (item) {
                        return item!==undefined
                    });
                    var list=underscore.flatten(result,true);
                    resultObj.obj = list;
                    resultObj.retcode = 200;
                    resultObj.msg.prompt = "查询成功";
                    res.send(resultObj);
                })
            }).catch(function (reason) {
                resultObj.msg.error = reason.message;
                resultObj.retcode = -500;
                res.send(resultObj);
            });
            break;
        case '08':
            var search=[];
            for(var i =0 ; i<7;i++){
                search.push('XY'+(239+i));
            }
            search.push('DT');
            xyModel.findAll({
                attributes:search,
                where: {
                    DT: {
                        $between: [startTime + ' 00:00:00', endTime + ' 23:59:59']
                    }
                },
                order: [['DT', 'DESC']]
            }).then(function (value) {
                var valueResult = underscore.pluck(value, 'dataValues');
                var promises = underscore.map(valueResult, function (item) {
                    var count = 0;
                    var result = [];
                    var keyResult = Object.keys(item);
                    for (var i = 0; i < keyResult.length; i++) {
                        if (item[keyResult[i]] === 1) {
                            result.push(keyResult[i]);
                            count=1;
                        }
                    }
                    if (count === 1) {
                        return breaker_key.findAll({
                            attributes: ['box', 'loop', 'event'],
                            where: {
                                key: result
                            }
                        }).then(function (value1) {
                            var finalResult = underscore.pluck(value1, 'dataValues');
                            var resultList=[];
                            underscore.map(finalResult,function (packet) {
                                var result={
                                    boxName:packet.box,
                                    loopName:packet.loop,
                                    event:packet.event,
                                    DT:item.DT
                                };
                                resultList.push(result)
                            });
                            return resultList;
                        }).catch(function (reason) {
                            console.log(reason);
                        });
                    }
                });      //map
                promise.all(promises).then(function (finalValue) {
                    var result=underscore.filter(finalValue,function (item) {
                        return item!==undefined
                    });
                    var list=underscore.flatten(result,true);
                    resultObj.obj = list;
                    resultObj.retcode = 200;
                    resultObj.msg.prompt = "查询成功";
                    res.send(resultObj);
                })
            }).catch(function (reason) {
                resultObj.msg.error = reason.message;
                resultObj.retcode = -500;
                res.send(resultObj);
            });
            break;
        case '09':
            var search=[];
            for(var i =0 ; i<21;i++){
                search.push('QSB'+(329+i));
            }
            search.push('DT');
            qsbModel.findAll({
                attributes:search,
                where: {
                    DT: {
                        $between: [startTime + ' 00:00:00', endTime + ' 23:59:59']
                    }
                },
                order: [['DT', 'DESC']]
            }).then(function (value) {
                var valueResult = underscore.pluck(value, 'dataValues');
                var promises = underscore.map(valueResult, function (item) {
                    var count = 0;
                    var result = [];
                    var keyResult = Object.keys(item);
                    for (var i = 0; i < keyResult.length; i++) {
                        if (item[keyResult[i]] === 1) {
                            result.push(keyResult[i]);
                            count=1;
                        }
                    }
                    if (count === 1) {
                        return breaker_key.findAll({
                            attributes: ['box', 'loop', 'event'],
                            where: {
                                key: result
                            }
                        }).then(function (value1) {
                            var finalResult = underscore.pluck(value1, 'dataValues');
                            var resultList=[];
                            underscore.map(finalResult,function (packet) {
                                var result={
                                    boxName:packet.box,
                                    loopName:packet.loop,
                                    event:packet.event,
                                    DT:item.DT
                                };
                                resultList.push(result)
                            });
                            return resultList;
                        }).catch(function (reason) {
                            console.log(reason);
                        });
                    }
                });      //map
                promise.all(promises).then(function (finalValue) {
                    var result=underscore.filter(finalValue,function (item) {
                        return item!==undefined
                    });
                    var list=underscore.flatten(result,true);
                    resultObj.obj = list;
                    resultObj.retcode = 200;
                    resultObj.msg.prompt = "查询成功";
                    res.send(resultObj);
                })
            }).catch(function (reason) {
                resultObj.msg.error = reason.message;
                resultObj.retcode = -500;
                res.send(resultObj);
            });
            break;
        case '10':
            var search=[];
            for(var i =0 ; i<49;i++){
                search.push('SQB'+(299+i));
            }
            search.push('DT');
            sqbModel.findAll({
                attributes:search,
                where: {
                    DT: {
                        $between: [startTime + ' 00:00:00', endTime + ' 23:59:59']
                    }
                },
                order: [['DT', 'DESC']]
            }).then(function (value) {
                var valueResult = underscore.pluck(value, 'dataValues');
                var promises = underscore.map(valueResult, function (item) {
                    var count = 0;
                    var result = [];
                    var keyResult = Object.keys(item);
                    for (var i = 0; i < keyResult.length; i++) {
                        if (item[keyResult[i]] === 1) {
                            result.push(keyResult[i]);
                            count=1;
                        }
                    }
                    if (count === 1) {
                        return breaker_key.findAll({
                            attributes: ['box', 'loop', 'event'],
                            where: {
                                key: result
                            }
                        }).then(function (value1) {
                            var finalResult = underscore.pluck(value1, 'dataValues');
                            var resultList=[];
                            underscore.map(finalResult,function (packet) {
                                var result={
                                    boxName:packet.box,
                                    loopName:packet.loop,
                                    event:packet.event,
                                    DT:item.DT
                                };
                                resultList.push(result)
                            });
                            return resultList;
                        }).catch(function (reason) {
                            console.log(reason);
                        });
                    }
                });      //map
                promise.all(promises).then(function (finalValue) {
                    var result=underscore.filter(finalValue,function (item) {
                        return item!==undefined
                    });
                    var list=underscore.flatten(result,true);
                    resultObj.obj = list;
                    resultObj.retcode = 200;
                    resultObj.msg.prompt = "查询成功";
                    res.send(resultObj);
                })
            }).catch(function (reason) {
                resultObj.msg.error = reason.message;
                resultObj.retcode = -500;
                res.send(resultObj);
            });
            break;
        case '11':
            var search=[];
            for(var i =0 ; i<56;i++){
                search.push('XYLB'+(309+i));
            }
            search.push('DT');
            xylbModel.findAll({
                attributes: search,
                where: {
                    DT: {
                        $between: [startTime + ' 00:00:00', endTime + ' 23:59:59']
                    }
                },
                order: [['DT', 'DESC']]
            }).then(function (value) {
                var valueResult = underscore.pluck(value, 'dataValues');
                var promises = underscore.map(valueResult, function (item) {
                    var count = 0;
                    var result = [];
                    var keyResult = Object.keys(item);
                    for (var i = 0; i < keyResult.length; i++) {
                        if (item[keyResult[i]] === 1) {
                            result.push(keyResult[i]);
                            count=1;
                        }
                    }
                    if (count === 1) {
                        return breaker_key.findAll({
                            attributes: ['box', 'loop', 'event'],
                            where: {
                                key: result
                            }
                        }).then(function (value1) {
                            var finalResult = underscore.pluck(value1, 'dataValues');
                            var resultList=[];
                            underscore.map(finalResult,function (packet) {
                                var result={
                                    boxName:packet.box,
                                    loopName:packet.loop,
                                    event:packet.event,
                                    DT:item.DT
                                };
                                resultList.push(result)
                            });
                            return resultList;
                        }).catch(function (reason) {
                            console.log(reason);
                        });
                    }
                });      //map
                promise.all(promises).then(function (finalValue) {
                    var result=underscore.filter(finalValue,function (item) {
                        return item!==undefined
                    });
                    var list=underscore.flatten(result,true);
                    resultObj.obj = list;
                    resultObj.retcode = 200;
                    resultObj.msg.prompt = "查询成功";
                    res.send(resultObj);
                })
            }).catch(function (reason) {
                resultObj.msg.error = reason.message;
                resultObj.retcode = -500;
                res.send(resultObj);
            });
            break;
    }
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
 * Created by snoopy on 2018/7/2
 */

//model引用
var tsModel = require('../models/index').TS;
var trModel = require('../models/index').TR;
var tdModel = require('../models/index').TD;
var tjModel = require('../models/index').TJ;
var xsModel = require('../models/index').XS;
var yqModel = require('../models/index').YQ;
var rqModel = require('../models/index').RQ;
//二期宿舍没有数据库表，无法查询,学院路数据指向不明确，暂时没有添加
var zsModel = require('../models/index').ZS;
var xyModel = require('../models/index').XY;
var sqbModel = require('../models/index').SQB;
var qsbModel = require('../models/index').QSB;
var xylbModel = require('../models/index').XYLB;
var alarmModel = require('../models/index').alarm_key;
var breaker_key = require('../models/index').breaker_key;
var moment = require('moment');
var promise = require('bluebird');
var underscore = require('underscore');
var AlarmInfo = module.exports = {};
var helper = require('../helpers/helpers');
AlarmInfo.search = function (params, res) {
    var resultObj = JSON.parse(JSON.stringify(helper.API_RESULT_MODEL));
    var findWhere = "";
    var findType = "";
    var home = params.home;
    var type = params.type;
    var startTime = params.startTime;
    var endTime = params.endTime;
    //判断配电所
    switch (home) {
        //图书馆
        case '00':
            findWhere = 'TS%';
            break;
        case '01':
            findWhere = 'TR%';
            break;
        case '02':
            findWhere = 'TD%';
            break;
        case '03':
            findWhere = 'TJ%';
            break;
        case '04':
            findWhere = 'XS%';
            break;
        case '05':
            findWhere = 'YQ%';
            break;
        case '06':
            findWhere = 'RQ%';
            break;
        case '07':
            findWhere = 'ZS%';
            break;
        case '08':
            findWhere = 'XY%';
            break;
        case '09':
            findWhere = 'QSB%';
            break;
        case '10':
            findWhere = 'SQB%';
            break;
        case '11':
            findWhere = 'XYLB%';
            break;
        default:
            resultObj.msg.prompt = "无此配电所";
            res.send(resultObj);
    }
    //判断查询数据类型
    switch (type) {
        case 0:
            findType = "%00";
            break;
        case 1:
            findType = "%01";
            break;
        case 2:
            findType = "%02";
            break;
        case 3:
            findType = "%03";
            break;
        case 4:
            findType = "%04";
            break;
        case 5:
            findType = "%05";
            break;
        case 6:
            findType = "%66";
            break;
        case 7:
            findType = "%67";
            break;
        default:
            resultObj.msg.prompt = "无此数据类型";
            res.send(resultObj);
    }

    //key查询
    var Search =
        {
            attributes: ['value'],
            where: {
                key: {
                    $like: findType
                },
                value: {
                    $like: findWhere,
                    $and: {
                        $notLike: 'XYLB%',
                        $like: findWhere
                    }

                }
            }
        };
    if (home !== "08") {
        delete Search.where.value.$and.$notLike;
    }
    alarmModel.findAll(
        Search
    ).then(function (value) {
        var keyResult = [];
        finalChar = [];
        var result = underscore.pluck(value, 'dataValues');          //萃取dataValue值
        underscore.map(result, function (item) {
            keyResult.push(item.value);
        });
        keyResult.push('DT');
        switch (home) {
            case '00':
                tsModel.findAll({
                    attributes: keyResult,
                    where: {
                        DT: {
                            $between: [startTime + ' 00:00:00', endTime + ' 23:59:59']
                        }
                    },
                    order: [['DT', 'ASC']]
                }).then(function (value) {
                    var valueResult = underscore.pluck(value, 'dataValues');
                    var i = 0;
                    var valueChar = [];
                    var dtChar = [];
                    underscore.map(valueResult, function (item) {
                        for (var list in item) {          //找出所有为0的键值对，进行删除，使用map好像也行，待测试
                            if (item[list] === 0) {
                                delete item[list];
                            }
                        }
                    });
                    finalResult = valueResult.filter(function (item) {        //filter不会改变原数组
                        return underscore.size(item) > 1;
                    });
                    underscore.map(finalResult, function (item) {               //将DT取出放在dtChar中
                        dtChar.push(item.DT);
                        delete item.DT;
                    });
                    underscore.map(finalResult, function (item) {
                        finalChar.push(underscore.keys(item));      //concat方法不改原数组
                    });
                    var promises = underscore.map(finalChar, function (item) {
                        return alarmModel.findAll({
                            attributes: ['key'],
                            where: {
                                value: {
                                    $in: item
                                }
                            }
                        }).then(function (value) {
                            var mapValue = underscore.pluck(value, 'dataValues');
                            underscore.map(mapValue, function (item) {
                                item = helper.search(item);
                                delete item.key;
                                item.DT = dtChar[i];                                //添加时间
                                valueChar.push(item);
                            });
                            i++;
                        }).catch(function (reason) {
                            resultObj.msg.prompt = "查询key表失败";
                            resultObj.msg.error = reason.message;
                            resultObj.retcode = -500;
                            res.send(resultObj);
                        });
                    });
                    promise.all(promises).then(function () {
                        resultObj.obj = valueChar;
                        resultObj.retcode = 200;
                        resultObj.msg.prompt = "查询成功";
                        res.send(resultObj);
                    });
                }).catch(function (reason) {
                    resultObj.msg.prompt = "查询key表失败";
                    resultObj.msg.error = reason.message;
                    resultObj.retcode = -500;
                    res.send(resultObj);
                });
                break;
            case '01':
                trModel.findAll({
                    attributes: keyResult,
                    where: {
                        DT: {
                            $between: [startTime + ' 00:00:00', endTime + ' 23:59:59']
                        }
                    },
                    order: [['DT', 'ASC']]
                }).then(function (value) {
                    var valueResult = underscore.pluck(value, 'dataValues');
                    var i = 0;
                    var valueChar = [];
                    var dtChar = [];
                    underscore.map(valueResult, function (item) {
                        for (var list in item) {          //找出所有为0的键值对，进行删除，使用map好像也行，待测试
                            if (item[list] === 0) {
                                delete item[list];
                            }
                        }
                    });
                    finalResult = valueResult.filter(function (item) {        //filter不会改变原数组
                        return underscore.size(item) > 1;
                    });
                    underscore.map(finalResult, function (item) {               //将DT取出放在dtChar中
                        dtChar.push(item.DT);
                        delete item.DT;
                    });
                    underscore.map(finalResult, function (item) {
                        finalChar.push(underscore.keys(item));      //concat方法不改原数组
                    });
                    var promises = underscore.map(finalChar, function (item) {
                        return alarmModel.findAll({
                            attributes: ['key'],
                            where: {
                                value: {
                                    $in: item
                                }
                            }
                        }).then(function (value) {
                            var mapValue = underscore.pluck(value, 'dataValues');
                            underscore.map(mapValue, function (item) {
                                item = helper.search(item);
                                delete item.key;
                                item.DT = dtChar[i];                                //添加时间
                                valueChar.push(item);
                            });
                            i++;
                        }).catch(function (reason) {
                            resultObj.msg.prompt = "查询key表失败";
                            resultObj.msg.error = reason.message;
                            resultObj.retcode = -500;
                            res.send(resultObj);
                        });
                    });
                    promise.all(promises).then(function () {
                        resultObj.obj = valueChar;
                        resultObj.retcode = 200;
                        resultObj.msg.prompt = "查询成功";
                        res.send(resultObj);
                    });
                }).catch(function (reason) {
                    resultObj.msg.prompt = "查询key表失败";
                    resultObj.msg.error = reason.message;
                    resultObj.retcode = -500;
                    res.send(resultObj);
                });
                break;
            case '02':
                tdModel.findAll({
                    attributes: keyResult,
                    where: {
                        DT: {
                            $between: [startTime + ' 00:00:00', endTime + ' 23:59:59']
                        }
                    },
                    order: [['DT', 'ASC']]
                }).then(function (value) {
                    var valueResult = underscore.pluck(value, 'dataValues');
                    var i = 0;
                    var valueChar = [];
                    var dtChar = [];
                    underscore.map(valueResult, function (item) {
                        for (var list in item) {          //找出所有为0的键值对，进行删除，使用map好像也行，待测试
                            if (item[list] === 0) {
                                delete item[list];
                            }
                        }
                    });
                    finalResult = valueResult.filter(function (item) {        //filter不会改变原数组
                        return underscore.size(item) > 1;
                    });
                    underscore.map(finalResult, function (item) {               //将DT取出放在dtChar中
                        dtChar.push(item.DT);
                        delete item.DT;
                    });
                    underscore.map(finalResult, function (item) {
                        finalChar.push(underscore.keys(item));      //concat方法不改原数组
                    });
                    var promises = underscore.map(finalChar, function (item) {
                        return alarmModel.findAll({
                            attributes: ['key'],
                            where: {
                                value: {
                                    $in: item
                                }
                            }
                        }).then(function (value) {
                            var mapValue = underscore.pluck(value, 'dataValues');
                            underscore.map(mapValue, function (item) {
                                item = helper.search(item);
                                delete item.key;
                                item.DT = dtChar[i];                                //添加时间
                                valueChar.push(item);
                            });
                            i++;
                        }).catch(function (reason) {
                            resultObj.msg.prompt = "查询key表失败";
                            resultObj.msg.error = reason.message;
                            resultObj.retcode = -500;
                            res.send(resultObj);
                        });
                    });
                    promise.all(promises).then(function () {
                        resultObj.obj = valueChar;
                        resultObj.retcode = 200;
                        resultObj.msg.prompt = "查询成功";
                        res.send(resultObj);
                    });
                }).catch(function (reason) {
                    resultObj.msg.prompt = "查询key表失败";
                    resultObj.msg.error = reason.message;
                    resultObj.retcode = -500;
                    res.send(resultObj);
                });
                break;
            case '03':
                tjModel.findAll({
                    attributes: keyResult,
                    where: {
                        DT: {
                            $between: [startTime + ' 00:00:00', endTime + ' 23:59:59']
                        }
                    },
                    order: [['DT', 'ASC']]
                }).then(function (value) {
                    var valueResult = underscore.pluck(value, 'dataValues');
                    var i = 0;
                    var valueChar = [];
                    var dtChar = [];
                    underscore.map(valueResult, function (item) {
                        for (var list in item) {          //找出所有为0的键值对，进行删除，使用map好像也行，待测试
                            if (item[list] === 0) {
                                delete item[list];
                            }
                        }
                    });
                    finalResult = valueResult.filter(function (item) {        //filter不会改变原数组
                        return underscore.size(item) > 1;
                    });
                    underscore.map(finalResult, function (item) {               //将DT取出放在dtChar中
                        dtChar.push(item.DT);
                        delete item.DT;
                    });
                    underscore.map(finalResult, function (item) {
                        finalChar.push(underscore.keys(item));      //concat方法不改原数组
                    });
                    var promises = underscore.map(finalChar, function (item) {
                        return alarmModel.findAll({
                            attributes: ['key'],
                            where: {
                                value: {
                                    $in: item
                                }
                            }
                        }).then(function (value) {
                            var mapValue = underscore.pluck(value, 'dataValues');
                            underscore.map(mapValue, function (item) {
                                item = helper.search(item);
                                delete item.key;
                                item.DT = dtChar[i];                                //添加时间
                                valueChar.push(item);
                            });
                            i++;
                        }).catch(function (reason) {
                            resultObj.msg.prompt = "查询key表失败";
                            resultObj.msg.error = reason.message;
                            resultObj.retcode = -500;
                            res.send(resultObj);
                        });
                    });
                    promise.all(promises).then(function () {
                        resultObj.obj = valueChar;
                        resultObj.retcode = 200;
                        resultObj.msg.prompt = "查询成功";
                        res.send(resultObj);
                    });
                }).catch(function (reason) {
                    resultObj.msg.prompt = "查询key表失败";
                    resultObj.msg.error = reason.message;
                    resultObj.retcode = -500;
                    res.send(resultObj);
                });
                break;
            case '04':
                xsModel.findAll({
                    attributes: keyResult,
                    where: {
                        DT: {
                            $between: [startTime + ' 00:00:00', endTime + ' 23:59:59']
                        }
                    },
                    order: [['DT', 'ASC']]
                }).then(function (value) {
                    var valueResult = underscore.pluck(value, 'dataValues');
                    var i = 0;
                    var valueChar = [];
                    var dtChar = [];
                    underscore.map(valueResult, function (item) {
                        for (var list in item) {          //找出所有为0的键值对，进行删除，使用map好像也行，待测试
                            if (item[list] === 0) {
                                delete item[list];
                            }
                        }
                    });
                    finalResult = valueResult.filter(function (item) {        //filter不会改变原数组
                        return underscore.size(item) > 1;
                    });
                    underscore.map(finalResult, function (item) {               //将DT取出放在dtChar中
                        dtChar.push(item.DT);
                        delete item.DT;
                    });
                    underscore.map(finalResult, function (item) {
                        finalChar.push(underscore.keys(item));      //concat方法不改原数组
                    });
                    var promises = underscore.map(finalChar, function (item) {
                        return alarmModel.findAll({
                            attributes: ['key'],
                            where: {
                                value: {
                                    $in: item
                                }
                            }
                        }).then(function (value) {
                            var mapValue = underscore.pluck(value, 'dataValues');
                            underscore.map(mapValue, function (item) {
                                item = helper.search(item);
                                delete item.key;
                                item.DT = dtChar[i];                                //添加时间
                                valueChar.push(item);
                            });
                            i++;
                        }).catch(function (reason) {
                            resultObj.msg.prompt = "查询key表失败";
                            resultObj.msg.error = reason.message;
                            resultObj.retcode = -500;
                            res.send(resultObj);
                        });
                    });
                    promise.all(promises).then(function () {
                        resultObj.obj = valueChar;
                        resultObj.retcode = 200;
                        resultObj.msg.prompt = "查询成功";
                        res.send(resultObj);
                    });
                }).catch(function (reason) {
                    resultObj.msg.prompt = "查询key表失败";
                    resultObj.msg.error = reason.message;
                    resultObj.retcode = -500;
                    res.send(resultObj);
                });
                break;
            case '05':
                yqModel.findAll({
                    attributes: keyResult,
                    where: {
                        DT: {
                            $between: [startTime + ' 00:00:00', endTime + ' 23:59:59']
                        }
                    },
                    order: [['DT', 'ASC']]
                }).then(function (value) {
                    var valueResult = underscore.pluck(value, 'dataValues');
                    var i = 0;
                    var valueChar = [];
                    var dtChar = [];
                    underscore.map(valueResult, function (item) {
                        for (var list in item) {          //找出所有为0的键值对，进行删除，使用map好像也行，待测试
                            if (item[list] === 0) {
                                delete item[list];
                            }
                        }
                    });
                    finalResult = valueResult.filter(function (item) {        //filter不会改变原数组
                        return underscore.size(item) > 1;
                    });
                    underscore.map(finalResult, function (item) {               //将DT取出放在dtChar中
                        dtChar.push(item.DT);
                        delete item.DT;
                    });
                    underscore.map(finalResult, function (item) {
                        finalChar.push(underscore.keys(item));      //concat方法不改原数组
                    });
                    var promises = underscore.map(finalChar, function (item) {
                        return alarmModel.findAll({
                            attributes: ['key'],
                            where: {
                                value: {
                                    $in: item
                                }
                            }
                        }).then(function (value) {
                            var mapValue = underscore.pluck(value, 'dataValues');
                            underscore.map(mapValue, function (item) {
                                item = helper.search(item);
                                delete item.key;
                                item.DT = dtChar[i];                                //添加时间
                                valueChar.push(item);
                            });
                            i++;
                        }).catch(function (reason) {
                            resultObj.msg.prompt = "查询key表失败";
                            resultObj.msg.error = reason.message;
                            resultObj.retcode = -500;
                            res.send(resultObj);
                        });
                    });
                    promise.all(promises).then(function () {
                        resultObj.obj = valueChar;
                        resultObj.retcode = 200;
                        resultObj.msg.prompt = "查询成功";
                        res.send(resultObj);
                    });
                }).catch(function (reason) {
                    resultObj.msg.prompt = "查询key表失败";
                    resultObj.msg.error = reason.message;
                    resultObj.retcode = -500;
                    res.send(resultObj);
                });
                break;
            case '06':
                rqModel.findAll({
                    attributes: keyResult,
                    where: {
                        DT: {
                            $between: [startTime + ' 00:00:00', endTime + ' 23:59:59']
                        }
                    },
                    order: [['DT', 'ASC']]
                }).then(function (value) {
                    var valueResult = underscore.pluck(value, 'dataValues');
                    var i = 0;
                    var valueChar = [];
                    var dtChar = [];
                    underscore.map(valueResult, function (item) {
                        for (var list in item) {          //找出所有为0的键值对，进行删除，使用map好像也行，待测试
                            if (item[list] === 0) {
                                delete item[list];
                            }
                        }
                    });
                    finalResult = valueResult.filter(function (item) {        //filter不会改变原数组
                        return underscore.size(item) > 1;
                    });
                    underscore.map(finalResult, function (item) {               //将DT取出放在dtChar中
                        dtChar.push(item.DT);
                        delete item.DT;
                    });
                    underscore.map(finalResult, function (item) {
                        finalChar.push(underscore.keys(item));      //concat方法不改原数组
                    });
                    var promises = underscore.map(finalChar, function (item) {
                        return alarmModel.findAll({
                            attributes: ['key'],
                            where: {
                                value: {
                                    $in: item
                                }
                            }
                        }).then(function (value) {
                            var mapValue = underscore.pluck(value, 'dataValues');
                            underscore.map(mapValue, function (item) {
                                item = helper.search(item);
                                delete item.key;
                                item.DT = dtChar[i];                                //添加时间
                                valueChar.push(item);
                            });
                            i++;
                        }).catch(function (reason) {
                            resultObj.msg.prompt = "查询key表失败";
                            resultObj.msg.error = reason.message;
                            resultObj.retcode = -500;
                            res.send(resultObj);
                        });
                    });
                    promise.all(promises).then(function () {
                        resultObj.obj = valueChar;
                        resultObj.retcode = 200;
                        resultObj.msg.prompt = "查询成功";
                        res.send(resultObj);
                    });
                }).catch(function (reason) {
                    resultObj.msg.prompt = "查询key表失败";
                    resultObj.msg.error = reason.message;
                    resultObj.retcode = -500;
                    res.send(resultObj);
                });
                break;
            case '07':
                zsModel.findAll({
                    attributes: keyResult,
                    where: {
                        DT: {
                            $between: [startTime + ' 00:00:00', endTime + ' 23:59:59']
                        }
                    },
                    order: [['DT', 'ASC']]
                }).then(function (value) {
                    var valueResult = underscore.pluck(value, 'dataValues');
                    var i = 0;
                    var valueChar = [];
                    var dtChar = [];
                    underscore.map(valueResult, function (item) {
                        for (var list in item) {          //找出所有为0的键值对，进行删除，使用map好像也行，待测试
                            if (item[list] === 0) {
                                delete item[list];
                            }
                        }
                    });
                    finalResult = valueResult.filter(function (item) {        //filter不会改变原数组
                        return underscore.size(item) > 1;
                    });
                    underscore.map(finalResult, function (item) {               //将DT取出放在dtChar中
                        dtChar.push(item.DT);
                        delete item.DT;
                    });
                    underscore.map(finalResult, function (item) {
                        finalChar.push(underscore.keys(item));      //concat方法不改原数组
                    });
                    var promises = underscore.map(finalChar, function (item) {
                        return alarmModel.findAll({
                            attributes: ['key'],
                            where: {
                                value: {
                                    $in: item
                                }
                            }
                        }).then(function (value) {
                            var mapValue = underscore.pluck(value, 'dataValues');
                            underscore.map(mapValue, function (item) {
                                item = helper.search(item);
                                delete item.key;
                                item.DT = dtChar[i];                                //添加时间
                                valueChar.push(item);
                            });
                            i++;
                        }).catch(function (reason) {
                            resultObj.msg.prompt = "查询key表失败";
                            resultObj.msg.error = reason.message;
                            resultObj.retcode = -500;
                            res.send(resultObj);
                        });
                    });
                    promise.all(promises).then(function () {
                        resultObj.obj = valueChar;
                        resultObj.retcode = 200;
                        resultObj.msg.prompt = "查询成功";
                        res.send(resultObj);
                    });
                }).catch(function (reason) {
                    resultObj.msg.prompt = "查询key表失败";
                    resultObj.msg.error = reason.message;
                    resultObj.retcode = -500;
                    res.send(resultObj);
                });
                break;
            case '08':
                xyModel.findAll({
                    attributes: keyResult,
                    where: {
                        DT: {
                            $between: [startTime + ' 00:00:00', endTime + ' 23:59:59']
                        }
                    },
                    order: [['DT', 'ASC']]
                }).then(function (value) {
                    var valueResult = underscore.pluck(value, 'dataValues');
                    var i = 0;
                    var valueChar = [];
                    var dtChar = [];
                    underscore.map(valueResult, function (item) {
                        for (var list in item) {          //找出所有为0的键值对，进行删除，使用map好像也行，待测试
                            if (item[list] === 0) {
                                delete item[list];
                            }
                        }
                    });
                    finalResult = valueResult.filter(function (item) {        //filter不会改变原数组
                        return underscore.size(item) > 1;
                    });
                    underscore.map(finalResult, function (item) {               //将DT取出放在dtChar中
                        dtChar.push(item.DT);
                        delete item.DT;
                    });
                    underscore.map(finalResult, function (item) {
                        finalChar.push(underscore.keys(item));      //concat方法不改原数组
                    });
                    var promises = underscore.map(finalChar, function (item) {
                        return alarmModel.findAll({
                            attributes: ['key'],
                            where: {
                                value: {
                                    $in: item
                                }
                            }
                        }).then(function (value) {
                            var mapValue = underscore.pluck(value, 'dataValues');
                            underscore.map(mapValue, function (item) {
                                item = helper.search(item);
                                delete item.key;
                                item.DT = dtChar[i];                                //添加时间
                                valueChar.push(item);
                            });
                            i++;
                        }).catch(function (reason) {
                            resultObj.msg.prompt = "查询key表失败";
                            resultObj.msg.error = reason.message;
                            resultObj.retcode = -500;
                            res.send(resultObj);
                        });
                    });
                    promise.all(promises).then(function () {
                        resultObj.obj = valueChar;
                        resultObj.retcode = 200;
                        resultObj.msg.prompt = "查询成功";
                        res.send(resultObj);
                    });
                }).catch(function (reason) {
                    resultObj.msg.prompt = "查询key表失败";
                    resultObj.msg.error = reason.message;
                    resultObj.retcode = -500;
                    res.send(resultObj);
                });
                break;
            case '09':
                qsbModel.findAll({
                    attributes: keyResult,
                    where: {
                        DT: {
                            $between: [startTime + ' 00:00:00', endTime + ' 23:59:59']
                        }
                    },
                    order: [['DT', 'ASC']]
                }).then(function (value) {
                    var valueResult = underscore.pluck(value, 'dataValues');
                    var i = 0;
                    var valueChar = [];
                    var dtChar = [];
                    underscore.map(valueResult, function (item) {
                        for (var list in item) {          //找出所有为0的键值对，进行删除，使用map好像也行，待测试
                            if (item[list] === 0) {
                                delete item[list];
                            }
                        }
                    });
                    finalResult = valueResult.filter(function (item) {        //filter不会改变原数组
                        return underscore.size(item) > 1;
                    });
                    underscore.map(finalResult, function (item) {               //将DT取出放在dtChar中
                        dtChar.push(item.DT);
                        delete item.DT;
                    });
                    underscore.map(finalResult, function (item) {
                        finalChar.push(underscore.keys(item));      //concat方法不改原数组
                    });
                    var promises = underscore.map(finalChar, function (item) {
                        return alarmModel.findAll({
                            attributes: ['key'],
                            where: {
                                value: {
                                    $in: item
                                }
                            }
                        }).then(function (value) {
                            var mapValue = underscore.pluck(value, 'dataValues');
                            underscore.map(mapValue, function (item) {
                                item = helper.search(item);
                                delete item.key;
                                item.DT = dtChar[i];                                //添加时间
                                valueChar.push(item);
                            });
                            i++;
                        }).catch(function (reason) {
                            resultObj.msg.prompt = "查询key表失败";
                            resultObj.msg.error = reason.message;
                            resultObj.retcode = -500;
                            res.send(resultObj);
                        });
                    });
                    promise.all(promises).then(function () {
                        resultObj.obj = valueChar;
                        resultObj.retcode = 200;
                        resultObj.msg.prompt = "查询成功";
                        res.send(resultObj);
                    });
                }).catch(function (reason) {
                    resultObj.msg.prompt = "查询key表失败";
                    resultObj.msg.error = reason.message;
                    resultObj.retcode = -500;
                    res.send(resultObj);
                });
                break;
            case '10':
                sqbModel.findAll({
                    attributes: keyResult,
                    where: {
                        DT: {
                            $between: [startTime + ' 00:00:00', endTime + ' 23:59:59']
                        }
                    },
                    order: [['DT', 'ASC']]
                }).then(function (value) {
                    var valueResult = underscore.pluck(value, 'dataValues');
                    var i = 0;
                    var valueChar = [];
                    var dtChar = [];
                    underscore.map(valueResult, function (item) {
                        for (var list in item) {          //找出所有为0的键值对，进行删除，使用map好像也行，待测试
                            if (item[list] === 0) {
                                delete item[list];
                            }
                        }
                    });
                    finalResult = valueResult.filter(function (item) {        //filter不会改变原数组
                        return underscore.size(item) > 1;
                    });
                    underscore.map(finalResult, function (item) {               //将DT取出放在dtChar中
                        dtChar.push(item.DT);
                        delete item.DT;
                    });
                    underscore.map(finalResult, function (item) {
                        finalChar.push(underscore.keys(item));      //concat方法不改原数组
                    });
                    var promises = underscore.map(finalChar, function (item) {
                        return alarmModel.findAll({
                            attributes: ['key'],
                            where: {
                                value: {
                                    $in: item
                                }
                            }
                        }).then(function (value) {
                            var mapValue = underscore.pluck(value, 'dataValues');
                            underscore.map(mapValue, function (item) {
                                item = helper.search(item);
                                delete item.key;
                                item.DT = dtChar[i];                                //添加时间
                                valueChar.push(item);
                            });
                            i++;
                        }).catch(function (reason) {
                            resultObj.msg.prompt = "查询key表失败";
                            resultObj.msg.error = reason.message;
                            resultObj.retcode = -500;
                            res.send(resultObj);
                        });
                    });
                    promise.all(promises).then(function () {
                        resultObj.obj = valueChar;
                        resultObj.retcode = 200;
                        resultObj.msg.prompt = "查询成功";
                        res.send(resultObj);
                    });
                }).catch(function (reason) {
                    resultObj.msg.prompt = "查询key表失败";
                    resultObj.msg.error = reason.message;
                    resultObj.retcode = -500;
                    res.send(resultObj);
                });
                break;
            case '11':
                xylbModel.findAll({
                    attributes: keyResult,
                    where: {
                        DT: {
                            $between: [startTime + ' 00:00:00', endTime + ' 23:59:59']
                        }
                    },
                    order: [['DT', 'ASC']]
                }).then(function (value) {
                    var valueResult = underscore.pluck(value, 'dataValues');
                    var i = 0;
                    var valueChar = [];
                    var dtChar = [];
                    underscore.map(valueResult, function (item) {
                        for (var list in item) {          //找出所有为0的键值对，进行删除，使用map好像也行，待测试
                            if (item[list] === 0) {
                                delete item[list];
                            }
                        }
                    });
                    finalResult = valueResult.filter(function (item) {        //filter不会改变原数组
                        return underscore.size(item) > 1;
                    });
                    underscore.map(finalResult, function (item) {               //将DT取出放在dtChar中
                        dtChar.push(item.DT);
                        delete item.DT;
                    });
                    underscore.map(finalResult, function (item) {
                        finalChar.push(underscore.keys(item));      //concat方法不改原数组
                    });
                    var promises = underscore.map(finalChar, function (item) {
                        return alarmModel.findAll({
                            attributes: ['key'],
                            where: {
                                value: {
                                    $in: item
                                }
                            }
                        }).then(function (value) {
                            var mapValue = underscore.pluck(value, 'dataValues');
                            underscore.map(mapValue, function (item) {
                                item = helper.search(item);
                                delete item.key;
                                item.DT = dtChar[i];                                //添加时间
                                valueChar.push(item);
                            });
                            i++;
                        }).catch(function (reason) {
                            resultObj.msg.prompt = "查询key表失败";
                            resultObj.msg.error = reason.message;
                            resultObj.retcode = -500;
                            res.send(resultObj);
                        });
                    });
                    promise.all(promises).then(function () {
                        resultObj.obj = valueChar;
                        resultObj.retcode = 200;
                        resultObj.msg.prompt = "查询成功";
                        res.send(resultObj);
                    });
                }).catch(function (reason) {
                    resultObj.msg.prompt = "查询key表失败";
                    resultObj.msg.error = reason.message;
                    resultObj.retcode = -500;
                    res.send(resultObj);
                });
                break;
        }
    }).catch(function (reason) {
        resultObj.msg.prompt = "查询key表失败";
        resultObj.msg.error = reason.message;
        resultObj.retcode = -500;
        res.send(resultObj);
    }).catch(function (reason) {
        resultObj.msg.prompt = "查询key表失败";
        resultObj.msg.error = reason.message;
        resultObj.retcode = -500;
        res.send(resultObj);
    })
};

AlarmInfo.break = function (params, res) {
    var resultObj = JSON.parse(JSON.stringify(helper.API_RESULT_MODEL));
    var startTime = params.startTime;
    var endTime = params.endTime;
    var home = params.home;
    switch (home) {
        case '00':
            tsModel.findAll({
                attributes: ['TS884', 'TS885', 'TS886', 'TS887', 'TS888', 'TS889', 'TS890', 'TS891', 'TS892', 'TS893', 'TS894',
                    'TS895', 'TS896', 'TS897', 'TS898', 'TS899', 'TS900', 'TS901', 'TS902', 'TS903', 'TS904', 'DT'],
                order: [['DT', 'DESC']],
                where: {
                    DT: {
                        $between: [startTime + ' 00:00:00', endTime + ' 23:59:59']
                    }
                }
            }).then(function (value) {
                var valueResult = underscore.pluck(value, 'dataValues');
                var promises = underscore.map(valueResult, function (item) {
                    var count = 0;
                    var result = [];
                    var keyResult = Object.keys(item);
                    for (var i = 0; i < keyResult.length; i++) {
                        if (item[keyResult[i]] === 1) {
                            result.push(keyResult[i]);
                            count=1;
                        }
                    }
                    if (count === 1) {
                        return breaker_key.findAll({
                            attributes: ['box', 'loop', 'event'],
                            where: {
                                key: result
                            }
                        }).then(function (value1) {
                            var finalResult = underscore.pluck(value1, 'dataValues');
                            var resultList=[];
                            underscore.map(finalResult,function (packet) {
                                var result={
                                    boxName:packet.box,
                                    loopName:packet.loop,
                                    event:packet.event,
                                    DT:item.DT
                                };
                                resultList.push(result)
                            });
                            return resultList;
                        }).catch(function (reason) {
                            console.log(reason);
                        });
                    }
                });      //map
                promise.all(promises).then(function (finalValue) {
                    var result=underscore.filter(finalValue,function (item) {
                        return item!==undefined
                    });
                    var list=underscore.flatten(result,true);
                    resultObj.obj = list;
                    resultObj.retcode = 200;
                    resultObj.msg.prompt = "查询成功";
                    res.send(resultObj);
                })
            }).catch(function (reason) {
                resultObj.msg.error = reason.message;
                resultObj.retcode = -500;
                res.send(resultObj);
            });
            break;
        case '01':
            var search=[];
            for(var i =0 ; i<56;i++){
                search.push('TR'+(758+i));
            }
            search.push('DT');
            trModel.findAll({
                attributes: search,
                where: {
                    DT: {
                        $between: [startTime + ' 00:00:00', endTime + ' 23:59:59']
                    }
                },
                order: [['DT', 'DESC']]
            }).then(function (value) {
                var valueResult = underscore.pluck(value, 'dataValues');
                var promises = underscore.map(valueResult, function (item) {
                    var count = 0;
                    var result = [];
                    var keyResult = Object.keys(item);
                    for (var i = 0; i < keyResult.length; i++) {
                        if (item[keyResult[i]] === 1) {
                            result.push(keyResult[i]);
                            count=1;
                        }
                    }
                    if (count === 1) {
                        return breaker_key.findAll({
                            attributes: ['box', 'loop', 'event'],
                            where: {
                                key: result
                            }
                        }).then(function (value1) {
                            var finalResult = underscore.pluck(value1, 'dataValues');
                            var resultList=[];
                            underscore.map(finalResult,function (packet) {
                                var result={
                                    boxName:packet.box,
                                    loopName:packet.loop,
                                    event:packet.event,
                                    DT:item.DT
                                };
                                resultList.push(result)
                            });
                            return resultList;
                        }).catch(function (reason) {
                            console.log(reason);
                        });
                    }
                });      //map
                promise.all(promises).then(function (finalValue) {
                    var result=underscore.filter(finalValue,function (item) {
                        return item!==undefined
                    });
                    var list=underscore.flatten(result,true);
                    resultObj.obj = list;
                    resultObj.retcode = 200;
                    resultObj.msg.prompt = "查询成功";
                    res.send(resultObj);
                })
            }).catch(function (reason) {
                resultObj.msg.error = reason.message;
                resultObj.retcode = -500;
                res.send(resultObj);
            });
            break;
        case '02':
            var search=[];
            for(var i =0 ; i<21;i++){
                search.push('TD'+(579+i));
            }
            search.push('DT');
            tdModel.findAll({
                attributes:search,
                where: {
                    DT: {
                        $between: [startTime + ' 00:00:00', endTime + ' 23:59:59']
                    }
                },
                order: [['DT', 'DESC']]
            }).then(function (value) {
                var valueResult = underscore.pluck(value, 'dataValues');
                var promises = underscore.map(valueResult, function (item) {
                    var count = 0;
                    var result = [];
                    var keyResult = Object.keys(item);
                    for (var i = 0; i < keyResult.length; i++) {
                        if (item[keyResult[i]] === 1) {
                            result.push(keyResult[i]);
                            count=1;
                        }
                    }
                    if (count === 1) {
                        return breaker_key.findAll({
                            attributes: ['box', 'loop', 'event'],
                            where: {
                                key: result
                            }
                        }).then(function (value1) {
                            var finalResult = underscore.pluck(value1, 'dataValues');
                            var resultList=[];
                            underscore.map(finalResult,function (packet) {
                                var result={
                                    boxName:packet.box,
                                    loopName:packet.loop,
                                    event:packet.event,
                                    DT:item.DT
                                };
                                resultList.push(result)
                            });
                            return resultList;
                        }).catch(function (reason) {
                            console.log(reason);
                        });
                    }
                });      //map
                promise.all(promises).then(function (finalValue) {
                    var result=underscore.filter(finalValue,function (item) {
                        return item!==undefined
                    });
                    var list=underscore.flatten(result,true);
                    resultObj.obj = list;
                    resultObj.retcode = 200;
                    resultObj.msg.prompt = "查询成功";
                    res.send(resultObj);
                })
            }).catch(function (reason) {
                resultObj.msg.error = reason.message;
                resultObj.retcode = -500;
                res.send(resultObj);
            });
            break;
        case '03':
            var search=[];
            for(var i =0 ; i<21;i++){
                search.push('TJ'+(656+i));
            }
            search.push('DT');
            tjModel.findAll({
                attributes:search,
                where: {
                    DT: {
                        $between: [startTime + ' 00:00:00', endTime + ' 23:59:59']
                    }
                },
                order: [['DT', 'DESC']]
            }).then(function (value) {
                var valueResult = underscore.pluck(value, 'dataValues');
                var promises = underscore.map(valueResult, function (item) {
                    var count = 0;
                    var result = [];
                    var keyResult = Object.keys(item);
                    for (var i = 0; i < keyResult.length; i++) {
                        if (item[keyResult[i]] === 1) {
                            result.push(keyResult[i]);
                            count=1;
                        }
                    }
                    if (count === 1) {
                        return breaker_key.findAll({
                            attributes: ['box', 'loop', 'event'],
                            where: {
                                key: result
                            }
                        }).then(function (value1) {
                            var finalResult = underscore.pluck(value1, 'dataValues');
                            var resultList=[];
                            underscore.map(finalResult,function (packet) {
                                var result={
                                    boxName:packet.box,
                                    loopName:packet.loop,
                                    event:packet.event,
                                    DT:item.DT
                                };
                                resultList.push(result)
                            });
                            return resultList;
                        }).catch(function (reason) {
                            console.log(reason);
                        });
                    }
                });      //map
                promise.all(promises).then(function (finalValue) {
                    var result=underscore.filter(finalValue,function (item) {
                        return item!==undefined
                    });
                    var list=underscore.flatten(result,true);
                    resultObj.obj = list;
                    resultObj.retcode = 200;
                    resultObj.msg.prompt = "查询成功";
                    res.send(resultObj);
                })
            }).catch(function (reason) {
                resultObj.msg.error = reason.message;
                resultObj.retcode = -500;
                res.send(resultObj);
            });
            break;
        case '04':
            var search=[];
            for(var i =0 ; i<7;i++){
                search.push('XS'+(838+i));
            }
            search.push('DT');
            xsModel.findAll({
                attributes:search,
                where: {
                    DT: {
                        $between: [startTime + ' 00:00:00', endTime + ' 23:59:59']
                    }
                },
                order: [['DT', 'DESC']]
            }).then(function (value) {
                var valueResult = underscore.pluck(value, 'dataValues');
                var promises = underscore.map(valueResult, function (item) {
                    var count = 0;
                    var result = [];
                    var keyResult = Object.keys(item);
                    for (var i = 0; i < keyResult.length; i++) {
                        if (item[keyResult[i]] === 1) {
                            result.push(keyResult[i]);
                            count=1;
                        }
                    }
                    if (count === 1) {
                        return breaker_key.findAll({
                            attributes: ['box', 'loop', 'event'],
                            where: {
                                key: result
                            }
                        }).then(function (value1) {
                            var finalResult = underscore.pluck(value1, 'dataValues');
                            var resultList=[];
                            underscore.map(finalResult,function (packet) {
                                var result={
                                    boxName:packet.box,
                                    loopName:packet.loop,
                                    event:packet.event,
                                    DT:item.DT
                                };
                                resultList.push(result)
                            });
                            return resultList;
                        }).catch(function (reason) {
                            console.log(reason);
                        });
                    }
                });      //map
                promise.all(promises).then(function (finalValue) {
                    var result=underscore.filter(finalValue,function (item) {
                        return item!==undefined
                    });
                    var list=underscore.flatten(result,true);
                    resultObj.obj = list;
                    resultObj.retcode = 200;
                    resultObj.msg.prompt = "查询成功";
                    res.send(resultObj);
                })
            }).catch(function (reason) {
                resultObj.msg.error = reason.message;
                resultObj.retcode = -500;
                res.send(resultObj);
            });
            break;
        case '05':
            var search=[];
            for(var i =0 ; i<28;i++){
                search.push('YQ'+(759+i));
            }
            search.push('DT');
            yqModel.findAll({
                attributes:search,
                where: {
                    DT: {
                        $between: [startTime + ' 00:00:00', endTime + ' 23:59:59']
                    }
                },
                order: [['DT', 'DESC']]
            }).then(function (value) {
                var valueResult = underscore.pluck(value, 'dataValues');
                var promises = underscore.map(valueResult, function (item) {
                    var count = 0;
                    var result = [];
                    var keyResult = Object.keys(item);
                    for (var i = 0; i < keyResult.length; i++) {
                        if (item[keyResult[i]] === 1) {
                            result.push(keyResult[i]);
                            count=1;
                        }
                    }
                    if (count === 1) {
                        return breaker_key.findAll({
                            attributes: ['box', 'loop', 'event'],
                            where: {
                                key: result
                            }
                        }).then(function (value1) {
                            var finalResult = underscore.pluck(value1, 'dataValues');
                            var resultList=[];
                            underscore.map(finalResult,function (packet) {
                                var result={
                                    boxName:packet.box,
                                    loopName:packet.loop,
                                    event:packet.event,
                                    DT:item.DT
                                };
                                resultList.push(result)
                            });
                            return resultList;
                        }).catch(function (reason) {
                            console.log(reason);
                        });
                    }
                });      //map
                promise.all(promises).then(function (finalValue) {
                    var result=underscore.filter(finalValue,function (item) {
                        return item!==undefined
                    });
                    var list=underscore.flatten(result,true);
                    resultObj.obj = list;
                    resultObj.retcode = 200;
                    resultObj.msg.prompt = "查询成功";
                    res.send(resultObj);
                })
            }).catch(function (reason) {
                resultObj.msg.error = reason.message;
                resultObj.retcode = -500;
                res.send(resultObj);
            });
            break;
        case '06':
            var search=[];
            for(var i =0 ; i<28;i++){
                search.push('RQ'+(617+i));
            }
            search.push('DT');
            rqModel.findAll({
                attributes:search,
                where: {
                    DT: {
                        $between: [startTime + ' 00:00:00', endTime + ' 23:59:59']
                    }
                },
                order: [['DT', 'DESC']]
            }).then(function (value) {
                var valueResult = underscore.pluck(value, 'dataValues');
                var promises = underscore.map(valueResult, function (item) {
                    var count = 0;
                    var result = [];
                    var keyResult = Object.keys(item);
                    for (var i = 0; i < keyResult.length; i++) {
                        if (item[keyResult[i]] === 1) {
                            result.push(keyResult[i]);
                            count=1;
                        }
                    }
                    if (count === 1) {
                        return breaker_key.findAll({
                            attributes: ['box', 'loop', 'event'],
                            where: {
                                key: result
                            }
                        }).then(function (value1) {
                            var finalResult = underscore.pluck(value1, 'dataValues');
                            var resultList=[];
                            underscore.map(finalResult,function (packet) {
                                var result={
                                    boxName:packet.box,
                                    loopName:packet.loop,
                                    event:packet.event,
                                    DT:item.DT
                                };
                                resultList.push(result)
                            });
                            return resultList;
                        }).catch(function (reason) {
                            console.log(reason);
                        });
                    }
                });      //map
                promise.all(promises).then(function (finalValue) {
                    var result=underscore.filter(finalValue,function (item) {
                        return item!==undefined
                    });
                    var list=underscore.flatten(result,true);
                    resultObj.obj = list;
                    resultObj.retcode = 200;
                    resultObj.msg.prompt = "查询成功";
                    res.send(resultObj);
                })
            }).catch(function (reason) {
                resultObj.msg.error = reason.message;
                resultObj.retcode = -500;
                res.send(resultObj);
            });
            break;
        case '07':
            var search=[];
            for(var i =0 ; i<7;i++){
                search.push('ZS'+(116+i));
            }
            search.push('DT');
            zsModel.findAll({
                attributes:search,
                where: {
                    DT: {
                        $between: [startTime + ' 00:00:00', endTime + ' 23:59:59']
                    }
                },
                order: [['DT', 'DESC']]
            }).then(function (value) {
                var valueResult = underscore.pluck(value, 'dataValues');
                var promises = underscore.map(valueResult, function (item) {
                    var count = 0;
                    var result = [];
                    var keyResult = Object.keys(item);
                    for (var i = 0; i < keyResult.length; i++) {
                        if (item[keyResult[i]] === 1) {
                            result.push(keyResult[i]);
                            count=1;
                        }
                    }
                    if (count === 1) {
                        return breaker_key.findAll({
                            attributes: ['box', 'loop', 'event'],
                            where: {
                                key: result
                            }
                        }).then(function (value1) {
                            var finalResult = underscore.pluck(value1, 'dataValues');
                            var resultList=[];
                            underscore.map(finalResult,function (packet) {
                                var result={
                                    boxName:packet.box,
                                    loopName:packet.loop,
                                    event:packet.event,
                                    DT:item.DT
                                };
                                resultList.push(result)
                            });
                            return resultList;
                        }).catch(function (reason) {
                            console.log(reason);
                        });
                    }
                });      //map
                promise.all(promises).then(function (finalValue) {
                    var result=underscore.filter(finalValue,function (item) {
                        return item!==undefined
                    });
                    var list=underscore.flatten(result,true);
                    resultObj.obj = list;
                    resultObj.retcode = 200;
                    resultObj.msg.prompt = "查询成功";
                    res.send(resultObj);
                })
            }).catch(function (reason) {
                resultObj.msg.error = reason.message;
                resultObj.retcode = -500;
                res.send(resultObj);
            });
            break;
        case '08':
            var search=[];
            for(var i =0 ; i<7;i++){
                search.push('XY'+(239+i));
            }
            search.push('DT');
            xyModel.findAll({
                attributes:search,
                where: {
                    DT: {
                        $between: [startTime + ' 00:00:00', endTime + ' 23:59:59']
                    }
                },
                order: [['DT', 'DESC']]
            }).then(function (value) {
                var valueResult = underscore.pluck(value, 'dataValues');
                var promises = underscore.map(valueResult, function (item) {
                    var count = 0;
                    var result = [];
                    var keyResult = Object.keys(item);
                    for (var i = 0; i < keyResult.length; i++) {
                        if (item[keyResult[i]] === 1) {
                            result.push(keyResult[i]);
                            count=1;
                        }
                    }
                    if (count === 1) {
                        return breaker_key.findAll({
                            attributes: ['box', 'loop', 'event'],
                            where: {
                                key: result
                            }
                        }).then(function (value1) {
                            var finalResult = underscore.pluck(value1, 'dataValues');
                            var resultList=[];
                            underscore.map(finalResult,function (packet) {
                                var result={
                                    boxName:packet.box,
                                    loopName:packet.loop,
                                    event:packet.event,
                                    DT:item.DT
                                };
                                resultList.push(result)
                            });
                            return resultList;
                        }).catch(function (reason) {
                            console.log(reason);
                        });
                    }
                });      //map
                promise.all(promises).then(function (finalValue) {
                    var result=underscore.filter(finalValue,function (item) {
                        return item!==undefined
                    });
                    var list=underscore.flatten(result,true);
                    resultObj.obj = list;
                    resultObj.retcode = 200;
                    resultObj.msg.prompt = "查询成功";
                    res.send(resultObj);
                })
            }).catch(function (reason) {
                resultObj.msg.error = reason.message;
                resultObj.retcode = -500;
                res.send(resultObj);
            });
            break;
        case '09':
            var search=[];
            for(var i =0 ; i<21;i++){
                search.push('QSB'+(329+i));
            }
            search.push('DT');
            qsbModel.findAll({
                attributes:search,
                where: {
                    DT: {
                        $between: [startTime + ' 00:00:00', endTime + ' 23:59:59']
                    }
                },
                order: [['DT', 'DESC']]
            }).then(function (value) {
                var valueResult = underscore.pluck(value, 'dataValues');
                var promises = underscore.map(valueResult, function (item) {
                    var count = 0;
                    var result = [];
                    var keyResult = Object.keys(item);
                    for (var i = 0; i < keyResult.length; i++) {
                        if (item[keyResult[i]] === 1) {
                            result.push(keyResult[i]);
                            count=1;
                        }
                    }
                    if (count === 1) {
                        return breaker_key.findAll({
                            attributes: ['box', 'loop', 'event'],
                            where: {
                                key: result
                            }
                        }).then(function (value1) {
                            var finalResult = underscore.pluck(value1, 'dataValues');
                            var resultList=[];
                            underscore.map(finalResult,function (packet) {
                                var result={
                                    boxName:packet.box,
                                    loopName:packet.loop,
                                    event:packet.event,
                                    DT:item.DT
                                };
                                resultList.push(result)
                            });
                            return resultList;
                        }).catch(function (reason) {
                            console.log(reason);
                        });
                    }
                });      //map
                promise.all(promises).then(function (finalValue) {
                    var result=underscore.filter(finalValue,function (item) {
                        return item!==undefined
                    });
                    var list=underscore.flatten(result,true);
                    resultObj.obj = list;
                    resultObj.retcode = 200;
                    resultObj.msg.prompt = "查询成功";
                    res.send(resultObj);
                })
            }).catch(function (reason) {
                resultObj.msg.error = reason.message;
                resultObj.retcode = -500;
                res.send(resultObj);
            });
            break;
        case '10':
            var search=[];
            for(var i =0 ; i<49;i++){
                search.push('SQB'+(299+i));
            }
            search.push('DT');
            sqbModel.findAll({
                attributes:search,
                where: {
                    DT: {
                        $between: [startTime + ' 00:00:00', endTime + ' 23:59:59']
                    }
                },
                order: [['DT', 'DESC']]
            }).then(function (value) {
                var valueResult = underscore.pluck(value, 'dataValues');
                var promises = underscore.map(valueResult, function (item) {
                    var count = 0;
                    var result = [];
                    var keyResult = Object.keys(item);
                    for (var i = 0; i < keyResult.length; i++) {
                        if (item[keyResult[i]] === 1) {
                            result.push(keyResult[i]);
                            count=1;
                        }
                    }
                    if (count === 1) {
                        return breaker_key.findAll({
                            attributes: ['box', 'loop', 'event'],
                            where: {
                                key: result
                            }
                        }).then(function (value1) {
                            var finalResult = underscore.pluck(value1, 'dataValues');
                            var resultList=[];
                            underscore.map(finalResult,function (packet) {
                                var result={
                                    boxName:packet.box,
                                    loopName:packet.loop,
                                    event:packet.event,
                                    DT:item.DT
                                };
                                resultList.push(result)
                            });
                            return resultList;
                        }).catch(function (reason) {
                            console.log(reason);
                        });
                    }
                });      //map
                promise.all(promises).then(function (finalValue) {
                    var result=underscore.filter(finalValue,function (item) {
                        return item!==undefined
                    });
                    var list=underscore.flatten(result,true);
                    resultObj.obj = list;
                    resultObj.retcode = 200;
                    resultObj.msg.prompt = "查询成功";
                    res.send(resultObj);
                })
            }).catch(function (reason) {
                resultObj.msg.error = reason.message;
                resultObj.retcode = -500;
                res.send(resultObj);
            });
            break;
        case '11':
            var search=[];
            for(var i =0 ; i<56;i++){
                search.push('XYLB'+(309+i));
            }
            search.push('DT');
            xylbModel.findAll({
                attributes: search,
                where: {
                    DT: {
                        $between: [startTime + ' 00:00:00', endTime + ' 23:59:59']
                    }
                },
                order: [['DT', 'DESC']]
            }).then(function (value) {
                var valueResult = underscore.pluck(value, 'dataValues');
                var promises = underscore.map(valueResult, function (item) {
                    var count = 0;
                    var result = [];
                    var keyResult = Object.keys(item);
                    for (var i = 0; i < keyResult.length; i++) {
                        if (item[keyResult[i]] === 1) {
                            result.push(keyResult[i]);
                            count=1;
                        }
                    }
                    if (count === 1) {
                        return breaker_key.findAll({
                            attributes: ['box', 'loop', 'event'],
                            where: {
                                key: result
                            }
                        }).then(function (value1) {
                            var finalResult = underscore.pluck(value1, 'dataValues');
                            var resultList=[];
                            underscore.map(finalResult,function (packet) {
                                var result={
                                    boxName:packet.box,
                                    loopName:packet.loop,
                                    event:packet.event,
                                    DT:item.DT
                                };
                                resultList.push(result)
                            });
                            return resultList;
                        }).catch(function (reason) {
                            console.log(reason);
                        });
                    }
                });      //map
                promise.all(promises).then(function (finalValue) {
                    var result=underscore.filter(finalValue,function (item) {
                        return item!==undefined
                    });
                    var list=underscore.flatten(result,true);
                    resultObj.obj = list;
                    resultObj.retcode = 200;
                    resultObj.msg.prompt = "查询成功";
                    res.send(resultObj);
                })
            }).catch(function (reason) {
                resultObj.msg.error = reason.message;
                resultObj.retcode = -500;
                res.send(resultObj);
            });
            break;
    }
>>>>>>> dedd623 (first)
>>>>>>> 19b8a9c (first)
>>>>>>> 8f5179a (first)
>>>>>>> 87a8fdf (first)
>>>>>>> 1e8021d (first)
>>>>>>> 5938de4 (first)
>>>>>>> c55f785 (first)
};