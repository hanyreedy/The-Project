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
