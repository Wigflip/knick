$(document).ready(function(){
	//Fixed Header
	if($("html").width() >= 1025){
	    $("header").before($("header").clone().addClass("header-fixed"));
	    $(window).on("scroll", function () {
	    	$("body").toggleClass("down", ($(window).scrollTop() > 10));
		});
	}

	//Twitter Widget
	!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");

	//Character Page AJAX
	 $cast = $(".cast-main");
	 $(".cast-info a").click(function(event) {
	    event.preventDefault();
	    var character_page = $(this).attr("href");
	     $cast.load(character_page).hide().fadeIn(2000);
	     $(".main-wrapper").css("height", "1370px");
	 }); 	

	//DESKTOP/TABLET About section - more button
	var more = $(".more"),
		less = $(".less"),
		extra_info = $(".extra-info"); 

	more.on("click", function(){
		event.preventDefault();
		extra_info.css("display","block").animate({opacity:1}, 1000);
		more.css("display","none");
		less.css("display","inline");
	});	

	less.on("click", function(){
		event.preventDefault();
		extra_info.css("display","none").animate({opacity:0}, 1000);
		more.css("display","inline");
		less.css("display","none");
	});

	//VIDEO CHANGE BASED ON LINK

	$(".featured .column, .mobile-feature").on("click", function(){

		var mess = $(this).attr("data-name"),
			source = $(this).attr('data-video');
			
		$(".main-video").find("h2").html(mess);
		$(".main-video video").attr("src", source)
							  .attr("autoplay", "true");	

		$("html, body").animate({ scrollTop: 0 }, 200);

	});


});