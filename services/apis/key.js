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
var keySql = require('../models/index').TsKey;
var transformerModel = require('../models/index').transformer_key;
var electricityModel = require('../models/index').electricity_key;
var surroundingsModel = require('../models/index').surroundings_key;
var alarmModel = require('../models/index').alarm_key;
var typeModel = require('../models/index').type_key;
var breakerModel = require('../models/index').breaker_key;

var key = module.exports = {};


//type添加
//变压器检测部分
// key.transformer = function (params, res) {
//     var url=params.url+"010";
//     var newList=[];
//     var j = 0;
//     var c=1;
//     var n = params.n;
//     var i = params.i;
//     // var url = params.url;
//     // var l = i + 6+7*(n-1);
//     // for (i; i <= l; i++) {
//         // if (j === 6) {
//         //     i += 2;
//         // }
//         newList.push(
//             {key:url + j, value: params.name + i}
//         );
//         j++;
//         if(j===7){
//             c++;
//             j=0;
//             url=params.url+"0"+c+"0";
//         }
//     }
//     transformerModel.bulkCreate(
//         newList
//     ).then(function (value) {
//         res.send("OK")
//     }).catch(function (reason) {
//         res.send(reason);
//     });
// };


//电力检测部分
//
// key.electricity = function (params, res) {
//     var i =0;
//     var search = [];
//     var one = {};
//     var s = 0;
//     var a=0;
//     var b = params.b;
//     var j = params.j;
//     var url=params.url;
//     var type =params.type;
//     var name = params.name;
//     if(type===1) {
//         for (s; s < b; s++) {
//             for (a = 0; a < 22; a++) {
//                 if (i >= 10) {
//                     one =
//                         {key: url + s + i, value: name + j};
//                 } else {
//                     one =
//                         {key: url + s + "0" + i, value: name + j};
//                 }
//                 i++;
//                 j++;
//                 search.push(one);
//             }
//             i=0;
//         }
//     }else {
//         //一般电路
//         for (s; s < b; s++) {
//             for (a = 0; a < 13; a++) {
//                 if (i >= 10) {
//                     one =
//                         {key: url + s + i, value: name + j};
//                 } else {
//                     one =
//                         {key: url + s + "0" + i, value: name + j};
//                 }
//                 i++;
//                 j++;
//                 search.push(one);
//             }
//             i = 0;
//         }
//     }
//     electricityModel.bulkCreate(
//         search
//     ).then(function (value) {
//         res.send("ok");
//     }).catch(function (reason) {
//         res.send(reason);
//     })
// };
// var i=
//     j=
// key.create = function (params, res) {
//     keySql.bulkCreate([
//普通
// {key: "0"+i, value:"XS"+j},
// {key: "0"+(i+1), value:"XS"+(j+1)},
// {key: "0"+(i+2), value: "XS"+(j+2)},
// {key: "0"+(i+3), value: "XS"+(j+6)},
// {key: "0"+(i+4), value: "XS"+(j+3)},
// {key: "0"+(i+5), value: "XS"+(j+4)},
// {key: "0"+(i+6), value: "XS"+(j+5)},
// {key: "0"+(i+7), value: "XS"+(j+8)},
// {key: "0"+(i+8), value: "XS"+(j+9)},
// {key: "0"+(i+9), value: "XS"+(j+10)},
// {key: "0"+(i+10), value: "XS"+(j+13)},
// {key: "0"+(i+11), value: "XS"+(j+14)},
// {key: "0"+(i+12), value: "XS"+(j+15)},
// {key: "0"+(i+13), value: "XS"+(j+16)},
// {key: "0"+(i+14), value: "XS"+(j+17)},
// {key: "0"+(i+15), value: "XS"+(j+18)}
//进线柜
// {key: "0"+i, value:"XS"+j},
// {key: "0"+(i+1), value:"XS"+(j+1)},
// {key: "0"+(i+2), value: "XS"+(j+2)},
// {key: "0"+(i+3), value: "XS"+(j+6)},
// {key: "0"+(i+4), value: "XS"+(j+3)},
// {key: "0"+(i+5), value: "XS"+(j+4)},
// {key: "0"+(i+6), value: "XS"+(j+5)},
// {key: "0"+(i+7), value: "XS"+(j+14)},
// {key: "0"+(i+8), value: "XS"+(j+15)},
// {key: "0"+(i+9), value: "XS"+(j+16)},
// {key: "0"+(i+10), value: "XS"+(j+19)},
// {key: "0"+(i+11), value: "XS"+(j+20)},
// {key: "0"+(i+12), value: "XS"+(j+21)},
// {key: "0"+(i+13), value: "XS"+(j+22)},
// {key: "0"+(i+14), value: "XS"+(j+23)},
// {key: "0"+(i+15), value: "XS"+(j+24)}
//变压器
//         {key: "0"+i, value:"XS"+j},
//         {key: "0"+(i+1), value:"XS"+(j+1)},
//         {key: "0"+(i+2), value: "XS"+(j+2)},
//         {key: "0"+(i+3), value: "XS"+(j+6)},
//         {key: "0"+(i+4), value: "XS"+(j+7)},
//         {key: "0"+(i+5), value: "XS"+(j+8)}
//     ]).then(function (row) {
//         console.log("ok");
//     }).catch(function (error) {
//         });
// };

