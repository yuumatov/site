if (screen.width >= '860') {
	$('#sticky').sticky({topSpacing:50});
}

$('.btn-popup-menu').click(function () {
	$('.header-wrapper nav').toggle();
});

$('.button-referrals').click(function () {
	$('.referrals-block-link-wrapper').show();
	if ($(this).text('Пулучить реферальную ссылку')) {
		$(this).text('Скопировать');
	}
});