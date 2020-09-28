$(document).ready(function() {
	$(".bottom-row__burger").click(function(event) {
		$(".bottom-row__list, .wrapper, .dark").toggleClass("active");
	});
});

$(document).ready(function() {
	$(".dark").click(function(event) {
		$(".bottom-row__list, .wrapper, .dark").removeClass("active");
	});

	$(".bottom-row__burger_active").click(function(event) {
		$(".bottom-row__list, .dark").removeClass("active");
	});
});

$(document).ready(function() {
	$(".bottom-row__search-img").click(function(event) {
		$(".bottom-row__search").toggleClass("active");
	});
});

$(document).ready(function() {
	$(".deliver-info__replace-btn_logistics").click(function(event) {
		$(".deliver-info__replace-btn_logistics").addClass("active");
		$(".deliver-info__replace-btn").removeClass("active");
	});

	$(".deliver-info__replace-btn").click(function(event) {
		$(".deliver-info__replace-btn").addClass("active");
		if ($(".deliver-info__replace-btn").hasClass("active")) {
			$(".deliver-info__replace-btn_logistics").removeClass("active");

		} else {
			$(".deliver-info__replace-btn").addClass("active");
		}
	});
});

$(document).ready(function() {
	$(".deliver__spoiler").click(function(event) {
		if($(".deliver__spoiler").hasClass("one")) {
			$(".deliver__spoiler").not($(this)).removeClass("active");
			$(".deliver__spoiler-info").not($(this).next()).slideUp(300);
		}

		$(this).toggleClass("active").next().slideToggle(300);
		$(".deliver__spoiler").toggleClass("open");

		if ($(".deliver__spoiler").hasClass("open")) {
			$(".deliver__spoiler-body").removeClass("active");
			$(".deliver__spoiler-body").toggleClass("active");
		}

		if ($(".deliver__spoiler").hasClass("active")) {
			$(".deliver__spoiler-body").addClass("active");
			$(".deliver__down-arrow").addClass("active");
		
		} else {
			$(".deliver__spoiler-body").removeClass("active");
			$(".deliver__down-arrow").removeClass("active");
		}
	});
});