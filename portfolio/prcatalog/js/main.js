$('#blog').on('click', function(){
    $('#breg').removeClass('active');
    $(this).addClass('active');
    $('.modal_auth .register').removeClass('active');
    $('.modal_auth .login').addClass('active');
});

$('#breg').on('click', function(){
    $('#blog').removeClass('active');
    $(this).addClass('active');
    $('.modal_auth .login').removeClass('active');
    $('.modal_auth .register').addClass('active');
});

$('.cd-signin').on('click', function(){
    $('body').css('overflow', 'hidden');
    $('#blog').addClass('active');
    $('.wrapper_modal_auth').css('display', 'block');
    $('.modal_auth .login').addClass('active');
});

$('.cd-signup').on('click', function(){
    $('body').css('overflow', 'hidden');
    $('#breg').addClass('active');
    $('.wrapper_modal_auth').css('display', 'block');
    $('.modal_auth .register').addClass('active');
});

$('.modal_auth_close').on('click', function(){
    $('body').css('overflow', 'auto');
    $('.wrapper_modal_auth').css('display', 'none');
    $('#blog').removeClass('active');
    $('#breg').removeClass('active');
    $('.modal_auth .register').removeClass('active');
    $('.modal_auth .login').removeClass('active');
});