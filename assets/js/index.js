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
// document.getElementById("month-block").style.display="none";
// document.getElementById("year-block").style.display="none";
// function day() {
//     document.getElementById("day-block").style.display="block";
//     document.getElementById("month-block").style.display="none";
//     document.getElementById("year-block").style.display="none";
// }
// function month() {
//     document.getElementById("day-block").style.display="none";
//     document.getElementById("month-block").style.display="block";
//     document.getElementById("year-block").style.display="none";
// }
// function year() {
//     document.getElementById("day-block").style.display="none";
//     document.getElementById("month-block").style.display="none";
//     document.getElementById("year-block").style.display="block";
// }
$(document).ready(function () {
    var isLogin=sessionStorage.getItem('isLogin')||false;
    if(!isLogin) {
        window.location.href = 'index';
    }


    searchImg('图书馆');

    function logOut() {
        sessionStorage.removeItem('user');
        sessionStorage.removeItem('isLogin');
        window.location.href='index';
    }
    $('.dt-nav-quit').click(function () {
        logOut();
    });
});

$('.dt-left-nav-box').click(function () {
    console.log("executed");
    $('.dt-left-nav-box-active').removeClass('dt-left-nav-box-active');
    $(this).addClass('dt-left-nav-box-active');
    var url = searchImg($(this).html().toString());
    $("#map").attr('src', url);
});
// var chart = Highcharts.chart('container', {
//     chart: {
//         type: 'spline'
//     },
//     credits: {
//         enabled:false
//     },
//     title: {
//         text: ''
//     },
//     subtitle: {
//         text: ''
//     },
//     xAxis: {
//         categories: ['0时', '2时', '4时', '6时', '8时', '10时',
//             '12时', '14时', '16时', '18时', '20时', '22时']
//     },
//     yAxis: {
//         title: {
//             text: ''
//         },
//         labels: {
//             formatter: function () {
//                 return this.value;
//             }
//         }
//     },
//     tooltip: {
//         crosshairs: true,
//         shared: true
//     },
//     plotOptions: {
//         spline: {
//             marker: {
//                 radius: 2,
//                 lineColor: '#ffffff',
//                 lineWidth: 0
//             }
//         }
//     },
//     series: [{
//         name: '昨日',
//         marker: {
//             symbol: 'square'
//         },
//         data: [24, 24, 38, 32, 16, 6, 6, {
//             y: 12,
//             marker: {
//                 symbol: ''
//             }
//         }, 24, 28, 24,22]
//     }, {
//         name: '今日',
//         marker: {
//             symbol: 'diamond'
//         },
//         data: [{
//             y: 20,
//             marker: {
//                 symbol: ''
//             }
//         }, 20,26, 18, 10, 10, 6, 22, 20]
//
//     }]
//
// });

