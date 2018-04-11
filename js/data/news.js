$(document).ready(function() {
	var page = document.getElementById("page");
	if(page != null) page.innerHTML = "";
	a_details_click_showList();

	n = $.getUrlParam("num");
	n != null ? ajaxInformation(n) : ajaxInformation(1);

});
DETAILS_URL = "/view/matchMessage/";

var ajaxInformation = function(num) {
	$.ajax({
		url: "//meibanglai.com/data/getInformationList.do",
		type: "get",
		//async:false,
		data: {
			"type": type,
			"num": num
		},
		success: function(data) {
			if(data.code == 200) {
				ppaging(
					document.getElementById("page"),
					num,
					data.totalPage,
					data.totalSize
				);
				document.getElementById("show").innerHTML = ""; //清空
				for(var i = 0; i < data.data.length; i++) {
					var d = data.data[i];
					showData(d);

					//                        var show = document.getElementById("show").children;
					//                        $(show[show.length-2]).fadeIn(i*250);//渐显 XXX:会展和快递比较特殊在页面做
					//                         $(show[show.length-1]).fadeIn(i*250);
				}
			} else {
				var page = document.getElementById("page");
				if(page != null)
					page.innerHTML = "";
			}
			a_Page_ready_bindHear3();
		},
		error: function() {
			var page = document.getElementById("page");
			if(page != null)
				page.innerHTML = "";
		}
	});
	a_details_click_showList();
};

var a_Page_ready_bindHear3 = function() {
	var as = document.getElementById("page").children;
	var z = 0;
	for(; z < as.length;) {
		a = as[z];
		z = z + 1;
		a.href = "javascript:scroll(0,0)";
		a.onclick = function(e) {
			t = e.target.title;
			history.pushState(null, null, "?category=4" + "&type=" + type + "&num=" + t);
			$.ajax({
				url: "/data/getInformationList.do",
				type: "get",
				// async:false,
				data: {
					"type": type,
					"num": t
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
						document.getElementById("show").innerHTML = ""; //清空
						for(var i = 0; i < data.data.length; i++) {
							var d = data.data[i];
							showData(d);

							//                                var show = document.getElementById("show").children;
							//                                $(show[show.length-2]).fadeIn(i*250);//渐显 XXX:会展和快递比较特殊在页面做
							//                                 $(show[show.length-1]).fadeIn(i*250);
						}
					} else {
						var page = document.getElementById("page");
						if(page != null)
							page.innerHTML = "";
					}
					a_Page_ready_bindHear3();
				},
				error: function() {
					var page = document.getElementById("page");
					if(page != null)
						page.innerHTML = "";
				}
			});
			a_details_click_showList();
		};
	}
};

var show = document.getElementById("show");
var showData = function(data) {
	var a = document.createElement("a");
	str = data.message;
	a.setAttribute("href", DETAILS_URL + str);
	a.innerHTML = str.substring(0, str.length - 5);

	var br = document.createElement("br");

	show.appendChild(a);
	show.appendChild(br);
}