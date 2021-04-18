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
//model引用
var tsModel = require("../models/index").TS
var trModel = require("../models/index").TR
var tdModel = require("../models/index").TD
var tjModel = require("../models/index").TJ
var xsModel = require("../models/index").XS
var yqModel = require("../models/index").YQ
var rqModel = require("../models/index").RQ
var zsModel = require("../models/index").ZS
var qsModel = require("../models/index").QS
var sqModel = require("../models/index").SQ
var xylModel = require("../models/index").XYL
var xyModel = require("../models/index").XY
var electricityModel = require("../models/index").electricity_key
var xl = require('xlsx')
var harmonic = module.exports = {}
//中间件引用
var underscore = require("underscore")
var moment = require("moment")
var helper = require("../helpers/helpers")
harmonic.search = async function (params, res) {
    const resultObj = JSON.parse(JSON.stringify(helper.API_RESULT_MODEL))
    try {
        var home = params.home
        var time = params.time
        var key = params.key.split(",")        //数据切割

        let searchObj = {                    //通过key表找出相应字段名
            attributes: ['value'],
            where: {
                key: key
            },
            raw: true
        };
        let eleResult = await electricityModel.findAll(searchObj);
        let charB = [];
        for (let i = 0; i < eleResult.length; i++) {
            charB[i] = eleResult[i].value;      //转为数组格式
        }
        searchObj = {
            attributes: [[charB[0], "TS"], "DT"],
            where: {
                "DT": {
                    $between: [time + " 00:00:00", time + " 23:59:59"]
                }
            },
            order: [["DT", "ASC"]],
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

            underscore.map(jsonResult, function (item) {
                item.TS = (item.TS !== null) ? item.TS.toFixed(2) : item.TS
                item.DT = (moment(item.DT).utc().format("YYYY-MM-DD HH:mm:ss"))
            })
            resultObj.obj.data = jsonResult;
            resultObj.retcode = 200;
            res.send(resultObj);
        } else {
            resultObj.obj.data = jsonResult;
            resultObj.prompt = "暂无数据";
            resultObj.retcode = 200;
            res.send(resultObj);
        }
    }
    catch (error) {
        resultObj.msg.prompt = "系统内部错误"
        resultObj.msg.error = error.message
        resultObj.retcode = 500
        res.send(resultObj)
    }


    //判断配电所
    // switch (home) {
    // 	case "00":
    // 		tsModel.findAll({
    // 			attributes: [[charB[0], "TS"], "DT"],
    // 			where: {
    // 				"DT": {
    // 					$between: [time + " 00:00:00", time + " 23:59:59"]
    // 				}
    // 			},
    // 			order: [["DT", "ASC"]]
    // 		}).then(function (result) {
    // 			var jsonResult = underscore.pluck(result, "dataValues")
    // 			underscore.map(jsonResult, function (item) {
    // 				item.TS = (item.TS !== null) ? item.TS.toFixed(2) : item.TS
    // 				item.DT = (moment(item.DT).utc().format("YYYY-MM-DD HH:mm:ss"))
    // 			})
    // 			resultObj.obj.data = jsonResult
    // 			resultObj.retcode = 200
    // 			res.send(resultObj)
    // 		}).catch(function (error) {
    // 			resultObj.msg.prompt = "系统内部错误"
    // 			resultObj.msg.error = error.message
    // 			resultObj.retcode = 500
    // 			res.send(resultObj)
    // 		})
    // 		break
    // 	case "01":
    // 		trModel.findAll({
    // 			attributes: [[charB[0], "TS"], "DT"],
    // 			where: {
    // 				"DT": {
    // 					$between: [time + " 00:00:00", time + " 23:59:59"]
    // 				}
    // 			},
    // 			order: [["DT", "ASC"]]
    // 		}).then(function (result) {
    // 			var jsonResult = underscore.pluck(result, "dataValues")
    // 			underscore.map(jsonResult, function (item) {
    // 				item.TS = (item.TS !== null) ? item.TS.toFixed(2) : item.TS
    // 				item.DT = (moment(item.DT).utc().format("YYYY-MM-DD HH:mm:ss"))
    // 			})
    // 			resultObj.obj.data = jsonResult
    // 			resultObj.retcode = 200
    // 			res.send(resultObj)
    // 		}).catch(function (error) {
    // 			resultObj.msg.prompt = "系统内部错误"
    // 			resultObj.msg.error = error.message
    // 			resultObj.retcode = 500
    // 			res.send(resultObj)
    // 		})
    // 		break
    // 	case "02":
    // 		tdModel.findAll({
    // 			attributes: [[charB[0], "TS"], "DT"],
    // 			where: {
    // 				"DT": {
    // 					$between: [time + " 00:00:00", time + " 23:59:59"]
    // 				}
    // 			},
    // 			order: [["DT", "ASC"]]
    // 		}).then(function (result) {
    // 			var jsonResult = underscore.pluck(result, "dataValues")
    // 			underscore.map(jsonResult, function (item) {
    // 				item.TS = (item.TS !== null) ? item.TS.toFixed(2) : item.TS
    // 				item.DT = (moment(item.DT).utc().format("YYYY-MM-DD HH:mm:ss"))
    // 			})
    // 			resultObj.obj.data = jsonResult
    // 			resultObj.retcode = 200
    // 			res.send(resultObj)
    // 		}).catch(function (error) {
    // 			resultObj.msg.prompt = "系统内部错误"
    // 			resultObj.msg.error = error.message
    // 			resultObj.retcode = 500
    // 			res.send(resultObj)
    // 		})
    // 		break
    // 	case "03":
    // 		tjModel.findAll({
    // 			attributes: [[charB[0], "TS"], "DT"],
    // 			where: {
    // 				"DT": {
    // 					$between: [time + " 00:00:00", time + " 23:59:59"]
    // 				}
    // 			},
    // 			order: [["DT", "ASC"]]
    // 		}).then(function (result) {
    // 			var jsonResult = underscore.pluck(result, "dataValues")
    // 			underscore.map(jsonResult, function (item) {
    // 				item.TS = (item.TS !== null) ? item.TS.toFixed(2) : item.TS
    // 				item.DT = (moment(item.DT).utc().format("YYYY-MM-DD HH:mm:ss"))
    // 			})
    // 			resultObj.obj.data = jsonResult
    // 			resultObj.retcode = 200
    // 			res.send(resultObj)
    // 		}).catch(function (error) {
    // 			resultObj.msg.prompt = "系统内部错误"
    // 			resultObj.msg.error = error.message
    // 			resultObj.retcode = 500
    // 			res.send(resultObj)
    // 		})
    // 		break
    // 	case "04":
    // 		xsModel.findAll({
    // 			attributes: [[charB[0], "TS"], "DT"],
    // 			where: {
    // 				"DT": {
    // 					$between: [time + " 00:00:00", time + " 23:59:59"]
    // 				}
    // 			},
    // 			order: [["DT", "ASC"]]
    // 		}).then(function (result) {
    // 			var jsonResult = underscore.pluck(result, "dataValues")
    // 			underscore.map(jsonResult, function (item) {
    // 				item.TS = (item.TS !== null) ? item.TS.toFixed(2) : item.TS
    // 				item.DT = (moment(item.DT).utc().format("YYYY-MM-DD HH:mm:ss"))
    // 			})
    // 			resultObj.obj.data = jsonResult
    // 			resultObj.retcode = 200
    // 			res.send(resultObj)
    // 		}).catch(function (error) {
    // 			resultObj.msg.prompt = "系统内部错误"
    // 			resultObj.msg.error = error.message
    // 			resultObj.retcode = 500
    // 			res.send(resultObj)
    // 		})
    // 		break
    // 	case "05":
    // 		yqModel.findAll({
    // 			attributes: [[charB[0], "TS"], "DT"],
    // 			where: {
    // 				"DT": {
    // 					$between: [time + " 00:00:00", time + " 23:59:59"]
    // 				}
    // 			},
    // 			order: [["DT", "ASC"]]
    // 		}).then(function (result) {
    // 			var jsonResult = underscore.pluck(result, "dataValues")
    // 			underscore.map(jsonResult, function (item) {
    // 				item.TS = (item.TS !== null) ? item.TS.toFixed(2) : item.TS
    // 				item.DT = (moment(item.DT).utc().format("YYYY-MM-DD HH:mm:ss"))
    // 			})
    // 			resultObj.obj.data = jsonResult
    // 			resultObj.retcode = 200
    // 			res.send(resultObj)
    // 		}).catch(function (error) {
    // 			resultObj.msg.prompt = "系统内部错误"
    // 			resultObj.msg.error = error.message
    // 			resultObj.retcode = 500
    // 			res.send(resultObj)
    // 		})
    // 		break
    // 	case "06":
    // 		rqModel.findAll({
    // 			attributes: [[charB[0], "TS"], "DT"],
    // 			where: {
    // 				"DT": {
    // 					$between: [params.time + " 00:00:00", params.time + " 23:59:59"]
    // 				}
    // 			},
    // 			order: [["DT", "ASC"]]
    // 		}).then(function (result) {
    // 			var jsonResult = underscore.pluck(result, "dataValues")
    // 			underscore.map(jsonResult, function (item) {
    // 				item.TS = (item.TS !== null) ? item.TS.toFixed(2) : item.TS
    // 				item.DT = (moment(item.DT).utc().format("YYYY-MM-DD HH:mm:ss"))
    // 			})
    // 			resultObj.obj.data = jsonResult
    // 			resultObj.retcode = 200
    // 			res.send(resultObj)
    // 		}).catch(function (error) {
    // 			resultObj.msg.prompt = "系统内部错误"
    // 			resultObj.msg.error = error.message
    // 			resultObj.retcode = 500
    // 			res.send(resultObj)
    // 		})
    // 		break
    // 	case "07":
    // 		zsModel.findAll({
    // 			attributes: [[charB[0], "TS"], "DT"],
    // 			where: {
    // 				"DT": {
    // 					$between: [time + " 00:00:00", time + " 23:59:59"]
    // 				}
    // 			},
    // 			order: [["DT", "ASC"]]
    // 		}).then(function (result) {
    // 			var jsonResult = underscore.pluck(result, "dataValues")
    // 			underscore.map(jsonResult, function (item) {
    // 				item.TS = (item.TS !== null) ? item.TS.toFixed(2) : item.TS
    // 				item.DT = (moment(item.DT).utc().format("YYYY-MM-DD HH:mm:ss"))
    // 			})
    // 			resultObj.obj.data = jsonResult
    // 			resultObj.retcode = 200
    // 			res.send(resultObj)
    // 		}).catch(function (error) {
    // 			resultObj.msg.prompt = "系统内部错误"
    // 			resultObj.msg.error = error.message
    // 			resultObj.retcode = 500
    // 			res.send(resultObj)
    // 		})
    // 		break
    // 	case "08":
    // 		xyModel.findAll({
    // 			attributes: [[charB[0], "TS"], "DT"],
    // 			where: {
    // 				"DT": {
    // 					$between: [time + " 00:00:00", time + " 23:59:59"]
    // 				}
    // 			},
    // 			order: [["DT", "ASC"]]
    // 		}).then(function (result) {
    // 			var jsonResult = underscore.pluck(result, "dataValues")
    // 			underscore.map(jsonResult, function (item) {
    // 				item.TS = (item.TS !== null) ? item.TS.toFixed(2) : item.TS
    // 				item.DT = (moment(item.DT).utc().format("YYYY-MM-DD HH:mm:ss"))
    // 			})
    // 			resultObj.obj.data = jsonResult
    // 			resultObj.retcode = 200
    // 			res.send(resultObj)
    // 		}).catch(function (error) {
    // 			resultObj.msg.prompt = "系统内部错误"
    // 			resultObj.msg.error = error.message
    // 			resultObj.retcode = 500
    // 			res.send(resultObj)
    // 		})
    // 		break
    // 	case "09":
    // 		qsModel.findAll({
    // 			attributes: [[charB[0], "TS"], "DT"],
    // 			where: {
    // 				"DT": {
    // 					$between: [time + " 00:00:00", time + " 23:59:59"]
    // 				}
    // 			},
    // 			order: [["DT", "ASC"]]
    // 		}).then(function (result) {
    // 			var jsonResult = underscore.pluck(result, "dataValues")
    // 			underscore.map(jsonResult, function (item) {
    // 				item.TS = (item.TS !== null) ? item.TS.toFixed(2) : item.TS
    // 				item.DT = (moment(item.DT).utc().format("YYYY-MM-DD HH:mm:ss"))
    // 			})
    // 			resultObj.obj.data = jsonResult
    // 			resultObj.retcode = 200
    // 			res.send(resultObj)
    // 		}).catch(function (error) {
    // 			resultObj.msg.prompt = "系统内部错误"
    // 			resultObj.msg.error = error.message
    // 			resultObj.retcode = 500
    // 			res.send(resultObj)
    // 		})
    // 		break
    // 	case "10":
    // 		sqModel.findAll({
    // 			attributes: [[charB[0], "TS"], "DT"],
    // 			where: {
    // 				"DT": {
    // 					$between: [time + " 00:00:00", time + " 23:59:59"]
    // 				}
    // 			},
    // 			order: [["DT", "ASC"]]
    // 		}).then(function (result) {
    // 			var jsonResult = underscore.pluck(result, "dataValues")
    // 			underscore.map(jsonResult, function (item) {
    // 				item.TS = (item.TS !== null) ? item.TS.toFixed(2) : item.TS
    // 				item.DT = (moment(item.DT).utc().format("YYYY-MM-DD HH:mm:ss"))
    // 			})
    // 			resultObj.obj.data = jsonResult
    // 			resultObj.retcode = 200
    // 			res.send(resultObj)
    // 		}).catch(function (error) {
    // 			resultObj.msg.prompt = "系统内部错误"
    // 			resultObj.msg.error = error.message
    // 			resultObj.retcode = 500
    // 			res.send(resultObj)
    // 		})
    // 		break
    // 	case "11":
    // 		xylModel.findAll({
    // 			attributes: [[charB[0], "TS"], "DT"],
    // 			where: {
    // 				"DT": {
    // 					$between: [time + " 00:00:00", time + " 23:59:59"]
    // 				}
    // 			},
    // 			order: [["DT", "ASC"]]
    // 		}).then(function (result) {
    // 			var jsonResult = underscore.pluck(result, "dataValues")
    // 			underscore.map(jsonResult, function (item) {
    // 				item.TS = (item.TS !== null) ? item.TS.toFixed(2) : item.TS
    // 				item.DT = (moment(item.DT).utc().format("YYYY-MM-DD HH:mm:ss"))
    // 			})
    // 			resultObj.obj.data = jsonResult
    // 			resultObj.retcode = 200
    // 			res.send(resultObj)
    // 		}).catch(function (error) {
    // 			resultObj.msg.prompt = "系统内部错误"
    // 			resultObj.msg.error = error.message
    // 			resultObj.retcode = 500
    // 			res.send(resultObj)
    // 		})
    // 		break
    // 	default:
    // 		resultObj.msg.prompt = "无此配电所数据"
    // 		res.send(resultObj)
    // }
}


