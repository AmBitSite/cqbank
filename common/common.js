$(window).scroll(function () {
    if ($(window).scrollTop() >= 100) {
        $('nav').addClass('nav_scroll');
        $(".toTop").fadeIn();   
    } else {
        $('nav').removeClass('nav_scroll');
        $('.toTop').fadeOut();
    }
});
$('.toTop').click(function() {
    $('body,html').animate({scrollTop:0},800);
});