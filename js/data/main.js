var category;
var type;
var num;
var getData;
var DETAIL_LIST_PREFIX = "/view/list/";//详情列表连接前后缀
var DETAIL_LIST_SUFFIX = ".html";
//var DETAIL_LIST_LOCATION = "/view/data/main.html";

$(document).ready(function () {
    ready();

});

var ready = function () {
//  a_none_click_showType();//绑定ul
    ul_basic_click_simulate();//模拟点击
};

// 请求后台数据并调用一次给标签绑定事件的函数
var ajaxTest = function(num){
	// 以下分类不用请求或请求地址不同
	if (category == 3 || category == 4 || category == 7){
		return a_details_click_showList();
	}
    $.ajax({
        url: "//meibanglai.com/data/dataList.do",
        type: "get",
        //async:false,
        data: {"category":category,
            "type":type,
            "num":num
        },
        success: function(data) {
        	// 请求数据成功后加载template模板
        	var html = template(document.getElementById('tpl').innerHTML, data);
        	//	console.log(html);
        	document.getElementById('wp').innerHTML = html;
            console.log(data.data.length);
            if(data.code == 200) {
                ppaging(
                    document.getElementById("page"),
                    num,
                    data.totalPage,
                    data.totalSize
                );
                document.getElementById("show").innerHTML = "";//清空
//              for (var i = 0; i < data.data.length; i++) {
//                  var d = data.data[i];
//                  showData(d);
//
//                  var show = document.getElementById("show").children;
//                  $(show[show.length-2]).fadeIn(i*250);//渐显 XXX:会展和快递比较特殊在页面做
//                  // $(show[show.length-1]).fadeIn(i*250);
//              }
            }else{
                var page = document.getElementById("page");
                if(page != null)
                    page.innerHTML = "";
            }
            a_Page_ready_bindHear();
        },
        error:function () {
            var page = document.getElementById("page");
            if(page != null)
                page.innerHTML = "";
        }
    });
    a_details_click_showList();
};

//绑定分页按钮
var a_Page_ready_bindHear = function (){
    var as = document.getElementById("page").children;
    var z=0;
    for (; z<as.length; ){
        a = as[z];
        z = z+1;
        a.href="javascript:scroll(0,0)";
        a.onclick = function (e){
            t = e.target.title;
            $.ajax({
                url: "/data/dataList.do",
                type: "get",
                // async:false,
                data: {"category":category,
                    "type":type,
                    "num":t
                },
                dataType: "json",
                success: function(data) {
                    if(data.code == 200){
                        ppaging(
                            document.getElementById("page"),
                            t,
                            data.totalPage,
                            data.totalSize
                        );
                        history.pushState(null,null,"?category="+category+"&type="+type+"&num="+t);

                        document.getElementById("show").innerHTML = "";//清空
                        for (var i = 0; i < data.data.length; i++) {
                            var d = data.data[i];
                            showData(d);// 循环填数据

                            var show = document.getElementById("show").children;
                            $(show[show.length-2]).fadeIn(i*250);//渐显 XXX:会展和快递比较特殊在页面做
                        }
                    }else{
                        var page = document.getElementById("page");
                        if(page != null)
                            page.innerHTML = "";
                    }
                    a_Page_ready_bindHear();
                }
            });
            a_details_click_showList();
        };
    }
};

