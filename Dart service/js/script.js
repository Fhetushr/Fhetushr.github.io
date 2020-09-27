$(document).ready(function() {
	$(".header__burger").click(function(event) {
		$(".header__burger,.header__list").toggleClass("active");
	});
});

$(document).ready(function() {
	$(".spolier__top-row").click(function(event) {
		if($(".service-info__spolier").hasClass("one")) {
			$(".spolier__top-row").not($(this)).removeClass("active");
			$(".spolier__body").not($(this).next()).slideUp(300);
		}

		$(this).toggleClass("active").next().slideToggle(300);
		$(".spolier__top-row").toggleClass("open");

		if ($(".spolier__top-row").hasClass("open")) {
			$(".spolier__row").removeClass("active");
			$(".spolier__row").toggleClass("active");
		}
	});
});