function searchImg(str) {
    var imgUrl = '';
    var data = [];
    switch (str) {
        case '图书馆':
            imgUrl = '../assets/img/pic-map-tushuguan.jpg';
            data = ['10KV', '2', '1000KVA*2', '51'];
            renderGeneral(data);
            break;
        case '同仁楼':
            imgUrl = '../assets/img/pic-map-tongrenlou.jpg';
            data = ['10KV', '1', '1000KVA', '36'];
            renderGeneral(data);
            break;
        case '同德楼':
            imgUrl = '../assets/img/pic-map-tongdelou.jpg';
            data = ['10KV', '2', '1000VA*2', '30'];
            renderGeneral(data);
            break;
        case '同济楼':
            imgUrl = '../assets/img/pic-map-tongjilou.jpg';
            data = ['10KV', '2', '1250VA*2', '30'];
            renderGeneral(data);
            break;
        case '求是楼':
            imgUrl = '../assets/img/pic-map-qiushilou.jpg';
            data = ['10KV', '2', '1250KVA*2', '57'];
            renderGeneral(data);
            break;
        case '学生活动中心':
            imgUrl = '../assets/img/pic-map-huodongzhongxin.jpg';
            data = ['10KV', '1', '1000KVA*1', '45'];
            renderGeneral(data);
            break;
        case '三期宿舍食堂':
            imgUrl = '../assets/img/pic-map-sanqisushe.jpg';
            data = ['10KV', '4', '1000KVA*2 1250*2', '44'];
            renderGeneral(data);
            break;
        case '三期宿舍下':
            imgUrl = '../assets/img/pic-map-sanqisushe2.jpg';
            break;
        case '中试基地':
            imgUrl = '../assets/img/pic-map-zhongshijidi.jpg';
            data = ['10KV', '1', '800KVA', '6'];
            renderGeneral(data);
            break;
        case '学院路1#':
            imgUrl = '../assets/img/pic-map-xueyuanlu1.jpg';
            data = ['10KV', '4', '1250KVA*4', '51'];
            renderGeneral(data);
            break;
        case '学院路2#':
            imgUrl = '../assets/img/pic-map-xueyuanlu2.jpg';
            data = ['10KV', '1', '1250KVA*1', '10'];
            renderGeneral(data);
            break;
        case '一期宿舍':
            imgUrl = '../assets/img/pic-map-yiqishitang.jpg';
            data = ['10KV', '3', '630KVA*2 500KVA*1', '48'];
            renderGeneral(data);
            break;
        case '二期宿舍':
            imgUrl = '../assets/img/pic-map-erqisushe.jpg';
            data = ['10KV', '3', '1000KVA*2 500KVA*1', '41'];
            renderGeneral(data);
            break;
    }
    return imgUrl;
}

