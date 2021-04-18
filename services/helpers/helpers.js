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
 * Created by grovekingli on 2018/7/3.
 */
var underscore = require('underscore');
var Helper = module.exports = {};
var moment = require('moment');
var uuid = require('node-uuid');
Helper.getSecondNav = function getSecondNav(home) {
    var navMessage = [{
        "home": "图书馆",
        "deskList": [{
            "name": "Ⅰ进线柜",
            "loop": ["Ⅰ进线"]
        }, {
            "name": "D4柜",
            "loop": ["地下室照明", "网络中心空调", "一层照明", "二层照明", "三层照明", "开闭所照明"]
        }]
    }, {
        "home": "同德楼",
        "deskList": [{
            "name": "Ⅰ进线柜",
            "loop": ["Ⅰ进线"]
        }, {
            "name": "A2馈线柜",
            "loop": ["A2馈线柜"]
        }, {
            "name": "A3馈线柜",
            "loop": ["备用1", "备用2", "备用3"]
        }]
    }];

    var navList = [];

    for (var i = 0; i < navMessage.length; i++) {
        if (home === navMessage[i].home)
            navList = navMessage[i].deskList;
    }

    return navList;
};


//出参统一格式
Helper.API_RESULT_MODEL = {
    "obj": {
        "data": ""
    },
    "msg": {
        "error": "",
        "prompt": ""
    },
    "retcode": ""//查询成功返回200，没有数据返回404
};

//返回配电所，柜名和回路
Helper.search = function (obj) {
    var value = underscore.values(obj);
    for (var i = 0; i < value.length; i++) {
        var str = value[i];
        var home = str.slice(0, 2);
        var box = str.slice(2, 4);
        var loop = str.slice(4, 6);
        home = parseInt(home);
        box = parseInt(box);
        loop = parseInt(loop);
        var homeName = navMessage[home].home;
        var boxName = navMessage[home].deskList[box].name;
        var loopName = navMessage[home].deskList[box].loop[loop];
        var list = {
            homeName: homeName,
            boxName: boxName,
            loopName: loopName
        };
    }
    return list;
};

//自动生成id
Helper.getAutoId = function () {
    return moment().format('YYYYMMDDHHmmssSSS') +"-"+ uuid.v1().toUpperCase();
};





