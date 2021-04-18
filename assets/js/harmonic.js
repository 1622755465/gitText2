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

const navMessage = {
    navMessage: [{
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
            "loop": ["地下室双电源2", "一层双电源2", "二层双电源2", "三层双电源2", "四层双电源2", "六层双电源2", "八层双电源2", "D10八层电梯机房双电源"]
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
            "loop": ["A3备用1", "A3备用2", "A3备用3", "RD电源1", "A3备用4", "行政中心电源1"]
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
            "loop": ["B3备用", "海洋科学实验楼", "SYD电源2", "学术交流中心2", "教学楼电源2"]
        }, {
            "name": "B4馈线柜",
            "loop": ["B4备用", "广场配电2路", "广场配电1路", "RD电源2", "B4备用2", "行政中心"]
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
    }, {
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
            "loop": ["A6馈线柜备用1", "A6馈线柜东门", "A6馈线柜ZM1", "A6馈线柜ZM2", "电加热器H3", "电加热器H4", "电加热H5", "冷冻机CH2"]
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
    }]
}

Date.prototype.Format = function (fmt) { //author: meizz
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};
//第一次加载页面，默认渲染图书馆的二级导航栏
$(document).ready(function () {
    var startDate = new Date();
    startDate.setFullYear(2018, 6, 1);
    var endDate = new Date();
    endDate.setFullYear(2018, 6, 31);
    $('#daycalendarBox').val(new Date().Format("yyyy-MM-dd"));
    $('.form_date').datetimepicker({
        language: 'zh-CN',
        format: 'yyyy-mm-dd',
        weekStart: 1,
        todayBtn: 1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 2,
        minView: 2,
        forceParse: 0,
        // startDate: startDate,
        // endDate: endDate
    });

    function logOut() {
        sessionStorage.removeItem('user');
        sessionStorage.removeItem('isLogin');
        window.location.href = 'index';
    }

    $('.dt-nav-quit').click(function () {
        logOut();
    });
    $('#chartContainer').hide();
    // var navMessage = [];
    // renderSecondNav("图书馆");
    // $('#chartContainer').hide();
    //$('#dtp_input').val(new Date().Format("yyyy-MM-dd"));
    // $('#daycalendarBox').val(new Date().Format("yyyy-MM-dd"));
    // renderSelect(vm);
});

