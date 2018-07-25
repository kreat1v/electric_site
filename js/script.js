$(document).ready(function(){
    $("#scroll_menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });
});

$(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
            $('#back_top').fadeIn();
        } else {
            $('#back_top').fadeOut();
        }
    });
    $('#back_top').click(function() {
        $('body,html').animate({scrollTop:0}, 500);
    });
});