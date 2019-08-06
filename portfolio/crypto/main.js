$(function() {
	$(window).on('load', function () {
		$('#preloader').delay(1500).fadeOut('slow');
	});

	//Меню
	$('.mob-btn-menu').click(function() {  
		$('.block-modal-menu').slideToggle(200);
	});

	$(document).mouseup(function (e){
        var div = $('.block-modal-menu');
        var divtwo = $('.mob-btn-menu');
        if (!div.is(e.target)
            && div.has(e.target).length === 0
        	&&!divtwo.is(e.target)
            && divtwo.has(e.target).length === 0) {
            div.slideUp(200);
        }
    });

	//Тень под шапкой
	$(window).scroll(function() {
	   var scrolled = $(this).scrollTop();
	   if( scrolled >= 5 ) {
	      $('.wrap-header').css('box-shadow', '0px 0px 24px 0px rgba(0,0,0,0.1)');
	   }   
	   if( scrolled <= 5 ) {     
	      $('.wrap-header').css('box-shadow', '0px 0px 24px 0px rgba(0,0,0,0)');
	   }
	})

	//Таблица
	$(window).scroll(function() {
	   var scrolled = $(this).scrollTop();
	   if( scrolled >= 478 ) {
	   	$('.block-table').addClass('block-table-active');
	   } else {
	   	$('.block-table').removeClass('block-table-active');
	   }
	   if( scrolled >= 827 ) {
	      $('.block-table').removeClass('block-table-active');
	   }
	   console.log(scrolled);
	})

	//Hover на кнопке
	setInterval(function() {
		show()
	}, 3000);                 
   function show() {
      setTimeout(function(show) {
      	$(".section-header-btn").addClass('section-header-btn-active');
      	$(".section-advantages-btn").addClass('section-header-btn-active');
      }, 1500);
      setTimeout(function(show) {
      	$(".section-header-btn").removeClass('section-header-btn-active');
      	$(".section-advantages-btn").removeClass('section-header-btn-active');
      }, 2700);
   }

	//ParallaxPlanet
	$(window).bind('scroll',function(e){
		parallaxScroll();
	});
	 
	function parallaxScroll(){
		var scrolled = $(window).scrollTop();
		$('.img-bg').css('top',(80-(scrolled*0.6))+'px');
	}
});