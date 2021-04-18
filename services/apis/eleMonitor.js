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
 * Created by snoopy on 2018/7/6
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
var qsModel = require('../models/index').QS;
var sqModel = require('../models/index').SQ;
var xylModel = require('../models/index').XYL;
var xyModel = require('../models/index').XY;
var transformerModel = require('../models/index').transformer_key;
var moment = require('moment');
var eleMonitor = module.exports = {};
var underscore = require('underscore');
var helper = require('../helpers/helpers');
const xl = require('xlsx');

eleMonitor.search = async function (params, res) {
    let resultObj = JSON.parse(JSON.stringify(helper.API_RESULT_MODEL));
    try {
        console.log(params);
        const home = params.home;
        const key = params.key;
        const time1 = params.time1;
        const time2 = params.time2;

        let searchObj = {                    //通过key表找出相应字段名
            attributes: ['value'],
            where: {
                key: key
            },
            raw: true
        };
        let firstRes = await transformerModel.findAll(searchObj);
        let charB = [];
        for (let i = 0; i < firstRes.length; i++) {
            charB[i] = firstRes[i].value;      //转为数组格式
        }
        searchObj = {
            attributes: [[charB[0], 'TS'], 'DT'],  //字段取别名写死
            where: {
                'DT': {
                    $between: [time1, time2]
                }
            },
            order: [['DT', 'ASC']],
            raw: true
        };
        let jsonResult;
        if (home === '00') {
            jsonResult = await tsModel.findAll(searchObj);
        } else if (home === '01') {
            jsonResult = await trModel.findAll(searchObj);
        } else if (home === '02') {
            jsonResult = await tdModel.findAll(searchObj);
        } else if (home === '03') {
            jsonResult = await tjModel.findAll(searchObj);
        } else if (home === '04') {
            jsonResult = await xsModel.findAll(searchObj);
        } else if (home === '05') {
            jsonResult = await yqModel.findAll(searchObj);
        } else if (home === '06') {
            jsonResult = await rqModel.findAll(searchObj);
        } else if (home === '07') {
            jsonResult = await zsModel.findAll(searchObj);
        } else if (home === '08') {
            jsonResult = await xyModel.findAll(searchObj);
        } else if (home === '09') {
            jsonResult = await qsModel.findAll(searchObj);
        } else if (home === '10') {
            jsonResult = await sqModel.findAll(searchObj);
        } else if (home === '11') {
            jsonResult = await xylModel.findAll(searchObj);
        }
        console.log(jsonResult);
        if (jsonResult.length) {
            underscore.map(jsonResult, function (item) {                     //取整
                item.TS = item.TS.toFixed(2);
                item.DT = moment(item.DT).utc().format('YYYY-MM-DD hh:mm:ss');
            });
            resultObj.obj = jsonResult;
            resultObj.retcode = 200;
            res.send(resultObj);
        } else {
            resultObj.obj = jsonResult;
            resultObj.prompt = "暂无数据";
            resultObj.retcode = 200;
            res.send(resultObj);
        }


    }
    catch (error) {

        resultObj.msg.prompt = '系统内部错误';
        resultObj.msg.error = error.message;
        resultObj.retcode = 500;
        res.send(resultObj);
    }
};

eleMonitor.getEleMonitorList = async function (params, res) {
    const resultObj = JSON.parse(JSON.stringify(helper.API_RESULT_MODEL));
    try {
        const key = params.key.split(',');
        const home = params.home;
        let searchObj = {                    //通过key表找出相应字段名
            attributes: ['value'],
            where: {
                key: key
            },
            raw: true
        };
        const keyResult = await transformerModel.findAll(searchObj);
        const valueChar = [];
        underscore.map(keyResult, function (item) {
            valueChar.push(item.value);
        });
        valueChar.push('DT');

        searchObj = {
            attributes: [[valueChar[0], 'TS'], [valueChar[1], 'TS1'], [valueChar[2], 'TS2'], [valueChar[3], 'TS3'], [valueChar[4], 'DT4'], [valueChar[5], 'DT5']],
            order: [['DT', 'DESC']],
            raw: true
        };
        let jsonResult;
        if (home === '00') {
            jsonResult = await tsModel.findOne(searchObj);
        } else if (home === '01') {
            jsonResult = await trModel.findOne(searchObj);
        } else if (home === '02') {
            jsonResult = await tdModel.findOne(searchObj);
        } else if (home === '03') {
            jsonResult = await tjModel.findOne(searchObj);
        } else if (home === '04') {
            jsonResult = await xsModel.findOne(searchObj);
        } else if (home === '05') {
            jsonResult = await yqModel.findOne(searchObj);
        } else if (home === '06') {
            jsonResult = await rqModel.findOne(searchObj);
        } else if (home === '07') {
            jsonResult = await zsModel.findOne(searchObj);
        } else if (home === '08') {
            jsonResult = await xyModel.findOne(searchObj);
        } else if (home === '09') {
            jsonResult = await qsModel.findOne(searchObj);
        } else if (home === '10') {
            jsonResult = await sqModel.findOne(searchObj);
        } else if (home === '11') {
            jsonResult = await xylModel.findOne(searchObj);
        }

        if(jsonResult.length){
            jsonResult.DT = (moment(jsonResult.DT).utc().format('YYYY-MM-DD HH:mm:ss'));
        }
        resultObj.obj.data = jsonResult;
        resultObj.retcode = 200;
        res.send(resultObj);

    }
    catch (e) {
        console.error(e);
        resultObj.msg.prompt = '系统内部错误';
        resultObj.msg.error = e.message;
        resultObj.retcode = 500;
        res.send(resultObj);
    }


};