//请求数据
function getPowerData(obj, index, def) {
    const loading = obj.$loading({
        lock: true,
        text: '查找数据中',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
    });
    //console.log("executed");
    var Time = $('#daycalendarBox').val();
    var loopName = $('.loop__content-active').find("span").html();
    var keyObj = keySwitch(loopName, navMessage.navMessage[index].home);
    var typeKey = $("#select").val();
    var homeKey = StringNum(index);
    var addKeyEnd = "21";
    var key = "";

    //console.log($('.dt-left-nav-box-active').html().toString());
    // console.log(homeKey + ' ' + keyObj.deskKey + ' ' + keyObj.loopKey + ' ' + typeKey);
    // if(obj.type===0)

    key = homeKey + keyObj.deskKey + keyObj.loopKey + typeKey;
    var addKey = homeKey + keyObj.deskKey + keyObj.loopKey + addKeyEnd;
    if (typeKey === "00") {
        addKey = homeKey.toString() + keyObj.deskKey + keyObj.loopKey + "07";
    }
    if (typeKey === "01") {
        addKey = homeKey.toString() + keyObj.deskKey + keyObj.loopKey + "08";
    }
    if (typeKey === "02") {
        addKey = homeKey.toString() + keyObj.deskKey + keyObj.loopKey + "09";
    }
    if (def) {
        key = def.key;
        addKey = def.addKey;
        Time = def.Time;
        homeKey = def.homeKey;
    }

    var
        API_STATUS = {
            "apicode": "PostPowerInfo",
            "args": {
                "time": Time,
                "key": key,
                "home": homeKey
            }
        };
    axios.post("/api", API_STATUS
        , {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function (res) {

        // setTimeout(function () {
        //     loading.close();
        // }, 500);
        if (res.data.obj.data.length) {
            obj.list = res.data.obj.data;
            obj.remainder = res.data.obj.data[0].TS1;
            obj.loop = $('.loop__content-active span').html();
            var len = res.data.obj.data.length;
            var pop = {};
            vm.total = len / 2;
            for (var j = 0; j < len / 2; j++) {
                pop = {
                    loop: obj.loop,
                    ST1: res.data.obj.data[j * 2].TS,
                    DT1: res.data.obj.data[j * 2].DT,
                    ST2: res.data.obj.data[j * 2 + 1].TS,
                    DT2: res.data.obj.data[j * 2 + 1].DT,
                }
                vm.tableData[j] = pop;
            }
            renderChart(res.data.obj.data, getUnit());
        } else {
            obj.$message.error('暂无当前数据');
            console.log('no data');
        }

        loading.close();

    }).catch(function (error) {
        loading.close();
        console.log(error);
    });

}

function renderSelect(obj, index, callback) {

    var loopName = $('.loop__content-active').find("span").html();
    var keyObj = keySwitch(loopName, navMessage.navMessage[index].home);
    var homeKey = StringNum(index);

    if ("" === keyObj.deskKey) {
        keyObj.deskKey = "00";
        keyObj.loopKey = "00";
    }

    axios.post("/api", {
            "apicode": "CheckType",
            "args": {
                "key": homeKey + keyObj.deskKey + keyObj.loopKey
            }
        }
        , {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function (res) {
        if (res.data.obj || res.data.obj === 0) {
            obj.type = res.data.obj;
            sessionStorage.setItem('selectValue', res.data.obj);
            if (1 === res.data.obj)
                obj.eleType = typeLong;
            else if (0 === res.data.obj)
                obj.eleType = typeShort;
            else
                console.error('selectType return error!');
            if (callback) {
                callback();
            }
        } else {
            console.log('no data');
        }
    }).catch(function (error) {
        console.log(error);
    });
}

//渲染二级导航栏
function renderSecondNav(mainNav) {
    var navList = getSecondNav(mainNav);
    var headBegin = ' <div class="dt-tree-node-header"> <span class="glyphicon glyphicon-minus node" aria-hidden="true" style="color: black;"></span> <span class="dt-tree-node-header-font">';
    var headEnd = '</span> </div>';
    var bodyBegin = '<div class="dt-tree-node-container-show"> <div class="dt-tree-node-header dt-tree-node-position"> <span class="dt-tree-node-header-font" style="padding-left:20px; ">';
    var bodyEnd = '</span> </div> <div class="dt-tree-node-container-show"></div> </div>';
    $(".dt-tree-view").html("");
    for (var i = 0; i < navList.length; i++) {
        $(".dt-tree-view").append(headBegin + navList[i].name + headEnd);
        for (var j = 0; j < navList[i].loop.length; j++) {
            $(".dt-tree-view").append(bodyBegin + navList[i].loop[j] + bodyEnd);
        }
    }

    renderSelect(vm);

    $('.dt-tree-node-header:eq(1)').addClass('dt-tree-node-header-active');

    $('.dt-tree-node-container-show .dt-tree-node-header').click(function () {
        $('.dt-tree-node-header-active').removeClass('dt-tree-node-header-active');
        $(this).addClass('dt-tree-node-header-active');
        getPowerData(vm);
        renderSelect(vm);

    });


}

var typeShort = [{
    value: '00',
    text: '电流Ia'
}, {
    value: '01',
    text: '电流Ib'
}, {
    value: '02',
    text: '电流Ic'
}, {
    value: '03',
    text: 'A相历史最大电流'
}, {
    value: '04',
    text: 'B相历史最大电流'
}, {
    value: '05',
    text: 'C相历史最大电流'
}, {
    value: '06',
    text: '相不平衡率'
}, {
    value: '07',
    text: '开关输入DI'
}, {
    value: '08',
    text: 'A相电流余量'
}, {
    value: '09',
    text: 'B相电流余量'
}, {
    value: '10',
    text: 'C相电流余量'
}, {
    value: '11',
    text: '额定电流'
}, {
    value: '12',
    text: '余量设定值'
}];

var typeLong = [{
    value: '00',
    text: '线电压Uab'
}, {
    value: '01',
    text: '线电压Ubc'
}, {
    value: '02',
    text: '线电压Uca'
}, {
    value: '03',
    text: '电流Ia'
}, {
    value: '04',
    text: '电流Ib'
}, {
    value: '05',
    text: '电流Ic'
}, {
    value: '06',
    text: 'A相历史最大电流'
}, {
    value: '07',
    text: 'B相历史最大电流'
}, {
    value: '08',
    text: 'C相历史最大电流'
}, {
    value: '09',
    text: '相不平衡率'
}, {
    value: '10',
    text: '有功P'
}, {
    value: '11',
    text: '无功Q'
}, {
    value: '12',
    text: '视在S'
}, {
    value: '13',
    text: '功率因素PF'
}, {
    value: '14',
    text: '频率F'
}, {
    value: '15',
    text: '正向电能EP+'
}, {
    value: '16',
    text: '开关状态'
}, {
    value: '17',
    text: 'A相电流余量'
}, {
    value: '18',
    text: 'B相电流余量'
}, {
    value: '19',
    text: 'C相电流余量'
}, {
    value: '20',
    text: '额定电流'
}, {
    value: '21',
    text: '余量设定值'
}];

var vm = new Vue({
    el: "#vue-list",
    delimiters: ['${', '}'],
    data: {
        eleType: typeShort,
        type: 0,
        list: [],
        AllConfig: {},
        loop: "I进线",
        remainder: 0,
        isShowAllConfig: false,
        navList: navMessage.navMessage,
        // 数据页面
        isShowData: false,
        total: 0,//默认数据总数
        pagesize: 11,//每页的数据条数
        currentPage: 1,//默认开始页面
        istag: true,
        tableData: []
    },
    methods: {
        // 数据页面
        tableRowClassName({row, rowIndex}) {
            if (rowIndex === 0) {
                return 'th';
            }
            return '';
        },
        switchChange() {
            this.istag = !this.istag;

        },
        created: function () {
            this.total = this.tableData.length;
        },
        current_change: function (currentPage) {
            this.currentPage = currentPage;
        },

        // end
        GetHarmonicList: function (obj, index) {
            const loading = obj.$loading({
                lock: true,
                text: '查找数据中',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
            });
            //console.log("executed");
            var Time = $('#daycalendarBox').val();
            var type = parseInt(sessionStorage.getItem('selectValue'));
            var loopName = $('.loop__content-active').find("span").html();
            var keyObj = keySwitch(loopName, navMessage.navMessage[index].home);
            var typeKey = $("#select").val();
            var homeKey = StringNum(index);
            var key = homeKey + keyObj.deskKey + keyObj.loopKey + '00';

            //console.log($('.dt-left-nav-box-active').html().toString());
            if (type === 1) {
                for (var i = 1; i < 22; i++) {
                    key += (',' + homeKey + keyObj.deskKey + keyObj.loopKey + StringNum(i));
                }
            } else if (type === 0) {
                for (var i = 1; i < 13; i++) {
                    key += (',' + homeKey + keyObj.deskKey + keyObj.loopKey + StringNum(i));
                }
            }

            var
                API_STATUS = {
                    "apicode": "GetHarmonicList",
                    "args": {
                        "key": key,
                        "home": homeKey,
                        "type": type
                    }
                };
            axios.post("/api", API_STATUS
                , {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(function (res) {
                loading.close();
                if (res.data.obj.data) {
                    obj.AllConfig = res.data.obj.data;
                } else {
                    loading.close();
                    obj.$message.error('暂无当前数据');
                    obj.AllConfig = _.map(obj.AllConfig, function (value) {
                        return "";
                    });
                    console.log('no data');
                }
            }).catch(function (error) {
                console.log(error);

            });
        },
        selectLoop: function (obj, index) {
            var _this = this;
            $('.loop__content-active').removeClass("loop__content-active");
            var el = obj.currentTarget;
            $(el).addClass("loop__content-active");
            renderSelect(_this, index, function () {
                if (!_this.isShowAllConfig) {
                    getPowerData(_this, index);
                } else {
                    _this.GetHarmonicList(_this, index);
                }
            });
            sessionStorage.setItem('homeIndex', index);
        },
        search: function () {
            var _this = this;
            var index = sessionStorage.getItem('homeIndex');
            getPowerData(_this, index);
            console.log(_this.list);
        },
        switchChart: function () {
            $('#sheetContainer').hide();
            $('#chartContainer').show();
            $(".middle-button").removeClass('dt-btn-active');
            $("#chart").addClass('dt-btn-active');
            this.isShowAllConfig = false;
            renderChart(this.list, getUnit());
        },
        switchSheet: function () {
            var _this = this;
            _this.isShowAllConfig = false;
            $('#chartContainer').hide();
            $('#sheetContainer').show();
            $(".middle-button").removeClass('dt-btn-active');
            $("#data").addClass('dt-btn-active');
            var index = sessionStorage.getItem('homeIndex');
            if (index===null){
                _this.$message.error("请选择地点");
                return ;
            }
            getPowerData(_this, index);

        },
        outPut: function () {
            // $('#outPutTable').tableExport({type: 'excel'});
            var obj=this;
            var index = sessionStorage.getItem('homeIndex');
            if (index===null){
                obj.$message.error("请选择地点");
                return ;
            }
            const loading = obj.$loading({
                lock: true,
                text: '查找数据中',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
            });
            //console.log("executed");
            var Time = $('#daycalendarBox').val();
            var loopName = $('.loop__content-active').find("span").html();
            var keyObj = keySwitch(loopName, navMessage.navMessage[index].home);
            var typeKey = $("#select").val();
            var homeKey = StringNum(index);
            var addKeyEnd = "21";
            var key = "";

            //console.log($('.dt-left-nav-box-active').html().toString());
            // console.log(homeKey + ' ' + keyObj.deskKey + ' ' + keyObj.loopKey + ' ' + typeKey);
            // if(obj.type===0)

            key = homeKey + keyObj.deskKey + keyObj.loopKey + typeKey;
            if (key.length!=8){
                loading.close();
                obj.$message.error("请选择地点");
                return ;}
            var addKey = homeKey + keyObj.deskKey + keyObj.loopKey + addKeyEnd;
            if (typeKey === "00") {
                addKey = homeKey.toString() + keyObj.deskKey + keyObj.loopKey + "07";
            }
            if (typeKey === "01") {
                addKey = homeKey.toString() + keyObj.deskKey + keyObj.loopKey + "08";
            }
            if (typeKey === "02") {
                addKey = homeKey.toString() + keyObj.deskKey + keyObj.loopKey + "09";
            }
            var
                API_STATUS = {
                    "apicode": "exportHarmExcel",
                    "args": {
                        "time": Time,
                        "key": key,
                        "home": homeKey
                    }
                };
            axios.post("/api", API_STATUS
                , {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(function (res) {
                loading.close();
                if (res.data.obj.blob!=null){
                    var data = res.data.obj.blob;      //要还原成二进制的文件数据
                    var arrBuffer = new ArrayBuffer(data.length);
                    var view = new Uint8Array(arrBuffer);

                    for (var i = 0; i < data.length; i++) {
                        view[i] = data.charCodeAt(i);
                    }
                    var fileName =obj.loop+'.xlsx';
                    var blob = new Blob([arrBuffer], {type: 'application/octet-stream'});
                    saveAs(blob, fileName);
            }else {
                    obj.$message.error("暂无数据");
                }
                });
        },
        showAllConfig: function () {
            var _this = this;
            var index = sessionStorage.getItem('homeIndex');
            $('#chartContainer').hide();
            $('#sheetContainer').hide();
            $(".middle-button").removeClass('dt-btn-active');
            $("#allConfig").addClass('dt-btn-active');
            _this.isShowAllConfig = true;
            if (index === null) {
                _this.$message.error("请选择地点");
                return;
            }
            _this.GetHarmonicList(_this, index);

        }
    },
    filters: {
        switchFilter: function (value) {
            var str = $('select option:selected').html().toString();
            if (str === '开关状态') {
                value = parseInt(value);
                if (value === 1) {
                    return '启动'
                    switchSheet
                } else if (value === 0) {
                    return '停止'
                } else {
                    return '停止'
                }
            } else {
                return value;
            }
        },

        floatFix: function (value) {
            if (value || value === 0) {
                value = parseFloat(value);
                value = Math.round(value * 1000) / 1000;
                return value;
            } else {
                return "暂无数据";
            }

        }

    },
    created: function () {


        var isLogin = sessionStorage.getItem('isLogin') || false;
        if (!isLogin) {
            window.location.href = 'index';
        }
        // $.getJSON("/guide.json", function (data) {
        //     console.log('run!');
        //     if (!data) {
        //         console.error('can not get json');
        //     } else {
        //         console.log(data);
        //     }
        // });

        // getPowerData(this, {
        //     "key": "0000000",
        //     "addKey": "00000007",
        //     "homeKey": "00",
        //     "time": "2018-07-01"
        // });
    },
    mounted: function () {

    }
});


//切换二级导航栏
$('.dt-left-nav-box').click(function () {
    $('.dt-left-nav-box-active').removeClass('dt-left-nav-box-active');
    $(this).addClass('dt-left-nav-box-active');
    var home = $(this).html().toString();
    $('.home').html(home);
    renderSecondNav(home);
    getPowerData(vm);


    renderChart(vm, getUnit());
});

function getUnit() {
    var unit = '';
    var str = $('select option:selected').html().toString();
    if (str.match('流')) {
        unit = 'A';
    } else if (str.match('压')) {
        unit = 'V';
    } else if (str.match('有功')) {
        unit = 'kW';
    } else if (str.match('无功')) {
        unit = 'kVar';
    } else if (str.match('视在')) {
        unit = 'kVa';
    } else if (str.match('湿') || str.match('相不平衡率')) {
        unit = '%';
    } else if (str.match('度')) {
        unit = '℃';
    } else if (str.match('度')) {
        unit = '℃';
    } else if (str.match('频率F')) {
        unit = 'Hz';
    } else if (str.match('正向电能EP+')) {
        unit = 'Kwh';
    }

    return unit
}

function renderChart(obj, unit) {
    var data = [];
    var time = [];
    for (var i = 0; i < obj.length; i++) {
        data.push(obj[i].TS);
    }
    for (i = 0; i < obj.length; i++) {
        time.push(obj[i].DT);
    }
    for (var i = 0; i < data.length; i++) {
        data[i] = parseFloat(data[i]);
    }

    // for(var i=0;i<str.length;i++){
    //     if (str[i]==='流'){
    //         unit='A';
    //         break;
    //     }else if(str[i]==='压'){
    //         unit='V';
    //         break;
    //     }else if(str[i]==='有'||str[i+1]==='功'){
    //         unit='kW';
    //         break;
    //     }else if(str[i]==='无'||str[i+1]==='功'){
    //         unit='kVar';
    //         break;
    //     }else if(str[i]==='视'||str[i+1]==='在'){
    //         unit='kVar';
    //         break;
    //     }
    //
    // }

    // var electricity = $('select option:selected').html().toLocaleString().some(function (item) {
    //     return item==='流'
    // });
    // console.log(electricity);
    var chart = Highcharts.chart('chartContainer', {
        chart: {
            type: 'areaspline',
            zoomType: 'x',
            panning: true,
            panKey: 'shift',
            style: {
                fontFamily: "",
                fontSize: '14px',
                fontWeight: 'bold',
                color: '#414E69',
            },
            spacingTop: 50,
        }, legend: {
            // layout: 'vertical',
            backgroundColor: '#FFFFFF',
            floating: true,
            align: 'center',
            verticalAlign: 'top',
            y: -7,
            backgroundColor: 'transparent',
            symbolHeight: 10,
            itemStyle: {
                fontSize: '16px',
                color: '#414E69',
            }
            //labelFormat: '<span style="{color}">{name} (click to hide or show)</span>'
        },

        credits: {
            enabled: false
        },
        title: {
            text: $('select option:selected').html(),
            style: {
                color: '#ffffff',
                fontSize: '18px'
            },
            margin: 50,
        },
        subtitle: {
            text: '选择区域放大，按住shift拖动鼠标平移',
            floating: false,
        },
        lang: {
            resetZoom: '还原图表',
            resetZoomTitle: '还原图表为1:1大小'
        },
        xAxis: {
            categories: time
            //tickInterval:5
            //tickWidth:10
        },
        yAxis: {
            title: {
                text: '单位:' + unit
            },
            labels: {
                formatter: function () {
                    return this.value;
                }, style: {
                    fontSize: '14px',
                    color: ' #414E69'
                }
            }
        },
        tooltip: {
            crosshairs: true,
            shared: true
        },
        plotOptions: {
            areaspline: {
                color: '#FF3E3E',
                lineColor: '#FF3E3E',
                fillOpacity: 0.2
            }
        },
        scrollbar: {
            enabled: true
        },
        series: [{
            name: $('select option:selected').html(),
            data: data,
            marker: {//线上数据点
                radius: 3,
                lineWidth: 1,
                lineColor: '#FF3E3E',
                fillColor: '#FF3E3E',
                states: {
                    hover: {
                        enabled: true
                    }
                }
            },
            fillColor: {
                linearGradient: {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1
                },
                stops: [
                    [0, '#FF893B'],
                    [1, 'rgba(253,177,126,0.33)']
                ]
            }
        }]
    });
}

//挑选二级导航栏的内容
function getSecondNav(home) {

    /*
     (配电房数组)
     [{每一个配电房抽象成一个对象},{...},{...}]              多个配电房对象组成配电房数组

     {
     (配电房对象)
     "home":"配电房名",
     "deskList":[{每一个进线柜抽象成一个对象},{...},{...}]   多个进线柜对象组成进线柜数组
     }

     {
     (进线柜对象)
     "name":"进线柜名",
     "loop":["回路名1","回路名2"]                          多个回路名组成回路数组
     }
     */

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
            "loop": ["地下室双电源2", "一层双电源2", "二层双电源2", "三层双电源2", "四层双电源2", "六层双电源2", "八层双电源2", "D10八层电梯机房双电源"]
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
            "loop": ["A3备用1", "A3备用2", "A3备用3", "RD电源1", "A3备用4", "行政中心电源1"]
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
            "loop": ["B3备用", "海洋科学实验楼", "SYD电源2", "学术交流中心2", "教学楼电源2"]
        }, {
            "name": "B4馈线柜",
            "loop": ["B4备用", "广场配电2路", "广场配电1路", "RD电源2", "B4备用2", "行政中心"]
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
    }, {
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
            "loop": ["A6馈线柜备用1", "A6馈线柜东门", "A6馈线柜ZM1", "A6馈线柜ZM2", "电加热器H3", "电加热器H4", "电加热H5", "冷冻机CH2"]
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
    }];

    var navList = [];

    for (var i = 0; i < navMessage.length; i++) {
        if (home === navMessage[i].home)
            navList = navMessage[i].deskList;
    }
    return navList;

};
$(function () {
    $('#allConfig').click();
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

const navMessage = {
    navMessage: [{
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
            "loop": ["地下室双电源2", "一层双电源2", "二层双电源2", "三层双电源2", "四层双电源2", "六层双电源2", "八层双电源2", "D10八层电梯机房双电源"]
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
            "loop": ["A3备用1", "A3备用2", "A3备用3", "RD电源1", "A3备用4", "行政中心电源1"]
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
            "loop": ["B3备用", "海洋科学实验楼", "SYD电源2", "学术交流中心2", "教学楼电源2"]
        }, {
            "name": "B4馈线柜",
            "loop": ["B4备用", "广场配电2路", "广场配电1路", "RD电源2", "B4备用2", "行政中心"]
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
    }, {
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
            "loop": ["A6馈线柜备用1", "A6馈线柜东门", "A6馈线柜ZM1", "A6馈线柜ZM2", "电加热器H3", "电加热器H4", "电加热H5", "冷冻机CH2"]
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
    }]
}

Date.prototype.Format = function (fmt) { //author: meizz
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};
//第一次加载页面，默认渲染图书馆的二级导航栏
$(document).ready(function () {
    var startDate = new Date();
    startDate.setFullYear(2018, 6, 1);
    var endDate = new Date();
    endDate.setFullYear(2018, 6, 31);
    $('#daycalendarBox').val(new Date().Format("yyyy-MM-dd"));
    $('.form_date').datetimepicker({
        language: 'zh-CN',
        format: 'yyyy-mm-dd',
        weekStart: 1,
        todayBtn: 1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 2,
        minView: 2,
        forceParse: 0,
        // startDate: startDate,
        // endDate: endDate
    });

    function logOut() {
        sessionStorage.removeItem('user');
        sessionStorage.removeItem('isLogin');
        window.location.href = 'index';
    }

    $('.dt-nav-quit').click(function () {
        logOut();
    });
    $('#chartContainer').hide();
    // var navMessage = [];
    // renderSecondNav("图书馆");
    // $('#chartContainer').hide();
    //$('#dtp_input').val(new Date().Format("yyyy-MM-dd"));
    // $('#daycalendarBox').val(new Date().Format("yyyy-MM-dd"));
    // renderSelect(vm);
});

//请求数据
function getPowerData(obj, index, def) {
    const loading = obj.$loading({
        lock: true,
        text: '查找数据中',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
    });
    //console.log("executed");
    var Time = $('#daycalendarBox').val();
    var loopName = $('.loop__content-active').find("span").html();
    var keyObj = keySwitch(loopName, navMessage.navMessage[index].home);
    var typeKey = $("#select").val();
    var homeKey = StringNum(index);
    var addKeyEnd = "21";
    var key = "";

    //console.log($('.dt-left-nav-box-active').html().toString());
    // console.log(homeKey + ' ' + keyObj.deskKey + ' ' + keyObj.loopKey + ' ' + typeKey);
    // if(obj.type===0)

    key = homeKey + keyObj.deskKey + keyObj.loopKey + typeKey;
    var addKey = homeKey + keyObj.deskKey + keyObj.loopKey + addKeyEnd;
    if (typeKey === "00") {
        addKey = homeKey.toString() + keyObj.deskKey + keyObj.loopKey + "07";
    }
    if (typeKey === "01") {
        addKey = homeKey.toString() + keyObj.deskKey + keyObj.loopKey + "08";
    }
    if (typeKey === "02") {
        addKey = homeKey.toString() + keyObj.deskKey + keyObj.loopKey + "09";
    }
    if (def) {
        key = def.key;
        addKey = def.addKey;
        Time = def.Time;
        homeKey = def.homeKey;
    }

    var
        API_STATUS = {
            "apicode": "PostPowerInfo",
            "args": {
                "time": Time,
                "key": key,
                "home": homeKey
            }
        };
    axios.post("/api", API_STATUS
        , {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function (res) {

        // setTimeout(function () {
        //     loading.close();
        // }, 500);
        if (res.data.obj.data.length) {
            obj.list = res.data.obj.data;
            obj.remainder = res.data.obj.data[0].TS1;
            obj.loop = $('.loop__content-active span').html();
            var len = res.data.obj.data.length;
            var pop = {};
            vm.total = len / 2;
            for (var j = 0; j < len / 2; j++) {
                pop = {
                    loop: obj.loop,
                    ST1: res.data.obj.data[j * 2].TS,
                    DT1: res.data.obj.data[j * 2].DT,
                    ST2: res.data.obj.data[j * 2 + 1].TS,
                    DT2: res.data.obj.data[j * 2 + 1].DT,
                }
                vm.tableData[j] = pop;
            }
            renderChart(res.data.obj.data, getUnit());
        } else {
            obj.$message.error('暂无当前数据');
            console.log('no data');
        }

        loading.close();

    }).catch(function (error) {
        loading.close();
        console.log(error);
    });

}

function renderSelect(obj, index, callback) {

    var loopName = $('.loop__content-active').find("span").html();
    var keyObj = keySwitch(loopName, navMessage.navMessage[index].home);
    var homeKey = StringNum(index);

    if ("" === keyObj.deskKey) {
        keyObj.deskKey = "00";
        keyObj.loopKey = "00";
    }

    axios.post("/api", {
            "apicode": "CheckType",
            "args": {
                "key": homeKey + keyObj.deskKey + keyObj.loopKey
            }
        }
        , {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function (res) {
        if (res.data.obj || res.data.obj === 0) {
            obj.type = res.data.obj;
            sessionStorage.setItem('selectValue', res.data.obj);
            if (1 === res.data.obj)
                obj.eleType = typeLong;
            else if (0 === res.data.obj)
                obj.eleType = typeShort;
            else
                console.error('selectType return error!');
            if (callback) {
                callback();
            }
        } else {
            console.log('no data');
        }
    }).catch(function (error) {
        console.log(error);
    });
}

//渲染二级导航栏
function renderSecondNav(mainNav) {
    var navList = getSecondNav(mainNav);
    var headBegin = ' <div class="dt-tree-node-header"> <span class="glyphicon glyphicon-minus node" aria-hidden="true" style="color: black;"></span> <span class="dt-tree-node-header-font">';
    var headEnd = '</span> </div>';
    var bodyBegin = '<div class="dt-tree-node-container-show"> <div class="dt-tree-node-header dt-tree-node-position"> <span class="dt-tree-node-header-font" style="padding-left:20px; ">';
    var bodyEnd = '</span> </div> <div class="dt-tree-node-container-show"></div> </div>';
    $(".dt-tree-view").html("");
    for (var i = 0; i < navList.length; i++) {
        $(".dt-tree-view").append(headBegin + navList[i].name + headEnd);
        for (var j = 0; j < navList[i].loop.length; j++) {
            $(".dt-tree-view").append(bodyBegin + navList[i].loop[j] + bodyEnd);
        }
    }

    renderSelect(vm);

    $('.dt-tree-node-header:eq(1)').addClass('dt-tree-node-header-active');

    $('.dt-tree-node-container-show .dt-tree-node-header').click(function () {
        $('.dt-tree-node-header-active').removeClass('dt-tree-node-header-active');
        $(this).addClass('dt-tree-node-header-active');
        getPowerData(vm);
        renderSelect(vm);

    });


}

var typeShort = [{
    value: '00',
    text: '电流Ia'
}, {
    value: '01',
    text: '电流Ib'
}, {
    value: '02',
    text: '电流Ic'
}, {
    value: '03',
    text: 'A相历史最大电流'
}, {
    value: '04',
    text: 'B相历史最大电流'
}, {
    value: '05',
    text: 'C相历史最大电流'
}, {
    value: '06',
    text: '相不平衡率'
}, {
    value: '07',
    text: '开关输入DI'
}, {
    value: '08',
    text: 'A相电流余量'
}, {
    value: '09',
    text: 'B相电流余量'
}, {
    value: '10',
    text: 'C相电流余量'
}, {
    value: '11',
    text: '额定电流'
}, {
    value: '12',
    text: '余量设定值'
}];

var typeLong = [{
    value: '00',
    text: '线电压Uab'
}, {
    value: '01',
    text: '线电压Ubc'
}, {
    value: '02',
    text: '线电压Uca'
}, {
    value: '03',
    text: '电流Ia'
}, {
    value: '04',
    text: '电流Ib'
}, {
    value: '05',
    text: '电流Ic'
}, {
    value: '06',
    text: 'A相历史最大电流'
}, {
    value: '07',
    text: 'B相历史最大电流'
}, {
    value: '08',
    text: 'C相历史最大电流'
}, {
    value: '09',
    text: '相不平衡率'
}, {
    value: '10',
    text: '有功P'
}, {
    value: '11',
    text: '无功Q'
}, {
    value: '12',
    text: '视在S'
}, {
    value: '13',
    text: '功率因素PF'
}, {
    value: '14',
    text: '频率F'
}, {
    value: '15',
    text: '正向电能EP+'
}, {
    value: '16',
    text: '开关状态'
}, {
    value: '17',
    text: 'A相电流余量'
}, {
    value: '18',
    text: 'B相电流余量'
}, {
    value: '19',
    text: 'C相电流余量'
}, {
    value: '20',
    text: '额定电流'
}, {
    value: '21',
    text: '余量设定值'
}];

var vm = new Vue({
    el: "#vue-list",
    delimiters: ['${', '}'],
    data: {
        eleType: typeShort,
        type: 0,
        list: [],
        AllConfig: {},
        loop: "I进线",
        remainder: 0,
        isShowAllConfig: false,
        navList: navMessage.navMessage,
        // 数据页面
        isShowData: false,
        total: 0,//默认数据总数
        pagesize: 11,//每页的数据条数
        currentPage: 1,//默认开始页面
        istag: true,
        tableData: []
    },
    methods: {
        // 数据页面
        tableRowClassName({row, rowIndex}) {
            if (rowIndex === 0) {
                return 'th';
            }
            return '';
        },
        switchChange() {
            this.istag = !this.istag;

        },
        created: function () {
            this.total = this.tableData.length;
        },
        current_change: function (currentPage) {
            this.currentPage = currentPage;
        },

        // end
        GetHarmonicList: function (obj, index) {
            const loading = obj.$loading({
                lock: true,
                text: '查找数据中',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
            });
            //console.log("executed");
            var Time = $('#daycalendarBox').val();
            var type = parseInt(sessionStorage.getItem('selectValue'));
            var loopName = $('.loop__content-active').find("span").html();
            var keyObj = keySwitch(loopName, navMessage.navMessage[index].home);
            var typeKey = $("#select").val();
            var homeKey = StringNum(index);
            var key = homeKey + keyObj.deskKey + keyObj.loopKey + '00';

            //console.log($('.dt-left-nav-box-active').html().toString());
            if (type === 1) {
                for (var i = 1; i < 22; i++) {
                    key += (',' + homeKey + keyObj.deskKey + keyObj.loopKey + StringNum(i));
                }
            } else if (type === 0) {
                for (var i = 1; i < 13; i++) {
                    key += (',' + homeKey + keyObj.deskKey + keyObj.loopKey + StringNum(i));
                }
            }

            var
                API_STATUS = {
                    "apicode": "GetHarmonicList",
                    "args": {
                        "key": key,
                        "home": homeKey,
                        "type": type
                    }
                };
            axios.post("/api", API_STATUS
                , {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(function (res) {
                loading.close();
                if (res.data.obj.data) {
                    obj.AllConfig = res.data.obj.data;
                } else {
                    loading.close();
                    obj.$message.error('暂无当前数据');
                    obj.AllConfig = _.map(obj.AllConfig, function (value) {
                        return "";
                    });
                    console.log('no data');
                }
            }).catch(function (error) {
                console.log(error);

            });
        },
        selectLoop: function (obj, index) {
            var _this = this;
            $('.loop__content-active').removeClass("loop__content-active");
            var el = obj.currentTarget;
            $(el).addClass("loop__content-active");
            renderSelect(_this, index, function () {
                if (!_this.isShowAllConfig) {
                    getPowerData(_this, index);
                } else {
                    _this.GetHarmonicList(_this, index);
                }
            });
            sessionStorage.setItem('homeIndex', index);
        },
        search: function () {
            var _this = this;
            var index = sessionStorage.getItem('homeIndex');
            getPowerData(_this, index);
            console.log(_this.list);
        },
        switchChart: function () {
            $('#sheetContainer').hide();
            $('#chartContainer').show();
            $(".middle-button").removeClass('dt-btn-active');
            $("#chart").addClass('dt-btn-active');
            this.isShowAllConfig = false;
            renderChart(this.list, getUnit());
        },
        switchSheet: function () {
            var _this = this;
            _this.isShowAllConfig = false;
            $('#chartContainer').hide();
            $('#sheetContainer').show();
            $(".middle-button").removeClass('dt-btn-active');
            $("#data").addClass('dt-btn-active');
            var index = sessionStorage.getItem('homeIndex');
            if (index===null){
                _this.$message.error("请选择地点");
                return ;
            }
            getPowerData(_this, index);

        },
        outPut: function () {
            // $('#outPutTable').tableExport({type: 'excel'});
            var obj=this;
            var index = sessionStorage.getItem('homeIndex');
            if (index===null){
                obj.$message.error("请选择地点");
                return ;
            }
            const loading = obj.$loading({
                lock: true,
                text: '查找数据中',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
            });
            //console.log("executed");
            var Time = $('#daycalendarBox').val();
            var loopName = $('.loop__content-active').find("span").html();
            var keyObj = keySwitch(loopName, navMessage.navMessage[index].home);
            var typeKey = $("#select").val();
            var homeKey = StringNum(index);
            var addKeyEnd = "21";
            var key = "";

            //console.log($('.dt-left-nav-box-active').html().toString());
            // console.log(homeKey + ' ' + keyObj.deskKey + ' ' + keyObj.loopKey + ' ' + typeKey);
            // if(obj.type===0)

            key = homeKey + keyObj.deskKey + keyObj.loopKey + typeKey;
            if (key.length!=8){
                loading.close();
                obj.$message.error("请选择地点");
                return ;}
            var addKey = homeKey + keyObj.deskKey + keyObj.loopKey + addKeyEnd;
            if (typeKey === "00") {
                addKey = homeKey.toString() + keyObj.deskKey + keyObj.loopKey + "07";
            }
            if (typeKey === "01") {
                addKey = homeKey.toString() + keyObj.deskKey + keyObj.loopKey + "08";
            }
            if (typeKey === "02") {
                addKey = homeKey.toString() + keyObj.deskKey + keyObj.loopKey + "09";
            }
            var
                API_STATUS = {
                    "apicode": "exportHarmExcel",
                    "args": {
                        "time": Time,
                        "key": key,
                        "home": homeKey
                    }
                };
            axios.post("/api", API_STATUS
                , {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(function (res) {
                loading.close();
                if (res.data.obj.blob!=null){
                    var data = res.data.obj.blob;      //要还原成二进制的文件数据
                    var arrBuffer = new ArrayBuffer(data.length);
                    var view = new Uint8Array(arrBuffer);

                    for (var i = 0; i < data.length; i++) {
                        view[i] = data.charCodeAt(i);
                    }
                    var fileName =obj.loop+'.xlsx';
                    var blob = new Blob([arrBuffer], {type: 'application/octet-stream'});
                    saveAs(blob, fileName);
            }else {
                    obj.$message.error("暂无数据");
                }
                });
        },
        showAllConfig: function () {
            var _this = this;
            var index = sessionStorage.getItem('homeIndex');
            $('#chartContainer').hide();
            $('#sheetContainer').hide();
            $(".middle-button").removeClass('dt-btn-active');
            $("#allConfig").addClass('dt-btn-active');
            _this.isShowAllConfig = true;
            if (index === null) {
                _this.$message.error("请选择地点");
                return;
            }
            _this.GetHarmonicList(_this, index);

        }
    },
    filters: {
        switchFilter: function (value) {
            var str = $('select option:selected').html().toString();
            if (str === '开关状态') {
                value = parseInt(value);
                if (value === 1) {
                    return '启动'
                    switchSheet
                } else if (value === 0) {
                    return '停止'
                } else {
                    return '停止'
                }
            } else {
                return value;
            }
        },

        floatFix: function (value) {
            if (value || value === 0) {
                value = parseFloat(value);
                value = Math.round(value * 1000) / 1000;
                return value;
            } else {
                return "暂无数据";
            }

        }

    },
    created: function () {


        var isLogin = sessionStorage.getItem('isLogin') || false;
        if (!isLogin) {
            window.location.href = 'index';
        }
        // $.getJSON("/guide.json", function (data) {
        //     console.log('run!');
        //     if (!data) {
        //         console.error('can not get json');
        //     } else {
        //         console.log(data);
        //     }
        // });

        // getPowerData(this, {
        //     "key": "0000000",
        //     "addKey": "00000007",
        //     "homeKey": "00",
        //     "time": "2018-07-01"
        // });
    },
    mounted: function () {

    }
});


//切换二级导航栏
$('.dt-left-nav-box').click(function () {
    $('.dt-left-nav-box-active').removeClass('dt-left-nav-box-active');
    $(this).addClass('dt-left-nav-box-active');
    var home = $(this).html().toString();
    $('.home').html(home);
    renderSecondNav(home);
    getPowerData(vm);


    renderChart(vm, getUnit());
});

function getUnit() {
    var unit = '';
    var str = $('select option:selected').html().toString();
    if (str.match('流')) {
        unit = 'A';
    } else if (str.match('压')) {
        unit = 'V';
    } else if (str.match('有功')) {
        unit = 'kW';
    } else if (str.match('无功')) {
        unit = 'kVar';
    } else if (str.match('视在')) {
        unit = 'kVa';
    } else if (str.match('湿') || str.match('相不平衡率')) {
        unit = '%';
    } else if (str.match('度')) {
        unit = '℃';
    } else if (str.match('度')) {
        unit = '℃';
    } else if (str.match('频率F')) {
        unit = 'Hz';
    } else if (str.match('正向电能EP+')) {
        unit = 'Kwh';
    }

    return unit
}

function renderChart(obj, unit) {
    var data = [];
    var time = [];
    for (var i = 0; i < obj.length; i++) {
        data.push(obj[i].TS);
    }
    for (i = 0; i < obj.length; i++) {
        time.push(obj[i].DT);
    }
    for (var i = 0; i < data.length; i++) {
        data[i] = parseFloat(data[i]);
    }

    // for(var i=0;i<str.length;i++){
    //     if (str[i]==='流'){
    //         unit='A';
    //         break;
    //     }else if(str[i]==='压'){
    //         unit='V';
    //         break;
    //     }else if(str[i]==='有'||str[i+1]==='功'){
    //         unit='kW';
    //         break;
    //     }else if(str[i]==='无'||str[i+1]==='功'){
    //         unit='kVar';
    //         break;
    //     }else if(str[i]==='视'||str[i+1]==='在'){
    //         unit='kVar';
    //         break;
    //     }
    //
    // }

    // var electricity = $('select option:selected').html().toLocaleString().some(function (item) {
    //     return item==='流'
    // });
    // console.log(electricity);
    var chart = Highcharts.chart('chartContainer', {
        chart: {
            type: 'areaspline',
            zoomType: 'x',
            panning: true,
            panKey: 'shift',
            style: {
                fontFamily: "",
                fontSize: '14px',
                fontWeight: 'bold',
                color: '#414E69',
            },
            spacingTop: 50,
        }, legend: {
            // layout: 'vertical',
            backgroundColor: '#FFFFFF',
            floating: true,
            align: 'center',
            verticalAlign: 'top',
            y: -7,
            backgroundColor: 'transparent',
            symbolHeight: 10,
            itemStyle: {
                fontSize: '16px',
                color: '#414E69',
            }
            //labelFormat: '<span style="{color}">{name} (click to hide or show)</span>'
        },

        credits: {
            enabled: false
        },
        title: {
            text: $('select option:selected').html(),
            style: {
                color: '#ffffff',
                fontSize: '18px'
            },
            margin: 50,
        },
        subtitle: {
            text: '选择区域放大，按住shift拖动鼠标平移',
            floating: false,
        },
        lang: {
            resetZoom: '还原图表',
            resetZoomTitle: '还原图表为1:1大小'
        },
        xAxis: {
            categories: time
            //tickInterval:5
            //tickWidth:10
        },
        yAxis: {
            title: {
                text: '单位:' + unit
            },
            labels: {
                formatter: function () {
                    return this.value;
                }, style: {
                    fontSize: '14px',
                    color: ' #414E69'
                }
            }
        },
        tooltip: {
            crosshairs: true,
            shared: true
        },
        plotOptions: {
            areaspline: {
                color: '#FF3E3E',
                lineColor: '#FF3E3E',
                fillOpacity: 0.2
            }
        },
        scrollbar: {
            enabled: true
        },
        series: [{
            name: $('select option:selected').html(),
            data: data,
            marker: {//线上数据点
                radius: 3,
                lineWidth: 1,
                lineColor: '#FF3E3E',
                fillColor: '#FF3E3E',
                states: {
                    hover: {
                        enabled: true
                    }
                }
            },
            fillColor: {
                linearGradient: {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1
                },
                stops: [
                    [0, '#FF893B'],
                    [1, 'rgba(253,177,126,0.33)']
                ]
            }
        }]
    });
}

//挑选二级导航栏的内容
function getSecondNav(home) {

    /*
     (配电房数组)
     [{每一个配电房抽象成一个对象},{...},{...}]              多个配电房对象组成配电房数组

     {
     (配电房对象)
     "home":"配电房名",
     "deskList":[{每一个进线柜抽象成一个对象},{...},{...}]   多个进线柜对象组成进线柜数组
     }

     {
     (进线柜对象)
     "name":"进线柜名",
     "loop":["回路名1","回路名2"]                          多个回路名组成回路数组
     }
     */

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
            "loop": ["地下室双电源2", "一层双电源2", "二层双电源2", "三层双电源2", "四层双电源2", "六层双电源2", "八层双电源2", "D10八层电梯机房双电源"]
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
            "loop": ["A3备用1", "A3备用2", "A3备用3", "RD电源1", "A3备用4", "行政中心电源1"]
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
            "loop": ["B3备用", "海洋科学实验楼", "SYD电源2", "学术交流中心2", "教学楼电源2"]
        }, {
            "name": "B4馈线柜",
            "loop": ["B4备用", "广场配电2路", "广场配电1路", "RD电源2", "B4备用2", "行政中心"]
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
    }, {
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
            "loop": ["A6馈线柜备用1", "A6馈线柜东门", "A6馈线柜ZM1", "A6馈线柜ZM2", "电加热器H3", "电加热器H4", "电加热H5", "冷冻机CH2"]
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
    }];

    var navList = [];

    for (var i = 0; i < navMessage.length; i++) {
        if (home === navMessage[i].home)
            navList = navMessage[i].deskList;
    }
    return navList;

};
$(function () {
    $('#allConfig').click();
>>>>>>> dedd623 (first)
>>>>>>> 19b8a9c (first)
>>>>>>> 8f5179a (first)
>>>>>>> 87a8fdf (first)
>>>>>>> 1e8021d (first)
>>>>>>> 5938de4 (first)
>>>>>>> c55f785 (first)
})