harmonic.getHarmonicList = function (params, res) {
    var resultObj = JSON.parse(JSON.stringify(helper.API_RESULT_MODEL))
    var key = params.key.split(",")
    electricityModel.findAll({                    //通过key表判断字段名
        attributes: ["value"],
        where: {
            key: key
        },
        order: [["key", "ASC"]]
    }).then(function (row) {
        var valueChar = []
        var keyResult = underscore.pluck(row, "dataValues")
        underscore.map(keyResult, function (item) {
            valueChar.push(item.value)
        })
        var search = {
            order: [["DT", "DESC"]]
        }
        if (params.type === 0) {
            search.attributes = [[valueChar[0], "TS"], [valueChar[1], "TS1"], [valueChar[2], "TS2"], [valueChar[3], "TS3"],
                [valueChar[4], "TS4"], [valueChar[5], "TS5"], [valueChar[6], "TS6"], [valueChar[8], "TS7"],
                [valueChar[9], "TS8"], [valueChar[10], "TS9"], [valueChar[11], "TS10"], [valueChar[12], "TS11"], "DT"]
        } else {
            search.attributes = [[valueChar[0], "TS"], [valueChar[1], "TS1"], [valueChar[2], "TS2"], [valueChar[3], "TS3"],
                [valueChar[4], "TS4"], [valueChar[5], "TS5"], [valueChar[6], "TS6"], [valueChar[7], "TS7"],
                [valueChar[8], "TS8"], [valueChar[9], "TS9"], [valueChar[10], "TS10"], [valueChar[11], "TS11"],
                [valueChar[12], "TS12"], [valueChar[13], "TS13"], [valueChar[14], "TS14"], [valueChar[15], "TS15"],
                [valueChar[0], "TS1"], [valueChar[16], "TS16"], [valueChar[17], "TS17"], [valueChar[18], "TS18"],
                [valueChar[19], "TS19"], [valueChar[20], "TS20"], [valueChar[21], "TS21"], "DT"]
        }
        switch (params.home) {
            case "00":
                tsModel.findOne(
                    search
                ).then(function (value) {
                    value.dataValues.DT = (moment(value.dataValues.DT).utc().format("YYYY-MM-DD HH:mm:ss"))
                    resultObj.obj.data = value
                    resultObj.retcode = 200
                    res.send(resultObj)
                }).catch(function (reason) {
                    resultObj.msg.prompt = "系统内部错误"
                    resultObj.msg.error = reason.message
                    resultObj.retcode = 500
                    res.send(resultObj)
                })
                break
            case "01":
                trModel.findOne(
                    search
                ).then(function (value) {
                    value.dataValues.DT = (moment(value.dataValues.DT).utc().format("YYYY-MM-DD HH:mm:ss"))
                    resultObj.obj.data = value
                    resultObj.retcode = 200
                    res.send(resultObj)
                }).catch(function (reason) {
                    resultObj.msg.prompt = "系统内部错误"
                    resultObj.msg.error = reason.message
                    resultObj.retcode = 500
                    res.send(resultObj)
                })
                break
            case "02":
                tdModel.findOne(
                    search
                ).then(function (value) {
                    value.dataValues.DT = (moment(value.dataValues.DT).utc().format("YYYY-MM-DD HH:mm:ss"))
                    resultObj.obj.data = value
                    resultObj.retcode = 200
                    res.send(resultObj)
                }).catch(function (reason) {
                    resultObj.msg.prompt = "系统内部错误"
                    resultObj.msg.error = reason.message
                    resultObj.retcode = 500
                    res.send(resultObj)
                })
                break
            case "03":
                tjModel.findOne(search).then(function (value) {
                    value.dataValues.DT = (moment(value.dataValues.DT).utc().format("YYYY-MM-DD HH:mm:ss"))
                    resultObj.obj.data = value
                    resultObj.retcode = 200
                    res.send(resultObj)
                }).catch(function (reason) {
                    resultObj.msg.prompt = "系统内部错误"
                    resultObj.msg.error = reason.message
                    resultObj.retcode = 500
                    res.send(resultObj)
                })
                break
            case "04":
                xsModel.findOne(search).then(function (value) {
                    value.dataValues.DT = (moment(value.dataValues.DT).utc().format("YYYY-MM-DD HH:mm:ss"))
                    resultObj.obj.data = value
                    resultObj.retcode = 200
                    res.send(resultObj)
                }).catch(function (reason) {
                    resultObj.msg.prompt = "系统内部错误"
                    resultObj.msg.error = reason.message
                    resultObj.retcode = 500
                    res.send(resultObj)
                })
                break
            case "05":
                yqModel.findOne(search).then(function (value) {
                    value.dataValues.DT = (moment(value.dataValues.DT).utc().format("YYYY-MM-DD HH:mm:ss"))
                    resultObj.obj.data = value
                    resultObj.retcode = 200
                    res.send(resultObj)
                }).catch(function (reason) {
                    resultObj.msg.prompt = "系统内部错误"
                    resultObj.msg.error = reason.message
                    resultObj.retcode = 500
                    res.send(resultObj)
                })
                break
            case "06":
                rqModel.findOne(search).then(function (value) {
                    value.dataValues.DT = (moment(value.dataValues.DT).utc().format("YYYY-MM-DD HH:mm:ss"))
                    resultObj.obj.data = value
                    resultObj.retcode = 200
                    res.send(resultObj)
                }).catch(function (reason) {
                    resultObj.msg.prompt = "系统内部错误"
                    resultObj.msg.error = reason.message
                    resultObj.retcode = 500
                    res.send(resultObj)
                })
                break
            case "07":
                zsModel.findOne(search).then(function (value) {
                    value.dataValues.DT = (moment(value.dataValues.DT).utc().format("YYYY-MM-DD HH:mm:ss"))
                    resultObj.obj.data = value
                    resultObj.retcode = 200
                    res.send(resultObj)
                }).catch(function (reason) {
                    resultObj.msg.prompt = "系统内部错误"
                    resultObj.msg.error = reason.message
                    resultObj.retcode = 500
                    res.send(resultObj)
                })
                break
            case "08":
                xyModel.findOne(search).then(function (value) {
                    value.dataValues.DT = (moment(value.dataValues.DT).utc().format("YYYY-MM-DD HH:mm:ss"))
                    resultObj.obj.data = value
                    resultObj.retcode = 200
                    res.send(resultObj)
                }).catch(function (reason) {
                    resultObj.msg.prompt = "系统内部错误"
                    resultObj.msg.error = reason.message
                    resultObj.retcode = 500
                    res.send(resultObj)
                })
                break
            case "09":
                qsModel.findOne(search).then(function (value) {
                    value.dataValues.DT = (moment(value.dataValues.DT).utc().format("YYYY-MM-DD HH:mm:ss"))
                    resultObj.obj.data = value
                    resultObj.retcode = 200
                    res.send(resultObj)
                }).catch(function (reason) {
                    resultObj.msg.prompt = "系统内部错误"
                    resultObj.msg.error = reason.message
                    resultObj.retcode = 500
                    res.send(resultObj)
                })
                break
            case "10":
                sqModel.findOne(search).then(function (value) {
                    value.dataValues.DT = (moment(value.dataValues.DT).utc().format("YYYY-MM-DD HH:mm:ss"))
                    resultObj.obj.data = value
                    resultObj.retcode = 200
                    res.send(resultObj)
                }).catch(function (reason) {
                    resultObj.msg.prompt = "系统内部错误"
                    resultObj.msg.error = reason.message
                    resultObj.retcode = 500
                    res.send(resultObj)
                })
                break
            case "11":
                xylModel.findOne(search).then(function (value) {
                    value.dataValues.DT = (moment(value.dataValues.DT).utc().format("YYYY-MM-DD HH:mm:ss"))
                    resultObj.obj.data = value
                    resultObj.retcode = 200
                    res.send(resultObj)
                }).catch(function (reason) {
                    resultObj.msg.prompt = "系统内部错误"
                    resultObj.msg.error = reason.message
                    resultObj.retcode = 500
                    res.send(resultObj)
                })
                break
        }
    }).catch(function (reason) {
        console.log(reason)
    })
}



