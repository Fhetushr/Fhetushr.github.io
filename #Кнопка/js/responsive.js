// Adaptive function
$(window).resize(function(event) {
	adaptive_function();
});

function adaptive_header(w,h) {
	var headerMenu = $(".content");
	var headerText = $(".text__blue");
	
	if(w<1024) {
		if(!headerText.hasClass("done")) {
			headerText.addClass("done").appendTo(headerMenu);
		} 
	}
	
	else {
		if(headerText.hasClass("done")) {
			headerText.removeClas("done").prependTo($(".wrapper"));
		}
	}
}

function adaptive_function() {
	var w = $(window).outerWidth();
	var h = $(window).outerHeight();
	adaptive_header(w, h);
}

adaptive_function();