//var data=['10KV', '2', '1250VA*2', '35'];
function renderGeneral(data) {
    $(".bottom-num:eq(0)").html(data[0]);
    $(".bottom-num:eq(1)").html(data[1]);
    $(".bottom-num:eq(2)").html(data[2]);
    $(".bottom-num:eq(3)").html(data[3]);
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
// document.getElementById("month-block").style.display="none";
// document.getElementById("year-block").style.display="none";
// function day() {
//     document.getElementById("day-block").style.display="block";
//     document.getElementById("month-block").style.display="none";
//     document.getElementById("year-block").style.display="none";
// }
// function month() {
//     document.getElementById("day-block").style.display="none";
//     document.getElementById("month-block").style.display="block";
//     document.getElementById("year-block").style.display="none";
// }
// function year() {
//     document.getElementById("day-block").style.display="none";
//     document.getElementById("month-block").style.display="none";
//     document.getElementById("year-block").style.display="block";
// }
$(document).ready(function () {
    var isLogin=sessionStorage.getItem('isLogin')||false;
    if(!isLogin) {
        window.location.href = 'index';
    }


    searchImg('图书馆');

    function logOut() {
        sessionStorage.removeItem('user');
        sessionStorage.removeItem('isLogin');
        window.location.href='index';
    }
    $('.dt-nav-quit').click(function () {
        logOut();
    });
});

$('.dt-left-nav-box').click(function () {
    console.log("executed");
    $('.dt-left-nav-box-active').removeClass('dt-left-nav-box-active');
    $(this).addClass('dt-left-nav-box-active');
    var url = searchImg($(this).html().toString());
    $("#map").attr('src', url);
});
// var chart = Highcharts.chart('container', {
//     chart: {
//         type: 'spline'
//     },
//     credits: {
//         enabled:false
//     },
//     title: {
//         text: ''
//     },
//     subtitle: {
//         text: ''
//     },
//     xAxis: {
//         categories: ['0时', '2时', '4时', '6时', '8时', '10时',
//             '12时', '14时', '16时', '18时', '20时', '22时']
//     },
//     yAxis: {
//         title: {
//             text: ''
//         },
//         labels: {
//             formatter: function () {
//                 return this.value;
//             }
//         }
//     },
//     tooltip: {
//         crosshairs: true,
//         shared: true
//     },
//     plotOptions: {
//         spline: {
//             marker: {
//                 radius: 2,
//                 lineColor: '#ffffff',
//                 lineWidth: 0
//             }
//         }
//     },
//     series: [{
//         name: '昨日',
//         marker: {
//             symbol: 'square'
//         },
//         data: [24, 24, 38, 32, 16, 6, 6, {
//             y: 12,
//             marker: {
//                 symbol: ''
//             }
//         }, 24, 28, 24,22]
//     }, {
//         name: '今日',
//         marker: {
//             symbol: 'diamond'
//         },
//         data: [{
//             y: 20,
//             marker: {
//                 symbol: ''
//             }
//         }, 20,26, 18, 10, 10, 6, 22, 20]
//
//     }]
//
// });

function searchImg(str) {
    var imgUrl = '';
    var data = [];
    switch (str) {
        case '图书馆':
            imgUrl = '../assets/img/pic-map-tushuguan.jpg';
            data = ['10KV', '2', '1000KVA*2', '51'];
            renderGeneral(data);
            break;
        case '同仁楼':
            imgUrl = '../assets/img/pic-map-tongrenlou.jpg';
            data = ['10KV', '1', '1000KVA', '36'];
            renderGeneral(data);
            break;
        case '同德楼':
            imgUrl = '../assets/img/pic-map-tongdelou.jpg';
            data = ['10KV', '2', '1000VA*2', '30'];
            renderGeneral(data);
            break;
        case '同济楼':
            imgUrl = '../assets/img/pic-map-tongjilou.jpg';
            data = ['10KV', '2', '1250VA*2', '30'];
            renderGeneral(data);
            break;
        case '求是楼':
            imgUrl = '../assets/img/pic-map-qiushilou.jpg';
            data = ['10KV', '2', '1250KVA*2', '57'];
            renderGeneral(data);
            break;
        case '学生活动中心':
            imgUrl = '../assets/img/pic-map-huodongzhongxin.jpg';
            data = ['10KV', '1', '1000KVA*1', '45'];
            renderGeneral(data);
            break;
        case '三期宿舍食堂':
            imgUrl = '../assets/img/pic-map-sanqisushe.jpg';
            data = ['10KV', '4', '1000KVA*2 1250*2', '44'];
            renderGeneral(data);
            break;
        case '三期宿舍下':
            imgUrl = '../assets/img/pic-map-sanqisushe2.jpg';
            break;
        case '中试基地':
            imgUrl = '../assets/img/pic-map-zhongshijidi.jpg';
            data = ['10KV', '1', '800KVA', '6'];
            renderGeneral(data);
            break;
        case '学院路1#':
            imgUrl = '../assets/img/pic-map-xueyuanlu1.jpg';
            data = ['10KV', '4', '1250KVA*4', '51'];
            renderGeneral(data);
            break;
        case '学院路2#':
            imgUrl = '../assets/img/pic-map-xueyuanlu2.jpg';
            data = ['10KV', '1', '1250KVA*1', '10'];
            renderGeneral(data);
            break;
        case '一期宿舍':
            imgUrl = '../assets/img/pic-map-yiqishitang.jpg';
            data = ['10KV', '3', '630KVA*2 500KVA*1', '48'];
            renderGeneral(data);
            break;
        case '二期宿舍':
            imgUrl = '../assets/img/pic-map-erqisushe.jpg';
            data = ['10KV', '3', '1000KVA*2 500KVA*1', '41'];
            renderGeneral(data);
            break;
    }
    return imgUrl;
}

//var data=['10KV', '2', '1250VA*2', '35'];
function renderGeneral(data) {
    $(".bottom-num:eq(0)").html(data[0]);
    $(".bottom-num:eq(1)").html(data[1]);
    $(".bottom-num:eq(2)").html(data[2]);
    $(".bottom-num:eq(3)").html(data[3]);
>>>>>>> dedd623 (first)
>>>>>>> 19b8a9c (first)
>>>>>>> 8f5179a (first)
>>>>>>> 87a8fdf (first)
>>>>>>> 1e8021d (first)
>>>>>>> 5938de4 (first)
>>>>>>> c55f785 (first)
}