harmonic.exportHarmExcel = async function (params, res) {
    const resultObj = JSON.parse(JSON.stringify(helper.API_RESULT_MODEL))
    try {
        var home = params.home
        var time = params.time
        var key = params.key.split(",")        //数据切割

        let searchObj = {                    //通过key表找出相应字段名
            attributes: ['value'],
            where: {
                key: key
            },
            raw: true
        };
        let eleResult = await electricityModel.findAll(searchObj);
        let charB = [];
        for (let i = 0; i < eleResult.length; i++) {
            charB[i] = eleResult[i].value;      //转为数组格式
        }
        searchObj = {
            attributes: [[charB[0], "TS"], "DT"],
            where: {
                "DT": {
                    $between: [time + " 00:00:00", time + " 23:59:59"]
                }
            },
            order: [["DT", "ASC"]],
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
 * Created by snoopy on 2018/5/26
 */
//model引用
var tsModel = require("../models/index").TS
var trModel = require("../models/index").TR
var tdModel = require("../models/index").TD
var tjModel = require("../models/index").TJ
var xsModel = require("../models/index").XS
var yqModel = require("../models/index").YQ
var rqModel = require("../models/index").RQ
var zsModel = require("../models/index").ZS
var qsModel = require("../models/index").QS
var sqModel = require("../models/index").SQ
var xylModel = require("../models/index").XYL
var xyModel = require("../models/index").XY
var electricityModel = require("../models/index").electricity_key
var xl = require('xlsx')
var harmonic = module.exports = {}
//中间件引用
var underscore = require("underscore")
var moment = require("moment")
var helper = require("../helpers/helpers")
harmonic.search = async function (params, res) {
    const resultObj = JSON.parse(JSON.stringify(helper.API_RESULT_MODEL))
    try {
        var home = params.home
        var time = params.time
        var key = params.key.split(",")        //数据切割

        let searchObj = {                    //通过key表找出相应字段名
            attributes: ['value'],
            where: {
                key: key
            },
            raw: true
        };
        let eleResult = await electricityModel.findAll(searchObj);
        let charB = [];
        for (let i = 0; i < eleResult.length; i++) {
            charB[i] = eleResult[i].value;      //转为数组格式
        }
        searchObj = {
            attributes: [[charB[0], "TS"], "DT"],
            where: {
                "DT": {
                    $between: [time + " 00:00:00", time + " 23:59:59"]
                }
            },
            order: [["DT", "ASC"]],
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

            underscore.map(jsonResult, function (item) {
                item.TS = (item.TS !== null) ? item.TS.toFixed(2) : item.TS
                item.DT = (moment(item.DT).utc().format("YYYY-MM-DD HH:mm:ss"))
            })
            resultObj.obj.data = jsonResult;
            resultObj.retcode = 200;
            res.send(resultObj);
        } else {
            resultObj.obj.data = jsonResult;
            resultObj.prompt = "暂无数据";
            resultObj.retcode = 200;
            res.send(resultObj);
        }
    }
    catch (error) {
        resultObj.msg.prompt = "系统内部错误"
        resultObj.msg.error = error.message
        resultObj.retcode = 500
        res.send(resultObj)
    }


    //判断配电所
    // switch (home) {
    // 	case "00":
    // 		tsModel.findAll({
    // 			attributes: [[charB[0], "TS"], "DT"],
    // 			where: {
    // 				"DT": {
    // 					$between: [time + " 00:00:00", time + " 23:59:59"]
    // 				}
    // 			},
    // 			order: [["DT", "ASC"]]
    // 		}).then(function (result) {
    // 			var jsonResult = underscore.pluck(result, "dataValues")
    // 			underscore.map(jsonResult, function (item) {
    // 				item.TS = (item.TS !== null) ? item.TS.toFixed(2) : item.TS
    // 				item.DT = (moment(item.DT).utc().format("YYYY-MM-DD HH:mm:ss"))
    // 			})
    // 			resultObj.obj.data = jsonResult
    // 			resultObj.retcode = 200
    // 			res.send(resultObj)
    // 		}).catch(function (error) {
    // 			resultObj.msg.prompt = "系统内部错误"
    // 			resultObj.msg.error = error.message
    // 			resultObj.retcode = 500
    // 			res.send(resultObj)
    // 		})
    // 		break
    // 	case "01":
    // 		trModel.findAll({
    // 			attributes: [[charB[0], "TS"], "DT"],
    // 			where: {
    // 				"DT": {
    // 					$between: [time + " 00:00:00", time + " 23:59:59"]
    // 				}
    // 			},
    // 			order: [["DT", "ASC"]]
    // 		}).then(function (result) {
    // 			var jsonResult = underscore.pluck(result, "dataValues")
    // 			underscore.map(jsonResult, function (item) {
    // 				item.TS = (item.TS !== null) ? item.TS.toFixed(2) : item.TS
    // 				item.DT = (moment(item.DT).utc().format("YYYY-MM-DD HH:mm:ss"))
    // 			})
    // 			resultObj.obj.data = jsonResult
    // 			resultObj.retcode = 200
    // 			res.send(resultObj)
    // 		}).catch(function (error) {
    // 			resultObj.msg.prompt = "系统内部错误"
    // 			resultObj.msg.error = error.message
    // 			resultObj.retcode = 500
    // 			res.send(resultObj)
    // 		})
    // 		break
    // 	case "02":
    // 		tdModel.findAll({
    // 			attributes: [[charB[0], "TS"], "DT"],
    // 			where: {
    // 				"DT": {
    // 					$between: [time + " 00:00:00", time + " 23:59:59"]
    // 				}
    // 			},
    // 			order: [["DT", "ASC"]]
    // 		}).then(function (result) {
    // 			var jsonResult = underscore.pluck(result, "dataValues")
    // 			underscore.map(jsonResult, function (item) {
    // 				item.TS = (item.TS !== null) ? item.TS.toFixed(2) : item.TS
    // 				item.DT = (moment(item.DT).utc().format("YYYY-MM-DD HH:mm:ss"))
    // 			})
    // 			resultObj.obj.data = jsonResult
    // 			resultObj.retcode = 200
    // 			res.send(resultObj)
    // 		}).catch(function (error) {
    // 			resultObj.msg.prompt = "系统内部错误"
    // 			resultObj.msg.error = error.message
    // 			resultObj.retcode = 500
    // 			res.send(resultObj)
    // 		})
    // 		break
    // 	case "03":
    // 		tjModel.findAll({
    // 			attributes: [[charB[0], "TS"], "DT"],
    // 			where: {
    // 				"DT": {
    // 					$between: [time + " 00:00:00", time + " 23:59:59"]
    // 				}
    // 			},
    // 			order: [["DT", "ASC"]]
    // 		}).then(function (result) {
    // 			var jsonResult = underscore.pluck(result, "dataValues")
    // 			underscore.map(jsonResult, function (item) {
    // 				item.TS = (item.TS !== null) ? item.TS.toFixed(2) : item.TS
    // 				item.DT = (moment(item.DT).utc().format("YYYY-MM-DD HH:mm:ss"))
    // 			})
    // 			resultObj.obj.data = jsonResult
    // 			resultObj.retcode = 200
    // 			res.send(resultObj)
    // 		}).catch(function (error) {
    // 			resultObj.msg.prompt = "系统内部错误"
    // 			resultObj.msg.error = error.message
    // 			resultObj.retcode = 500
    // 			res.send(resultObj)
    // 		})
    // 		break
    // 	case "04":
    // 		xsModel.findAll({
    // 			attributes: [[charB[0], "TS"], "DT"],
    // 			where: {
    // 				"DT": {
    // 					$between: [time + " 00:00:00", time + " 23:59:59"]
    // 				}
    // 			},
    // 			order: [["DT", "ASC"]]
    // 		}).then(function (result) {
    // 			var jsonResult = underscore.pluck(result, "dataValues")
    // 			underscore.map(jsonResult, function (item) {
    // 				item.TS = (item.TS !== null) ? item.TS.toFixed(2) : item.TS
    // 				item.DT = (moment(item.DT).utc().format("YYYY-MM-DD HH:mm:ss"))
    // 			})
    // 			resultObj.obj.data = jsonResult
    // 			resultObj.retcode = 200
    // 			res.send(resultObj)
    // 		}).catch(function (error) {
    // 			resultObj.msg.prompt = "系统内部错误"
    // 			resultObj.msg.error = error.message
    // 			resultObj.retcode = 500
    // 			res.send(resultObj)
    // 		})
    // 		break
    // 	case "05":
    // 		yqModel.findAll({
    // 			attributes: [[charB[0], "TS"], "DT"],
    // 			where: {
    // 				"DT": {
    // 					$between: [time + " 00:00:00", time + " 23:59:59"]
    // 				}
    // 			},
    // 			order: [["DT", "ASC"]]
    // 		}).then(function (result) {
    // 			var jsonResult = underscore.pluck(result, "dataValues")
    // 			underscore.map(jsonResult, function (item) {
    // 				item.TS = (item.TS !== null) ? item.TS.toFixed(2) : item.TS
    // 				item.DT = (moment(item.DT).utc().format("YYYY-MM-DD HH:mm:ss"))
    // 			})
    // 			resultObj.obj.data = jsonResult
    // 			resultObj.retcode = 200
    // 			res.send(resultObj)
    // 		}).catch(function (error) {
    // 			resultObj.msg.prompt = "系统内部错误"
    // 			resultObj.msg.error = error.message
    // 			resultObj.retcode = 500
    // 			res.send(resultObj)
    // 		})
    // 		break
    // 	case "06":
    // 		rqModel.findAll({
    // 			attributes: [[charB[0], "TS"], "DT"],
    // 			where: {
    // 				"DT": {
    // 					$between: [params.time + " 00:00:00", params.time + " 23:59:59"]
    // 				}
    // 			},
    // 			order: [["DT", "ASC"]]
    // 		}).then(function (result) {
    // 			var jsonResult = underscore.pluck(result, "dataValues")
    // 			underscore.map(jsonResult, function (item) {
    // 				item.TS = (item.TS !== null) ? item.TS.toFixed(2) : item.TS
    // 				item.DT = (moment(item.DT).utc().format("YYYY-MM-DD HH:mm:ss"))
    // 			})
    // 			resultObj.obj.data = jsonResult
    // 			resultObj.retcode = 200
    // 			res.send(resultObj)
    // 		}).catch(function (error) {
    // 			resultObj.msg.prompt = "系统内部错误"
    // 			resultObj.msg.error = error.message
    // 			resultObj.retcode = 500
    // 			res.send(resultObj)
    // 		})
    // 		break
    // 	case "07":
    // 		zsModel.findAll({
    // 			attributes: [[charB[0], "TS"], "DT"],
    // 			where: {
    // 				"DT": {
    // 					$between: [time + " 00:00:00", time + " 23:59:59"]
    // 				}
    // 			},
    // 			order: [["DT", "ASC"]]
    // 		}).then(function (result) {
    // 			var jsonResult = underscore.pluck(result, "dataValues")
    // 			underscore.map(jsonResult, function (item) {
    // 				item.TS = (item.TS !== null) ? item.TS.toFixed(2) : item.TS
    // 				item.DT = (moment(item.DT).utc().format("YYYY-MM-DD HH:mm:ss"))
    // 			})
    // 			resultObj.obj.data = jsonResult
    // 			resultObj.retcode = 200
    // 			res.send(resultObj)
    // 		}).catch(function (error) {
    // 			resultObj.msg.prompt = "系统内部错误"
    // 			resultObj.msg.error = error.message
    // 			resultObj.retcode = 500
    // 			res.send(resultObj)
    // 		})
    // 		break
    // 	case "08":
    // 		xyModel.findAll({
    // 			attributes: [[charB[0], "TS"], "DT"],
    // 			where: {
    // 				"DT": {
    // 					$between: [time + " 00:00:00", time + " 23:59:59"]
    // 				}
    // 			},
    // 			order: [["DT", "ASC"]]
    // 		}).then(function (result) {
    // 			var jsonResult = underscore.pluck(result, "dataValues")
    // 			underscore.map(jsonResult, function (item) {
    // 				item.TS = (item.TS !== null) ? item.TS.toFixed(2) : item.TS
    // 				item.DT = (moment(item.DT).utc().format("YYYY-MM-DD HH:mm:ss"))
    // 			})
    // 			resultObj.obj.data = jsonResult
    // 			resultObj.retcode = 200
    // 			res.send(resultObj)
    // 		}).catch(function (error) {
    // 			resultObj.msg.prompt = "系统内部错误"
    // 			resultObj.msg.error = error.message
    // 			resultObj.retcode = 500
    // 			res.send(resultObj)
    // 		})
    // 		break
    // 	case "09":
    // 		qsModel.findAll({
    // 			attributes: [[charB[0], "TS"], "DT"],
    // 			where: {
    // 				"DT": {
    // 					$between: [time + " 00:00:00", time + " 23:59:59"]
    // 				}
    // 			},
    // 			order: [["DT", "ASC"]]
    // 		}).then(function (result) {
    // 			var jsonResult = underscore.pluck(result, "dataValues")
    // 			underscore.map(jsonResult, function (item) {
    // 				item.TS = (item.TS !== null) ? item.TS.toFixed(2) : item.TS
    // 				item.DT = (moment(item.DT).utc().format("YYYY-MM-DD HH:mm:ss"))
    // 			})
    // 			resultObj.obj.data = jsonResult
    // 			resultObj.retcode = 200
    // 			res.send(resultObj)
    // 		}).catch(function (error) {
    // 			resultObj.msg.prompt = "系统内部错误"
    // 			resultObj.msg.error = error.message
    // 			resultObj.retcode = 500
    // 			res.send(resultObj)
    // 		})
    // 		break
    // 	case "10":
    // 		sqModel.findAll({
    // 			attributes: [[charB[0], "TS"], "DT"],
    // 			where: {
    // 				"DT": {
    // 					$between: [time + " 00:00:00", time + " 23:59:59"]
    // 				}
    // 			},
    // 			order: [["DT", "ASC"]]
    // 		}).then(function (result) {
    // 			var jsonResult = underscore.pluck(result, "dataValues")
    // 			underscore.map(jsonResult, function (item) {
    // 				item.TS = (item.TS !== null) ? item.TS.toFixed(2) : item.TS
    // 				item.DT = (moment(item.DT).utc().format("YYYY-MM-DD HH:mm:ss"))
    // 			})
    // 			resultObj.obj.data = jsonResult
    // 			resultObj.retcode = 200
    // 			res.send(resultObj)
    // 		}).catch(function (error) {
    // 			resultObj.msg.prompt = "系统内部错误"
    // 			resultObj.msg.error = error.message
    // 			resultObj.retcode = 500
    // 			res.send(resultObj)
    // 		})
    // 		break
    // 	case "11":
    // 		xylModel.findAll({
    // 			attributes: [[charB[0], "TS"], "DT"],
    // 			where: {
    // 				"DT": {
    // 					$between: [time + " 00:00:00", time + " 23:59:59"]
    // 				}
    // 			},
    // 			order: [["DT", "ASC"]]
    // 		}).then(function (result) {
    // 			var jsonResult = underscore.pluck(result, "dataValues")
    // 			underscore.map(jsonResult, function (item) {
    // 				item.TS = (item.TS !== null) ? item.TS.toFixed(2) : item.TS
    // 				item.DT = (moment(item.DT).utc().format("YYYY-MM-DD HH:mm:ss"))
    // 			})
    // 			resultObj.obj.data = jsonResult
    // 			resultObj.retcode = 200
    // 			res.send(resultObj)
    // 		}).catch(function (error) {
    // 			resultObj.msg.prompt = "系统内部错误"
    // 			resultObj.msg.error = error.message
    // 			resultObj.retcode = 500
    // 			res.send(resultObj)
    // 		})
    // 		break
    // 	default:
    // 		resultObj.msg.prompt = "无此配电所数据"
    // 		res.send(resultObj)
    // }
}


harmonic.getHarmonicList = function (params, res) {
    var resultObj = JSON.parse(JSON.stringify(helper.API_RESULT_MODEL))
    var key = params.key.split(",")
    electricityModel.findAll({                    //通过key表判断字段名
        attributes: ["value"],
        where: {
            key: key
        },
        order: [["key", "ASC"]]
    }).then(function (row) {
        var valueChar = []
        var keyResult = underscore.pluck(row, "dataValues")
        underscore.map(keyResult, function (item) {
            valueChar.push(item.value)
        })
        var search = {
            order: [["DT", "DESC"]]
        }
        if (params.type === 0) {
            search.attributes = [[valueChar[0], "TS"], [valueChar[1], "TS1"], [valueChar[2], "TS2"], [valueChar[3], "TS3"],
                [valueChar[4], "TS4"], [valueChar[5], "TS5"], [valueChar[6], "TS6"], [valueChar[8], "TS7"],
                [valueChar[9], "TS8"], [valueChar[10], "TS9"], [valueChar[11], "TS10"], [valueChar[12], "TS11"], "DT"]
        } else {
            search.attributes = [[valueChar[0], "TS"], [valueChar[1], "TS1"], [valueChar[2], "TS2"], [valueChar[3], "TS3"],
                [valueChar[4], "TS4"], [valueChar[5], "TS5"], [valueChar[6], "TS6"], [valueChar[7], "TS7"],
                [valueChar[8], "TS8"], [valueChar[9], "TS9"], [valueChar[10], "TS10"], [valueChar[11], "TS11"],
                [valueChar[12], "TS12"], [valueChar[13], "TS13"], [valueChar[14], "TS14"], [valueChar[15], "TS15"],
                [valueChar[0], "TS1"], [valueChar[16], "TS16"], [valueChar[17], "TS17"], [valueChar[18], "TS18"],
                [valueChar[19], "TS19"], [valueChar[20], "TS20"], [valueChar[21], "TS21"], "DT"]
        }
        switch (params.home) {
            case "00":
                tsModel.findOne(
                    search
                ).then(function (value) {
                    value.dataValues.DT = (moment(value.dataValues.DT).utc().format("YYYY-MM-DD HH:mm:ss"))
                    resultObj.obj.data = value
                    resultObj.retcode = 200
                    res.send(resultObj)
                }).catch(function (reason) {
                    resultObj.msg.prompt = "系统内部错误"
                    resultObj.msg.error = reason.message
                    resultObj.retcode = 500
                    res.send(resultObj)
                })
                break
            case "01":
                trModel.findOne(
                    search
                ).then(function (value) {
                    value.dataValues.DT = (moment(value.dataValues.DT).utc().format("YYYY-MM-DD HH:mm:ss"))
                    resultObj.obj.data = value
                    resultObj.retcode = 200
                    res.send(resultObj)
                }).catch(function (reason) {
                    resultObj.msg.prompt = "系统内部错误"
                    resultObj.msg.error = reason.message
                    resultObj.retcode = 500
                    res.send(resultObj)
                })
                break
            case "02":
                tdModel.findOne(
                    search
                ).then(function (value) {
                    value.dataValues.DT = (moment(value.dataValues.DT).utc().format("YYYY-MM-DD HH:mm:ss"))
                    resultObj.obj.data = value
                    resultObj.retcode = 200
                    res.send(resultObj)
                }).catch(function (reason) {
                    resultObj.msg.prompt = "系统内部错误"
                    resultObj.msg.error = reason.message
                    resultObj.retcode = 500
                    res.send(resultObj)
                })
                break
            case "03":
                tjModel.findOne(search).then(function (value) {
                    value.dataValues.DT = (moment(value.dataValues.DT).utc().format("YYYY-MM-DD HH:mm:ss"))
                    resultObj.obj.data = value
                    resultObj.retcode = 200
                    res.send(resultObj)
                }).catch(function (reason) {
                    resultObj.msg.prompt = "系统内部错误"
                    resultObj.msg.error = reason.message
                    resultObj.retcode = 500
                    res.send(resultObj)
                })
                break
            case "04":
                xsModel.findOne(search).then(function (value) {
                    value.dataValues.DT = (moment(value.dataValues.DT).utc().format("YYYY-MM-DD HH:mm:ss"))
                    resultObj.obj.data = value
                    resultObj.retcode = 200
                    res.send(resultObj)
                }).catch(function (reason) {
                    resultObj.msg.prompt = "系统内部错误"
                    resultObj.msg.error = reason.message
                    resultObj.retcode = 500
                    res.send(resultObj)
                })
                break
            case "05":
                yqModel.findOne(search).then(function (value) {
                    value.dataValues.DT = (moment(value.dataValues.DT).utc().format("YYYY-MM-DD HH:mm:ss"))
                    resultObj.obj.data = value
                    resultObj.retcode = 200
                    res.send(resultObj)
                }).catch(function (reason) {
                    resultObj.msg.prompt = "系统内部错误"
                    resultObj.msg.error = reason.message
                    resultObj.retcode = 500
                    res.send(resultObj)
                })
                break
            case "06":
                rqModel.findOne(search).then(function (value) {
                    value.dataValues.DT = (moment(value.dataValues.DT).utc().format("YYYY-MM-DD HH:mm:ss"))
                    resultObj.obj.data = value
                    resultObj.retcode = 200
                    res.send(resultObj)
                }).catch(function (reason) {
                    resultObj.msg.prompt = "系统内部错误"
                    resultObj.msg.error = reason.message
                    resultObj.retcode = 500
                    res.send(resultObj)
                })
                break
            case "07":
                zsModel.findOne(search).then(function (value) {
                    value.dataValues.DT = (moment(value.dataValues.DT).utc().format("YYYY-MM-DD HH:mm:ss"))
                    resultObj.obj.data = value
                    resultObj.retcode = 200
                    res.send(resultObj)
                }).catch(function (reason) {
                    resultObj.msg.prompt = "系统内部错误"
                    resultObj.msg.error = reason.message
                    resultObj.retcode = 500
                    res.send(resultObj)
                })
                break
            case "08":
                xyModel.findOne(search).then(function (value) {
                    value.dataValues.DT = (moment(value.dataValues.DT).utc().format("YYYY-MM-DD HH:mm:ss"))
                    resultObj.obj.data = value
                    resultObj.retcode = 200
                    res.send(resultObj)
                }).catch(function (reason) {
                    resultObj.msg.prompt = "系统内部错误"
                    resultObj.msg.error = reason.message
                    resultObj.retcode = 500
                    res.send(resultObj)
                })
                break
            case "09":
                qsModel.findOne(search).then(function (value) {
                    value.dataValues.DT = (moment(value.dataValues.DT).utc().format("YYYY-MM-DD HH:mm:ss"))
                    resultObj.obj.data = value
                    resultObj.retcode = 200
                    res.send(resultObj)
                }).catch(function (reason) {
                    resultObj.msg.prompt = "系统内部错误"
                    resultObj.msg.error = reason.message
                    resultObj.retcode = 500
                    res.send(resultObj)
                })
                break
            case "10":
                sqModel.findOne(search).then(function (value) {
                    value.dataValues.DT = (moment(value.dataValues.DT).utc().format("YYYY-MM-DD HH:mm:ss"))
                    resultObj.obj.data = value
                    resultObj.retcode = 200
                    res.send(resultObj)
                }).catch(function (reason) {
                    resultObj.msg.prompt = "系统内部错误"
                    resultObj.msg.error = reason.message
                    resultObj.retcode = 500
                    res.send(resultObj)
                })
                break
            case "11":
                xylModel.findOne(search).then(function (value) {
                    value.dataValues.DT = (moment(value.dataValues.DT).utc().format("YYYY-MM-DD HH:mm:ss"))
                    resultObj.obj.data = value
                    resultObj.retcode = 200
                    res.send(resultObj)
                }).catch(function (reason) {
                    resultObj.msg.prompt = "系统内部错误"
                    resultObj.msg.error = reason.message
                    resultObj.retcode = 500
                    res.send(resultObj)
                })
                break
        }
    }).catch(function (reason) {
        console.log(reason)
    })
}



harmonic.exportHarmExcel = async function (params, res) {
    const resultObj = JSON.parse(JSON.stringify(helper.API_RESULT_MODEL))
    try {
        var home = params.home
        var time = params.time
        var key = params.key.split(",")        //数据切割

        let searchObj = {                    //通过key表找出相应字段名
            attributes: ['value'],
            where: {
                key: key
            },
            raw: true
        };
        let eleResult = await electricityModel.findAll(searchObj);
        let charB = [];
        for (let i = 0; i < eleResult.length; i++) {
            charB[i] = eleResult[i].value;      //转为数组格式
        }
        searchObj = {
            attributes: [[charB[0], "TS"], "DT"],
            where: {
                "DT": {
                    $between: [time + " 00:00:00", time + " 23:59:59"]
                }
            },
            order: [["DT", "ASC"]],
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