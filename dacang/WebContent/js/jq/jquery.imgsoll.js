/**图片切换*/
(function($){	
	$.fn.imgsoll=function(firstlazy){		
		var $this=$(this),index=1,len=$this.find("li").length,picTimer;
		//调用数字HTML函数
		$this.append($.fn.imgsoll.bnt(len))
		//数字hover事件
		var $span=$this.find(".bntHtml span");
		$span.hover(function(){
		  index  = $span.index(this);
			showImg(index,$span,$this);
		})
		//鼠标滑上焦点图时停止自动播放，滑出时开始自动播放
		$this.hover(function() {
			clearInterval(picTimer);
		},function() {
			clearInterval(picTimer);
			picTimer = setInterval(function() {
				showImg(index,$span,$this);
				index++;
				if(index == len) {index = 0;}
			},4000); //此4000代表自动播放的间隔，单位：毫秒
			
		}).trigger("mouseleave");
		if(firstlazy) {
			clearInterval(picTimer);
			setTimeout(function() {
				picTimer = setInterval(function() {
					showImg(index,$span,$this);
					index++;
					if(index == len) {index = 0;}
				},4000); 
			}, 6000);
		}
	}
	//加入数字HTML函数
	$.fn.imgsoll.bnt=function(len)
	{
		var html="";
		for(var i=1; i<=len; i++ )
	  {
			if(i==1)
				html=html+"<span class='curr'>"+"</span>";
			else
				html=html+"<span>"+"</span>";			
	  }
		return "<div class='layout'><div class='bntHtml'>"+html+"</div></div>";
	}	
	//动作方法
	function showImg(n,$span,$this)
	{
		 $this.find("li").eq(n).stop(true,true).fadeIn(1000).siblings().fadeOut(1000);
		 $span.eq(n).addClass("curr").siblings().removeClass("curr");
	}
	

})(jQuery);
/**  图片切换 end*/