if($(window).width() > 768){
	$('.navbar-nav>li').mouseover(function() {
		$(this).attr("class", "dropdown open");
		$(this).children("a").attr("aria-expanded", "true").css("color", "#777");;
	});
	
	$('.navbar-nav>li').mouseout(function() {
		$(this).attr("class", "dropdown");
		$(this).children("a").attr("aria-expanded", "false").css("color", "#fff");
	});
} else {
	$('.navbar-nav>li>a').click(function() {
		if($(this).parent().attr("class") == "dropdown"){
			$('.navbar-nav>li').attr("class", "dropdown");
			$(this).parent().attr("class", "dropdown open");
		} else if($(this).parent().attr("class") == "dropdown open"){
			$(this).parent().attr("class", "dropdown");
		}
	});
	
	$('.submenu-title').click(function(){
		$('.dropdown-submenu>.dropdown-menu').not($(this).next()).hide();
		$(this).next().toggle();
	});
}


//$('.navbar-nav>li').click(function)
