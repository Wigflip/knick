$(document).ready(function(){
	$("header h3").on('tap', function(){
		//open nav panel
		$("body").toggleClass("open-panel");

		//change text of button
		if($("header h3").text() === 'close'){
			$("header h3").text("menu");
		}else{
			$("header h3").text("close");
		}
	});
});