var LOGO_URL = "//meibanglai.com/image/mbhbrand/";
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
	//        a.setAttribute("href", "/view/data/MbhBrand.html?d="+data.id);
	var h1 = document.createElement("h1");
	h1.innerHTML = data.brand_name;
	a.appendChild(h1);

	var img = document.createElement("img");
	img.setAttribute("src", LOGO_URL + data.brand_logo);
	img.setAttribute("class", "details-1-img");

	var p = document.createElement("p");
	var p1 = p.cloneNode(true);
	var p2 = p.cloneNode(true);
	var p3 = p.cloneNode(true);
	var p4 = p.cloneNode(true);
	//      console.log(p1);
	p1.innerHTML = "公司名：" + data.campany_name;
	p1.setAttribute("style", "font-weight: bold;font-size: 1rem;");
	p2.innerHTML = "参展产品：" + data.product_name;
	p3.innerHTML = "产品介绍：" + data.product;
	p3.classList.add("show_box1-context_product");
	p4.innerHTML = "品牌官网：" + data.website;

	var Nc1 = c1.cloneNode(true);
	var Nc2 = c2.cloneNode(true);
	var Nc3 = c3.cloneNode(true);
	var Nrow = row.cloneNode(true);
	Nc3.appendChild(p1);
	Nc3.appendChild(p2);
	Nc3.appendChild(p3);
	Nc3.appendChild(p4);
	Nc3.classList.add("show_box1-context");

	Nc2.appendChild(img);

	Nc1.appendChild(a);

	//        Nrow.setAttribute("href",);
	Nrow.appendChild(Nc1);
	Nrow.appendChild(Nc2);
	Nrow.appendChild(Nc3);

	show.appendChild(Nrow);

	show.appendChild(document.createElement("hr"));

}