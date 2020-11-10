// Adaptive function
$(window).resize(function(event) {
	adaptive_function();
});

function adaptive_header(w,h) {
	var headerRow = $(".header__row");
	var headerLogo = $(".header__logo");
	var headerIcon = $(".header__icon");
	var headerLink = $(".header__link");
	
	if(w<1231) {
		if(!headerLogo.hasClass("done")) {
			headerLogo.addClass("done").prependTo(headerRow);
		} 
	}
	
	else {
		if(headerLogo.hasClass("done")) {
			headerLogo.removeClass("done").prependTo(headerRow);
		}
	}

	if(w<1025) {
		if(!headerIcon.hasClass("done")) {
			headerIcon.addClass("done").appendTo($(".header__list"));
		} 
	}
	
	else {
		if(headerIcon.hasClass("done")) {
			headerIcon.removeClass("done").prependTo($(".header__body"));
		}
	}

	if(w<767) {
		if(!headerLink.hasClass("done")) {
			headerLink.addClass("done").appendTo($(".header__list"));
		} 
	}
	
	else {
		if(headerLink.hasClass("done")) {
			headerLink.removeClass("done").appendTo($(".header__body"));
		}
	}
}

function adaptive_function() {
	var w = $(window).outerWidth();
	var h = $(window).outerHeight();
	adaptive_header(w, h);
}

adaptive_function();