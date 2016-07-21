
//Fixed Header
$(document).ready(function(){
    $("header").before($("header").clone().addClass("header-fixed"));
    $(window).on("scroll", function () {
    $("body").toggleClass("down", ($(window).scrollTop() > 100));
   });
});


//Twitter Widget
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");

//Character Page AJAX
$(document).ready(function(e) {
 $cast = $(".cast-main");
 $(".cast-info a").click(function(event) {
    event.preventDefault();
    var character_page = $(this).attr("href");
     $cast.load(character_page).hide().fadeIn(2000);
     $(".main-wrapper").css("height", "1370px");
 }); 
});		