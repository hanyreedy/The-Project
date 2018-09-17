$('.carousel').carousel({
  interval:1000
})

$(document).ready(function(){
	$("#loading").fadeOut(1000 , function(){
		$("body").css("overflow","auto")
	})
})