//点击粗条目
//var a_none_click_showType = function () {
//  var li = document.getElementsByClassName("list-basic")[0].children;
//  for (i=0 ; i<li.length ;i++){
//      //绑定按钮
//      li[i].children[0].onclick = function () {
//          category = this.dataset.url;
//          $("#list-details").load(DETAIL_LIST_PREFIX+category+"_1"+DETAIL_LIST_SUFFIX,function () {
//              history.pushState(null,null,"?category="+category);
//              type = 1;
//              ajaxTest(1);
//          });
//      }
//  }
//  li[6].children[0].onclick = function () {
//      category = this.dataset.url;
//      type = 1;
//      history.pushState(null,null,"?category="+category);
//      $("#list-details").load(DETAIL_LIST_PREFIX+category+"_1"+DETAIL_LIST_SUFFIX);
//      var page = document.getElementById("page");
//      if (page!=null) page.innerHTML = "";
//  };
//  li[2].children[0].onclick = function () {
//      category = this.dataset.url;
//      type = 1;
//      history.pushState(null,null,"?category="+category);
//      $("#list-details").load(DETAIL_LIST_PREFIX+category+"_1"+DETAIL_LIST_SUFFIX);
//      var page = document.getElementById("page");
//      if (page!=null) page.innerHTML = "";
//  }
//  li[3].children[0].onclick = function () {
//      category = this.dataset.url;
//      type = 1;
//      history.pushState(null,null,"?category="+category);
//      $("#list-details").load(DETAIL_LIST_PREFIX+category+"_1"+DETAIL_LIST_SUFFIX);
//      var page = document.getElementById("page");
//      if (page!=null) page.innerHTML = "";
//  }
//  // TODO:这样抽取出来会报错= =JS真是神奇的语言
//  // li[3].children[0].onclick = a_none_click_showTypeFunction(this);
//  // var a_none_click_showTypeFunction = function (t) {
//  //     category = t.dataset.url;
//  //     type = 1;
//  //     history.pushState(null,null,"?category="+category);
//  //     $("#list-details").load(DETAIL_LIST_PREFIX+category+"_1"+DETAIL_LIST_SUFFIX);
//  //     var page = document.getElementById("page");
//  //     if (page!=null) page.innerHTML = "";
//  // }
//};


//点击细分条目
//var a_details_click_showList = function () {
//  var ul = document.getElementsByClassName("details-ul")[0];
//  var lis = ul.children;
//  for(i=0 ; i<lis.length ; i++){
//      //绑定标签
//      lis[i].children[0].onclick = function () {
//          //切换样式
//          var ul = document.getElementsByClassName("details-ul")[0];
//          var lis = ul.children;
//          for(i=0 ; i<lis.length ; i++){
//              var a = lis[i].children[0];
//              if(a.classList.contains("details-a-click")){
//                  a.classList.remove("details-a-click");
//                  a.classList.add("details-a-Nclick");
//                  break;
//              }
//          }
//          this.classList.remove("details-a-Nclick");
//          this.classList.add("details-a-click");
//
//          //更新数据
//          category = document.getElementsByClassName("details-header")[0].dataset.category;
//          type = this.dataset.type;
//          if (category == "1"){
//              // $("#list-details").load(DETAIL_LIST_PREFIX+category+"_"+type+DETAIL_LIST_SUFFIX);
//              ajaxTest(1);
//          }else if(category == "7" || category == "3" || category=="4"){
//              $("#list-details").load(DETAIL_LIST_PREFIX+category+"_"+type+DETAIL_LIST_SUFFIX,function () {
//                  if (category=="3" && type=="3"){
//                      ajaxTest(1);
//                  }
//              });
//          }else {
//              $("#list-details").load(DETAIL_LIST_PREFIX+category+"_"+type+DETAIL_LIST_SUFFIX,function () {
//                  ajaxTest(1);
//              });
//          }
//          history.pushState(null,null,"?category="+category+"&type="+type);
//
//      };
//  }
//};

// 这里给所有标签绑上点击事件
var a_details_click_showList = function(){
	$('.details-a-click').click(function(){
//		更新数据
      	category = $.getUrlParam("category") ? $.getUrlParam("category") : 1;
      	type = this.dataset.type;
      	console.log(category,type);
      	$("#list-details").load(DETAIL_LIST_PREFIX + category + "_" + type + DETAIL_LIST_SUFFIX);
//    	ajaxTest(1);
      	history.pushState(null, null, "?category=" + category + "&type=" + type);
      	$(location).attr("href", window.location.href);
	});
}

// 加载内页模板并请求一次后台数据
var ul_basic_click_simulate = function () {
    c = $.getUrlParam("category");
    t = $.getUrlParam("type");
    n = $.getUrlParam("num");
    category = c ? c : 1;
    type = t ? t : 1;
    $("#list-details").load(DETAIL_LIST_PREFIX + c + "_1" + DETAIL_LIST_SUFFIX,function(){
		n ? ajaxTest(n) : ajaxTest(1);
	});
    console.log(c,t,n);
};

//获取参数地址栏参数
//function $.getUrlParam(name) {
//  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
//  var r = window.location.search.substr(1).match(reg);
//  if (r != null) {
//      return unescape(r[2]);
//  }
//  return null;
//}

$.getUrlParam = function(name){
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
}

// 删除主页图片
if($.getUrlParam("category")){
	$('.main-pic').remove();
}

//console.log($.getUrlParam("category"));
