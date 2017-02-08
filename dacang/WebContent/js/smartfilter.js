$(function() {
	/*智能筛选*/
	var dd = $(".select-items").find(".selmenu-js");
	dd.click(function() {
		$(this).parents(".select-items").find("dd").removeClass("on");
		$(this).addClass("on");
	});
	/*已选条件*/
	var noseled = $("#NoSelectId"),
		seled = $("#SeledListId"),
		seledli = seled.find("li");
	seledli.click(function() {
		$(this).remove();
		var seledlist2 = seled.find("li").length;
		if (seledlist2 == 0) {
			noseled.show();
			seled.hide();
		}
	});
	$("#RemoveSeled").click(function() {
		seledli.remove();
		noseled.show();
		seled.hide();
	});
	//var any
	var any = $(".sel-any");
	any.click(function() {
			var selpar = $(this).parents(".select-items")
			selpar.find(".selmenu-js").removeClass("on");
			selpar.find(".twomenu-js").removeClass("on");
			selpar.find(".onemenu b").text("");
			selpar.find(".onemenu").removeClass("now");
			$(this).addClass("on");
			selpar.find(".sel-all").addClass("on");
		})
		/*二级菜单*/
	var twodiv = $(".select-child").find("ul"),
		twomli = twodiv.find("li"),
		onemenu = $(".onemenu"),
		ffmenu = $(".f-fundresult").find("dd"),
		allmli = $(".sel-all"),
		i = 0;
	var test = $("#testId");

	/*ffmenu.mouseover(function() {
		var t_this = $(this),
			thisSel = $(this).parents(".select-items"),
			pos = t_this.position(),
			o_left = pos.left;
		thisSel.find("ul").css("left", o_left);
	})*/
	onemenu.hover(function() {
		var thisSel = $(this).parents(".select-items"),
			t_this = $(this),
			num1 = thisSel.find(".onemenu").index($(this));
		i = num1;
		thisSel.find("ul").hide();
		thisSel.find("ul").eq(i).show();
		thisSel.find(".onemenu").removeClass("ovo");
		t_this.addClass("ovo");
	}, function() {
		var thisSel = $(this).parents(".select-items"),
			t_this = $(this);
		thisSel.find(".select-child").find("ul").hide();
		t_this.removeClass("ovo");
	});
	twodiv.hover(function() {
		onemenu.unbind("hover");
		var thisSel = $(this).parents(".select-items");
		$(this).show();
		//test.html(i);
		thisSel.find(".onemenu").eq(i).addClass("ovo");
	}, function() {
		var thisSel = $(this).parents(".select-items")
		$(this).hide();
		thisSel.find(".onemenu").removeClass("ovo");
	});
	/*点二级菜单*/
	twomli.click(function() {
		var onSel = $(this).parents(".select-items"),
			onText = $(this).text().substr(0, 6);
		onSel.find(".sel-any").removeClass("on");
		onSel.find(".twomenu-js").removeClass("on");
		onSel.find(".sel-all").addClass("on");
		$(this).parent("ul").find(".sel-all").removeClass("on")
		$(this).addClass("on");
		if (onText != "不限") {
			onSel.find(".onemenu").find("b").text("");
			onSel.find(".onemenu").eq(i).find("b").text(":" + onText);
			onSel.find(".onemenu").removeClass("now");
			onSel.find(".onemenu").eq(i).addClass("now");
		} else {
			onSel.find(".onemenu").eq(i).find("b").text("");
			onSel.find(".onemenu").eq(i).removeClass("now");
		}
	});
	var fftwo = $(".sel-fundresult").find(".twomenu-js");
	fftwo.click(function() {
		var t_this = $(this),
			thisSel = t_this.parents(".select-items"),
			pos = thisSel.find(".onemenu").eq(i).position(),
			o_left = pos.left;
		//alert("asdfad");
		test.html(o_left);
		thisSel.find("ul").css("left", o_left);
	});

	/*点二级菜单全部*/
	allmli.click(function() {
		var thisPar = $(this).parents(".select-items"),
			now_l = thisPar.find(".now").length;
		if (now_l == 0) {
			thisPar.find(".sel-any").addClass("on");
		}
	});
	/*当已选条件为空时，NoSelectId显示*/
	var seledlist1 = seled.find("li").length;
	if (seledlist1 == 0) {
		noseled.show();
		seled.hide();
	} else {
		noseled.hide();
		seled.show();
	}
	/*展开 收取*/
	var shouqi = $(".zhankai-a");
	shouqi.click(function() {
		var sclass = $(this).attr("class");
		if (sclass == "zhankai-a") {
			$(this).addClass("shouqi-a");
			$(this).find("span").text("收起");
			$("#FundThemeId").addClass("f-multiline");
		} else {
			$(this).removeClass("shouqi-a");
			$(this).find("span").text("展开");
			$("#FundThemeId").removeClass("f-multiline");
		}
	});
	/*显示隐藏，条件搜索*/
	var arrowu = $(".arrow-u");
	arrowu.click(function() {
		var aclass = $(this).attr("class");
		if (aclass == "arrow-u") {
			$(this).addClass("arrow-d");
			$("#FourFilter").hide();
			$("#FireFilter").hide();
			$("#SixFilter").hide();
		} else {
			$(this).removeClass("arrow-d");
			$("#FourFilter").show();
			$("#FireFilter").show();
			$("#SixFilter").show();
		}
	});
});