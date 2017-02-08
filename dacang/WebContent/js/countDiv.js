/*计数*/
function showSat() {
	$(".show-numb").each(function() {
		var a = $(this).html(),
			b = $(this).offset().top,
			d = $(window).height();
		$(window).scrollTop() + d > b && "show" != $(this).attr("id") && ($(this).attr("id", "show"), -1 == a.indexOf(".") ? numberShow(this, 0, a) : (numberShow(this, 0, a, 2, 1.2), $(this).hasClass("Small") && (numberSmallShow(this, 0, a, 2, 3), $(this).append($("\x3c/span\x3e")))))
	})
}
function numberShow(a, b, d, f, e) {
	(new CountUp(a, b, d, f, e, {
		useEasing: !0,
		useGrouping: !0,
		separator: "",
		decimal: "."
	})).start()
}
function numberSmallShow(a, b, d, f, e) {
	(new CountUp(a, b, d, f, e, {
		useEasing: !0,
		useGrouping: !0,
		separator: ",",
		decimal: "\x3cspan\x3e."
	})).start()
}
showSat()