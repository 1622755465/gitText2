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
 * Created by grovekingli on 2018/5/23.
 */

function getData(obj, def) {
    var homeKey = homeKeySwitch($('.dt-left-nav-box-active').html().toString());
    var key = homeKey + '880000';
    for (var i = 0; i < 5; i++) {
        key += "," + homeKey + '88000' + (i + 1).toString();
    }
    console.log(key);
    console.log(homeKey);
    var args={
        "home": homeKey,
        "key": key
    };

    if(def){
        args=def;
    }
    console.log(args);
    axios.post("/api", {
            "apicode": "ElemonitorInfo",
            "args": args
        }
        , {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function (res) {
        console.log(res);
        obj.list=res.data.obj.data[0];
        console.log(res.data.obj.data[0]);

    }).catch(function (error) {
        console.log(error);

    });


}

function homeKeySwitch(str) {
    var homeKey = '';
    switch (str) {
        case '图书馆':
            homeKey = '00';
            break;
        case '同仁楼':
            homeKey = '01';
            break;
        case '同德楼':
            homeKey = '02';
            break;
        case '同济楼':
            homeKey = '03';
            break;
        case '求是楼':
            homeKey = '04';
            break;
        case '学生活动中心':
            homeKey = '05';
            break;
        case '三期宿舍上':
            homeKey = '06';
            break;
        case '三期宿舍下':
            homeKey = '07';
            break;
        case '中室基地':
            homeKey = '08';
            break;
        case '学院路1#':
            homeKey = '09';
            break;
        case '学院路2#':
            homeKey = '10';
            break;
        case '一期宿舍':
            homeKey = '11';
            break;
        case '二期宿舍':
            homeKey = '12';
            break;
    }
    return homeKey;
}


var vm = new Vue({
    el: "#vue-list",
    delimiters: ['${', '}'],
    data: {
        list: {}
    },
    created: function () {
        var isLogin=sessionStorage.getItem('isLogin')||false;
        if(!isLogin) {
            window.location.href = 'index';
        }
        getData(this, {
            "key": "01880000,01880001,01880002,01880003,01880004,01880005",
            "home": "01"
        });
    }
});
$(document).ready(function () {
    $('.dt-left-nav-box').click(function () {
        console.log('active');
        $('.dt-left-nav-box-active').removeClass('dt-left-nav-box-active');
        $(this).addClass('dt-left-nav-box-active');
        getData(vm);
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
 * Created by grovekingli on 2018/5/23.
 */

function getData(obj, def) {
    var homeKey = homeKeySwitch($('.dt-left-nav-box-active').html().toString());
    var key = homeKey + '880000';
    for (var i = 0; i < 5; i++) {
        key += "," + homeKey + '88000' + (i + 1).toString();
    }
    console.log(key);
    console.log(homeKey);
    var args={
        "home": homeKey,
        "key": key
    };

    if(def){
        args=def;
    }
    console.log(args);
    axios.post("/api", {
            "apicode": "ElemonitorInfo",
            "args": args
        }
        , {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function (res) {
        console.log(res);
        obj.list=res.data.obj.data[0];
        console.log(res.data.obj.data[0]);

    }).catch(function (error) {
        console.log(error);

    });


}

function homeKeySwitch(str) {
    var homeKey = '';
    switch (str) {
        case '图书馆':
            homeKey = '00';
            break;
        case '同仁楼':
            homeKey = '01';
            break;
        case '同德楼':
            homeKey = '02';
            break;
        case '同济楼':
            homeKey = '03';
            break;
        case '求是楼':
            homeKey = '04';
            break;
        case '学生活动中心':
            homeKey = '05';
            break;
        case '三期宿舍上':
            homeKey = '06';
            break;
        case '三期宿舍下':
            homeKey = '07';
            break;
        case '中室基地':
            homeKey = '08';
            break;
        case '学院路1#':
            homeKey = '09';
            break;
        case '学院路2#':
            homeKey = '10';
            break;
        case '一期宿舍':
            homeKey = '11';
            break;
        case '二期宿舍':
            homeKey = '12';
            break;
    }
    return homeKey;
}


var vm = new Vue({
    el: "#vue-list",
    delimiters: ['${', '}'],
    data: {
        list: {}
    },
    created: function () {
        var isLogin=sessionStorage.getItem('isLogin')||false;
        if(!isLogin) {
            window.location.href = 'index';
        }
        getData(this, {
            "key": "01880000,01880001,01880002,01880003,01880004,01880005",
            "home": "01"
        });
    }
});
$(document).ready(function () {
    $('.dt-left-nav-box').click(function () {
        console.log('active');
        $('.dt-left-nav-box-active').removeClass('dt-left-nav-box-active');
        $(this).addClass('dt-left-nav-box-active');
        getData(vm);
    });
});


>>>>>>> dedd623 (first)
>>>>>>> 19b8a9c (first)
>>>>>>> 8f5179a (first)
>>>>>>> 87a8fdf (first)
>>>>>>> 1e8021d (first)
>>>>>>> 5938de4 (first)
>>>>>>> c55f785 (first)
