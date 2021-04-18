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
var Express = require('express');
var Router = Express.Router();
var underscore = require('underscore');
var eleT1Model = require('../services/models/index').TS_1;
var eleT2Model = require('../services/models/index').TS_2;


//S_Power_Result:视在功率，FH：负荷率，P_Power_Result：有功功率，Q_Power_Result：无功功率，PF：功率因素，fIa,fIb,fIc:三相电流,
Result_Model = {
    "S_Power_Result": "",
    "FH": "",
    "P_Power_Result": "",
    "Q_Power_Result": "",
    "PF": "",
    "fIa": "",
    "fIb": "",
    "fIc": "",
    "Ua": "",
    "Ub": "",
    "Uc": "",
    "tempA":"",
    "tempB":"",
    "tempC":"",
    "CW":"",
    "FX":"",
    "TZ":"",
    "C":"",
    "B":"",
    "A":""
};
Router.get('/', function (req, res, next) {
    Promise.all([
        eleT1Model.findAll({
            attributes: ['TS16', 'dt', 'TS14', 'TS15', 'TS17', 'TS7', 'TS8', 'TS9', 'TS1', 'TS2', 'TS3'],
        }),
        eleT2Model.findAll({
            attributes: ['TS544', 'TS545', 'TS546','TS550','TS551','TS552','TS553','TS554','TS555']
        })
    ]).then(function (result) {
        var jsonResult1 = underscore.pluck(result[0], 'dataValues');
        var jsonResult2 = underscore.pluck(result[1], 'dataValues');
        underscore.map(jsonResult1, function (item) {
            Result_Model.S_Power_Result=Math.floor(item.TS16);
            Result_Model.FH=(item.TS16/50).toFixed(2);
            Result_Model.P_Power_Result=Math.floor(item.TS14);
            Result_Model.Q_Power_Result=Math.floor(item.TS15);
            Result_Model.PF=(item.TS17).toFixed(2);
            Result_Model.fIa=Math.floor(item.TS7);
            Result_Model.fIb=Math.floor(item.TS8);
            Result_Model.fIc=Math.floor(item.TS9);
            Result_Model.Ua=Math.floor(item.TS1);
            Result_Model.Ub=Math.floor(item.TS2);
            Result_Model.Uc=Math.floor(item.TS3);
        });
            underscore.map(jsonResult2, function (item) {
            Result_Model.tempA=Math.floor(item.TS544);
            Result_Model.tempB=Math.floor(item.TS545);
            Result_Model.tempC=Math.floor(item.TS546);
            Result_Model.TZ=(item.TS550);
            Result_Model.CW=(item.TS551);
            Result_Model.FX=(item.TS552);
            Result_Model.C=(item.TS553);
            Result_Model.B=(item.TS554);
            Result_Model.A=(item.TS555);
        });
        res.render('eleMonitor', {list:Result_Model});
    }).catch(function (error) {
        console.log("error!");
        console.log(error.message);
    });

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
var Express = require('express');
var Router = Express.Router();
var underscore = require('underscore');
var eleT1Model = require('../services/models/index').TS_1;
var eleT2Model = require('../services/models/index').TS_2;


//S_Power_Result:视在功率，FH：负荷率，P_Power_Result：有功功率，Q_Power_Result：无功功率，PF：功率因素，fIa,fIb,fIc:三相电流,
Result_Model = {
    "S_Power_Result": "",
    "FH": "",
    "P_Power_Result": "",
    "Q_Power_Result": "",
    "PF": "",
    "fIa": "",
    "fIb": "",
    "fIc": "",
    "Ua": "",
    "Ub": "",
    "Uc": "",
    "tempA":"",
    "tempB":"",
    "tempC":"",
    "CW":"",
    "FX":"",
    "TZ":"",
    "C":"",
    "B":"",
    "A":""
};
Router.get('/', function (req, res, next) {
    Promise.all([
        eleT1Model.findAll({
            attributes: ['TS16', 'dt', 'TS14', 'TS15', 'TS17', 'TS7', 'TS8', 'TS9', 'TS1', 'TS2', 'TS3'],
        }),
        eleT2Model.findAll({
            attributes: ['TS544', 'TS545', 'TS546','TS550','TS551','TS552','TS553','TS554','TS555']
        })
    ]).then(function (result) {
        var jsonResult1 = underscore.pluck(result[0], 'dataValues');
        var jsonResult2 = underscore.pluck(result[1], 'dataValues');
        underscore.map(jsonResult1, function (item) {
            Result_Model.S_Power_Result=Math.floor(item.TS16);
            Result_Model.FH=(item.TS16/50).toFixed(2);
            Result_Model.P_Power_Result=Math.floor(item.TS14);
            Result_Model.Q_Power_Result=Math.floor(item.TS15);
            Result_Model.PF=(item.TS17).toFixed(2);
            Result_Model.fIa=Math.floor(item.TS7);
            Result_Model.fIb=Math.floor(item.TS8);
            Result_Model.fIc=Math.floor(item.TS9);
            Result_Model.Ua=Math.floor(item.TS1);
            Result_Model.Ub=Math.floor(item.TS2);
            Result_Model.Uc=Math.floor(item.TS3);
        });
            underscore.map(jsonResult2, function (item) {
            Result_Model.tempA=Math.floor(item.TS544);
            Result_Model.tempB=Math.floor(item.TS545);
            Result_Model.tempC=Math.floor(item.TS546);
            Result_Model.TZ=(item.TS550);
            Result_Model.CW=(item.TS551);
            Result_Model.FX=(item.TS552);
            Result_Model.C=(item.TS553);
            Result_Model.B=(item.TS554);
            Result_Model.A=(item.TS555);
        });
        res.render('eleMonitor', {list:Result_Model});
    }).catch(function (error) {
        console.log("error!");
        console.log(error.message);
    });

});
>>>>>>> dedd623 (first)
>>>>>>> 19b8a9c (first)
>>>>>>> 8f5179a (first)
>>>>>>> 87a8fdf (first)
>>>>>>> 1e8021d (first)
>>>>>>> 5938de4 (first)
>>>>>>> c55f785 (first)
module.exports = Router;