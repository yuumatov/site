$(document).ready(function () {
	//Выбор гериона
	$('#geo_select_open_popup-1').click(function () {
		$('#geo_select_popup-1').toggle();
	})

	//Слайдер 1
	$('.slid').slick({
		arrows: false,
		mobileFirst:true,
	});
	$('#slid_prev_1').click(function(){
		$('.slid').slick('slickPrev');
	});
	$('#slid_next_1').click(function(){
		$('.slid').slick('slickNext');
	});

	//Слайдер 2
	$('.slid_2').slick({
		arrows: false,
		slidesToShow: 1,
		dots: true,
		appendDots: $('.sertificates_dots'),
		mobileFirst:true,
		responsive: [
			{
	      breakpoint: 767,
	      settings: {
	        slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 1199,
	      settings: {
	        slidesToShow: 3
	      }
	    }
	  ]
	});
	$('#slid_prev_2').click(function(){
		$('.slid_2').slick('slickPrev');
	});
	$('#slid_next_2').click(function(){
		$('.slid_2').slick('slickNext');
	});

	//Слайдер 3
	$('.slid_3').slick({
		arrows: false,
		slidesToShow: 1,
		dots: true,
		appendDots: $('.sertificates_dots_2'),
		mobileFirst:true,
		responsive: [
			{
	      breakpoint: 320,
	      settings: {
	        slidesToShow: 1
	      }
	    }
	  ]
	});
	$('#slid_prev_3').click(function(){
		$('.slid_3').slick('slickPrev');
	});
	$('#slid_next_3').click(function(){
		$('.slid_3').slick('slickNext');
	});

	//Слайдер 4
	$('.slid_4').slick({
		arrows: false,
		slidesToShow: 1,
		dots: true,
		appendDots: $('.sertificates_dots_3'),
		mobileFirst:true,
		responsive: [
	    {
	      breakpoint: 767,
	      settings: {
	        slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 1199,
	      settings: {
	        slidesToShow: 4
	      }
	    }
	  ]
	});
	$('#slid_prev_4').click(function(){
		$('.slid_4').slick('slickPrev');
	});
	$('#slid_next_4').click(function(){
		$('.slid_4').slick('slickNext');
	});

	//Work слайдер
	$('.work_wrapper').slick({
		arrows: false,
		slidesToShow: 1,
		mobileFirst:true,
		responsive: [
	    {
	      breakpoint: 767,
	      settings: {
	        slidesToShow: 2,
	      }
	    },
	    {
	      breakpoint: 1199,
	      settings: {
	        slidesToShow: 4,
	      }
	    }
	  ]
	});
	$('#slid_prev_5').click(function(){
		$('.work_wrapper').slick('slickPrev');
	});
	$('#slid_next_5').click(function(){
		$('.work_wrapper').slick('slickNext');
	});
	
	//Work2 слайдер
	$('.work_wrapper2').slick({
		arrows: false,
		slidesToShow: 1,
		mobileFirst:true,
		responsive: [
	    {
	      breakpoint: 767,
	      settings: {
	        slidesToShow: 2,
	      }
	    },
	    {
	      breakpoint: 1199,
	      settings: {
	        slidesToShow: 4,
	      }
	    }
	  ]
	});
	$('#slid_prev_5').click(function(){
		$('.work_wrapper2').slick('slickPrev');
	});
	$('#slid_next_5').click(function(){
		$('.work_wrapper2').slick('slickNext');
	});

	//Мобильное меню
	$('.but_mobile_menu').click(function(){
		$('.mobile_menu').toggle();
	});

	//Обратный звонок
	$('#btn_clb1, #btn_clb2, #btn_clb3').click(function(){
		$('.popup_callback').css('display', 'block');
	});
	$('.popup_callback_close').click(function(){
		$('.popup_callback').css('display', 'none');
	});

	//Раскрывающийся список услуг
	$('.but_mobile_main_menu').click(function(){
		$('.but_mobile_main_menu ul').toggle();
	});
})

//Кнапка НАВЕРХ
$('.run_top').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
});