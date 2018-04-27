var category;
var type;
var num;
var getData;
var AJAX_URL = "//meibanglai.com/data/dataList.do";
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
	if (category == 7){
		var html = template(document.getElementById('tpl').innerHTML, {});
//		console.log(html);
		document.getElementById('wp').innerHTML = html;
		return a_details_click_showList();
	} else if(category == 4){
		AJAX_URL = "//meibanglai.com/data/getInformationList.do";
	} 
    $.ajax({
        url: AJAX_URL,
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
            console.log(data.data);
            
            // 初始化分页插件
            var options = {
            	//可选，每页显示条数下拉框，默认下拉框5条/页(默认)、10条/页、15条/页、20条/页
            	pageSizeOpt: [{
            			'value': 5,
            			'text': '5条/页',
            			'selected': true
            		},
            		{
            			'value': 10,
            			'text': '10条/页'
            		},
            		{
            			'value': 15,
            			'text': '15条/页'
            		},
            		{
            			'value': 20,
            			'text': '20条/页'
            		}
            	],
            	//可选，css设置，可设置值：css-1，css-2，css-3，css-4，css-5，默认css-1，可自定义样式
            	css: 'css-1',
            	//可选，总页数
            	totalPage: data.totalPage,
            	//可选，展示页码数量，默认5个页码数量
            	showPageNum: 7,
            	//可选，首页按钮展示文本，默认显示文本为首页
            	firstPage: '首页',
            	//可选，上一页按钮展示文本，默认显示文本为上一页
            	previousPage: '上一页',
            	//可选，下一页按钮展示文本，默认显示文本为下一页
            	nextPage: '下一页',
            	//可选，尾页按钮展示文本，默认显示文本为尾页
            	lastPage: '尾页',
            	//可选，跳至展示文本，默认显示文本为跳至
            	skip: '跳至',
            	//可选，确认按钮展示文本，默认显示文本为确认
            	confirm: '确认',
            	//可选，刷新按钮展示文本，默认显示文本为刷新
            	refresh: '刷新',
            	//可选，共{}页展示文本，默认显示文本为共{}页，其中{}会在js具体转化为数字
            	totalPageText: '共{}页',
            	//可选，是否展示首页与尾页，默认true
            	isShowFL: false,
            	//可选，是否展示每页N条下拉框，默认true
            	isShowPageSizeOpt: false,
            	//可选，是否展示跳到指定页数，默认true
            	isShowSkip: true,
            	//可选，是否展示刷新，默认true
            	isShowRefresh: true,
            	//可选，是否展示共{}页，默认true
            	isShowTotalPage: true,
            	//可选，是否需要重新设置当前页码及总页数，默认false，如果设为true，那么在请求服务器返回数据时，需要调用setPage方法
            	isResetPage: true,
            	//必选，回调函数，返回参数：第一个参数为页码，第二个参数为每页显示N条
            	callBack: function(currPage, pageSize) {
            		c = $.getUrlParam("category");
            		t = $.getUrlParam("type");
            		n = currPage;
            		total = data.totalPage;
            		category = c ? c : 1;
            		type = t ? t : 1;
            		history.pushState(null, null, "?category=" + category + "&type=" + type + "&num=" + n);
            		$.ajax({
						url: AJAX_URL,
						type: "get",
						data: {
							"category": c,
							"type": t,
							"num": n
						},
						success: function(data) {
							// 请求数据成功后加载template模板
							var html = template(document.getElementById('tpl').innerHTML, data);
//								console.log(data.totalPage);
							document.getElementById('wp').innerHTML = html;
//							$("#pagination-top").whjPaging("getPage");
							$("#pagination-top").whjPaging("setPage", n, total);
							$("#pagination-bottom").whjPaging("setPage", n, total);
							$("#pagination-bottom").find('.whj_hover').click(function() {
								$("html,body").animate({
									scrollTop: 0
								}, 500);
							});
						}
					});
            					
            		console.log(c,t,n);
            	}
            };
            $("#pagination-top").whjPaging(options);
            $("#pagination-bottom").whjPaging(options);
            $("#pagination-bottom").find('.whj_hover').click(function() {
            	$("html,body").animate({
            		scrollTop: 0
            	}, 500);
            });
            
            
//          if(data.code == 200) {
//              ppaging(
//                  document.getElementById("page"),
//                  num,
//                  data.totalPage,
//                  data.totalSize
//              );
//              document.getElementById("show").innerHTML = "";//清空
//              for (var i = 0; i < data.data.length; i++) {
//                  var d = data.data[i];
//                  showData(d);
//
//                  var show = document.getElementById("show").children;
//                  $(show[show.length-2]).fadeIn(i*250);//渐显 XXX:会展和快递比较特殊在页面做
//                  // $(show[show.length-1]).fadeIn(i*250);
//              }
//          }else{
//              var page = document.getElementById("page");
//              if(page != null)
//                  page.innerHTML = "";
//          }
//          a_Page_ready_bindHear();
        },
        error:function () {
//          var page = document.getElementById("page");
//          if(page != null)
//              page.innerHTML = "";
        }
    });
    a_details_click_showList();
};

// 这里给所有标签绑上点击事件
var a_details_click_showList = function(){
	$('.details-a-click').click(function(){
//		更新数据
      	category = $.getUrlParam("category") ? $.getUrlParam("category") : 1;
      	type = this.dataset.type;
      	console.log(category,type);
      	$("#list-details").load(DETAIL_LIST_PREFIX + category + "_" + type + DETAIL_LIST_SUFFIX);
//    	ajaxTest(1);
      	
      	$(location).attr("href", window.location.href);
	});
}

// 加载内页模板并请求一次后台数据
var ul_basic_click_simulate = function () {
    category = $.getUrlParam("category");
    type = $.getUrlParam("type") ? $.getUrlParam("type") : 1;
    num = $.getUrlParam("num") ? $.getUrlParam("num") : 1;
    t = type && category != 1 ? type : 1; // category=1时统一样式
    if(category){
    	history.pushState(null, null, "?category=" + category + "&type=" + type); // 将c,t,n推到地址栏
    	$("#list-details").load(DETAIL_LIST_PREFIX + category + "_" + t + DETAIL_LIST_SUFFIX, function() {
    		ajaxTest(num);
    		$('.fix-box').remove();
    	});
    	console.log(category, type, num);
    }
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
} else { // 删除页码条
	$('#pagination-top').remove();
	$('#pagination-bottom').remove();
}


//console.log($.getUrlParam("category"));
