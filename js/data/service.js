//    var DETAILS_URL = "/view/data/"
var show = document.getElementById("show");

var row = document.createElement("div");
row.classList.add("row");
row.classList.add("marginTop1r");
row.setAttribute("style", "display: none;");
var c1 = document.createElement("div");
c1.classList.add("col-xs-12");
c1.classList.add("col-sm-12");
c1.classList.add("col-md-12");
var c2 = document.createElement("div");
c2.classList.add("hidden-xs");
c2.classList.add("col-sm-2");
c2.classList.add("col-md-2");
var c3 = document.createElement("div");
c3.classList.add("col-xs-12");
c3.classList.add("col-sm-8");
c3.classList.add("col-md-8");
var showData = function(data) {
	var a = document.createElement("a");
	a.setAttribute("style", "color: #000000;");
	a.setAttribute("href", "/view/data/details.html?d=" + data.id);
	var h1 = document.createElement("h1");
	h1.innerHTML = data.shop_name;
	a.appendChild(h1);

	var img = document.createElement("img");
	img.setAttribute("src", data.image_url);
	img.setAttribute("class", "details-1-img");

	var p = document.createElement("p");
	var p1 = p.cloneNode(true);
	var p2 = p.cloneNode(true);
	var p3 = p.cloneNode(true);
	p1.innerHTML = "地址：" + data.address;
	p2.innerHTML = "手机：" + data.phone;
	p3.innerHTML = "营业时间：" + data.businessHours;

	var Nc1 = c1.cloneNode(true);
	var Nc2 = c2.cloneNode(true);
	var Nc3 = c3.cloneNode(true);
	var Nrow = row.cloneNode(true);
	Nc3.appendChild(p1);
	Nc3.appendChild(p2);
	Nc3.appendChild(p3);

	Nc2.appendChild(img);

	Nc1.appendChild(a);

	//        Nrow.setAttribute("href",);
	Nrow.appendChild(Nc1);
	Nrow.appendChild(Nc2);
	Nrow.appendChild(Nc3);

	show.appendChild(Nrow);
	show.appendChild(document.createElement("hr"))
}