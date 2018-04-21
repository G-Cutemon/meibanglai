var startCount = 0;
var errorPaga = "ErrorFiles/404.html";
var IMAGE_DELETE_URL = "//meibanglai.com/image/school/";

$(document).ready(function () {
//  ready();
    a_none_ready_simulationClick();
});

var ready = function () {
    // $("img").addClass("carousel-inner img-responsive img-rounded");
};


var a_none_ready_simulationClick = function() {
    var d = $.getUrlParam("d");
    $.ajax({
        url: "//meibanglai.com/data/getSchool.do",
        type: "get",
        data: {
            "d":d
        },
        dataType: "json",
        success: function(data) {
            console.log(data);
            var html = template(document.getElementById('tpl').innerHTML, data);
            //	console.log(html);
            document.getElementById('wp').innerHTML = html;
            //填数据
            if(data.code==200){
//              var d = data.data;
//              var img = document.createElement("img");
//              img.setAttribute("src",IMAGE_DELETE_URL+d.logo_url);
//              document.getElementsByClassName("school-header-image")[0].append(img);
//              var header = document.getElementsByClassName("school-header-context")[0];
//              var hChildren = header.children;
//              hChildren[0].innerHTML = d.school_name;
//              hChildren[1].firstElementChild.innerHTML = d.school_type;
//              hChildren[2].firstElementChild.innerHTML = d.school_address;
//              hChildren[3].firstElementChild.innerHTML = d.school_create_time;
//              hChildren[4].firstElementChild.innerHTML = d.school_space;
//              hChildren[4].lastElementChild.innerHTML = "18987863843";
//              hChildren[5].firstElementChild.innerHTML = d.school_course;
//
//              document.getElementById("context").innerHTML = d.content;
            }else{
//              window.location.href = errorPaga;
            }
        },
        error: function () {
//          window.location.href = errorPaga;
        }

    })
};

//获取参数地址栏参数
$.getUrlParam = function(name){
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
}























