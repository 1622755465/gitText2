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
 * Created by snoopy on 2018/5/27
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
var qsModel = require('../models/index').QS;
var sqModel = require('../models/index').SQ;
var xylbModel = require('../models/index').XYLB;
var environmentInfo = module.exports = {};
//中间件引用
var underscore = require('underscore');
var moment = require('moment');
var helper = require('../helpers/helpers');
var xl = require('xlsx');

environmentInfo.search = function (params, res) {
    var resultObj = JSON.parse(JSON.stringify(helper.API_RESULT_MODEL));
    var home = params.home;
    var time = params.time;
        switch (home) {
            case '00':
                tsModel.findAll({
                    attributes: [['TS882', 'TS'], ['TS883','TS1'], 'DT'],
                    where: {
                        'DT': {
                            $between: [time + ' 00:00:00', time + ' 23:59:59']
                        }
                    },
                    order:[['DT','ASC']]
                }).then(function (result) {
                    var jsonResult = underscore.pluck(result, 'dataValues');
                    underscore.map(jsonResult, function (item) {
                        item.TS = item.TS.toFixed(2);
                        item.TS1 = item.TS1.toFixed(2);
                        item.DT = (moment(item.DT).utc().format('HH:mm:ss'));
                    });
                    resultObj.obj.data = jsonResult;
                    resultObj.retcode = 200;
                    res.send(resultObj);
                }).catch(function (error) {
                    resultObj.msg.prompt = '系统内部错误';
                    resultObj.msg.error = error.message;
                    resultObj.retcode = 500;
                    res.send(resultObj);
                });
                break;
            case '01':
                trModel.findAll({
                        attributes: [[ 'TR756', 'TS'], ['TR757', 'TS1'], 'DT'],
                    where: {
                        'DT': {
                            $between: [time + ' 00:00:00', time + ' 23:59:59']
                        }
                    },
                    order:[['DT','ASC']]
                }).then(function (result) {
                    var jsonResult = underscore.pluck(result, 'dataValues');
                    underscore.map(jsonResult, function (item) {
                        item.TS = item.TS.toFixed(2);
                        item.TS1 = item.TS1.toFixed(2);
                        item.DT = (moment(item.DT).utc().format('HH:mm:ss'));
                    });
                    resultObj.obj.data = jsonResult;
                    resultObj.retcode = 200;
                    res.send(resultObj);
                }).catch(function (error) {
                    resultObj.msg.prompt = '系统内部错误';
                    resultObj.msg.error = error.message;
                    resultObj.retcode = 500;
                    res.send(resultObj);
                });
                break;
            case '02':
                tdModel.findAll({
                    attributes: [['TD577', 'TS'], ['TD578', 'TS1'], 'DT'],
                    where: {
                        'DT': {
                            $between: [time + ' 00:00:00', time + ' 23:59:59']
                        }
                    },
                    order:[['DT','ASC']]
                }).then(function (result) {
                    var jsonResult = underscore.pluck(result, 'dataValues');
                    underscore.map(jsonResult, function (item) {
                        item.DT = (moment(item.DT).utc().format('HH:mm:ss'));
                    });
                    resultObj.obj.data = jsonResult;
                    resultObj.retcode = 200;
                    res.send(resultObj);
                }).catch(function (error) {
                    resultObj.msg.prompt = '系统内部错误';
                    resultObj.msg.error = error.message;
                    resultObj.retcode = 500;
                    res.send(resultObj);
                });
                break;
            case '03':
                tjModel.findAll({
                    attributes: [['TJ654', 'TS'], ['TJ655', 'TS1'], 'DT'],
                    where: {
                        'DT': {
                            $between: [time + ' 00:00:00',time + ' 23:59:59']
                        }
                    },
                    order:[['DT','ASC']]
                }).then(function (result) {
                    var jsonResult = underscore.pluck(result, 'dataValues');
                    underscore.map(jsonResult, function (item) {
                        item.TS = item.TS.toFixed(2);
                        item.TS1 = item.TS1.toFixed(2);
                        item.DT = (moment(item.DT).utc().format('HH:mm:ss'));
                    });
                    resultObj.obj.data = jsonResult;
                    resultObj.retcode = 200;
                    res.send(resultObj);
                }).catch(function (error) {
                    resultObj.msg.prompt = '系统内部错误';
                    resultObj.msg.error = error.message;
                    resultObj.retcode = 500;
                    res.send(resultObj);
                });
                break;
            case '04':
                xsModel.findAll({
                    attributes: [['XS836', 'TS'], ['XS837', 'TS1'], 'DT'],
                    where: {
                        'DT': {
                            $between: [time + ' 00:00:00',time + ' 23:59:59']
                        }
                    },
                    order:[['DT','ASC']]
                }).then(function (result) {
                    var jsonResult = underscore.pluck(result, 'dataValues');
                    underscore.map(jsonResult, function (item) {
                        item.TS = item.TS.toFixed(2);
                        item.TS1 = item.TS1.toFixed(2);
                        item.DT = (moment(item.DT).utc().format('HH:mm:ss'));
                    });
                    resultObj.obj.data = jsonResult;
                    resultObj.retcode = 200;
                    res.send(resultObj);
                }).catch(function (error) {
                    resultObj.msg.prompt = '系统内部错误';
                    resultObj.msg.error = error.message;
                    resultObj.retcode = 500;
                    res.send(resultObj);
                });
                break;
            case '05':
                yqModel.findAll({
                    attributes: [['YQ757', 'TS'], ['YQ758', 'TS1'], 'DT'],
                    where: {
                        'DT': {
                            $between: [time + ' 00:00:00',time + ' 23:59:59']
                        }
                    },
                    order:[['DT','ASC']]
                }).then(function (result) {
                    var jsonResult = underscore.pluck(result, 'dataValues');
                    underscore.map(jsonResult, function (item) {
                        item.TS = item.TS.toFixed(2);
                        item.TS1 = item.TS1.toFixed(2);
                        item.DT = (moment(item.DT).utc().format('HH:mm:ss'));
                    });
                    resultObj.obj.data = jsonResult;
                    resultObj.retcode = 200;
                    res.send(resultObj);
                }).catch(function (error) {
                    resultObj.msg.prompt = '系统内部错误';
                    resultObj.msg.error = error.message;
                    resultObj.retcode = 500;
                    res.send(resultObj);
                });
                break;
            case '06':
                rqModel.findAll({
                    attributes: [['RQ615', 'TS'], ['RQ616', 'TS1'], 'DT'],
                    where: {
                        'DT': {
                            $between: [time + ' 00:00:00',time + ' 23:59:59']
                        }
                    },
                    order:[['DT','ASC']]
                }).then(function (result) {
                    if(result) {
                        var jsonResult = underscore.pluck(result, 'dataValues');
                        underscore.map(jsonResult, function (item) {
                            item.TS = item.TS.toFixed(2);
                            item.TS1 = item.TS1.toFixed(2);
                            item.DT = (moment(item.DT).utc().format('HH:mm:ss'));
                        });
                        resultObj.obj.data = jsonResult;
                        resultObj.retcode = 200;
                        res.send(resultObj);
                    }else{
                        resultObj.retcode = 200;
                        res.send(resultObj);
                    }
                }).catch(function (error) {
                    resultObj.msg.prompt = '系统内部错误';
                    resultObj.msg.error = error.message;
                    resultObj.retcode = 500;
                    res.send(resultObj);
                });
                break;
            case '07':
                zsModel.findAll({
                    attributes: [['ZS114', 'TS'], ['ZS115', 'TS1'], 'DT'],
                    where: {
                        'DT': {
                            $between: [time + ' 00:00:00', time + ' 23:59:59']
                        }
                    },
                    order:[['DT','ASC']]
                }).then(function (result) {
                    var jsonResult = underscore.pluck(result, 'dataValues');
                    underscore.map(jsonResult, function (item) {
                        item.TS = item.TS.toFixed(2);
                        item.TS1 = item.TS1.toFixed(2);
                        item.DT = (moment(item.DT).utc().format('HH:mm:ss'));
                    });
                    resultObj.obj.data = jsonResult;
                    resultObj.retcode = 200;
                    res.send(resultObj);
                }).catch(function (error) {
                    resultObj.msg.prompt = '系统内部错误';
                    resultObj.msg.error = error.message;
                    resultObj.retcode = 500;
                    res.send(resultObj);
                });
                break;
            case '08':
                xyModel.findAll({
                    attributes: [['XY237', 'TS'], ['XY238', 'TS1'], 'DT'],
                    where: {
                        'DT': {
                            $between: [time + ' 00:00:00', time + ' 23:59:59']
                        }
                    },
                    order:[['DT','ASC']]
                }).then(function (result) {
                    var jsonResult = underscore.pluck(result, 'dataValues');
                    underscore.map(jsonResult, function (item) {
                        item.TS = item.TS.toFixed(2);
                        item.TS1 = item.TS1.toFixed(2);
                        item.DT = (moment(item.DT).utc().format('HH:mm:ss'));
                    });
                    resultObj.obj.data = jsonResult;
                    resultObj.retcode = 200;
                    res.send(resultObj);
                }).catch(function (error) {
                    resultObj.msg.prompt = '系统内部错误';
                    resultObj.msg.error = error.message;
                    resultObj.retcode = 500;
                    res.send(resultObj);
                });
                break;
            case '09':
                qsModel.findAll({
                    attributes: [['QS789', 'TS'], ['QS790', 'TS1'], 'DT'],
                    where: {
                        'DT': {
                            $between: [time + ' 00:00:00', time + ' 23:59:59']
                        }
                    },
                    order:[['DT','ASC']]
                }).then(function (result) {
                    var jsonResult = underscore.pluck(result, 'dataValues');
                    underscore.map(jsonResult, function (item) {
                        item.TS = item.TS.toFixed(2);
                        item.TS1 = item.TS1.toFixed(2);
                        item.DT = (moment(item.DT).utc().format('HH:mm:ss'));
                    });
                    resultObj.obj.data = jsonResult;
                    resultObj.retcode = 200;
                    res.send(resultObj);
                }).catch(function (error) {
                    resultObj.msg.prompt = '系统内部错误';
                    resultObj.msg.error = error.message;
                    resultObj.retcode = 500;
                    res.send(resultObj);
                });
                break;
            case '10':
                sqModel.findAll({
                    attributes: [['SQ734', 'TS'], ['SQ735', 'TS1'], 'DT'],
                    where: {
                        'DT': {
                            $between: [time + ' 00:00:00', time + ' 23:59:59']
                        }
                    },
                    order:[['DT','ASC']]
                }).then(function (result) {
                    var jsonResult = underscore.pluck(result, 'dataValues');
                    underscore.map(jsonResult, function (item) {
                        item.TS = item.TS.toFixed(2);
                        item.TS1 = item.TS1.toFixed(2);
                        item.DT = (moment(item.DT).utc().format('HH:mm:ss'));
                    });
                    resultObj.obj.data = jsonResult;
                    resultObj.retcode = 200;
                    res.send(resultObj);
                }).catch(function (error) {
                    resultObj.msg.prompt = '系统内部错误';
                    resultObj.msg.error = error.message;
                    resultObj.retcode = 500;
                    res.send(resultObj);
                });
                break;
            case '11':
                xylbModel.findAll({
                    attributes: [['XYL751', 'TS'], ['XYL752', 'TS1'], 'DT'],
                    where: {
                        'DT': {
                            $between: [time + ' 00:00:00', time + ' 23:59:59']
                        }
                    },
                    order:[['DT','ASC']]
                }).then(function (result) {
                    var jsonResult = underscore.pluck(result, 'dataValues');
                    underscore.map(jsonResult, function (item) {
                        item.TS = item.TS.toFixed(2);
                        item.TS1 = item.TS1.toFixed(2);
                        item.DT = (moment(item.DT).utc().format('HH:mm:ss'));
                    });
                    resultObj.obj.data = jsonResult;
                    resultObj.retcode = 200;
                    res.send(resultObj);
                }).catch(function (error) {
                    resultObj.msg.prompt = '系统内部错误';
                    resultObj.msg.error = error.message;
                    resultObj.retcode = 500;
                    res.send(resultObj);
                });
                break;
            default:
                resultObj.msg.prompt = '无此配电所数据';
                res.send(resultObj);
        }
};

