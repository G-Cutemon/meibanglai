if($(window).width() > 768){
	$('.navbar-nav>li').mouseover(function() {
		$(this).attr("class", "dropdown open");
		$(this).children("a").attr("aria-expanded", "true").css("color", "#777");;
	});
	
	$('.navbar-nav>li').mouseout(function() {
		$(this).attr("class", "dropdown");
		$(this).children("a").attr("aria-expanded", "false").css("color", "#fff");
	});
}


//$('.navbar-nav>li').click(function)
