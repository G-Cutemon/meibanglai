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
                    data: {"start":start,
                        "end":end,
                        "num":num
                    },
                    success: function (data) {
                    	var html = template(document.getElementById('result-tpl').innerHTML, data);
                    	//	console.log(html);
                    	document.getElementById('result-box').innerHTML = html;
                    	console.log(data.data);
                        if(data.code == 200) {
                            ppaging(
                                document.getElementById("page"),
                                num,
                                data.totalPage,
                                data.totalSize
                            );
                        }else{
                            var page = document.getElementById("page");
                            if(page != null)
                                page.innerHTML = "";
                        }
                        a_Page_ready_bindHear_box7();
                    }
                })
            } else {
                alert("请输入出发地或者到达地");
            }
        })
    };

    a_Page_ready_bindHear_box7 = function () {
        var as = document.getElementById("page").children;
        var z=0;
        for (; z<as.length; ){
            a = as[z];
            z = z+1;
            a.href="javascript:scroll(0,0)";
            a.onclick = function (e){
                t = e.target.title;
                var start = document.getElementById("start").value;
                var end = document.getElementById("end").value;
                $.ajax({
                    url: "/data/dataListLogistics.do",
                    type: "post",
                    async:false,
                    data: {"start":start,
                        "end":end,
                        "num":t
                    },
                    dataType: "json",
                    success: function(data) {
                        if(data.code == 200) {
                            ppaging(
                                document.getElementById("page"),
                                t,
                                data.totalPage,
                                data.totalSize
                            );
                            document.getElementById("show").innerHTML = "";//清空
                            for (var i = 0; i < data.data.length; i++) {
                                var d = data.data[i];
                                showData(d);

                                var show = document.getElementById("show").children;
                                $(show[show.length-2]).fadeIn(i*250);//渐显
                            }
                        }else{
                            var page = document.getElementById("page");
                            if(page != null)
                                page.innerHTML = "";
                        }
                        a_Page_ready_bindHear_box7();
                    }
                });
                a_details_click_showList();
            };
        }
    }

    var showData = function (data) {
        var IMAGE_URL = "/image/logistics/";
        var DEFAULT_IMAGE = IMAGE_URL+"default.png";
        var row = document.createElement("div");
        row.classList.add("row");
        row.setAttribute("style","display: none;");
        var c1 = document.createElement("div");
        c1.classList.add("hidden-xs");
        c1.classList.add("col-sm-2");
        c1.classList.add("col-md-2");
        c1.classList.add("box7-img");
        var c2 = document.createElement("div");
        c2.classList.add("col-xs-12");
        c2.classList.add("col-sm-8");
        c2.classList.add("col-md-8");
        c2.classList.add("box7-context");
        var p = document.createElement("p");
        var a = document.createElement("a");
        var img = document.createElement("img");
        var span = document.createElement("span");
        var hr = document.createElement("hr");
        hr.classList.add("box7-hr");


        var img1 = img.cloneNode(true);
        img1.setAttribute("src", data.logo_url=="" ? DEFAULT_IMAGE : data.logo_url);

        var p1 = p.cloneNode(true);
        var a1 = a.cloneNode(true);
        a1.innerHTML = data.company_name;
        p1.innerHTML = "公司名称：";
        p1.append(a1);
        var p2 = p.cloneNode(true);
        p2.innerHTML = "地址："+data.address;
        var p3 = p.cloneNode(true);
        p3.innerHTML = "联系人："+data.principal;
        var p4 = p.cloneNode(true);
        p4.innerHTML = "手机："+data.phone;
        var p5 = p.cloneNode(true);
        p5.innerHTML  = "发货热线："+data.telephone;
        var p6 = p.cloneNode(true);
        var span1 = span.cloneNode(true);
        span1.innerHTML = formatDate(data.updata_time);
        p6.innerHTML = "货运市场："+data.market;
        p6.append(span1);
        var p7 = p.cloneNode(true);
        p7.innerHTML = "出发站："+data.start_site;
        var p8 = p.cloneNode(true);
        p8.innerHTML  = "到达地："+data.end_site;


        var Nc1 = c1.cloneNode(true);
        var Nc2 = c2.cloneNode(true);
        var Nrow = row.cloneNode(true);

        Nc1.append(img1);

        Nc2.append(p1);
        Nc2.append(p2);
        Nc2.append(p3);
        Nc2.append(p4);
        Nc2.append(p5);
        Nc2.append(p6);
        Nc2.append(p7);
        Nc2.append(p8);

        Nrow.append(Nc1);
        Nrow.append(Nc2);

        var hr1 = hr.cloneNode(true);
        var show = document.getElementById("show");
        show.append(Nrow);
        show.append(hr1)
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

