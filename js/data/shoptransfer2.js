var DEFAULT_PREFIX = "/view/data/shoptransfer.html";
    var DEFAULT_IMAGE_URI = "//meibanglai.com/image/shoptransfer/";
    var DEFAULT_IMAGE = DEFAULT_IMAGE_URI+"default.png";

    var show = document.getElementById("show");
    var row = document.createElement("div");
    row.classList.add("row");
    row.classList.add("show-box6");
    row.setAttribute("style","display: none;");
    var c1 = document.createElement("div");
    c1.classList.add("hidden-xs");
    c1.classList.add("col-sm-2");
    c1.classList.add("col-md-2");
    c1.classList.add("show6-head-img");
    var c2 = document.createElement("div");
    c2.classList.add("col-xs-6");
    c2.classList.add("col-sm-3");
    c2.classList.add("col-md-3");
    c2.classList.add("show6-head");
    var c3 = document.createElement("div");
    c3.classList.add("col-xs-6");
    c3.classList.add("col-sm-2");
    c3.classList.add("col-md-2");
    c3.classList.add("show6-context");
    var c4 = document.createElement("div");
    c4.classList.add("hidden-xs");
    c4.classList.add("col-sm-1");
    c4.classList.add("col-md-1");
    c4.classList.add("show6-x");
    var c5 = document.createElement("div");
    c5.classList.add("hidden-xs");
    c5.classList.add("col-sm-2");
    c5.classList.add("col-md-2");
    c5.classList.add("show6-x");

    var img = document.createElement("img");
    var a = document.createElement("a");
    var p = document.createElement("p");
    var h1 = document.createElement("h1");
    var span = document.createElement("span");

    var showData = function (data) {
        var img1 = img.cloneNode(true);
        img1.setAttribute("src" , data.image_url=="" ? DEFAULT_IMAGE : DEFAULT_IMAGE_URI+data.image_url.split(";")[0]);

        var h1_1 = h1.cloneNode(true);
        h1_1.innerHTML = data.transfer_name;
        var p1 = p.cloneNode(true);
        p1.innerHTML = data.address;

        var p2 = p.cloneNode(true);
        p2.innerHTML = data.rental;
        var p3 = p.cloneNode(true);
        var span1 = span.cloneNode(true);
        span1.innerHTML = "转让费："+data.transfer_gold;
        p3.appendChild(span1);

        var p4 = p.cloneNode(true);
        p4.innerHTML = data.type;

        var p5 = p.cloneNode(true);
        p5.innerHTML = formatDate(data.create_time);

        var button = document.createElement("button");
        button.setAttribute("onclick","window.open('" + DEFAULT_PREFIX+"?d="+data.id+
            "')");
        button.innerHTML = "查看详情";

        var Nc1 = c1.cloneNode(true);
        var Nc2 = c2.cloneNode(true);
        var Nc3 = c3.cloneNode(true);
        var Nc4 = c5.cloneNode(true);
        var Nc5 = c4.cloneNode(true);
        var Nc6 = c5.cloneNode(true);

        Nc1.appendChild(img1);

        Nc2.appendChild(h1_1);
        Nc2.appendChild(p1);

        Nc3.appendChild(p2);
        Nc3.appendChild(p3);

        Nc4.appendChild(p4);

        Nc5.appendChild(p5);

        Nc6.appendChild(button);


        var Nrow = row.cloneNode(true);
        Nrow.appendChild(Nc1);
        Nrow.appendChild(Nc2);
        Nrow.appendChild(Nc3);
        Nrow.appendChild(Nc4);
        Nrow.appendChild(Nc5);
        Nrow.appendChild(Nc6);

//        var href = document.createElement("a");
//        href.setAttribute("href",DEFAULT_PREFIX+"?d="+data.id);

//        href.append(Nrow);
//        show.append(href);
        show.appendChild(Nrow);
        show.appendChild(document.createElement("hr"));
    };

    var formatDate = function (n) {
        var now = new Date(n*1000);

        var year=now.getFullYear();
        var month=now.getMonth()+1;
        var date=now.getDate();
//        var hour=now.getHours();
//        var minute=now.getMinutes();
//        var second=now.getSeconds();
        return year+"-"+month+"-"+date;
    };