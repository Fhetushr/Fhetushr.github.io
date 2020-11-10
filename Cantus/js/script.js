$(document).ready(function () {
	$(".header__burger").click(function(event) {
		$(".header__list").toggleClass("active");
		$(".header__burger").toggleClass("active");
		$(".header__menu").toggleClass("active");
		$("body").toggleClass("active");
	});

	$(".slider-introducing__item").hover(function() {
		$(".slider-introducing__column").toggleClass("active");
		$(".slider-introducing__icon").toggleClass("active");
	});

	$(".slider-introducing").slick({
		slidesToShow: 3,	
		variableWidth: true,
		responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2,
				variableWidth: false,
			}
		},

		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				centerMode: true,
			}
		},

		{
			breakpoint: 400,
			settings: {
				centerMode: true,
			}
		}

		]
	});

	$(".slider-latest").slick({
		slidesToShow: 1,
		variableWidth: true,
	});
});