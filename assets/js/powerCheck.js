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
$('#daycalendarBox').val('2018-05-01');
$('.form_date').datetimepicker({
    language:  'zh-CN',
    format: 'yyyy-mm-dd',
    weekStart: 1,
    todayBtn:  1,
    autoclose: 1,
    todayHighlight: 1,
    startView: 2,
    minView: 2,
    forceParse: 0
});
$('#datetimepicker_2').datetimepicker('update');
$('#daycalendarBox_2').val('2018-05-01');
$('.form_date').datetimepicker({
    language:  'zh-CN',
    format: 'yyyy-mm-dd',
    weekStart: 1,
    todayBtn:  1,
    autoclose: 1,
    todayHighlight: 1,
    startView: 2,
    minView: 2,
    forceParse: 0
});
$('#datetimepicker').datetimepicker('update');

$(document).ready(function(){
    $('#upDate').click(function () {
        $('#daycalendarBox').val('2018-05-01');
    })
});


$(".dt-btn-check-search").click(function() {
    axios.post("/api", {
            "apicode": "GetMonthCheck",
            "args": {
                "startTime": "2018-5-17",
                "finalTime": "2018-5-18"
            }
        }
        , {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function (res) {
        console.log(res.data.data[0]);
        console.log(res.data.data[1]);
        $(".SZ_Power1").html(Math.round(res.data.data[0].TS16));
        $(".SZ_Power2").html(Math.round(res.data.data[1].TS16));
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
$('#daycalendarBox').val('2018-05-01');
$('.form_date').datetimepicker({
    language:  'zh-CN',
    format: 'yyyy-mm-dd',
    weekStart: 1,
    todayBtn:  1,
    autoclose: 1,
    todayHighlight: 1,
    startView: 2,
    minView: 2,
    forceParse: 0
});
$('#datetimepicker_2').datetimepicker('update');
$('#daycalendarBox_2').val('2018-05-01');
$('.form_date').datetimepicker({
    language:  'zh-CN',
    format: 'yyyy-mm-dd',
    weekStart: 1,
    todayBtn:  1,
    autoclose: 1,
    todayHighlight: 1,
    startView: 2,
    minView: 2,
    forceParse: 0
});
$('#datetimepicker').datetimepicker('update');

$(document).ready(function(){
    $('#upDate').click(function () {
        $('#daycalendarBox').val('2018-05-01');
    })
});


$(".dt-btn-check-search").click(function() {
    axios.post("/api", {
            "apicode": "GetMonthCheck",
            "args": {
                "startTime": "2018-5-17",
                "finalTime": "2018-5-18"
            }
        }
        , {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function (res) {
        console.log(res.data.data[0]);
        console.log(res.data.data[1]);
        $(".SZ_Power1").html(Math.round(res.data.data[0].TS16));
        $(".SZ_Power2").html(Math.round(res.data.data[1].TS16));
    });
>>>>>>> dedd623 (first)
>>>>>>> 19b8a9c (first)
>>>>>>> 8f5179a (first)
>>>>>>> 87a8fdf (first)
>>>>>>> 1e8021d (first)
>>>>>>> 5938de4 (first)
>>>>>>> c55f785 (first)
});