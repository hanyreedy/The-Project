$('.skitter-large').skitter({
  navigation: true,
  dots: true
});


 var filter = document.getElementById("filter");

filter.onclick = function(){
	var option = document.getElementById("options");


	if(option.style.display=="block"){
		$(option).slideUp(500);
		filter.innerHTML='Filters	<p class=" float-right mr-3">+</p>';
		filter.style.backgroundColor="#ecf0f1"
		filter.style.color="#000"
}
	else{
					$(option).slideDown(500);

		filter.innerHTML='Filters<p class=" float-right mr-3">-</p>';
				filter.style.backgroundColor="#323a45"
		filter.style.color="#fff"


	}

}









































var li = $('.option-color li a');
li.eq(0).css('backgroundColor','#b7babb')
li.eq(1).css('backgroundColor','#ed170c')
li.eq(2).css('backgroundColor','#2daae1')
li.eq(3).css('backgroundColor','#1abc9c')
li.eq(4).css('backgroundColor','#ffc0cb')
li.eq(5).css('backgroundColor','#f3f656')
li.eq(6).css('backgroundColor','#ee82ee')
li.eq(7).css('backgroundColor','#800000')
li.eq(8).css('backgroundColor','#000')
li.eq(9).css('backgroundColor','#fffs')
