$(window).bind('resize', function(){ 
    if ($(window).width() > 1200) {
        $(window).on('scroll', function() {
			if ($(window).scrollTop() > 50) {
				$('.header-content-absolute').css({
					'background-color': 'rgba(184, 161, 119, 0.9)',
					'padding-top': '15px',
					'padding-bottom': '15px'
				});
				$('.header .header-content-absolute .banner-top .banner-top-logo img').css('height', '50px');
				$('.banner-top-phone a:nth-child(1)').css({
					'background': 'url(./img/icons/phone2.svg) no-repeat center',
					'background-size': 'cover'
				});
				$('#btn-mobile-menu').css({
					'background': 'url(./img/icons/mobile-menu2.svg) no-repeat center',
					'background-size': 'cover'
				});

			} else {
				$('.header-content-absolute').css({
					'background-color': 'rgba(184, 161, 119, 0)',
					'padding-top': '25px',
					'padding-bottom': '25px'
				});
				$('.header .header-content-absolute .banner-top .banner-top-logo img').css('height', '70px');
				$('.banner-top-phone a:nth-child(1)').css({
					'background': 'url(./img/icons/phone.svg) no-repeat center',
					'background-size': 'cover'
				});
				$('#btn-mobile-menu').css({
					'background': 'url(./img/icons/mobile-menu.svg) no-repeat center',
					'background-size': 'cover'
				});
			}
		});
	} else { 
    if ($(window).width() < 1200) { 
	        $(window).on('scroll', function() {
				if ($(window).scrollTop() > 50) {
					$('.header-content-absolute').css({
						'background-color': 'rgba(184, 161, 119, 0.9)',
						'padding-top': '15px',
						'padding-bottom': '15px'
					});
					$('.header .header-content-absolute .banner-top .banner-top-logo img').css('height', '40px');
					$('.banner-top-phone a:nth-child(1)').css({
						'background': 'url(./img/icons/phone2.svg) no-repeat center',
						'background-size': 'cover'
					});
					$('#btn-mobile-menu').css({
						'background': 'url(./img/icons/mobile-menu2.svg) no-repeat center',
						'background-size': 'cover'
					});

				} else {
					$('.header-content-absolute').css({
						'background-color': 'rgba(184, 161, 119, 0)',
						'padding-top': '25px',
						'padding-bottom': '25px'
					});
					$('.header .header-content-absolute .banner-top .banner-top-logo img').css('height', '40px');
					$('.banner-top-phone a:nth-child(1)').css({
						'background': 'url(./img/icons/phone.svg) no-repeat center',
						'background-size': 'cover'
					});
					$('#btn-mobile-menu').css({
						'background': 'url(./img/icons/mobile-menu.svg) no-repeat center',
						'background-size': 'cover'
					});
				}
			});
        }
    }
}).trigger('resize');

//Mobile menu
$('#btn-mobile-menu').click(function() {
	$('.popup-mobile-menu').toggle();
});
$('.popup-mobile-close').click(function() {
	$('.popup-mobile-menu').toggle();
});

//Header slider
$('.header-slider').slick({
	arrows: false,
	dots: true,
	appendDots: $('#dots-slider-header'),
	mobileFirst: true
});
$('.header-slide-prev').click(function(){
	$('.header-slider').slick('slickPrev');
});
$('.header-slide-next').click(function(){
	$('.header-slider').slick('slickNext');
});

//Gallery slider
$('.gallery-slider').slick({
	arrows: false,
	dots: true,
	appendDots: $('#dots-slider-gallery'),
	mobileFirst: true
});
$('.gallery-slider-prev').click(function(){
	$('.gallery-slider').slick('slickPrev');
});
$('.gallery-slider-next').click(function(){
	$('.gallery-slider').slick('slickNext');
});

//Calendar
$('#calendar').datepicker({ dateFormat: "dd-mm-yy" });
$("#calendar").on("change",function(){
	var selected = $(this).val();
	$('form#check-date').find('[name="date"]').val(selected);
});

//Rent modal
$('#rent1, #close-rent1').click(function() {
	$('#popup-rent1').toggle();
});

$('#rent2, #close-rent2').click(function() {
	$('#popup-rent2').toggle();
});

$('#rent4, #close-rent4').click(function() {
	$('#popup-rent4').toggle();
});

$('#rent5, #close-rent5').click(function() {
	$('#popup-rent5').toggle();
});

//Conduct modal
$('#conduct1, #close-conduct1').click(function() {
	$('#popup-conduct1').toggle();
});