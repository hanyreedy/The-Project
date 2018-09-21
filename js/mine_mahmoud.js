canvas = new fabric.Canvas('canvas1');

document.getElementById('imgupload').onchange = function handleImage(e) {
    var reader = new FileReader();
    reader.onload = function (event) { console.log('fdsf');
        var imgObj = new Image();
        imgObj.src = event.target.result;
        imgObj.onload = function () {
            // start fabricJS stuff
            
            var image = new fabric.Image(imgObj);
            image.set({
                left: 0,
                scaleX:0.5,
                scaleY:0.5,
                top: 0,
                angle: 20,
                padding: 10,
                cornersize: 10
            });
            //image.scale(getRandomNum(0.1, 0.25)).setCoords();
            canvas.add(image);
            
            // end fabricJS stuff
        }
        
    }
    reader.readAsDataURL(e.target.files[0]);
}

document.getElementById('setbackground').onchange = function handleImage(e) {
    var reader = new FileReader();
    reader.onload = function (event) { console.log('fdsf');
        var imgObj = new Image();
        imgObj.src = event.target.result;
        imgObj.onload = function () {
            // start fabricJS stuff
            
            var image = new fabric.Image(imgObj);
            image.set({
                left: 0,
                scaleX: canvas.width / image.width,
                scaleY: canvas.height / image.height,
                top: 0,
                angle: 0,
                padding: 10,
                cornersize: 0
            });
            //image.scale(getRandomNum(0.1, 0.25)).setCoords();
            canvas.setBackgroundImage(image);
            canvas.renderAll();
            // end fabricJS stuff
        }
        
    }
    reader.readAsDataURL(e.target.files[0]);
}

//Clear Background
function clearbg(){
    canvas.setBackgroundImage(null, canvas.renderAll.bind(canvas));
    canvas.setBackgroundColor(null, canvas.renderAll.bind(canvas));
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    $("#canvas1").css('background', 'linear-gradient(to bottom, ' + "white" + ' 0%, ' + "white" + ' 100%)');
}
////////////////////////////////

$("input:checkbox").on('click', function() {
  // in the handler, 'this' refers to the box clicked on
  var $box = $(this);
  if ($box.is(":checked")) {
    // the name of the box is retrieved using the .attr() method
    // as it is assumed and expected to be immutable
    var group = "input:checkbox[name='" + $box.attr("name") + "']";
    // the checked state of the group/box on the other hand will change
    // and the current value is retrieved using .prop() method
    $(group).prop("checked", false);
    $box.prop("checked", true);
  } else {
    $box.prop("checked", false);
  }
});
////////////////////////////

$("#rect").click(function(){
  var rect = new fabric.Rect({
  left: 0,
  top: 0,
  fill: 'blue',
  width: 20,
  height: 20
});
canvas.add(rect);
})

$("#addTextbtn").click(function(){
    console.log("gea el addtext")
    var typedtext = $('#typingarea').val();
    var selectedfont =  $('#fontTypetext :selected').text();
    
    var textObject = new fabric.IText(typedtext,{
        fontFamily: selectedfont,
    });
    console.log(selectedfont)
    canvas.add(textObject).setActiveObject(textObject);
    canvas.renderAll();
})



$(".editorbtn").click(function() {
    var cn = this.className;
    cn = cn.split(' ')[1];
    $("#content > #"+cn).addClass("onn" );
    $("#content > #"+cn).siblings().removeClass("onn" );
  $(this).toggleClass( "on" );
    $(this).siblings().removeClass("on")
    
});
$(".editorbtn").mouseover(function() {
  $(this).css('background-color','black')
    $(this).siblings().css('background-color','rgb(50, 58, 69)')
});
    $("#sidebar").mCustomScrollbar({
         theme: "minimal"
    });

    $('#sidebarCollapse').on('click', function () {
        // open or close navbar
        $('#sidebar').toggleClass('active');
        // close dropdowns
        $('.collapse.in').toggleClass('in');
        // and also adjust aria-expanded attributes we use for the open/closed arrows
        // in our CSS
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });



$("#5by7").click(function(){
	
	$("#canvas1").css({ "width": "390px", "height": "546px" });
})

$("#4by8").click(function(){
	
	$("#canvas1").css({ "width": "288px", "height": "576px" });
})

$("#6by9").click(function(){
	
	$("#canvas1").css({ "width": "396px", "height": "594px" });
})
$("#5_5by4").click(function(){
	
	$("#canvas1").css({ "width": "495px", "height": "360px" });
})


$(".divc").click(function(){	
	 var bgColor =$(this).css("backgroundColor") ;
	    $("#canvas1").css("backgroundColor",bgColor)


})

$(".basic").change(function(){
	var value =$(this).val();
	
		    $("#canvas1").css("backgroundColor",value)

})




/*






===================*/
/*==========gradientapply=========*/
$("input:checkbox").on('click', function() {
  // in the handler, 'this' refers to the box clicked on
  var $box = $(this);
  if ($box.is(":checked")) {
    // the name of the box is retrieved using the .attr() method
    // as it is assumed and expected to be immutable
    var group = "input:checkbox[name='" + $box.attr("name") + "']";
    // the checked state of the group/box on the other hand will change
    // and the current value is retrieved using .prop() method
    $(group).prop("checked", false);
    $box.prop("checked", true);
  } else {
    $box.prop("checked", false);
  }
});
$("#gradientapply").click(function(){	
	if($("#top").prop("checked")==true){
     var valgrd1 = $("#grdColor1").val();
	var valgrd2 = $("#grdColor2").val();   
    }
    else{
      var valgrd2 = $("#grdColor1").val();
	var valgrd1 = $("#grdColor2").val();  
    }
	
	
$("#canvas1").css('background', 'linear-gradient(to bottom, ' + valgrd1 + ' 0%, ' + valgrd2+ ' 100%)');
	
	
})
/*==================================*/

/*==================================*/
function onObjectSelected(o){
    console.log(o)
    activeObject = canvas.getActiveObject()
    //activeObject = o.target;
    console.log(activeObject)
    if(activeObject.isType('text')){
       //display text logic
        console.log('text panel Displayed');
    }
    else if(activeObject.isType('image')){
      console.log('image panel Displayed');
        $(".objectbuttons").css({ "display": "block" });
            $(".editnav").css({ "display": "none" });
            $(".imageeditrow").css({ "display": "block" });
            $(".texteditrow").css({ "display": "none" });
    }
    else if( activeObject.isType('xyz')){
      //display shape logic
    }
}

canvas.on('object:selected', onObjectSelected);
/*================================*/


var currentZoom = 1;
$('#zin').click(function() {
    currentZoom += 0.1;
    $('#canvas1').css({
        zoom: currentZoom,
        '-moz-transform': 'scale(' + currentZoom + ')'
    });
});



var currentZoom = 1;
$('#zout').click(function() {
    currentZoom -= 0.1;
    $('#canvas1').css({
        zoom: currentZoom,
        '-moz-transform': 'scale(' + currentZoom + ')'
    });
});


/*--------------------------------------------------------*/
//Clear Background
function clearbg(){
    canvas.setBackgroundImage(null, canvas.renderAll.bind(canvas));
    canvas.setBackgroundColor(null, canvas.renderAll.bind(canvas));
}


//rotate
var rotation = 0;

jQuery.fn.rotate = function(degrees) {
    $("#canvas1").css({'transform' : 'rotate('+ degrees +'deg)'});
};

$('#rotatec').click(function() {
    rotation += 45;
    $(this).rotate(rotation);
});



//clear
$("#clearcanvas").click(function(){
    $("#canvas1").remove();
});



//========================







