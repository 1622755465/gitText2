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
var getJson = module.exports = {};
var fs = require('fs');
var axios=require('axios');
getJson.get=function (params,res) {
//     url=appRoot+'/public/guide.json';
//     axios.get(url).then(function (value) {
//         res.send(value);
//     }).catch(function (reason) {
//         res.send(reason);
//     })

    url=appRoot+'/public/guide.json';
    // var result= fs.readFileSync(url,'r');
    fs.open(url,'r',function (err,data) {
        if(err){
            res.send(err);
        }else {
            res.send(data);
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
var getJson = module.exports = {};
var fs = require('fs');
var axios=require('axios');
getJson.get=function (params,res) {
//     url=appRoot+'/public/guide.json';
//     axios.get(url).then(function (value) {
//         res.send(value);
//     }).catch(function (reason) {
//         res.send(reason);
//     })

    url=appRoot+'/public/guide.json';
    // var result= fs.readFileSync(url,'r');
    fs.open(url,'r',function (err,data) {
        if(err){
            res.send(err);
        }else {
            res.send(data);
        }
    });

>>>>>>> dedd623 (first)
>>>>>>> 19b8a9c (first)
>>>>>>> 8f5179a (first)
>>>>>>> 87a8fdf (first)
>>>>>>> 1e8021d (first)
>>>>>>> 5938de4 (first)
>>>>>>> c55f785 (first)
};