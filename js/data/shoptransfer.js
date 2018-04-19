var startCount = 0;
var errorPaga = "/ErrorFiles/404.html";
var IMAGE_DELETE_URL = "//meibanglai.com/image/shoptransfer/";

$(document).ready(function () {
    a_none_ready_simulationClick();
});


var a_none_ready_simulationClick = function() {
    var d = $.getUrlParam("d");
    $.ajax({
        url: "//meibanglai.com/data/getShoptransfer.do",
        type: "get",
        data: {
            "d":d
        },
        dataType: "json",
        success: function(data) {
            console.log(data);
            var html = template($('#tpl').html(), data);
            //	console.log(html);
//          console.log(img_slide);
            $('#wp').html(html).ready(function(){
            		$("#slider").easySlider({
            	    	slideSpeed: 150,
            	    	paginationSpacing: "15px",
            	    	paginationDiameter: "12px",
            	    	paginationPositionFromBottom: "30px",
            	    	slidesClass: ".slides",
            	    	controlsClass: ".controls",
            	    	paginationClass: ".pagination"
            	    });
            });
            //填数据
            if(data.code==200){
//              var uli = document.createElement("li");
//              var oli = document.createElement("li");
//              var a = document.createElement("a");
//              a.setAttribute("href","#");
//              a.setAttribute("target","_blank");
//              var img = document.createElement("img");
//              var NodeI = document.createElement("i");
//
//              var ul = document.getElementById("ul");
//              var ol = document.getElementById("ol");
//              var d = data.data;
//
//              var imgs = d.image_url.split(";");
//              for (i=0; i<imgs.length; i++){
//                  // if (i <= 4){
//                  image = img.cloneNode(true);
//                  image.setAttribute("src",IMAGE_DELETE_URL+imgs[i]);
//                  image.setAttribute("style","width:auto;height:auto;display: inline-block;");
//
//
//                  a1 = a.cloneNode(true);
//                  uli1 = uli.cloneNode(true);
//                  a1.append(image);
//                  uli1.append(a1);
//                  ul.append(uli1);
//
//                  // image1 = image.cloneNode(true);
//                  oli1 = oli.cloneNode(true);
//                  oli1.innerHTML = i;
//                  // NodeIc = NodeI.cloneNode(true);
//                  // oli1.append(NodeIc);
//                  // oli1.append(image1);
//                  ol.append(oli1);
//                  // }
//              }
//
//              document.getElementById("gold").innerHTML = d.rental;
//              document.getElementById("transferGold").innerHTML = d.transfer_gold;
//
//              var ps1 = document.getElementsByClassName("context")[0].children;
//              var ps2 = document.getElementsByClassName("context")[1].children;
//
//              ps1[0].lastElementChild.innerHTML = d.area;
//              ps1[1].lastElementChild.innerHTML = d.wide;
//              ps1[2].lastElementChild.innerHTML = d.high;
//              ps1[3].lastElementChild.innerHTML = d.depth;
//              ps1[4].lastElementChild.innerHTML = d.floor;
//
//              ps2[0].lastElementChild.innerHTML = d.payment;
//              ps2[1].lastElementChild.innerHTML = d.type;
//              ps2[2].lastElementChild.innerHTML = d.tenancy;
//              ps2[3].lastElementChild.innerHTML = d.manage_business;
//              ps2[4].lastElementChild.innerHTML = d.manage_status;
//
//              var phone = document.getElementsByClassName("context-x")[0];
//              phone.getElementsByTagName("p")[0].lastElementChild.innerHTML = d.address;
//              phone.getElementsByTagName("a")[0].innerHTML = d.transfer_people+"："+d.people;
//
//              var span = document.createElement("span");
//              var content1 = document.getElementsByClassName("box-details-content")[0];
//              var attached = d.attached.split(";");
//              for (i=0; i<attached.length-1; i++){
//                  span1 = span.cloneNode(true);
//                  span1.innerHTML = attached[i];
//                  content1.append(span1);
//              }
//
//              var content2 = document.getElementsByClassName("box-details-content")[1];
//              var p = document.createElement("p");
//              var p1 = p.cloneNode(true);
//              p1.innerHTML = d.introduce;
//              content2.append(p1);
            }else{
                   window.location.href = errorPaga;
            }
        },
        error: function () {
               window.location.href = errorPaga;
        }

    })
};

//获取参数地址栏参数
$.getUrlParam = function(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}
