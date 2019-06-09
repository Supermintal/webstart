$(document).ready(function() {
	// var count = 0;
	// var target = $('#map');
	// var targetPos = target.offset().top;
	// var winHeight = $(window).height();
	// var scrollToMap = targetPos - winHeight;
	// $(window).scroll(function () {
	// 	var winScrollTop = $(this).scrollTop();
	// 	if (winScrollTop > scrollToMap & count == 0) {
	// 		target.append('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A049039ae37d0a35250464ccbe14afefd30f717720b1aafac516fe0dd91a40de3&amp;width=100%25&amp;height=640&amp;lang=ru_RU&amp;scroll=true"></script>');
	// 		count++;
	// 	}
	// });



	var button = document.querySelector('#button');
	var modal = document.querySelector('#modal');
	var close = document.querySelector('#close')

	button.addEventListener('click', function () {
		modal.classList.add('modal_active');
	});

	close.addEventListener('click', function () {
		modal.classList.remove('modal_active');
	});

	
	
});