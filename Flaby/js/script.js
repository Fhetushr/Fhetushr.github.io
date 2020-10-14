$(document).ready(function() {
	$(".header__burger").click(function(event) {
		$(".header__menu-list").toggleClass("active");
		$(".header__body").toggleClass("active");
		$(".dark").toggleClass("active");
		$(".header__burger").toggleClass("active");
	});

	$(".dark").click(function(event) {
		$(".header__menu-list").removeClass("active");
		$(".header__body").removeClass("active");
		$(".dark").removeClass("active");
		$(".header__burger").toggleClass("active");
	});

	$(".reviews__slider").slick({
		arrows: true,
		slidesToShow: 1,
		speed: 1000,
		infinite: true,
	});
});