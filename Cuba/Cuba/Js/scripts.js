$(document).ready(function () {
    $(".header__burger").click(function(event) {
		$(".header__list").toggleClass("active");
		$(".header__burger").toggleClass("active");
		$(".header__menu").toggleClass("active");
		$("body").toggleClass("active");
	});
});