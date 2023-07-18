$(document).ready(function () {
    $(".wrapper").click(function(event) {
		$(".buble").toggleClass("active");
		$(".buble_item_1").toggleClass("active");
        $(".buble_item_2").toggleClass("active");
        $(".buble_item_3").toggleClass("active");
        $(".buble_item_4").toggleClass("active");
	});
});