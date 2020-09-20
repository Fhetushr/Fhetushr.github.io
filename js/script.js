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