// key.electricity = function (params, res) {

//温度湿度
// key.surroundings = function (params, res) {
//     var i = params.i;
//     var name = params.name;
//     j = i + 1;
//     var search =
//         {key: url, value: name + i};
//
//     surroundingsModel.bulkCreate(
// };

//报警
// key.alarm = function (params, res) {
//     var i = 0;
//     var j = params.j;
//     var search = [];
//     var one = {};
//     var b = params.b;
//     var s = 0;
//     var a = 0;
//     var url = params.url;
//     var type = params.type;
//     var name = params.name;
//     if (type === 1) {
//         for (a = 0; a < 6; a++) {
//             one =
//                 {key: url + s + "0" + i, value: name + j};
//             i++;
//             j++;
//             search.push(one);
//         }
//     } else {
//         //一般电路
//         for (s; s < b; s++) {
//             for (a = 0; a < 6; a++) {
//                 one =
//                     {key: url + s + "0" + i, value: name + j};
//                 i++;
//                 j++;
//                 search.push(one);
//             }
//             i = 0;
//         }
//     }
//     alarmModel.bulkCreate(
//         search
//     ).then(function (value) {
//         res.send("OK")
//     }).catch(function (reason) {
//         res.send(reason);
//     });
// };


//断路器部分
key.electricity = function (params, res) {
    var data = ['过载长延时故障', '短路短延时故障','短路瞬时故障', '漏电故障', '电流不平衡故障', '欠压故障', '过压故障'];
    var box = params.box;
    var loop = params.loop;
    var key = params.key;
    var newList = [];
    for (var i = 0;i < data.length ;  i++) {
        var update = {
            key:"SQB"+(key+i),
            box: box,
            loop: loop,
            event:data[i]
        };
        newList.push(update)
    }
    // console.log(newList);
    breakerModel.bulkCreate(
        newList
    ).then(function (value) {
        res.send('ok');
    }).catch(function (reason) {
        res.send(reason);
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
var keySql = require('../models/index').TsKey;
var transformerModel = require('../models/index').transformer_key;
var electricityModel = require('../models/index').electricity_key;
var surroundingsModel = require('../models/index').surroundings_key;
var alarmModel = require('../models/index').alarm_key;
var typeModel = require('../models/index').type_key;
var breakerModel = require('../models/index').breaker_key;

var key = module.exports = {};


//type添加
//变压器检测部分
// key.transformer = function (params, res) {
//     var url=params.url+"010";
//     var newList=[];
//     var j = 0;
//     var c=1;
//     var n = params.n;
//     var i = params.i;
//     // var url = params.url;
//     // var l = i + 6+7*(n-1);
//     // for (i; i <= l; i++) {
//         // if (j === 6) {
//         //     i += 2;
//         // }
//         newList.push(
//             {key:url + j, value: params.name + i}
//         );
//         j++;
//         if(j===7){
//             c++;
//             j=0;
//             url=params.url+"0"+c+"0";
//         }
//     }
//     transformerModel.bulkCreate(
//         newList
//     ).then(function (value) {
//         res.send("OK")
//     }).catch(function (reason) {
//         res.send(reason);
//     });
// };


//电力检测部分
//
// key.electricity = function (params, res) {
//     var i =0;
//     var search = [];
//     var one = {};
//     var s = 0;
//     var a=0;
//     var b = params.b;
//     var j = params.j;
//     var url=params.url;
//     var type =params.type;
//     var name = params.name;
//     if(type===1) {
//         for (s; s < b; s++) {
//             for (a = 0; a < 22; a++) {
//                 if (i >= 10) {
//                     one =
//                         {key: url + s + i, value: name + j};
//                 } else {
//                     one =
//                         {key: url + s + "0" + i, value: name + j};
//                 }
//                 i++;
//                 j++;
//                 search.push(one);
//             }
//             i=0;
//         }
//     }else {
//         //一般电路
//         for (s; s < b; s++) {
//             for (a = 0; a < 13; a++) {
//                 if (i >= 10) {
//                     one =
//                         {key: url + s + i, value: name + j};
//                 } else {
//                     one =
//                         {key: url + s + "0" + i, value: name + j};
//                 }
//                 i++;
//                 j++;
//                 search.push(one);
//             }
//             i = 0;
//         }
//     }
//     electricityModel.bulkCreate(
//         search
//     ).then(function (value) {
//         res.send("ok");
//     }).catch(function (reason) {
//         res.send(reason);
//     })
// };
// var i=
//     j=
// key.create = function (params, res) {
//     keySql.bulkCreate([
//普通
// {key: "0"+i, value:"XS"+j},
// {key: "0"+(i+1), value:"XS"+(j+1)},
// {key: "0"+(i+2), value: "XS"+(j+2)},
// {key: "0"+(i+3), value: "XS"+(j+6)},
// {key: "0"+(i+4), value: "XS"+(j+3)},
// {key: "0"+(i+5), value: "XS"+(j+4)},
// {key: "0"+(i+6), value: "XS"+(j+5)},
// {key: "0"+(i+7), value: "XS"+(j+8)},
// {key: "0"+(i+8), value: "XS"+(j+9)},
// {key: "0"+(i+9), value: "XS"+(j+10)},
// {key: "0"+(i+10), value: "XS"+(j+13)},
// {key: "0"+(i+11), value: "XS"+(j+14)},
// {key: "0"+(i+12), value: "XS"+(j+15)},
// {key: "0"+(i+13), value: "XS"+(j+16)},
// {key: "0"+(i+14), value: "XS"+(j+17)},
// {key: "0"+(i+15), value: "XS"+(j+18)}
//进线柜
// {key: "0"+i, value:"XS"+j},
// {key: "0"+(i+1), value:"XS"+(j+1)},
// {key: "0"+(i+2), value: "XS"+(j+2)},
// {key: "0"+(i+3), value: "XS"+(j+6)},
// {key: "0"+(i+4), value: "XS"+(j+3)},
// {key: "0"+(i+5), value: "XS"+(j+4)},
// {key: "0"+(i+6), value: "XS"+(j+5)},
// {key: "0"+(i+7), value: "XS"+(j+14)},
// {key: "0"+(i+8), value: "XS"+(j+15)},
// {key: "0"+(i+9), value: "XS"+(j+16)},
// {key: "0"+(i+10), value: "XS"+(j+19)},
// {key: "0"+(i+11), value: "XS"+(j+20)},
// {key: "0"+(i+12), value: "XS"+(j+21)},
// {key: "0"+(i+13), value: "XS"+(j+22)},
// {key: "0"+(i+14), value: "XS"+(j+23)},
// {key: "0"+(i+15), value: "XS"+(j+24)}
//变压器
//         {key: "0"+i, value:"XS"+j},
//         {key: "0"+(i+1), value:"XS"+(j+1)},
//         {key: "0"+(i+2), value: "XS"+(j+2)},
//         {key: "0"+(i+3), value: "XS"+(j+6)},
//         {key: "0"+(i+4), value: "XS"+(j+7)},
//         {key: "0"+(i+5), value: "XS"+(j+8)}
//     ]).then(function (row) {
//         console.log("ok");
//     }).catch(function (error) {
//         });
// };

// key.electricity = function (params, res) {

//温度湿度
// key.surroundings = function (params, res) {
//     var i = params.i;
//     var name = params.name;
//     j = i + 1;
//     var search =
//         {key: url, value: name + i};
//
//     surroundingsModel.bulkCreate(
// };

//报警
// key.alarm = function (params, res) {
//     var i = 0;
//     var j = params.j;
//     var search = [];
//     var one = {};
//     var b = params.b;
//     var s = 0;
//     var a = 0;
//     var url = params.url;
//     var type = params.type;
//     var name = params.name;
//     if (type === 1) {
//         for (a = 0; a < 6; a++) {
//             one =
//                 {key: url + s + "0" + i, value: name + j};
//             i++;
//             j++;
//             search.push(one);
//         }
//     } else {
//         //一般电路
//         for (s; s < b; s++) {
//             for (a = 0; a < 6; a++) {
//                 one =
//                     {key: url + s + "0" + i, value: name + j};
//                 i++;
//                 j++;
//                 search.push(one);
//             }
//             i = 0;
//         }
//     }
//     alarmModel.bulkCreate(
//         search
//     ).then(function (value) {
//         res.send("OK")
//     }).catch(function (reason) {
//         res.send(reason);
//     });
// };


//断路器部分
key.electricity = function (params, res) {
    var data = ['过载长延时故障', '短路短延时故障','短路瞬时故障', '漏电故障', '电流不平衡故障', '欠压故障', '过压故障'];
    var box = params.box;
    var loop = params.loop;
    var key = params.key;
    var newList = [];
    for (var i = 0;i < data.length ;  i++) {
        var update = {
            key:"SQB"+(key+i),
            box: box,
            loop: loop,
            event:data[i]
        };
        newList.push(update)
    }
    // console.log(newList);
    breakerModel.bulkCreate(
        newList
    ).then(function (value) {
        res.send('ok');
    }).catch(function (reason) {
        res.send(reason);
    });
>>>>>>> dedd623 (first)
>>>>>>> 19b8a9c (first)
>>>>>>> 8f5179a (first)
>>>>>>> 87a8fdf (first)
>>>>>>> 1e8021d (first)
>>>>>>> 5938de4 (first)
>>>>>>> c55f785 (first)
};