eleMonitor.exportMonitorExcel = async function (params, res) {
    const resultObj = JSON.parse(JSON.stringify(helper.API_RESULT_MODEL));
    try {
        const home = params.home;
        const key = params.key;
        const time1 = params.time1;
        const time2 = params.time2;

        let searchObj = {                    //通过key表找出相应字段名
            attributes: ['value'],
            where: {
                key: key
            },
            raw: true
        };
        const firstRes = await transformerModel.findAll(searchObj);
        let charB = [];
        for (let i = 0; i < firstRes.length; i++) {
            charB[i] = firstRes[i].value;      //转为数组格式
        }
        searchObj = {
            attributes: [[charB[0], 'TS'], 'DT'],  //字段取别名写死
            where: {
                'DT': {
                    $between: [time1, time2]
                }
            },
            order: [['DT', 'ASC']],
            raw: true
        };
        let jsonResult;
        if (home === '00') {
            jsonResult = await tsModel.findAll(searchObj);
        } else if (home === '01') {
            jsonResult = await trModel.findAll(searchObj);
        } else if (home === '02') {
            jsonResult = await tdModel.findAll(searchObj);
        } else if (home === '03') {
            jsonResult = await tjModel.findAll(searchObj);
        } else if (home === '04') {
            jsonResult = await xsModel.findAll(searchObj);
        } else if (home === '05') {
            jsonResult = await yqModel.findAll(searchObj);
        } else if (home === '06') {
            jsonResult = await rqModel.findAll(searchObj);
        } else if (home === '07') {
            jsonResult = await zsModel.findAll(searchObj);
        } else if (home === '08') {
            jsonResult = await xyModel.findAll(searchObj);
        } else if (home === '09') {
            jsonResult = await qsModel.findAll(searchObj);
        } else if (home === '10') {
            jsonResult = await sqModel.findAll(searchObj);
        } else if (home === '11') {
            jsonResult = await xylModel.findAll(searchObj);
        }
        if (jsonResult.length) {
            underscore.map(jsonResult, function (item) {                     //取整
                item.TS = item.TS.toFixed(2);
                item.DT = moment(item.DT).utc().format('YYYY-MM-DD hh:mm:ss');
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
        }
        else{
            resultObj.obj.blob = null;
            resultObj.retcode = 200;
            res.json(resultObj);
        }
    }
    catch (error) {
        resultObj.msg.prompt = '系统内部错误';
        resultObj.msg.error = error.message;
        resultObj.retcode = 500;
        res.send(resultObj);
    }
};


//
//
//     transformerModel.findAll({                    //通过key表找出相应字段名
//         attributes: ['value'],
//         where: {
//             key: key
//         }
//     }).then(function (row) {
//         var charB = [];
//         var firstRes = underscore.pluck(row, 'dataValues');
//         for (var i = 0; i < firstRes.length; i++) {
//             charB[i] = firstRes[i].value;      //转为数组格式
//         }
//         //判断配电所
//         switch (home) {
//             case '00':
//                 tsModel.findAll({
//                     attributes: [[charB[0], 'TS'], 'DT'],
//                     where: {
//                         'DT': {
//                             $between: [time1, time2]
//                         }
//                     },
//                     order:[['DT','ASC']]
//                 }).then(function (result) {
//                     var jsonResult = underscore.pluck(result, 'dataValues');
//                     underscore.map(jsonResult, function (item) {                     //取整
//                         item.TS = item.TS.toFixed(2);
//                         item.DT = moment(item.DT).utc().format('YYYY-MM-DD hh:mm:ss');
//                     });
//                     resultObj.obj = jsonResult;
//                     resultObj.retcode = 200;
//                     res.send(resultObj);
//                 }).catch(function (error) {
//                     resultObj.msg.prompt = '系统内部错误';
//                     resultObj.msg.error = error.message;
//                     resultObj.retcode = 500;
//                     res.send(resultObj);
//                 });
//                 break;
//             case '01':
//                 trModel.findAll({
//                     attributes: [[charB[0], 'TS'], 'DT'],
//                     where: {
//                         'DT': {
//                             $between: [time1, time2]
//                         }
//                     },
//                     order:[['DT','ASC']]
//                 }).then(function (result) {
//                     var jsonResult = underscore.pluck(result, 'dataValues');
//                     underscore.map(jsonResult, function (item) {                     //取整
//                         item.TS = item.TS.toFixed(2);
//                         item.DT = moment(item.DT).utc().format('YYYY-MM-DD hh:mm:ss');
//                     });
//                     resultObj.obj = jsonResult;
//                     resultObj.retcode = 200;
//                     res.send(resultObj);
//                 }).catch(function (error) {
//                     resultObj.msg.prompt = '系统内部错误';
//                     resultObj.msg.error = error.message;
//                     resultObj.retcode = 500;
//                     res.send(resultObj);
//                 });
//                 break;
//             case '02':
//                 tdModel.findAll({
//                     attributes: [[charB[0], 'TS'], 'DT'],  //字段取别名写死
//                     where: {
//                         'DT': {
//                             $between: [time1, time2]
//                         }
//                     },
//                     order:[['DT','ASC']]
//                 }).then(function (result) {
//                     var jsonResult = underscore.pluck(result, 'dataValues');
//                     underscore.map(jsonResult, function (item) {                     //取整
//                         item.TS = item.TS.toFixed(2);
//                         item.DT = moment(item.DT).utc().format('YYYY-MM-DD hh:mm:ss');
//                     });
//                     resultObj.obj = jsonResult;
//                     resultObj.retcode = 200;
//                     res.send(resultObj);
//                 }).catch(function (error) {
//                     resultObj.msg.prompt = '系统内部错误';
//                     resultObj.msg.error = error.message;
//                     resultObj.retcode = 500;
//                     res.send(resultObj);
//                 });
//                 break;
//             case '03':
//                 tjModel.findAll({
//                     attributes: [[charB[0], 'TS'], 'DT'],  //字段取别名写死
//                     where: {
//                         'DT': {
//                             $between: [time1, time2]
//                         }
//                     },
//                     order:[['DT','ASC']]
//                 }).then(function (result) {
//                     var jsonResult = underscore.pluck(result, 'dataValues');
//                     underscore.map(jsonResult, function (item) {                     //取整
//                         item.TS = item.TS.toFixed(2);
//                         item.DT = moment(item.DT).utc().format('YYYY-MM-DD hh:mm:ss');
//                     });
//                     resultObj.obj = jsonResult;
//                     resultObj.retcode = 200;
//                     res.send(resultObj);
//                 }).catch(function (error) {
//                     resultObj.msg.prompt = '系统内部错误';
//                     resultObj.msg.error = error.message;
//                     resultObj.retcode = 500;
//                     res.send(resultObj);
//                 });
//                 break;
//             case '04':
//                 xsModel.findAll({
//                     attributes: [[charB[0], 'TS'], 'DT'],  //字段取别名写死
//                     where: {
//                         'DT': {
//                             $between: [time1, time2]
//                         }
//                     },
//                     order:[['DT','ASC']]
//                 }).then(function (result) {
//                     var jsonResult = underscore.pluck(result, 'dataValues');
//                     underscore.map(jsonResult, function (item) {                     //取整
//                         item.TS = item.TS.toFixed(2);
//                         item.DT = moment(item.DT).utc().format('YYYY-MM-DD hh:mm:ss');
//                     });
//                     resultObj.obj = jsonResult;
//                     resultObj.retcode = 200;
//                     res.send(resultObj);
//                 }).catch(function (error) {
//                     resultObj.msg.prompt = '系统内部错误';
//                     resultObj.msg.error = error.message;
//                     resultObj.retcode = 500;
//                     res.send(resultObj);
//                 });
//                 break;
//             case '05':
//                 yqModel.findAll({
//                     attributes: [[charB[0], 'TS'], 'DT'],  //字段取别名写死
//                     where: {
//                         'DT': {
//                             $between: [time1, time2]
//                         }
//                     },
//                     order:[['DT','ASC']]
//                 }).then(function (result) {
//                     var jsonResult = underscore.pluck(result, 'dataValues');
//                     underscore.map(jsonResult, function (item) {                     //取整
//                         item.TS = item.TS.toFixed(2);
//                         item.DT = moment(item.DT).utc().format('YYYY-MM-DD hh:mm:ss');
//                     });
//                     resultObj.obj = jsonResult;
//                     resultObj.retcode = 200;
//                     res.send(resultObj);
//                 }).catch(function (error) {
//                     resultObj.msg.prompt = '系统内部错误';
//                     resultObj.msg.error = error.message;
//                     resultObj.retcode = 500;
//                     res.send(resultObj);
//                 });
//                 break;
//             case '06':
//                 rqModel.findAll({
//                     attributes: [[charB[0], 'TS'], 'DT'],  //字段取别名写死
//                     where: {
//                         'DT': {
//                             $between: [time1, time2]
//                         }
//                     },
//                     order:[['DT','ASC']]
//                 }).then(function (result) {
//                     var jsonResult = underscore.pluck(result, 'dataValues');
//                     console.log(jsonResult)
//                     underscore.map(jsonResult, function (item) {//取整
//                         item.TS = item.TS.toFixed(2);
//                         item.DT = moment(item.DT).utc().format('YYYY-MM-DD hh:mm:ss');
//                     });
//                     resultObj.obj = jsonResult;
//                     resultObj.retcode = 200;
//                     res.send(resultObj);
//                 }).catch(function (error) {
//                     resultObj.msg.prompt = '系统内部错误';
//                     resultObj.msg.error = error.message;
//                     resultObj.retcode = 500;
//                     res.send(resultObj);
//                 });
//                 break;
//             case '07':
//                 zsModel.findAll({
//                     attributes: [[charB[0], 'TS'], 'DT'],  //字段取别名写死
//                     where: {
//                         'DT': {
//                             $between: [time1, time2]
//                         }
//                     },
//                     order:[['DT','ASC']]
//                 }).then(function (result) {
//                     var jsonResult = underscore.pluck(result, 'dataValues');
//                     underscore.map(jsonResult, function (item) {                     //取整
//                         item.TS = item.TS.toFixed(2);
//                         item.DT = moment(item.DT).utc().format('YYYY-MM-DD hh:mm:ss');
//                     });
//                     resultObj.obj = jsonResult;
//                     resultObj.retcode = 200;
//                     res.send(resultObj);
//                 }).catch(function (error) {
//                     resultObj.msg.prompt = '系统内部错误';
//                     resultObj.msg.error = error.message;
//                     resultObj.retcode = 500;
//                     res.send(resultObj);
//                 });
//                 break;
//             case '08':
//                 xyModel.findAll({
//                     attributes: [[charB[0], 'TS'], 'DT']  //字段取别名写死
//                     , where: {
//                         'DT': {
//                             $between: [time1, time2]
//                         }
//                     },
//                     order:[['DT','ASC']]
//                 }).then(function (result) {
//                     var jsonResult = underscore.pluck(result, 'dataValues');
//                     underscore.map(jsonResult, function (item) {                     //取整
//                         item.TS = item.TS.toFixed(2);
//                         item.DT = moment(item.DT).utc().format('YYYY-MM-DD hh:mm:ss');
//                     });
//                     resultObj.obj = jsonResult;
//                     resultObj.retcode = 200;
//                     res.send(resultObj);
//                 }).catch(function (error) {
//                     resultObj.msg.prompt = '系统内部错误';
//                     resultObj.msg.error = error.message;
//                     resultObj.retcode = 500;
//                     res.send(resultObj);
//                 });
//                 break;
//             case '09':
//                 qsModel.findAll({
//                     attributes: [[charB[0], 'TS'], 'DT']  //字段取别名写死
//                     ,where:{
//                         'DT': {
//                             $between: [time1, time2]
//                         }
//                     },
//                     order:[['DT','ASC']]
//                 }).then(function (result) {
//                     var jsonResult = underscore.pluck(result, 'dataValues');
//                     underscore.map(jsonResult, function (item) {                     //取整
//                         item.TS = item.TS.toFixed(2);
//                         item.DT = moment(item.DT).utc().format('YYYY-MM-DD hh:mm:ss');
//                     });
//                     resultObj.obj = jsonResult;
//                     resultObj.retcode = 200;
//                     res.send(resultObj);
//                 }).catch(function (error) {
//                     resultObj.msg.prompt = '系统内部错误';
//                     resultObj.msg.error = error.message;
//                     resultObj.retcode = 500;
//                     res.send(resultObj);
//                 });
//                 break;
//             case '10':
//                 sqModel.findAll({
//                     attributes: [[charB[0], 'TS'], 'DT']  //字段取别名写死
//                     ,where:{
//                         'DT': {
//                             $between: [time1, time2]
//                         }
//                     },
//                     order:[['DT','ASC']]
//                 }).then(function (result) {
//                     var jsonResult = underscore.pluck(result, 'dataValues');
//                     underscore.map(jsonResult, function (item) {                     //取整
//                         item.TS = item.TS.toFixed(2);
//                         item.DT = moment(item.DT).utc().format('YYYY-MM-DD hh:mm:ss');
//                     });
//                     resultObj.obj = jsonResult;
//                     resultObj.retcode = 200;
//                     res.send(resultObj);
//                 }).catch(function (error) {
//                     resultObj.msg.prompt = '系统内部错误';
//                     resultObj.msg.error = error.message;
//                     resultObj.retcode = 500;
//                     res.send(resultObj);
//                 });
//                 break;
//             case '11':
//                 xylModel.findAll({
//                     attributes: [[charB[0], 'TS'], 'DT'],  //字段取别名写死
//                     where:{
//                         'DT': {
//                             $between: [time1, time2]
//                         }
//                     },
//                     order:[['DT','ASC']]
//                 }).then(function (result) {
//                     var jsonResult = underscore.pluck(result, 'dataValues');
//                     underscore.map(jsonResult, function (item) {                     //取整
//                         item.TS = item.TS.toFixed(2);
//                         item.DT = moment(item.DT).utc().format('YYYY-MM-DD hh:mm:ss');
//                     });
//                     resultObj.obj = jsonResult;
//                     resultObj.retcode = 200;
//                     res.send(resultObj);
//                 }).catch(function (error) {
//                     resultObj.msg.prompt = '系统内部错误';
//                     resultObj.msg.error = error.message;
//                     resultObj.retcode = 500;
//                     res.send(resultObj);
//                 });
//                 break;
//         }
//     });
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
 * Created by snoopy on 2018/7/6
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
var qsModel = require('../models/index').QS;
var sqModel = require('../models/index').SQ;
var xylModel = require('../models/index').XYL;
var xyModel = require('../models/index').XY;
var transformerModel = require('../models/index').transformer_key;
var moment = require('moment');
var eleMonitor = module.exports = {};
var underscore = require('underscore');
var helper = require('../helpers/helpers');
const xl = require('xlsx');

eleMonitor.search = async function (params, res) {
    let resultObj = JSON.parse(JSON.stringify(helper.API_RESULT_MODEL));
    try {
        console.log(params);
        const home = params.home;
        const key = params.key;
        const time1 = params.time1;
        const time2 = params.time2;

        let searchObj = {                    //通过key表找出相应字段名
            attributes: ['value'],
            where: {
                key: key
            },
            raw: true
        };
        let firstRes = await transformerModel.findAll(searchObj);
        let charB = [];
        for (let i = 0; i < firstRes.length; i++) {
            charB[i] = firstRes[i].value;      //转为数组格式
        }
        searchObj = {
            attributes: [[charB[0], 'TS'], 'DT'],  //字段取别名写死
            where: {
                'DT': {
                    $between: [time1, time2]
                }
            },
            order: [['DT', 'ASC']],
            raw: true
        };
        let jsonResult;
        if (home === '00') {
            jsonResult = await tsModel.findAll(searchObj);
        } else if (home === '01') {
            jsonResult = await trModel.findAll(searchObj);
        } else if (home === '02') {
            jsonResult = await tdModel.findAll(searchObj);
        } else if (home === '03') {
            jsonResult = await tjModel.findAll(searchObj);
        } else if (home === '04') {
            jsonResult = await xsModel.findAll(searchObj);
        } else if (home === '05') {
            jsonResult = await yqModel.findAll(searchObj);
        } else if (home === '06') {
            jsonResult = await rqModel.findAll(searchObj);
        } else if (home === '07') {
            jsonResult = await zsModel.findAll(searchObj);
        } else if (home === '08') {
            jsonResult = await xyModel.findAll(searchObj);
        } else if (home === '09') {
            jsonResult = await qsModel.findAll(searchObj);
        } else if (home === '10') {
            jsonResult = await sqModel.findAll(searchObj);
        } else if (home === '11') {
            jsonResult = await xylModel.findAll(searchObj);
        }
        console.log(jsonResult);
        if (jsonResult.length) {
            underscore.map(jsonResult, function (item) {                     //取整
                item.TS = item.TS.toFixed(2);
                item.DT = moment(item.DT).utc().format('YYYY-MM-DD hh:mm:ss');
            });
            resultObj.obj = jsonResult;
            resultObj.retcode = 200;
            res.send(resultObj);
        } else {
            resultObj.obj = jsonResult;
            resultObj.prompt = "暂无数据";
            resultObj.retcode = 200;
            res.send(resultObj);
        }


    }
    catch (error) {

        resultObj.msg.prompt = '系统内部错误';
        resultObj.msg.error = error.message;
        resultObj.retcode = 500;
        res.send(resultObj);
    }
};

eleMonitor.getEleMonitorList = async function (params, res) {
    const resultObj = JSON.parse(JSON.stringify(helper.API_RESULT_MODEL));
    try {
        const key = params.key.split(',');
        const home = params.home;
        let searchObj = {                    //通过key表找出相应字段名
            attributes: ['value'],
            where: {
                key: key
            },
            raw: true
        };
        const keyResult = await transformerModel.findAll(searchObj);
        const valueChar = [];
        underscore.map(keyResult, function (item) {
            valueChar.push(item.value);
        });
        valueChar.push('DT');

        searchObj = {
            attributes: [[valueChar[0], 'TS'], [valueChar[1], 'TS1'], [valueChar[2], 'TS2'], [valueChar[3], 'TS3'], [valueChar[4], 'DT4'], [valueChar[5], 'DT5']],
            order: [['DT', 'DESC']],
            raw: true
        };
        let jsonResult;
        if (home === '00') {
            jsonResult = await tsModel.findOne(searchObj);
        } else if (home === '01') {
            jsonResult = await trModel.findOne(searchObj);
        } else if (home === '02') {
            jsonResult = await tdModel.findOne(searchObj);
        } else if (home === '03') {
            jsonResult = await tjModel.findOne(searchObj);
        } else if (home === '04') {
            jsonResult = await xsModel.findOne(searchObj);
        } else if (home === '05') {
            jsonResult = await yqModel.findOne(searchObj);
        } else if (home === '06') {
            jsonResult = await rqModel.findOne(searchObj);
        } else if (home === '07') {
            jsonResult = await zsModel.findOne(searchObj);
        } else if (home === '08') {
            jsonResult = await xyModel.findOne(searchObj);
        } else if (home === '09') {
            jsonResult = await qsModel.findOne(searchObj);
        } else if (home === '10') {
            jsonResult = await sqModel.findOne(searchObj);
        } else if (home === '11') {
            jsonResult = await xylModel.findOne(searchObj);
        }

        if(jsonResult.length){
            jsonResult.DT = (moment(jsonResult.DT).utc().format('YYYY-MM-DD HH:mm:ss'));
        }
        resultObj.obj.data = jsonResult;
        resultObj.retcode = 200;
        res.send(resultObj);

    }
    catch (e) {
        console.error(e);
        resultObj.msg.prompt = '系统内部错误';
        resultObj.msg.error = e.message;
        resultObj.retcode = 500;
        res.send(resultObj);
    }


};

eleMonitor.exportMonitorExcel = async function (params, res) {
    const resultObj = JSON.parse(JSON.stringify(helper.API_RESULT_MODEL));
    try {
        const home = params.home;
        const key = params.key;
        const time1 = params.time1;
        const time2 = params.time2;

        let searchObj = {                    //通过key表找出相应字段名
            attributes: ['value'],
            where: {
                key: key
            },
            raw: true
        };
        const firstRes = await transformerModel.findAll(searchObj);
        let charB = [];
        for (let i = 0; i < firstRes.length; i++) {
            charB[i] = firstRes[i].value;      //转为数组格式
        }
        searchObj = {
            attributes: [[charB[0], 'TS'], 'DT'],  //字段取别名写死
            where: {
                'DT': {
                    $between: [time1, time2]
                }
            },
            order: [['DT', 'ASC']],
            raw: true
        };
        let jsonResult;
        if (home === '00') {
            jsonResult = await tsModel.findAll(searchObj);
        } else if (home === '01') {
            jsonResult = await trModel.findAll(searchObj);
        } else if (home === '02') {
            jsonResult = await tdModel.findAll(searchObj);
        } else if (home === '03') {
            jsonResult = await tjModel.findAll(searchObj);
        } else if (home === '04') {
            jsonResult = await xsModel.findAll(searchObj);
        } else if (home === '05') {
            jsonResult = await yqModel.findAll(searchObj);
        } else if (home === '06') {
            jsonResult = await rqModel.findAll(searchObj);
        } else if (home === '07') {
            jsonResult = await zsModel.findAll(searchObj);
        } else if (home === '08') {
            jsonResult = await xyModel.findAll(searchObj);
        } else if (home === '09') {
            jsonResult = await qsModel.findAll(searchObj);
        } else if (home === '10') {
            jsonResult = await sqModel.findAll(searchObj);
        } else if (home === '11') {
            jsonResult = await xylModel.findAll(searchObj);
        }
        if (jsonResult.length) {
            underscore.map(jsonResult, function (item) {                     //取整
                item.TS = item.TS.toFixed(2);
                item.DT = moment(item.DT).utc().format('YYYY-MM-DD hh:mm:ss');
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
        }
        else{
            resultObj.obj.blob = null;
            resultObj.retcode = 200;
            res.json(resultObj);
        }
    }
    catch (error) {
        resultObj.msg.prompt = '系统内部错误';
        resultObj.msg.error = error.message;
        resultObj.retcode = 500;
        res.send(resultObj);
    }
};


//
//
//     transformerModel.findAll({                    //通过key表找出相应字段名
//         attributes: ['value'],
//         where: {
//             key: key
//         }
//     }).then(function (row) {
//         var charB = [];
//         var firstRes = underscore.pluck(row, 'dataValues');
//         for (var i = 0; i < firstRes.length; i++) {
//             charB[i] = firstRes[i].value;      //转为数组格式
//         }
//         //判断配电所
//         switch (home) {
//             case '00':
//                 tsModel.findAll({
//                     attributes: [[charB[0], 'TS'], 'DT'],
//                     where: {
//                         'DT': {
//                             $between: [time1, time2]
//                         }
//                     },
//                     order:[['DT','ASC']]
//                 }).then(function (result) {
//                     var jsonResult = underscore.pluck(result, 'dataValues');
//                     underscore.map(jsonResult, function (item) {                     //取整
//                         item.TS = item.TS.toFixed(2);
//                         item.DT = moment(item.DT).utc().format('YYYY-MM-DD hh:mm:ss');
//                     });
//                     resultObj.obj = jsonResult;
//                     resultObj.retcode = 200;
//                     res.send(resultObj);
//                 }).catch(function (error) {
//                     resultObj.msg.prompt = '系统内部错误';
//                     resultObj.msg.error = error.message;
//                     resultObj.retcode = 500;
//                     res.send(resultObj);
//                 });
//                 break;
//             case '01':
//                 trModel.findAll({
//                     attributes: [[charB[0], 'TS'], 'DT'],
//                     where: {
//                         'DT': {
//                             $between: [time1, time2]
//                         }
//                     },
//                     order:[['DT','ASC']]
//                 }).then(function (result) {
//                     var jsonResult = underscore.pluck(result, 'dataValues');
//                     underscore.map(jsonResult, function (item) {                     //取整
//                         item.TS = item.TS.toFixed(2);
//                         item.DT = moment(item.DT).utc().format('YYYY-MM-DD hh:mm:ss');
//                     });
//                     resultObj.obj = jsonResult;
//                     resultObj.retcode = 200;
//                     res.send(resultObj);
//                 }).catch(function (error) {
//                     resultObj.msg.prompt = '系统内部错误';
//                     resultObj.msg.error = error.message;
//                     resultObj.retcode = 500;
//                     res.send(resultObj);
//                 });
//                 break;
//             case '02':
//                 tdModel.findAll({
//                     attributes: [[charB[0], 'TS'], 'DT'],  //字段取别名写死
//                     where: {
//                         'DT': {
//                             $between: [time1, time2]
//                         }
//                     },
//                     order:[['DT','ASC']]
//                 }).then(function (result) {
//                     var jsonResult = underscore.pluck(result, 'dataValues');
//                     underscore.map(jsonResult, function (item) {                     //取整
//                         item.TS = item.TS.toFixed(2);
//                         item.DT = moment(item.DT).utc().format('YYYY-MM-DD hh:mm:ss');
//                     });
//                     resultObj.obj = jsonResult;
//                     resultObj.retcode = 200;
//                     res.send(resultObj);
//                 }).catch(function (error) {
//                     resultObj.msg.prompt = '系统内部错误';
//                     resultObj.msg.error = error.message;
//                     resultObj.retcode = 500;
//                     res.send(resultObj);
//                 });
//                 break;
//             case '03':
//                 tjModel.findAll({
//                     attributes: [[charB[0], 'TS'], 'DT'],  //字段取别名写死
//                     where: {
//                         'DT': {
//                             $between: [time1, time2]
//                         }
//                     },
//                     order:[['DT','ASC']]
//                 }).then(function (result) {
//                     var jsonResult = underscore.pluck(result, 'dataValues');
//                     underscore.map(jsonResult, function (item) {                     //取整
//                         item.TS = item.TS.toFixed(2);
//                         item.DT = moment(item.DT).utc().format('YYYY-MM-DD hh:mm:ss');
//                     });
//                     resultObj.obj = jsonResult;
//                     resultObj.retcode = 200;
//                     res.send(resultObj);
//                 }).catch(function (error) {
//                     resultObj.msg.prompt = '系统内部错误';
//                     resultObj.msg.error = error.message;
//                     resultObj.retcode = 500;
//                     res.send(resultObj);
//                 });
//                 break;
//             case '04':
//                 xsModel.findAll({
//                     attributes: [[charB[0], 'TS'], 'DT'],  //字段取别名写死
//                     where: {
//                         'DT': {
//                             $between: [time1, time2]
//                         }
//                     },
//                     order:[['DT','ASC']]
//                 }).then(function (result) {
//                     var jsonResult = underscore.pluck(result, 'dataValues');
//                     underscore.map(jsonResult, function (item) {                     //取整
//                         item.TS = item.TS.toFixed(2);
//                         item.DT = moment(item.DT).utc().format('YYYY-MM-DD hh:mm:ss');
//                     });
//                     resultObj.obj = jsonResult;
//                     resultObj.retcode = 200;
//                     res.send(resultObj);
//                 }).catch(function (error) {
//                     resultObj.msg.prompt = '系统内部错误';
//                     resultObj.msg.error = error.message;
//                     resultObj.retcode = 500;
//                     res.send(resultObj);
//                 });
//                 break;
//             case '05':
//                 yqModel.findAll({
//                     attributes: [[charB[0], 'TS'], 'DT'],  //字段取别名写死
//                     where: {
//                         'DT': {
//                             $between: [time1, time2]
//                         }
//                     },
//                     order:[['DT','ASC']]
//                 }).then(function (result) {
//                     var jsonResult = underscore.pluck(result, 'dataValues');
//                     underscore.map(jsonResult, function (item) {                     //取整
//                         item.TS = item.TS.toFixed(2);
//                         item.DT = moment(item.DT).utc().format('YYYY-MM-DD hh:mm:ss');
//                     });
//                     resultObj.obj = jsonResult;
//                     resultObj.retcode = 200;
//                     res.send(resultObj);
//                 }).catch(function (error) {
//                     resultObj.msg.prompt = '系统内部错误';
//                     resultObj.msg.error = error.message;
//                     resultObj.retcode = 500;
//                     res.send(resultObj);
//                 });
//                 break;
//             case '06':
//                 rqModel.findAll({
//                     attributes: [[charB[0], 'TS'], 'DT'],  //字段取别名写死
//                     where: {
//                         'DT': {
//                             $between: [time1, time2]
//                         }
//                     },
//                     order:[['DT','ASC']]
//                 }).then(function (result) {
//                     var jsonResult = underscore.pluck(result, 'dataValues');
//                     console.log(jsonResult)
//                     underscore.map(jsonResult, function (item) {//取整
//                         item.TS = item.TS.toFixed(2);
//                         item.DT = moment(item.DT).utc().format('YYYY-MM-DD hh:mm:ss');
//                     });
//                     resultObj.obj = jsonResult;
//                     resultObj.retcode = 200;
//                     res.send(resultObj);
//                 }).catch(function (error) {
//                     resultObj.msg.prompt = '系统内部错误';
//                     resultObj.msg.error = error.message;
//                     resultObj.retcode = 500;
//                     res.send(resultObj);
//                 });
//                 break;
//             case '07':
//                 zsModel.findAll({
//                     attributes: [[charB[0], 'TS'], 'DT'],  //字段取别名写死
//                     where: {
//                         'DT': {
//                             $between: [time1, time2]
//                         }
//                     },
//                     order:[['DT','ASC']]
//                 }).then(function (result) {
//                     var jsonResult = underscore.pluck(result, 'dataValues');
//                     underscore.map(jsonResult, function (item) {                     //取整
//                         item.TS = item.TS.toFixed(2);
//                         item.DT = moment(item.DT).utc().format('YYYY-MM-DD hh:mm:ss');
//                     });
//                     resultObj.obj = jsonResult;
//                     resultObj.retcode = 200;
//                     res.send(resultObj);
//                 }).catch(function (error) {
//                     resultObj.msg.prompt = '系统内部错误';
//                     resultObj.msg.error = error.message;
//                     resultObj.retcode = 500;
//                     res.send(resultObj);
//                 });
//                 break;
//             case '08':
//                 xyModel.findAll({
//                     attributes: [[charB[0], 'TS'], 'DT']  //字段取别名写死
//                     , where: {
//                         'DT': {
//                             $between: [time1, time2]
//                         }
//                     },
//                     order:[['DT','ASC']]
//                 }).then(function (result) {
//                     var jsonResult = underscore.pluck(result, 'dataValues');
//                     underscore.map(jsonResult, function (item) {                     //取整
//                         item.TS = item.TS.toFixed(2);
//                         item.DT = moment(item.DT).utc().format('YYYY-MM-DD hh:mm:ss');
//                     });
//                     resultObj.obj = jsonResult;
//                     resultObj.retcode = 200;
//                     res.send(resultObj);
//                 }).catch(function (error) {
//                     resultObj.msg.prompt = '系统内部错误';
//                     resultObj.msg.error = error.message;
//                     resultObj.retcode = 500;
//                     res.send(resultObj);
//                 });
//                 break;
//             case '09':
//                 qsModel.findAll({
//                     attributes: [[charB[0], 'TS'], 'DT']  //字段取别名写死
//                     ,where:{
//                         'DT': {
//                             $between: [time1, time2]
//                         }
//                     },
//                     order:[['DT','ASC']]
//                 }).then(function (result) {
//                     var jsonResult = underscore.pluck(result, 'dataValues');
//                     underscore.map(jsonResult, function (item) {                     //取整
//                         item.TS = item.TS.toFixed(2);
//                         item.DT = moment(item.DT).utc().format('YYYY-MM-DD hh:mm:ss');
//                     });
//                     resultObj.obj = jsonResult;
//                     resultObj.retcode = 200;
//                     res.send(resultObj);
//                 }).catch(function (error) {
//                     resultObj.msg.prompt = '系统内部错误';
//                     resultObj.msg.error = error.message;
//                     resultObj.retcode = 500;
//                     res.send(resultObj);
//                 });
//                 break;
//             case '10':
//                 sqModel.findAll({
//                     attributes: [[charB[0], 'TS'], 'DT']  //字段取别名写死
//                     ,where:{
//                         'DT': {
//                             $between: [time1, time2]
//                         }
//                     },
//                     order:[['DT','ASC']]
//                 }).then(function (result) {
//                     var jsonResult = underscore.pluck(result, 'dataValues');
//                     underscore.map(jsonResult, function (item) {                     //取整
//                         item.TS = item.TS.toFixed(2);
//                         item.DT = moment(item.DT).utc().format('YYYY-MM-DD hh:mm:ss');
//                     });
//                     resultObj.obj = jsonResult;
//                     resultObj.retcode = 200;
//                     res.send(resultObj);
//                 }).catch(function (error) {
//                     resultObj.msg.prompt = '系统内部错误';
//                     resultObj.msg.error = error.message;
//                     resultObj.retcode = 500;
//                     res.send(resultObj);
//                 });
//                 break;
//             case '11':
//                 xylModel.findAll({
//                     attributes: [[charB[0], 'TS'], 'DT'],  //字段取别名写死
//                     where:{
//                         'DT': {
//                             $between: [time1, time2]
//                         }
//                     },
//                     order:[['DT','ASC']]
//                 }).then(function (result) {
//                     var jsonResult = underscore.pluck(result, 'dataValues');
//                     underscore.map(jsonResult, function (item) {                     //取整
//                         item.TS = item.TS.toFixed(2);
//                         item.DT = moment(item.DT).utc().format('YYYY-MM-DD hh:mm:ss');
//                     });
//                     resultObj.obj = jsonResult;
//                     resultObj.retcode = 200;
//                     res.send(resultObj);
//                 }).catch(function (error) {
//                     resultObj.msg.prompt = '系统内部错误';
//                     resultObj.msg.error = error.message;
//                     resultObj.retcode = 500;
//                     res.send(resultObj);
//                 });
//                 break;
//         }
//     });
>>>>>>> dedd623 (first)
>>>>>>> 19b8a9c (first)
>>>>>>> 8f5179a (first)
>>>>>>> 87a8fdf (first)
>>>>>>> 1e8021d (first)
>>>>>>> 5938de4 (first)
>>>>>>> c55f785 (first)
// };