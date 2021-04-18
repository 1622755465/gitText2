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
var search_TS_2 = require('./search_TS_2');
var harmonic = require('./harmonic');
var station = require('./station');
var user = require('./user');
var eleMonitor = require('./eleMonitor');
var key = require('./key');
var getJson = require('./getJson');
var monthCheck = require('./monthCheck');
var AlarmInfo = require('./AlarmInfo');
var environmentInfo = require('./environmentInfo');
var type = require('./type');
var plan = require('./plan');
var ts = require('./ts');

/**
 * 业务逻辑的路由
 */
router.post('/', function (req, res, next) {

    //简单验证token
    if (req.body.token !== 'dreamtouch') {
    }

    switch (req.body.apicode) {
        case "exportHarmExcel":
            harmonic.exportHarmExcel(req.body.args,res);
            break;
        case "exportDiaryExcel":
            plan.exportDiaryExcel(req.body.args,res);
            break;
        case "exportEnvirExcel":
            environmentInfo.exportEnvirExcel(req.body.args,res);
            break;
        case "exportMonitorExcel":
            eleMonitor.exportMonitorExcel(req.body.args, res);
            break;
        case "CheckType":
            type.search(req.body.args, res);
            break;
        case "Getjson":
            getJson.get(req.body.args, res);
            break;
        case "key":
            key.electricity(req.body.args, res);
            break;
        case "TS_2":
            search_TS_2.search(req.body.args, res);
            break;
        case "ElemonitorInfo":
            eleMonitor.search(req.body.args, res);
            break;
        case "PostPowerInfo":
            harmonic.search(req.body.args, res);
            break;
        case "GetStationInfo":
            station.GetStationInfo(req.body.args, res);
            break;
        case "GetMonthCheck":
            monthCheck.search(req.body.args, res);
            break;
        case "Login":
            user.Login(req.body.args, res);
            break;
        case "AlarmInfo":
            AlarmInfo.search(req.body.args, res);
            break;
        case "AlarmBreak":
            AlarmInfo.break(req.body.args, res);
            break;
        case "environmentInfo":
            environmentInfo.search(req.body.args, res);
            break;
        case "InsertPlan":
            plan.insertPlan(req.body.args, res);
            break;
        case "CheckPlan":
            plan.checkPlan(req.body.args, res);
            break;
        case "GetAppPlan":
            plan.GetAppPlan(req.body.args, res);          //app端获得日志
            break;
        case "FinishPlan":
            plan.finishPlan(req.body.args, res);
            break;
        case "GetDiary":
            plan.getDiary(req.body.args, res);
            break;
        case "InsertDiary":
            plan.insertDiary(req.body.args, res);
            break;
        case "DeleteDairy":
            plan.deleteDairy(req.body.args, res);
            break;
        case "DeletePlan":
            plan.deletePlan(req.body.args, res);
            break;
        case "GetHarmonicList":
            harmonic.getHarmonicList(req.body.args, res);
            break;
        case "GetEleMonitorList":
            eleMonitor.getEleMonitorList(req.body.args, res);
            break;
        default:
            res.send('Undefined ApiCode!');


    }
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
var express = require('express');
var router = express.Router();
var search_TS_2 = require('./search_TS_2');
var harmonic = require('./harmonic');
var station = require('./station');
var user = require('./user');
var eleMonitor = require('./eleMonitor');
var key = require('./key');
var getJson = require('./getJson');
var monthCheck = require('./monthCheck');
var AlarmInfo = require('./AlarmInfo');
var environmentInfo = require('./environmentInfo');
var type = require('./type');
var plan = require('./plan');
var ts = require('./ts');

/**
 * 业务逻辑的路由
 */
router.post('/', function (req, res, next) {

    //简单验证token
    if (req.body.token !== 'dreamtouch') {
    }

    switch (req.body.apicode) {
        case "exportHarmExcel":
            harmonic.exportHarmExcel(req.body.args,res);
            break;
        case "exportDiaryExcel":
            plan.exportDiaryExcel(req.body.args,res);
            break;
        case "exportEnvirExcel":
            environmentInfo.exportEnvirExcel(req.body.args,res);
            break;
        case "exportMonitorExcel":
            eleMonitor.exportMonitorExcel(req.body.args, res);
            break;
        case "CheckType":
            type.search(req.body.args, res);
            break;
        case "Getjson":
            getJson.get(req.body.args, res);
            break;
        case "key":
            key.electricity(req.body.args, res);
            break;
        case "TS_2":
            search_TS_2.search(req.body.args, res);
            break;
        case "ElemonitorInfo":
            eleMonitor.search(req.body.args, res);
            break;
        case "PostPowerInfo":
            harmonic.search(req.body.args, res);
            break;
        case "GetStationInfo":
            station.GetStationInfo(req.body.args, res);
            break;
        case "GetMonthCheck":
            monthCheck.search(req.body.args, res);
            break;
        case "Login":
            user.Login(req.body.args, res);
            break;
        case "AlarmInfo":
            AlarmInfo.search(req.body.args, res);
            break;
        case "AlarmBreak":
            AlarmInfo.break(req.body.args, res);
            break;
        case "environmentInfo":
            environmentInfo.search(req.body.args, res);
            break;
        case "InsertPlan":
            plan.insertPlan(req.body.args, res);
            break;
        case "CheckPlan":
            plan.checkPlan(req.body.args, res);
            break;
        case "GetAppPlan":
            plan.GetAppPlan(req.body.args, res);          //app端获得日志
            break;
        case "FinishPlan":
            plan.finishPlan(req.body.args, res);
            break;
        case "GetDiary":
            plan.getDiary(req.body.args, res);
            break;
        case "InsertDiary":
            plan.insertDiary(req.body.args, res);
            break;
        case "DeleteDairy":
            plan.deleteDairy(req.body.args, res);
            break;
        case "DeletePlan":
            plan.deletePlan(req.body.args, res);
            break;
        case "GetHarmonicList":
            harmonic.getHarmonicList(req.body.args, res);
            break;
        case "GetEleMonitorList":
            eleMonitor.getEleMonitorList(req.body.args, res);
            break;
        default:
            res.send('Undefined ApiCode!');


    }
});

>>>>>>> dedd623 (first)
>>>>>>> 19b8a9c (first)
>>>>>>> 8f5179a (first)
>>>>>>> 87a8fdf (first)
>>>>>>> 1e8021d (first)
>>>>>>> 5938de4 (first)
>>>>>>> c55f785 (first)
module.exports = router;