environmentInfo.exportEnvirExcel = async function (params,res) {
    const resultObj = JSON.parse(JSON.stringify(helper.API_RESULT_MODEL))
    try {
        var home = params.home;
        var time = params.time;
        let searchObj = {
            attributes: [['TS882', 'TS'], ['TS883','TS1'], 'DT'],
            where: {
                'DT': {
                    $between: [time + ' 00:00:00', time + ' 23:59:59']
                }
            },
            order:[['DT','ASC']],
            raw:true
        };

        let jsonResult;
        if (home === '00') {
            jsonResult = await tsModel.findAll(searchObj);
        } else if (home === '01') {
            searchObj = {
                attributes: [[ 'TR756', 'TS'], ['TR757', 'TS1'], 'DT'],
                where: {
                    'DT': {
                        $between: [time + ' 00:00:00', time + ' 23:59:59']
                    }
                },
                order:[['DT','ASC']],
                raw:true
            };
            jsonResult = await trModel.findAll(searchObj);
        } else if (home === '02') {
            searchObj = {
                attributes: [['TD577', 'TS'], ['TD578', 'TS1'], 'DT'],
                    where: {
                'DT': {
                    $between: [time + ' 00:00:00', time + ' 23:59:59']
                }
            },
                order:[['DT','ASC']],
                raw:true
            };
            jsonResult = await tdModel.findAll(searchObj);
        } else if (home === '03') {
            searchObj = {
                attributes: [['TJ654', 'TS'], ['TJ655', 'TS1'], 'DT'],
                where: {
                    'DT': {
                        $between: [time + ' 00:00:00',time + ' 23:59:59']
                    }
                },
                order:[['DT','ASC']],
                raw:true
            };
            jsonResult = await tjModel.findAll(searchObj);
        } else if (home === '04') {
            searchObj ={
                attributes: [['XS836', 'TS'], ['XS837', 'TS1'], 'DT'],
                where: {
                'DT': {
                    $between: [time + ' 00:00:00',time + ' 23:59:59']
                }
            },
                order:[['DT','ASC']],
                raw:true
        };
            jsonResult = await xsModel.findAll(searchObj);
        } else if (home === '05') {
            searchObj = {
                attributes: [['YQ757', 'TS'], ['YQ758', 'TS1'], 'DT'],
                where: {
                    'DT': {
                        $between: [time + ' 00:00:00',time + ' 23:59:59']
                    }
                },
                order:[['DT','ASC']],
                raw :true
            };
            jsonResult = await yqModel.findAll(searchObj);
        } else if (home === '06') {
            searchObj = {
                attributes: [['RQ615', 'TS'], ['RQ616', 'TS1'], 'DT'],
                where: {
                    'DT': {
                        $between: [time + ' 00:00:00',time + ' 23:59:59']
                    }
                },
                order:[['DT','ASC']],
                raw:true
            };
            jsonResult = await rqModel.findAll(searchObj);
        } else if (home === '07') {
            searchObj = {
                attributes: [['ZS114', 'TS'], ['ZS115', 'TS1'], 'DT'],
                where: {
                    'DT': {
                        $between: [time + ' 00:00:00', time + ' 23:59:59']
                    }
                },
                order:[['DT','ASC']],
                raw:true
            };
            jsonResult = await zsModel.findAll(searchObj);
        } else if (home === '08') {
            searchObj = {
                attributes: [['XY237', 'TS'], ['XY238', 'TS1'], 'DT'],
                where: {
                    'DT': {
                        $between: [time + ' 00:00:00', time + ' 23:59:59']
                    }
                },
                order:[['DT','ASC']],
                raw:true
            };
            jsonResult = await xyModel.findAll(searchObj);
        } else if (home === '09') {
            searchObj = {
                attributes: [['QS789', 'TS'], ['QS790', 'TS1'], 'DT'],
                where: {
                    'DT': {
                        $between: [time + ' 00:00:00', time + ' 23:59:59']
                    }
                },
                order:[['DT','ASC']],
                raw:true
            };
            jsonResult = await qsModel.findAll(searchObj);
        } else if (home === '10') {
            searchObj = {
                attributes: [['SQ734', 'TS'], ['SQ735', 'TS1'], 'DT'],
                where: {
                    'DT': {
                        $between: [time + ' 00:00:00', time + ' 23:59:59']
                    }
                },
                order:[['DT','ASC']],
                raw:true
            };
            jsonResult = await sqModel.findAll(searchObj);
        } else if (home === '11') {
            searchObj = {
                attributes: [['XYL751', 'TS'], ['XYL752', 'TS1'], 'DT'],
                where: {
                    'DT': {
                        $between: [time + ' 00:00:00', time + ' 23:59:59']
                    }
                },
                order:[['DT','ASC']],
                raw:true
            };
            jsonResult = await xylModel.findAll(searchObj);
        }
        if (jsonResult.length) {
            underscore.map(jsonResult, function (item) {
                item.TS = item.TS.toFixed(2);
                item.TS1 = item.TS1.toFixed(2);
                item.DT = (moment(item.DT).utc().format('HH:mm:ss'));
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
            resultObj.retcode = 200;
            res.json(resultObj);
        } else {
            resultObj.obj.blob = null;
            resultObj.retcode = 200;
            res.json(resultObj);
        }
    }
    catch (error) {
        resultObj.msg.prompt = "系统内部错误"
        resultObj.msg.error = error.message
        resultObj.retcode = 500
        res.send(resultObj)
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
 * Created by snoopy on 2018/5/27
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
var qsModel = require('../models/index').QS;
var sqModel = require('../models/index').SQ;
var xylbModel = require('../models/index').XYLB;
var environmentInfo = module.exports = {};
//中间件引用
var underscore = require('underscore');
var moment = require('moment');
var helper = require('../helpers/helpers');
var xl = require('xlsx');

environmentInfo.search = function (params, res) {
    var resultObj = JSON.parse(JSON.stringify(helper.API_RESULT_MODEL));
    var home = params.home;
    var time = params.time;
        switch (home) {
            case '00':
                tsModel.findAll({
                    attributes: [['TS882', 'TS'], ['TS883','TS1'], 'DT'],
                    where: {
                        'DT': {
                            $between: [time + ' 00:00:00', time + ' 23:59:59']
                        }
                    },
                    order:[['DT','ASC']]
                }).then(function (result) {
                    var jsonResult = underscore.pluck(result, 'dataValues');
                    underscore.map(jsonResult, function (item) {
                        item.TS = item.TS.toFixed(2);
                        item.TS1 = item.TS1.toFixed(2);
                        item.DT = (moment(item.DT).utc().format('HH:mm:ss'));
                    });
                    resultObj.obj.data = jsonResult;
                    resultObj.retcode = 200;
                    res.send(resultObj);
                }).catch(function (error) {
                    resultObj.msg.prompt = '系统内部错误';
                    resultObj.msg.error = error.message;
                    resultObj.retcode = 500;
                    res.send(resultObj);
                });
                break;
            case '01':
                trModel.findAll({
                        attributes: [[ 'TR756', 'TS'], ['TR757', 'TS1'], 'DT'],
                    where: {
                        'DT': {
                            $between: [time + ' 00:00:00', time + ' 23:59:59']
                        }
                    },
                    order:[['DT','ASC']]
                }).then(function (result) {
                    var jsonResult = underscore.pluck(result, 'dataValues');
                    underscore.map(jsonResult, function (item) {
                        item.TS = item.TS.toFixed(2);
                        item.TS1 = item.TS1.toFixed(2);
                        item.DT = (moment(item.DT).utc().format('HH:mm:ss'));
                    });
                    resultObj.obj.data = jsonResult;
                    resultObj.retcode = 200;
                    res.send(resultObj);
                }).catch(function (error) {
                    resultObj.msg.prompt = '系统内部错误';
                    resultObj.msg.error = error.message;
                    resultObj.retcode = 500;
                    res.send(resultObj);
                });
                break;
            case '02':
                tdModel.findAll({
                    attributes: [['TD577', 'TS'], ['TD578', 'TS1'], 'DT'],
                    where: {
                        'DT': {
                            $between: [time + ' 00:00:00', time + ' 23:59:59']
                        }
                    },
                    order:[['DT','ASC']]
                }).then(function (result) {
                    var jsonResult = underscore.pluck(result, 'dataValues');
                    underscore.map(jsonResult, function (item) {
                        item.DT = (moment(item.DT).utc().format('HH:mm:ss'));
                    });
                    resultObj.obj.data = jsonResult;
                    resultObj.retcode = 200;
                    res.send(resultObj);
                }).catch(function (error) {
                    resultObj.msg.prompt = '系统内部错误';
                    resultObj.msg.error = error.message;
                    resultObj.retcode = 500;
                    res.send(resultObj);
                });
                break;
            case '03':
                tjModel.findAll({
                    attributes: [['TJ654', 'TS'], ['TJ655', 'TS1'], 'DT'],
                    where: {
                        'DT': {
                            $between: [time + ' 00:00:00',time + ' 23:59:59']
                        }
                    },
                    order:[['DT','ASC']]
                }).then(function (result) {
                    var jsonResult = underscore.pluck(result, 'dataValues');
                    underscore.map(jsonResult, function (item) {
                        item.TS = item.TS.toFixed(2);
                        item.TS1 = item.TS1.toFixed(2);
                        item.DT = (moment(item.DT).utc().format('HH:mm:ss'));
                    });
                    resultObj.obj.data = jsonResult;
                    resultObj.retcode = 200;
                    res.send(resultObj);
                }).catch(function (error) {
                    resultObj.msg.prompt = '系统内部错误';
                    resultObj.msg.error = error.message;
                    resultObj.retcode = 500;
                    res.send(resultObj);
                });
                break;
            case '04':
                xsModel.findAll({
                    attributes: [['XS836', 'TS'], ['XS837', 'TS1'], 'DT'],
                    where: {
                        'DT': {
                            $between: [time + ' 00:00:00',time + ' 23:59:59']
                        }
                    },
                    order:[['DT','ASC']]
                }).then(function (result) {
                    var jsonResult = underscore.pluck(result, 'dataValues');
                    underscore.map(jsonResult, function (item) {
                        item.TS = item.TS.toFixed(2);
                        item.TS1 = item.TS1.toFixed(2);
                        item.DT = (moment(item.DT).utc().format('HH:mm:ss'));
                    });
                    resultObj.obj.data = jsonResult;
                    resultObj.retcode = 200;
                    res.send(resultObj);
                }).catch(function (error) {
                    resultObj.msg.prompt = '系统内部错误';
                    resultObj.msg.error = error.message;
                    resultObj.retcode = 500;
                    res.send(resultObj);
                });
                break;
            case '05':
                yqModel.findAll({
                    attributes: [['YQ757', 'TS'], ['YQ758', 'TS1'], 'DT'],
                    where: {
                        'DT': {
                            $between: [time + ' 00:00:00',time + ' 23:59:59']
                        }
                    },
                    order:[['DT','ASC']]
                }).then(function (result) {
                    var jsonResult = underscore.pluck(result, 'dataValues');
                    underscore.map(jsonResult, function (item) {
                        item.TS = item.TS.toFixed(2);
                        item.TS1 = item.TS1.toFixed(2);
                        item.DT = (moment(item.DT).utc().format('HH:mm:ss'));
                    });
                    resultObj.obj.data = jsonResult;
                    resultObj.retcode = 200;
                    res.send(resultObj);
                }).catch(function (error) {
                    resultObj.msg.prompt = '系统内部错误';
                    resultObj.msg.error = error.message;
                    resultObj.retcode = 500;
                    res.send(resultObj);
                });
                break;
            case '06':
                rqModel.findAll({
                    attributes: [['RQ615', 'TS'], ['RQ616', 'TS1'], 'DT'],
                    where: {
                        'DT': {
                            $between: [time + ' 00:00:00',time + ' 23:59:59']
                        }
                    },
                    order:[['DT','ASC']]
                }).then(function (result) {
                    if(result) {
                        var jsonResult = underscore.pluck(result, 'dataValues');
                        underscore.map(jsonResult, function (item) {
                            item.TS = item.TS.toFixed(2);
                            item.TS1 = item.TS1.toFixed(2);
                            item.DT = (moment(item.DT).utc().format('HH:mm:ss'));
                        });
                        resultObj.obj.data = jsonResult;
                        resultObj.retcode = 200;
                        res.send(resultObj);
                    }else{
                        resultObj.retcode = 200;
                        res.send(resultObj);
                    }
                }).catch(function (error) {
                    resultObj.msg.prompt = '系统内部错误';
                    resultObj.msg.error = error.message;
                    resultObj.retcode = 500;
                    res.send(resultObj);
                });
                break;
            case '07':
                zsModel.findAll({
                    attributes: [['ZS114', 'TS'], ['ZS115', 'TS1'], 'DT'],
                    where: {
                        'DT': {
                            $between: [time + ' 00:00:00', time + ' 23:59:59']
                        }
                    },
                    order:[['DT','ASC']]
                }).then(function (result) {
                    var jsonResult = underscore.pluck(result, 'dataValues');
                    underscore.map(jsonResult, function (item) {
                        item.TS = item.TS.toFixed(2);
                        item.TS1 = item.TS1.toFixed(2);
                        item.DT = (moment(item.DT).utc().format('HH:mm:ss'));
                    });
                    resultObj.obj.data = jsonResult;
                    resultObj.retcode = 200;
                    res.send(resultObj);
                }).catch(function (error) {
                    resultObj.msg.prompt = '系统内部错误';
                    resultObj.msg.error = error.message;
                    resultObj.retcode = 500;
                    res.send(resultObj);
                });
                break;
            case '08':
                xyModel.findAll({
                    attributes: [['XY237', 'TS'], ['XY238', 'TS1'], 'DT'],
                    where: {
                        'DT': {
                            $between: [time + ' 00:00:00', time + ' 23:59:59']
                        }
                    },
                    order:[['DT','ASC']]
                }).then(function (result) {
                    var jsonResult = underscore.pluck(result, 'dataValues');
                    underscore.map(jsonResult, function (item) {
                        item.TS = item.TS.toFixed(2);
                        item.TS1 = item.TS1.toFixed(2);
                        item.DT = (moment(item.DT).utc().format('HH:mm:ss'));
                    });
                    resultObj.obj.data = jsonResult;
                    resultObj.retcode = 200;
                    res.send(resultObj);
                }).catch(function (error) {
                    resultObj.msg.prompt = '系统内部错误';
                    resultObj.msg.error = error.message;
                    resultObj.retcode = 500;
                    res.send(resultObj);
                });
                break;
            case '09':
                qsModel.findAll({
                    attributes: [['QS789', 'TS'], ['QS790', 'TS1'], 'DT'],
                    where: {
                        'DT': {
                            $between: [time + ' 00:00:00', time + ' 23:59:59']
                        }
                    },
                    order:[['DT','ASC']]
                }).then(function (result) {
                    var jsonResult = underscore.pluck(result, 'dataValues');
                    underscore.map(jsonResult, function (item) {
                        item.TS = item.TS.toFixed(2);
                        item.TS1 = item.TS1.toFixed(2);
                        item.DT = (moment(item.DT).utc().format('HH:mm:ss'));
                    });
                    resultObj.obj.data = jsonResult;
                    resultObj.retcode = 200;
                    res.send(resultObj);
                }).catch(function (error) {
                    resultObj.msg.prompt = '系统内部错误';
                    resultObj.msg.error = error.message;
                    resultObj.retcode = 500;
                    res.send(resultObj);
                });
                break;
            case '10':
                sqModel.findAll({
                    attributes: [['SQ734', 'TS'], ['SQ735', 'TS1'], 'DT'],
                    where: {
                        'DT': {
                            $between: [time + ' 00:00:00', time + ' 23:59:59']
                        }
                    },
                    order:[['DT','ASC']]
                }).then(function (result) {
                    var jsonResult = underscore.pluck(result, 'dataValues');
                    underscore.map(jsonResult, function (item) {
                        item.TS = item.TS.toFixed(2);
                        item.TS1 = item.TS1.toFixed(2);
                        item.DT = (moment(item.DT).utc().format('HH:mm:ss'));
                    });
                    resultObj.obj.data = jsonResult;
                    resultObj.retcode = 200;
                    res.send(resultObj);
                }).catch(function (error) {
                    resultObj.msg.prompt = '系统内部错误';
                    resultObj.msg.error = error.message;
                    resultObj.retcode = 500;
                    res.send(resultObj);
                });
                break;
            case '11':
                xylbModel.findAll({
                    attributes: [['XYL751', 'TS'], ['XYL752', 'TS1'], 'DT'],
                    where: {
                        'DT': {
                            $between: [time + ' 00:00:00', time + ' 23:59:59']
                        }
                    },
                    order:[['DT','ASC']]
                }).then(function (result) {
                    var jsonResult = underscore.pluck(result, 'dataValues');
                    underscore.map(jsonResult, function (item) {
                        item.TS = item.TS.toFixed(2);
                        item.TS1 = item.TS1.toFixed(2);
                        item.DT = (moment(item.DT).utc().format('HH:mm:ss'));
                    });
                    resultObj.obj.data = jsonResult;
                    resultObj.retcode = 200;
                    res.send(resultObj);
                }).catch(function (error) {
                    resultObj.msg.prompt = '系统内部错误';
                    resultObj.msg.error = error.message;
                    resultObj.retcode = 500;
                    res.send(resultObj);
                });
                break;
            default:
                resultObj.msg.prompt = '无此配电所数据';
                res.send(resultObj);
        }
};

environmentInfo.exportEnvirExcel = async function (params,res) {
    const resultObj = JSON.parse(JSON.stringify(helper.API_RESULT_MODEL))
    try {
        var home = params.home;
        var time = params.time;
        let searchObj = {
            attributes: [['TS882', 'TS'], ['TS883','TS1'], 'DT'],
            where: {
                'DT': {
                    $between: [time + ' 00:00:00', time + ' 23:59:59']
                }
            },
            order:[['DT','ASC']],
            raw:true
        };

        let jsonResult;
        if (home === '00') {
            jsonResult = await tsModel.findAll(searchObj);
        } else if (home === '01') {
            searchObj = {
                attributes: [[ 'TR756', 'TS'], ['TR757', 'TS1'], 'DT'],
                where: {
                    'DT': {
                        $between: [time + ' 00:00:00', time + ' 23:59:59']
                    }
                },
                order:[['DT','ASC']],
                raw:true
            };
            jsonResult = await trModel.findAll(searchObj);
        } else if (home === '02') {
            searchObj = {
                attributes: [['TD577', 'TS'], ['TD578', 'TS1'], 'DT'],
                    where: {
                'DT': {
                    $between: [time + ' 00:00:00', time + ' 23:59:59']
                }
            },
                order:[['DT','ASC']],
                raw:true
            };
            jsonResult = await tdModel.findAll(searchObj);
        } else if (home === '03') {
            searchObj = {
                attributes: [['TJ654', 'TS'], ['TJ655', 'TS1'], 'DT'],
                where: {
                    'DT': {
                        $between: [time + ' 00:00:00',time + ' 23:59:59']
                    }
                },
                order:[['DT','ASC']],
                raw:true
            };
            jsonResult = await tjModel.findAll(searchObj);
        } else if (home === '04') {
            searchObj ={
                attributes: [['XS836', 'TS'], ['XS837', 'TS1'], 'DT'],
                where: {
                'DT': {
                    $between: [time + ' 00:00:00',time + ' 23:59:59']
                }
            },
                order:[['DT','ASC']],
                raw:true
        };
            jsonResult = await xsModel.findAll(searchObj);
        } else if (home === '05') {
            searchObj = {
                attributes: [['YQ757', 'TS'], ['YQ758', 'TS1'], 'DT'],
                where: {
                    'DT': {
                        $between: [time + ' 00:00:00',time + ' 23:59:59']
                    }
                },
                order:[['DT','ASC']],
                raw :true
            };
            jsonResult = await yqModel.findAll(searchObj);
        } else if (home === '06') {
            searchObj = {
                attributes: [['RQ615', 'TS'], ['RQ616', 'TS1'], 'DT'],
                where: {
                    'DT': {
                        $between: [time + ' 00:00:00',time + ' 23:59:59']
                    }
                },
                order:[['DT','ASC']],
                raw:true
            };
            jsonResult = await rqModel.findAll(searchObj);
        } else if (home === '07') {
            searchObj = {
                attributes: [['ZS114', 'TS'], ['ZS115', 'TS1'], 'DT'],
                where: {
                    'DT': {
                        $between: [time + ' 00:00:00', time + ' 23:59:59']
                    }
                },
                order:[['DT','ASC']],
                raw:true
            };
            jsonResult = await zsModel.findAll(searchObj);
        } else if (home === '08') {
            searchObj = {
                attributes: [['XY237', 'TS'], ['XY238', 'TS1'], 'DT'],
                where: {
                    'DT': {
                        $between: [time + ' 00:00:00', time + ' 23:59:59']
                    }
                },
                order:[['DT','ASC']],
                raw:true
            };
            jsonResult = await xyModel.findAll(searchObj);
        } else if (home === '09') {
            searchObj = {
                attributes: [['QS789', 'TS'], ['QS790', 'TS1'], 'DT'],
                where: {
                    'DT': {
                        $between: [time + ' 00:00:00', time + ' 23:59:59']
                    }
                },
                order:[['DT','ASC']],
                raw:true
            };
            jsonResult = await qsModel.findAll(searchObj);
        } else if (home === '10') {
            searchObj = {
                attributes: [['SQ734', 'TS'], ['SQ735', 'TS1'], 'DT'],
                where: {
                    'DT': {
                        $between: [time + ' 00:00:00', time + ' 23:59:59']
                    }
                },
                order:[['DT','ASC']],
                raw:true
            };
            jsonResult = await sqModel.findAll(searchObj);
        } else if (home === '11') {
            searchObj = {
                attributes: [['XYL751', 'TS'], ['XYL752', 'TS1'], 'DT'],
                where: {
                    'DT': {
                        $between: [time + ' 00:00:00', time + ' 23:59:59']
                    }
                },
                order:[['DT','ASC']],
                raw:true
            };
            jsonResult = await xylModel.findAll(searchObj);
        }
        if (jsonResult.length) {
            underscore.map(jsonResult, function (item) {
                item.TS = item.TS.toFixed(2);
                item.TS1 = item.TS1.toFixed(2);
                item.DT = (moment(item.DT).utc().format('HH:mm:ss'));
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
            resultObj.retcode = 200;
            res.json(resultObj);
        } else {
            resultObj.obj.blob = null;
            resultObj.retcode = 200;
            res.json(resultObj);
        }
    }
    catch (error) {
        resultObj.msg.prompt = "系统内部错误"
        resultObj.msg.error = error.message
        resultObj.retcode = 500
        res.send(resultObj)
    }
>>>>>>> dedd623 (first)
>>>>>>> 19b8a9c (first)
>>>>>>> 8f5179a (first)
>>>>>>> 87a8fdf (first)
>>>>>>> 1e8021d (first)
>>>>>>> 5938de4 (first)
>>>>>>> c55f785 (first)
};