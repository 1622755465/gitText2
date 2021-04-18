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
 * Created by snoopy on 2018/5/26
 */
var Express = require('express');
var underscore = require('underscore');
var Router = Express.Router();
var Promise = require('bluebird');
var TS1Model = require('../services/models/index').TS_1;
var TS2Model = require('../services/models/index').TS_2;


//V_level:电压等级，V_count：变压器数量，ZJcapcity：装机容量，runcapcity:运行容量,CKcount:测控装置,activePower:有功功率，nousePower：无功功率
RESULT_MODEL = {
    "V_level": "",
    "V_count": "",
    "ZJcapcity": "",
    "runcapcity": "",
    "CKcount": "",
    "activePower": "",
    "nousePower": ""
};
Router.use('/', function (req, res, next) {
    Promise.all([
        TS2Model.findAll({
            attributes: ["TS494"],
            where: {
                TS501: {
                    $ne: null
                }
            }
        }),
        TS1Model.findAll({
            attributes: ['TS14', 'TS15'],
        })
    ]).then(function (result) {
        var TS2_result = underscore.pluck(result[0], 'dataValues');
        var TS1_result = underscore.pluck(result[1], 'dataValues');
        RESULT_MODEL.V_level = (TS2_result[0].TS1000);
        RESULT_MODEL.V_count = (TS2_result[0].TS1001);
        RESULT_MODEL.ZJcapcity = (TS2_result[0].TS1002);
        RESULT_MODEL.runcapcity = (TS2_result[0].TS1003);
        RESULT_MODEL.CKcount = (TS2_result[0].TS1004);
        RESULT_MODEL.activePower = (Math.floor(TS1_result[0].TS14));
        RESULT_MODEL.nousePower = (Math.floor(TS1_result[0].TS15));
        res.render('main', {
            result: RESULT_MODEL
        });
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
/**
 * Created by snoopy on 2018/5/26
 */
var Express = require('express');
var underscore = require('underscore');
var Router = Express.Router();
var Promise = require('bluebird');
var TS1Model = require('../services/models/index').TS_1;
var TS2Model = require('../services/models/index').TS_2;


//V_level:电压等级，V_count：变压器数量，ZJcapcity：装机容量，runcapcity:运行容量,CKcount:测控装置,activePower:有功功率，nousePower：无功功率
RESULT_MODEL = {
    "V_level": "",
    "V_count": "",
    "ZJcapcity": "",
    "runcapcity": "",
    "CKcount": "",
    "activePower": "",
    "nousePower": ""
};
Router.use('/', function (req, res, next) {
    Promise.all([
        TS2Model.findAll({
            attributes: ["TS494"],
            where: {
                TS501: {
                    $ne: null
                }
            }
        }),
        TS1Model.findAll({
            attributes: ['TS14', 'TS15'],
        })
    ]).then(function (result) {
        var TS2_result = underscore.pluck(result[0], 'dataValues');
        var TS1_result = underscore.pluck(result[1], 'dataValues');
        RESULT_MODEL.V_level = (TS2_result[0].TS1000);
        RESULT_MODEL.V_count = (TS2_result[0].TS1001);
        RESULT_MODEL.ZJcapcity = (TS2_result[0].TS1002);
        RESULT_MODEL.runcapcity = (TS2_result[0].TS1003);
        RESULT_MODEL.CKcount = (TS2_result[0].TS1004);
        RESULT_MODEL.activePower = (Math.floor(TS1_result[0].TS14));
        RESULT_MODEL.nousePower = (Math.floor(TS1_result[0].TS15));
        res.render('main', {
            result: RESULT_MODEL
        });
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