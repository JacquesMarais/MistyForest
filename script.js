$(document).ready(function(){
	$(document).scroll(function(){
		if($(document).scrollTop() > 50){
			$("nav").addClass("white");
		} else{
			$("nav").removeClass("white");
		}
	});
	$("nav ul a").click(function(e){
		e.preventDefault();
		$('html, body').animate({
		    scrollTop: $($(this).attr("href")).offset().top
		}, 1000);
		if($("#mobile-nav").is(":visible")){
			$("ul#nav-right").toggleClass("show");
		}
	});
	$("#mobile-nav").click(function(){
		$("ul#nav-right").toggleClass("show").css("top", $("nav").outerHeight());
		return false;
	});
	$('.imgs').magnificPopup({
  		type: 'image',
  		gallery:{
    		enabled:true
  		}
	});
});