//地点json数组
var navMessage = [{
    "home": "图书馆",
    "deskList": [{
        "name": "Ⅰ进线柜",
        "loop": ["Ⅰ进线"]
    }, {
        "name": "D4柜",
        "loop": ["D4地下室照明", "D4网络中心空调", "D4一层照明", "D4二层照明", "D4三层照明", "D4开闭所照明", "D4西门桥路灯电源", "D4网络中心电源"]
    }, {
        "name": "D5柜",
        "loop": ["D5四层空调1", "D5四层空调2", "D5八层空调", "D5高教园区监控", "D5四层空调3"]
    }, {
        "name": "D6柜",
        "loop": ["D6地下室双电源", "D6一层双电源", "D6二层双电源", "D6三层双电源", "D6四层双电源", "D6六层双电源", "D6八层双电源", "D6八层电梯"]
    }, {
        "name": "联络柜",
        "loop": ["联络柜回路"]
    }, {
        "name": "D8柜",
        "loop": ["四层照明", "五层照明", "六层照明", "七层照明", "开闭所照明2", "中心广场照明", "洗车场"]
    }, {
        "name": "D9柜",
        "loop": ["D9地下室空调", "D9八层空调", "D91#配电间照明", "D9报告厅", "D9太阳能发电"]
    }, {
        "name": "D10柜",
        "loop": ["地下室双电源2", "一层双电源2", "二层双电源2", "三层双电源2", "四层双电源2", "六层双电源2", "八层双电源2","D10八层电梯机房双电源"]
    }, {
        "name": "Ⅱ进线柜",
        "loop": ["Ⅱ进线"]
    }]
}, {
    "home": "同仁楼",
    "deskList": [{
        "name": "L11进线柜",
        "loop": ["L11进线柜回路"]
    }, {
        "name": "L12馈线柜",
        "loop": ["L12馈线柜回路"]
    }, {
        "name": "L13馈线柜",
        "loop": ["L13馈线柜回路"]
    }, {
        "name": "L14馈线柜",
        "loop": ["L14馈线柜回路"]
    }, {
        "name": "L15馈线柜",
        "loop": ["备用1", "所用电SYD", "消防XF", "电梯1", "电梯2", "应急照明1", "应急照明2", "应急照明3", "备用2"]
    }, {
        "name": "L18联络柜",
        "loop": ["L18联络柜回路"]
    }, {
        "name": "L21进线柜",
        "loop": ["L21进线柜回路"]
    }, {
        "name": "L22馈线柜",
        "loop": ["L22进线柜回路"]
    }, {
        "name": "L23馈线柜",
        "loop": ["L23进线柜回路"]
    }, {
        "name": "L24馈线柜",
        "loop": ["L24进线柜回路"]
    }, {
        "name": "L25馈线柜",
        "loop": ["FM", "ZM1", "ZM2", "ZM3", "ZM4", "ZM5", "BO1", "备用3"]
    }, {
        "name": "L26馈线柜",
        "loop": ["L26馈线柜备用1", "EM1", "EM2", "EM3", "KT1", "KT2", "XF", "SYD", "L26馈线柜备用2"]
    }]
}, {
    "home": "同德楼",
    "deskList": [{
        "name": "Ⅰ进线柜",
        "loop": ["Ⅰ进线柜Ⅰ进线"]
    }, {
        "name": "A2馈线柜",
        "loop": ["A2馈线柜"]
    }, {
        "name": "A3馈线柜",
        "loop": ["A3备用1", "A3备用2", "A3备用3", "RD电源1","A3备用4","行政中心电源1"]
    }, {
        "name": "A4馈线柜",
        "loop": ["备用4", "备用5", "A4馈线柜SYD电源", "学术交流中心电源", "教学楼电源1"]
    }, {
        "name": "A6联络柜",
        "loop": ["联络柜"]
    }, {
        "name": "Ⅱ进线柜",
        "loop": ["Ⅱ进线柜Ⅱ进线"]
    }, {
        "name": "B2馈线柜",
        "loop": ["B2馈线柜"]
    }, {
        "name": "B3馈线柜",
        "loop": ["B3备用","海洋科学实验楼","SYD电源2","学术交流中心2", "教学楼电源2"]
    }, {
        "name": "B4馈线柜",
        "loop": ["B4备用", "广场配电2路", "广场配电1路", "RD电源2", "B4备用2","行政中心"]
    }]
}, {
    "home": "同济楼",
    "deskList": [{
        "name": "Ⅰ进线柜",
        "loop": ["Ⅰ进线柜Ⅰ进线"]
    }, {
        "name": "A2馈线柜",
        "loop": ["A2馈线柜备用1", "A2馈线柜备用2", "所用点", "配电箱", "A2馈线柜ZM", "A2馈线柜ZP"]
    }, {
        "name": "A3馈线柜",
        "loop": ["A3馈线柜备用1", "A3馈线柜备用2", "活动"]
    }, {
        "name": "A4馈线柜",
        "loop": ["A4馈线柜备用1", "A4馈线柜备用2", "实验楼1", "实验楼2"]
    }, {
        "name": "联络柜",
        "loop": ["联络柜"]
    }, {
        "name": "Ⅱ进线柜",
        "loop": ["Ⅱ进线柜"]
    }, {
        "name": "B2馈线柜",
        "loop": ["B2馈线柜备用1", "B2馈线柜备用2", "B2馈线柜备用3", "B2馈线柜备用4", "B2所用配", "B2配电箱", "B2馈线柜ZP"]
    }, {
        "name": "B3馈线柜",
        "loop": ["B3馈线柜备用1", "B3馈线柜备用2", "B3馈线柜ZP2", "实验楼"]
    }, {
        "name": "B4馈线柜",
        "loop": ["B4馈线柜备用1", "B4馈线柜备用2", "B4馈线柜备用3", "B4实验"]
    }]
},  {
    "home": "学生活动中心",
    "deskList": [{
        "name": "A1馈线柜",
        "loop": ["A1馈线柜"]
    }, {
        "name": "A2馈线柜",
        "loop": ["电加热器H1", "A2馈线柜备用", "动力箱1D1+1D2", "动力箱3D1", "动力箱1D3", "动力箱2D1", "动力箱1D4", "动力箱室外看台配电箱"]
    }, {
        "name": "A3馈线柜",
        "loop": ["A3馈线柜备用1", "电加热器H2", "双切箱电源1", "A3馈线柜备用2", "A3馈线柜备用3", "游泳池2", "A3馈线柜备用4", "求知楼"]
    }, {
        "name": "A4馈线柜",
        "loop": ["机械舞台", "A4馈线柜备用1", "A4馈线柜ZM1", "新动力柜", "A4馈线柜备用2", "后面教学楼"]
    }, {
        "name": "A5馈线柜",
        "loop": ["A5馈线柜备用1", "A5馈线柜备用2", "双切箱电源2", "游泳电源", "泳池水处理", "冷冻机"]
    }, {
        "name": "A6馈线柜",
        "loop": ["A6馈线柜备用1", "A6馈线柜东门", "A6馈线柜ZM1", "A6馈线柜ZM2", "电加热器H3", "电加热器H4","电加热H5","冷冻机CH2"]
    }, {
        "name": "B1馈线柜",
        "loop": ["B2馈线ZM", "B2馈线柜备用", "配电箱电源1", "配电箱电源2", "篮球场照明", "B2馈线柜备用2"]
    }]
}, {
    "home": "一期宿舍",
    "deskList": [{
        "name": "Ⅰ进线柜",
        "loop": ["Ⅰ进线"]
    }, {
        "name": "D3馈线柜",
        "loop": ["D3馈线柜备用1", "D3馈线柜备用2", "D3馈线柜1#楼", "东西1-3", "D3馈线柜备用3"]
    }, {
        "name": "D4馈线柜",
        "loop": ["D4馈线柜备用1", "配电室开闭所照明", "D4馈线柜2#楼", "D4馈线柜3#楼", "D4馈线柜4#楼"]
    }, {
        "name": "D5联络柜",
        "loop": ["D5联络柜"]
    }, {
        "name": "D6馈线柜",
        "loop": ["室外照明", "D6馈线柜备用1", "D6馈线柜1#楼", "D6馈线柜1#", "D6馈线柜5#"]
    }, {
        "name": "D7馈线柜",
        "loop": ["D7馈线柜备用", "D7馈线柜开闭所照明", "D7馈线柜2#楼", "D7馈线柜3#楼", "D7馈线柜4#楼"]
    }, {
        "name": "Ⅱ进线柜",
        "loop": ["Ⅱ进线"]
    }, {
        "name": "Ⅲ进线柜",
        "loop": ["Ⅲ进线"]
    }, {
        "name": "2D1出线",
        "loop": ["2D1出线"]
    }, {
        "name": "2D3馈线柜",
        "loop": ["2D3馈线柜备用1", "2D3馈线柜备用2", "2D3馈线动力Ⅰ", "2D3馈线照明", "2D3馈线水泵"]
    }, {
        "name": "2D4馈线柜",
        "loop": ["双电源自动切换箱", "2D4馈线备用1", "2D4馈线备用2", "2D4馈线地下室", "2D4馈线动力Ⅱ", "2D4馈线备用3"]
    }]
}, {
    "home": "二期宿舍",
    "deskList": [{
        "name": "1D1进线柜",
        "loop": ["进线柜"]
    }, {
        "name": "A4馈线柜",
        "loop": ["A4馈线备用1", "7#A1", "7#A2", "8#A1", "8#A2"]
    }, {
        "name": "A5馈线柜",
        "loop": ["肖季", "9#A1", "9#A2", "11#A1", "11#A2"]
    }, {
        "name": "A6联络柜",
        "loop": ["A6联络柜"]
    }, {
        "name": "A7馈线柜",
        "loop": ["A7馈线备用", "配电房", "路灯", "10#A1", "10#A2"]
    }, {
        "name": "A8馈线柜",
        "loop": ["A8馈线备用", "12#A1", "12#A2", "13#A1", "13#A2"]
    }, {
        "name": "Ⅱ进线柜",
        "loop": ["Ⅱ进线"]
    }, {
        "name": "Ⅲ进线柜",
        "loop": ["Ⅲ进线"]
    }, {
        "name": "B3馈线柜",
        "loop": ["B3馈线备用", "B3馈线路灯备用", "B3馈线备用2", "B3馈线备用3", "B3馈线电动"]
    }]
}, {
    "home": "中试基地",
    "deskList": [{
        "name": "A1进线柜",
        "loop": ["进线柜"]
    }, {
        "name": "D3馈线柜",
        "loop": ["D3馈线备用1", "D3馈线备用2", "D3馈线备用3", "D3馈线备用4"]
    }]
}, {
    "home": "学院路2#",
    "deskList": [{
        "name": "D1进线柜",
        "loop": ["进线柜"]
    }, {
        "name": "D4馈线柜",
        "loop": ["学生公寓一", "学生公寓二", "D4馈线柜备用", "D4馈线柜备用"]
    }, {
        "name": "D5联络柜",
        "loop": ["D5联络柜"]
    }, {
        "name": "D6馈线柜",
        "loop": ["活动中心", "西楼水泵", "D6馈线柜备用", "配电房照明", "D6馈线柜备用"]
    }]
}, {
    "home": "求是楼",
    "deskList": [{
        "name": "Ⅰ进线柜",
        "loop": ["Ⅰ进线柜Ⅰ进线"]
    }, {
        "name": "A2馈线柜",
        "loop": ["A2馈线柜备用1", "焚烧炉预留", "A2馈线柜备用2", "三层净化间预留", "A2馈线柜备用3"]
    }, {
        "name": "A3馈线柜",
        "loop": ["A3馈线柜备用1", "A3馈线柜备用2", "架空", "A3馈线柜一层", "A3馈线柜二层", "动物实验楼"]
    }, {
        "name": "A4馈线柜",
        "loop": ["A4馈线柜备用1", "A4馈线柜备用2", "A4馈线柜二层照明电源", "给水（潜水）泵配电箱电源", "消防（喷淋）泵电控柜电源1", "二层空调箱2K电源", "风水操场"]
    }, {
        "name": "A5馈线柜",
        "loop": ["A5馈线柜备用1", "A5馈线柜备用2", "电梯（病床梯）", "变电所配电盘", "一层空调箱1K电源", "一层动力箱1D电源"]
    }, {
        "name": "A7联络柜",
        "loop": ["A7联络柜"]
    }, {
        "name": "Ⅱ进线柜",
        "loop": ["Ⅱ进线柜"]
    }, {
        "name": "B2馈线柜",
        "loop": ["B2馈线柜备用1", "B2馈线柜备用2", "B2馈线柜备用3", "B2馈线柜二层净化间", "B2馈线柜备用4"]
    }, {
        "name": "B3馈线柜",
        "loop": ["B3馈线柜备用1", "B3馈线柜备用2", "B3馈线柜变电所配电盘", "B3馈线柜电梯（病床梯）", "B3馈线柜三层净化间", "B3馈线柜动物实验楼"]
    }, {
        "name": "B4馈线柜",
        "loop": ["B4馈线柜备用1", "B4馈线柜四层照明", "B4馈线柜备用", "B4馈线柜空调4K电源", "B4馈线柜空调4D电源"]
    }, {
        "name": "B5馈线柜",
        "loop": ["B5馈线柜备用1", "B5馈线柜备用2", "B5消防", "B5馈线柜三层照明1", "B5馈线柜三层照明2", "B5馈线柜三层空调箱3K电源"]
    }, {
        "name": "B8馈线柜",
        "loop": ["B8馈线柜备用1", "B8馈线柜备用2", "B8馈线柜备用3", "B8馈线柜备用4", "B8馈线柜备用5"]
    }]
}, {
    "home": "三期宿舍食堂",
    "deskList": [{
        "name": "Ⅰ进线柜",
        "loop": ["Ⅰ进线柜Ⅰ进线"]
    }, {
        "name": "D4馈线柜",
        "loop": ["14#楼", "14#楼2", "16#楼", "16#楼2"]
    }, {
        "name": "D5馈线柜",
        "loop": ["A3馈线柜备用1", "施工用电", "二层配电房照明", "D5馈线柜备用", "18#楼1", "18#楼2"]
    }, {
        "name": "D6联络柜",
        "loop": ["D6联络柜"]
    }, {
        "name": "D7馈线柜",
        "loop": ["14#楼", "15#楼", "17#楼", "17#楼2"]
    }, {
        "name": "Ⅱ进线柜",
        "loop": ["Ⅱ进线柜"]
    }, {
        "name": "Ⅲ进线柜",
        "loop": ["Ⅲ进线柜"]
    }, {
        "name": "D15馈线柜",
        "loop": ["JX02", "2区13-16层", "备用", "JX04", "JX01"]
    }, {
        "name": "D18联络柜",
        "loop": ["D18联络柜"]
    }, {
        "name": "D20馈线柜",
        "loop": ["1-6", "D20馈线柜备用1", "D20馈线柜备用2"]
    }, {
        "name": "D24进线柜",
        "loop": ["D24进线柜"]
    }, {
        "name": "B1馈线柜",
        "loop": ["B1馈线备用1", "B1馈线备用2", "B1馈线备用3", "B1馈线备用4", "B1馈线备用5", "三层食堂A2"]
    }, {
        "name": "Ⅰ进线柜2",
        "loop": ["Ⅰ进线柜2Ⅰ进线", "Ⅰ进线柜2Ⅰ出线"]
    }, {
        "name": "D8馈线柜",
        "loop": ["D8馈线柜备用1", "D8馈线柜备用2", "十足店", "一层配电房照明", "十足店", "19#楼", "19#楼2"]
    }, {
        "name": "D16馈线柜",
        "loop": ["D16馈线柜备用", "JX03", "JX05"]
    }, {
        "name": "D17馈线柜",
        "loop": ["D17馈线柜备用", "JX04(D17)", "JX01(D17)"]
    }, {
        "name": "D21馈线柜",
        "loop": ["D21馈线柜备用3", "JX03(D21)", "JX05(D21)"]
    }]
}, {
    "home": "学院路1#",
    "deskList": [{
        "name": "D1进线柜",
        "loop": ["8176变压器4进线"]
    }, {
        "name": "D2进线柜",
        "loop": ["进线柜"]
    }, {
        "name": "D3进线总柜",
        "loop": ["进线总柜"]
    }, {
        "name": "4#馈线柜",
        "loop": ["科教楼动力", "技能中心"]
    }, {
        "name": "5#馈线柜",
        "loop": ["东教学楼", "学生东楼", "学生西楼", "司令台", "学生住宿中楼", "配电房用电"]
    }, {
        "name": "6#馈线柜",
        "loop": ["法医鉴定中心二楼", "专家楼", "法医鉴定中心河边", "路灯"]
    }, {
        "name": "7#馈线柜",
        "loop": ["游泳馆", "7#馈线柜备用"]
    }, {
        "name": "9#馈线柜",
        "loop": ["洗澡浴室", "动物房", "9#馈线柜备用", "口腔1", "口腔2", "东结合楼"]
    }, {
        "name": "D11联络柜",
        "loop": ["联络柜"]
    }, {
        "name": "D12进线柜",
        "loop": ["D12进线柜进线"]
    }, {
        "name": "D13进线柜",
        "loop": ["D13进线柜进线"]
    }, {
        "name": "D14进线总柜",
        "loop": ["D14进线总柜"]
    }, {
        "name": "D15发电机柜",
        "loop": ["D15发电机柜"]
    }, {
        "name": "16#馈线柜",
        "loop": ["急诊楼", "法医鉴定中心"]
    }, {
        "name": "17#馈线柜",
        "loop": ["网球场", "备用", "食堂空调220A", "附二食堂二楼160A"]
    }, {
        "name": "18#馈线柜",
        "loop": ["公寓楼一", "公寓楼二", "科教一层楼", "口腔洗衣房"]
    }, {
        "name": "19#馈线柜",
        "loop": ["学术馆1路", "学术馆2路", "配电房1路", "公寓楼水泵", "移动公司", "专家楼餐厅"]
    }, {
        "name": "20#馈线柜",
        "loop": ["学生活动中心", "学生活动中心2", "食堂1", "食堂2"]
    }, {
        "name": "23#馈线柜",
        "loop": ["科学楼", "基因组"]
    }]
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
 * Created by grovekingli on 2018/7/3.
 */
var underscore = require('underscore');
var Helper = module.exports = {};
var moment = require('moment');
var uuid = require('node-uuid');
Helper.getSecondNav = function getSecondNav(home) {
    var navMessage = [{
        "home": "图书馆",
        "deskList": [{
            "name": "Ⅰ进线柜",
            "loop": ["Ⅰ进线"]
        }, {
            "name": "D4柜",
            "loop": ["地下室照明", "网络中心空调", "一层照明", "二层照明", "三层照明", "开闭所照明"]
        }]
    }, {
        "home": "同德楼",
        "deskList": [{
            "name": "Ⅰ进线柜",
            "loop": ["Ⅰ进线"]
        }, {
            "name": "A2馈线柜",
            "loop": ["A2馈线柜"]
        }, {
            "name": "A3馈线柜",
            "loop": ["备用1", "备用2", "备用3"]
        }]
    }];

    var navList = [];

    for (var i = 0; i < navMessage.length; i++) {
        if (home === navMessage[i].home)
            navList = navMessage[i].deskList;
    }

    return navList;
};


//出参统一格式
Helper.API_RESULT_MODEL = {
    "obj": {
        "data": ""
    },
    "msg": {
        "error": "",
        "prompt": ""
    },
    "retcode": ""//查询成功返回200，没有数据返回404
};

//返回配电所，柜名和回路
Helper.search = function (obj) {
    var value = underscore.values(obj);
    for (var i = 0; i < value.length; i++) {
        var str = value[i];
        var home = str.slice(0, 2);
        var box = str.slice(2, 4);
        var loop = str.slice(4, 6);
        home = parseInt(home);
        box = parseInt(box);
        loop = parseInt(loop);
        var homeName = navMessage[home].home;
        var boxName = navMessage[home].deskList[box].name;
        var loopName = navMessage[home].deskList[box].loop[loop];
        var list = {
            homeName: homeName,
            boxName: boxName,
            loopName: loopName
        };
    }
    return list;
};

//自动生成id
Helper.getAutoId = function () {
    return moment().format('YYYYMMDDHHmmssSSS') +"-"+ uuid.v1().toUpperCase();
};





//地点json数组
var navMessage = [{
    "home": "图书馆",
    "deskList": [{
        "name": "Ⅰ进线柜",
        "loop": ["Ⅰ进线"]
    }, {
        "name": "D4柜",
        "loop": ["D4地下室照明", "D4网络中心空调", "D4一层照明", "D4二层照明", "D4三层照明", "D4开闭所照明", "D4西门桥路灯电源", "D4网络中心电源"]
    }, {
        "name": "D5柜",
        "loop": ["D5四层空调1", "D5四层空调2", "D5八层空调", "D5高教园区监控", "D5四层空调3"]
    }, {
        "name": "D6柜",
        "loop": ["D6地下室双电源", "D6一层双电源", "D6二层双电源", "D6三层双电源", "D6四层双电源", "D6六层双电源", "D6八层双电源", "D6八层电梯"]
    }, {
        "name": "联络柜",
        "loop": ["联络柜回路"]
    }, {
        "name": "D8柜",
        "loop": ["四层照明", "五层照明", "六层照明", "七层照明", "开闭所照明2", "中心广场照明", "洗车场"]
    }, {
        "name": "D9柜",
        "loop": ["D9地下室空调", "D9八层空调", "D91#配电间照明", "D9报告厅", "D9太阳能发电"]
    }, {
        "name": "D10柜",
        "loop": ["地下室双电源2", "一层双电源2", "二层双电源2", "三层双电源2", "四层双电源2", "六层双电源2", "八层双电源2","D10八层电梯机房双电源"]
    }, {
        "name": "Ⅱ进线柜",
        "loop": ["Ⅱ进线"]
    }]
}, {
    "home": "同仁楼",
    "deskList": [{
        "name": "L11进线柜",
        "loop": ["L11进线柜回路"]
    }, {
        "name": "L12馈线柜",
        "loop": ["L12馈线柜回路"]
    }, {
        "name": "L13馈线柜",
        "loop": ["L13馈线柜回路"]
    }, {
        "name": "L14馈线柜",
        "loop": ["L14馈线柜回路"]
    }, {
        "name": "L15馈线柜",
        "loop": ["备用1", "所用电SYD", "消防XF", "电梯1", "电梯2", "应急照明1", "应急照明2", "应急照明3", "备用2"]
    }, {
        "name": "L18联络柜",
        "loop": ["L18联络柜回路"]
    }, {
        "name": "L21进线柜",
        "loop": ["L21进线柜回路"]
    }, {
        "name": "L22馈线柜",
        "loop": ["L22进线柜回路"]
    }, {
        "name": "L23馈线柜",
        "loop": ["L23进线柜回路"]
    }, {
        "name": "L24馈线柜",
        "loop": ["L24进线柜回路"]
    }, {
        "name": "L25馈线柜",
        "loop": ["FM", "ZM1", "ZM2", "ZM3", "ZM4", "ZM5", "BO1", "备用3"]
    }, {
        "name": "L26馈线柜",
        "loop": ["L26馈线柜备用1", "EM1", "EM2", "EM3", "KT1", "KT2", "XF", "SYD", "L26馈线柜备用2"]
    }]
}, {
    "home": "同德楼",
    "deskList": [{
        "name": "Ⅰ进线柜",
        "loop": ["Ⅰ进线柜Ⅰ进线"]
    }, {
        "name": "A2馈线柜",
        "loop": ["A2馈线柜"]
    }, {
        "name": "A3馈线柜",
        "loop": ["A3备用1", "A3备用2", "A3备用3", "RD电源1","A3备用4","行政中心电源1"]
    }, {
        "name": "A4馈线柜",
        "loop": ["备用4", "备用5", "A4馈线柜SYD电源", "学术交流中心电源", "教学楼电源1"]
    }, {
        "name": "A6联络柜",
        "loop": ["联络柜"]
    }, {
        "name": "Ⅱ进线柜",
        "loop": ["Ⅱ进线柜Ⅱ进线"]
    }, {
        "name": "B2馈线柜",
        "loop": ["B2馈线柜"]
    }, {
        "name": "B3馈线柜",
        "loop": ["B3备用","海洋科学实验楼","SYD电源2","学术交流中心2", "教学楼电源2"]
    }, {
        "name": "B4馈线柜",
        "loop": ["B4备用", "广场配电2路", "广场配电1路", "RD电源2", "B4备用2","行政中心"]
    }]
}, {
    "home": "同济楼",
    "deskList": [{
        "name": "Ⅰ进线柜",
        "loop": ["Ⅰ进线柜Ⅰ进线"]
    }, {
        "name": "A2馈线柜",
        "loop": ["A2馈线柜备用1", "A2馈线柜备用2", "所用点", "配电箱", "A2馈线柜ZM", "A2馈线柜ZP"]
    }, {
        "name": "A3馈线柜",
        "loop": ["A3馈线柜备用1", "A3馈线柜备用2", "活动"]
    }, {
        "name": "A4馈线柜",
        "loop": ["A4馈线柜备用1", "A4馈线柜备用2", "实验楼1", "实验楼2"]
    }, {
        "name": "联络柜",
        "loop": ["联络柜"]
    }, {
        "name": "Ⅱ进线柜",
        "loop": ["Ⅱ进线柜"]
    }, {
        "name": "B2馈线柜",
        "loop": ["B2馈线柜备用1", "B2馈线柜备用2", "B2馈线柜备用3", "B2馈线柜备用4", "B2所用配", "B2配电箱", "B2馈线柜ZP"]
    }, {
        "name": "B3馈线柜",
        "loop": ["B3馈线柜备用1", "B3馈线柜备用2", "B3馈线柜ZP2", "实验楼"]
    }, {
        "name": "B4馈线柜",
        "loop": ["B4馈线柜备用1", "B4馈线柜备用2", "B4馈线柜备用3", "B4实验"]
    }]
},  {
    "home": "学生活动中心",
    "deskList": [{
        "name": "A1馈线柜",
        "loop": ["A1馈线柜"]
    }, {
        "name": "A2馈线柜",
        "loop": ["电加热器H1", "A2馈线柜备用", "动力箱1D1+1D2", "动力箱3D1", "动力箱1D3", "动力箱2D1", "动力箱1D4", "动力箱室外看台配电箱"]
    }, {
        "name": "A3馈线柜",
        "loop": ["A3馈线柜备用1", "电加热器H2", "双切箱电源1", "A3馈线柜备用2", "A3馈线柜备用3", "游泳池2", "A3馈线柜备用4", "求知楼"]
    }, {
        "name": "A4馈线柜",
        "loop": ["机械舞台", "A4馈线柜备用1", "A4馈线柜ZM1", "新动力柜", "A4馈线柜备用2", "后面教学楼"]
    }, {
        "name": "A5馈线柜",
        "loop": ["A5馈线柜备用1", "A5馈线柜备用2", "双切箱电源2", "游泳电源", "泳池水处理", "冷冻机"]
    }, {
        "name": "A6馈线柜",
        "loop": ["A6馈线柜备用1", "A6馈线柜东门", "A6馈线柜ZM1", "A6馈线柜ZM2", "电加热器H3", "电加热器H4","电加热H5","冷冻机CH2"]
    }, {
        "name": "B1馈线柜",
        "loop": ["B2馈线ZM", "B2馈线柜备用", "配电箱电源1", "配电箱电源2", "篮球场照明", "B2馈线柜备用2"]
    }]
}, {
    "home": "一期宿舍",
    "deskList": [{
        "name": "Ⅰ进线柜",
        "loop": ["Ⅰ进线"]
    }, {
        "name": "D3馈线柜",
        "loop": ["D3馈线柜备用1", "D3馈线柜备用2", "D3馈线柜1#楼", "东西1-3", "D3馈线柜备用3"]
    }, {
        "name": "D4馈线柜",
        "loop": ["D4馈线柜备用1", "配电室开闭所照明", "D4馈线柜2#楼", "D4馈线柜3#楼", "D4馈线柜4#楼"]
    }, {
        "name": "D5联络柜",
        "loop": ["D5联络柜"]
    }, {
        "name": "D6馈线柜",
        "loop": ["室外照明", "D6馈线柜备用1", "D6馈线柜1#楼", "D6馈线柜1#", "D6馈线柜5#"]
    }, {
        "name": "D7馈线柜",
        "loop": ["D7馈线柜备用", "D7馈线柜开闭所照明", "D7馈线柜2#楼", "D7馈线柜3#楼", "D7馈线柜4#楼"]
    }, {
        "name": "Ⅱ进线柜",
        "loop": ["Ⅱ进线"]
    }, {
        "name": "Ⅲ进线柜",
        "loop": ["Ⅲ进线"]
    }, {
        "name": "2D1出线",
        "loop": ["2D1出线"]
    }, {
        "name": "2D3馈线柜",
        "loop": ["2D3馈线柜备用1", "2D3馈线柜备用2", "2D3馈线动力Ⅰ", "2D3馈线照明", "2D3馈线水泵"]
    }, {
        "name": "2D4馈线柜",
        "loop": ["双电源自动切换箱", "2D4馈线备用1", "2D4馈线备用2", "2D4馈线地下室", "2D4馈线动力Ⅱ", "2D4馈线备用3"]
    }]
}, {
    "home": "二期宿舍",
    "deskList": [{
        "name": "1D1进线柜",
        "loop": ["进线柜"]
    }, {
        "name": "A4馈线柜",
        "loop": ["A4馈线备用1", "7#A1", "7#A2", "8#A1", "8#A2"]
    }, {
        "name": "A5馈线柜",
        "loop": ["肖季", "9#A1", "9#A2", "11#A1", "11#A2"]
    }, {
        "name": "A6联络柜",
        "loop": ["A6联络柜"]
    }, {
        "name": "A7馈线柜",
        "loop": ["A7馈线备用", "配电房", "路灯", "10#A1", "10#A2"]
    }, {
        "name": "A8馈线柜",
        "loop": ["A8馈线备用", "12#A1", "12#A2", "13#A1", "13#A2"]
    }, {
        "name": "Ⅱ进线柜",
        "loop": ["Ⅱ进线"]
    }, {
        "name": "Ⅲ进线柜",
        "loop": ["Ⅲ进线"]
    }, {
        "name": "B3馈线柜",
        "loop": ["B3馈线备用", "B3馈线路灯备用", "B3馈线备用2", "B3馈线备用3", "B3馈线电动"]
    }]
}, {
    "home": "中试基地",
    "deskList": [{
        "name": "A1进线柜",
        "loop": ["进线柜"]
    }, {
        "name": "D3馈线柜",
        "loop": ["D3馈线备用1", "D3馈线备用2", "D3馈线备用3", "D3馈线备用4"]
    }]
}, {
    "home": "学院路2#",
    "deskList": [{
        "name": "D1进线柜",
        "loop": ["进线柜"]
    }, {
        "name": "D4馈线柜",
        "loop": ["学生公寓一", "学生公寓二", "D4馈线柜备用", "D4馈线柜备用"]
    }, {
        "name": "D5联络柜",
        "loop": ["D5联络柜"]
    }, {
        "name": "D6馈线柜",
        "loop": ["活动中心", "西楼水泵", "D6馈线柜备用", "配电房照明", "D6馈线柜备用"]
    }]
}, {
    "home": "求是楼",
    "deskList": [{
        "name": "Ⅰ进线柜",
        "loop": ["Ⅰ进线柜Ⅰ进线"]
    }, {
        "name": "A2馈线柜",
        "loop": ["A2馈线柜备用1", "焚烧炉预留", "A2馈线柜备用2", "三层净化间预留", "A2馈线柜备用3"]
    }, {
        "name": "A3馈线柜",
        "loop": ["A3馈线柜备用1", "A3馈线柜备用2", "架空", "A3馈线柜一层", "A3馈线柜二层", "动物实验楼"]
    }, {
        "name": "A4馈线柜",
        "loop": ["A4馈线柜备用1", "A4馈线柜备用2", "A4馈线柜二层照明电源", "给水（潜水）泵配电箱电源", "消防（喷淋）泵电控柜电源1", "二层空调箱2K电源", "风水操场"]
    }, {
        "name": "A5馈线柜",
        "loop": ["A5馈线柜备用1", "A5馈线柜备用2", "电梯（病床梯）", "变电所配电盘", "一层空调箱1K电源", "一层动力箱1D电源"]
    }, {
        "name": "A7联络柜",
        "loop": ["A7联络柜"]
    }, {
        "name": "Ⅱ进线柜",
        "loop": ["Ⅱ进线柜"]
    }, {
        "name": "B2馈线柜",
        "loop": ["B2馈线柜备用1", "B2馈线柜备用2", "B2馈线柜备用3", "B2馈线柜二层净化间", "B2馈线柜备用4"]
    }, {
        "name": "B3馈线柜",
        "loop": ["B3馈线柜备用1", "B3馈线柜备用2", "B3馈线柜变电所配电盘", "B3馈线柜电梯（病床梯）", "B3馈线柜三层净化间", "B3馈线柜动物实验楼"]
    }, {
        "name": "B4馈线柜",
        "loop": ["B4馈线柜备用1", "B4馈线柜四层照明", "B4馈线柜备用", "B4馈线柜空调4K电源", "B4馈线柜空调4D电源"]
    }, {
        "name": "B5馈线柜",
        "loop": ["B5馈线柜备用1", "B5馈线柜备用2", "B5消防", "B5馈线柜三层照明1", "B5馈线柜三层照明2", "B5馈线柜三层空调箱3K电源"]
    }, {
        "name": "B8馈线柜",
        "loop": ["B8馈线柜备用1", "B8馈线柜备用2", "B8馈线柜备用3", "B8馈线柜备用4", "B8馈线柜备用5"]
    }]
}, {
    "home": "三期宿舍食堂",
    "deskList": [{
        "name": "Ⅰ进线柜",
        "loop": ["Ⅰ进线柜Ⅰ进线"]
    }, {
        "name": "D4馈线柜",
        "loop": ["14#楼", "14#楼2", "16#楼", "16#楼2"]
    }, {
        "name": "D5馈线柜",
        "loop": ["A3馈线柜备用1", "施工用电", "二层配电房照明", "D5馈线柜备用", "18#楼1", "18#楼2"]
    }, {
        "name": "D6联络柜",
        "loop": ["D6联络柜"]
    }, {
        "name": "D7馈线柜",
        "loop": ["14#楼", "15#楼", "17#楼", "17#楼2"]
    }, {
        "name": "Ⅱ进线柜",
        "loop": ["Ⅱ进线柜"]
    }, {
        "name": "Ⅲ进线柜",
        "loop": ["Ⅲ进线柜"]
    }, {
        "name": "D15馈线柜",
        "loop": ["JX02", "2区13-16层", "备用", "JX04", "JX01"]
    }, {
        "name": "D18联络柜",
        "loop": ["D18联络柜"]
    }, {
        "name": "D20馈线柜",
        "loop": ["1-6", "D20馈线柜备用1", "D20馈线柜备用2"]
    }, {
        "name": "D24进线柜",
        "loop": ["D24进线柜"]
    }, {
        "name": "B1馈线柜",
        "loop": ["B1馈线备用1", "B1馈线备用2", "B1馈线备用3", "B1馈线备用4", "B1馈线备用5", "三层食堂A2"]
    }, {
        "name": "Ⅰ进线柜2",
        "loop": ["Ⅰ进线柜2Ⅰ进线", "Ⅰ进线柜2Ⅰ出线"]
    }, {
        "name": "D8馈线柜",
        "loop": ["D8馈线柜备用1", "D8馈线柜备用2", "十足店", "一层配电房照明", "十足店", "19#楼", "19#楼2"]
    }, {
        "name": "D16馈线柜",
        "loop": ["D16馈线柜备用", "JX03", "JX05"]
    }, {
        "name": "D17馈线柜",
        "loop": ["D17馈线柜备用", "JX04(D17)", "JX01(D17)"]
    }, {
        "name": "D21馈线柜",
        "loop": ["D21馈线柜备用3", "JX03(D21)", "JX05(D21)"]
    }]
}, {
    "home": "学院路1#",
    "deskList": [{
        "name": "D1进线柜",
        "loop": ["8176变压器4进线"]
    }, {
        "name": "D2进线柜",
        "loop": ["进线柜"]
    }, {
        "name": "D3进线总柜",
        "loop": ["进线总柜"]
    }, {
        "name": "4#馈线柜",
        "loop": ["科教楼动力", "技能中心"]
    }, {
        "name": "5#馈线柜",
        "loop": ["东教学楼", "学生东楼", "学生西楼", "司令台", "学生住宿中楼", "配电房用电"]
    }, {
        "name": "6#馈线柜",
        "loop": ["法医鉴定中心二楼", "专家楼", "法医鉴定中心河边", "路灯"]
    }, {
        "name": "7#馈线柜",
        "loop": ["游泳馆", "7#馈线柜备用"]
    }, {
        "name": "9#馈线柜",
        "loop": ["洗澡浴室", "动物房", "9#馈线柜备用", "口腔1", "口腔2", "东结合楼"]
    }, {
        "name": "D11联络柜",
        "loop": ["联络柜"]
    }, {
        "name": "D12进线柜",
        "loop": ["D12进线柜进线"]
    }, {
        "name": "D13进线柜",
        "loop": ["D13进线柜进线"]
    }, {
        "name": "D14进线总柜",
        "loop": ["D14进线总柜"]
    }, {
        "name": "D15发电机柜",
        "loop": ["D15发电机柜"]
    }, {
        "name": "16#馈线柜",
        "loop": ["急诊楼", "法医鉴定中心"]
    }, {
        "name": "17#馈线柜",
        "loop": ["网球场", "备用", "食堂空调220A", "附二食堂二楼160A"]
    }, {
        "name": "18#馈线柜",
        "loop": ["公寓楼一", "公寓楼二", "科教一层楼", "口腔洗衣房"]
    }, {
        "name": "19#馈线柜",
        "loop": ["学术馆1路", "学术馆2路", "配电房1路", "公寓楼水泵", "移动公司", "专家楼餐厅"]
    }, {
        "name": "20#馈线柜",
        "loop": ["学生活动中心", "学生活动中心2", "食堂1", "食堂2"]
    }, {
        "name": "23#馈线柜",
        "loop": ["科学楼", "基因组"]
    }]
>>>>>>> dedd623 (first)
>>>>>>> 19b8a9c (first)
>>>>>>> 8f5179a (first)
>>>>>>> 87a8fdf (first)
>>>>>>> 1e8021d (first)
>>>>>>> 5938de4 (first)
>>>>>>> c55f785 (first)
}];