$(document).ready(function () {
        button_none_click_seleData();
    });
    button_none_click_seleData = function(num){
        $("#search").click(function(){
        	var start = $("#start").val(),
        		end = $("#end").val();
            if(start || end){
                $.ajax({
                    url: "//meibanglai.com/data/dataListLogistics.do",
                    type:"post",
                    data: {
                    	"start":start,
                        "end":end,
                        "num":num
                    },
                    success: function (data) {
                    	if(data.code == 200) {
                    		var html = template(document.getElementById('result-tpl').innerHTML, data);
                    		//	console.log(html);
                    		document.getElementById('result-box').innerHTML = html;
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
                    			isResetPage: false,
                    			//必选，回掉函数，返回参数：第一个参数为页码，第二个参数为每页显示N条
                    			callBack: function(currPage, pageSize) {
                    				c = $.getUrlParam("category");
                    				t = $.getUrlParam("type");
                    				n = currPage;
                    				category = c ? c : 1;
                    				type = t ? t : 1;
                    				history.pushState(null, null, "?category=" + category + "&type=" + type + "&num=" + n);
                    				$.ajax({
                    					url: "//meibanglai.com/data/dataListLogistics.do",
                    					type: "post",
                    					data: {
                    						"start": start,
                    						"end": end,
                    						"num": n
                    					},
                    					success: function(data) {
                    						// 请求数据成功后加载template模板
                    						html = template(document.getElementById('result-tpl').innerHTML, data);
                    						//	console.log(html);
                    						document.getElementById('result-box').innerHTML = html;
                    					}
                    				});
                    	
                    				console.log(c, t, n);
                    				//          		console.log('currPage:' + currPage + ' pageSize:' + pageSize);
                    			}
                    		};
                    		$("#pagination-top").whjPaging(options);
                    		$("#pagination-bottom").whjPaging(options);
                    	} else {
                            alert("没有查询到信息，请重新输入");
                        }
             		}
             	});
            } else {
                alert("请输入出发地或者到达地");
            }
        })
    };

var formatDate = function(n) {
	// 获取时分秒
	var now = new Date(),
		year = now.getFullYear(),
		month = now.getMonth() + 1,
		date = now.getDate(),
		hours = now.getHours(),
		minutes = now.getMinutes(),
		seconds = now.getSeconds(),
		timestamp = now.getTime();

	// 小于10数字补0
	month = month < 10 ? "0" + month : month;
	date = date < 10 ? "0" + date : date;
	hours = hours < 10 ? "0" + hours : hours;
	minutes = minutes < 10 ? "0" + minutes : minutes;
	seconds = seconds < 10 ? "0" + seconds : seconds;
	return year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;
}

