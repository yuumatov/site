//Mobile menu
$('.button-mobile-menu').click(function(){
    $('body').toggleClass('no-scroll');
    $(this).toggleClass('open');
    $('.mobile-menu').toggle();
});