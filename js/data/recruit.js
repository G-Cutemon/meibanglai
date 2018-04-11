var DETAIL_PREFIX = "/view/data/invitation.html";

//    var DETAILS_URL = "/view/data/"
var show = document.getElementById("show");
var row = document.createElement("div");
row.classList.add("row");
row.classList.add("show-box5");
row.setAttribute("style", "display: none;");
var c1 = document.createElement("div");
c1.classList.add("col-xs-6");
c1.classList.add("col-sm-4");
c1.classList.add("col-md-4");
c1.classList.add("show5-head");
var c2 = document.createElement("div");
c2.classList.add("col-xs-6");
c2.classList.add("col-sm-2");
c2.classList.add("col-md-2");
c2.classList.add("show5-context");
var c3 = document.createElement("div");
c3.classList.add("hidden-xs");
c3.classList.add("col-sm-2");
c3.classList.add("col-md-2");
c3.classList.add("show5-x");

var p = document.createElement("p");
var span = document.createElement("span");

var showData = function(data) {
	var h1 = document.createElement("h1");
	h1.innerHTML = data.jod_name;
	var head_p = p.cloneNode(true);
	head_p.innerHTML = data.company_name;

	var context_p1 = p.cloneNode(true);
	context_p1.innerHTML = data.treatment_leve;
	var context_span1 = span.cloneNode(true);
	var context_span2 = span.cloneNode(true);
	var context_span3 = span.cloneNode(true);
	context_span1.innerHTML = "五险一金";
	context_span2.innerHTML = "包吃住";
	context_span3.innerHTML = "年终奖";

	var context_address = p.cloneNode(true);
	context_address.innerHTML = data.jod_release_address;

	var context_update = p.cloneNode(true);
	context_update.innerHTML = data.jod_release_time;

	var button = document.createElement("button");
	button.setAttribute("onclick", "window.open('" + DETAIL_PREFIX + "?d=" + data.id +
		"')");
	button.innerHTML = "查看职位";

	var Nc1 = c1.cloneNode(true);
	var Nc2 = c2.cloneNode(true);
	var Nc3 = c3.cloneNode(true);
	var Nc4 = c3.cloneNode(true);
	var Nc5 = c3.cloneNode(true);

	Nc1.appendChild(h1);
	Nc1.appendChild(head_p);

	Nc2.appendChild(context_p1);
	var context_p2 = p.cloneNode(true);
	context_p2.appendChild(context_span1);
	context_p2.appendChild(context_span2);
	context_p2.appendChild(context_span3);
	Nc2.appendChild(context_p2);

	Nc3.appendChild(context_address);
	Nc4.appendChild(context_update);
	Nc5.appendChild(button);

	var Nrow = row.cloneNode(true);
	Nrow.appendChild(Nc1);
	Nrow.appendChild(Nc2);
	Nrow.appendChild(Nc3);
	Nrow.appendChild(Nc4);
	Nrow.appendChild(Nc5);

	//        var href = document.createElement("a");
	//        href.setAttribute("href",DETAIL_PREFIX+"?d="+data.id);

	//        href.append(Nrow);
	//        show.append(href);
	show.appendChild(Nrow);
	show.appendChild(document.createElement("hr"));
};