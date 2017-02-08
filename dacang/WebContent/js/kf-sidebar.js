$(function(){
var $zxbox=$(".kefu-box .zixuan-box"),
	$box=$(".kefu-box .kf-pop"),
	$a=$(".kefu-box .kefa-js"),
	$li=$(".kf-sidebar").find("a");
	//点击回到头部
	$(".kf-sidebar .gotop").click(function() {
		$('html,body').stop().animate({
			scrollTop: '0'
		}, 500);
		return false;
	})
	//gotop
	$(window).scroll(function() {
		if ($(window).scrollTop() > 300) {
			$(".kf-sidebar .gotop").css({
				"visibility": "visible"
			});
		} else {
			$(".kf-sidebar .gotop").css({
				"visibility": "hidden"
			});
		}
	});
	$a.hover(function(){
		var ts=$(this),
            num1=$a.index(this);
		ts.find("span").css("transform","rotate3d(0,0,1,0deg)");
		$box.unbind("hover");
		$box.css("display","none");
		$box.eq(num1).css("display","block");
		setTimeout(function(){
			$box.eq(num1).addClass("kf-pop-active");
		    $box.eq(num1).css("display","block");
		},50);
		},function(){
		var ts=$(this);	
		$(this).find("span").css("transform","rotate3d(0,0,1,90deg)");	
		$box.removeClass("kf-pop-active");
		$box.css("display","none");	
	});
	$box.hover(function(){
		var ts=$(this),
            num2=$box.index(this);
		$a.unbind("hover");
		ts.addClass("kf-pop-active");
		ts.css("display","block");
		setTimeout(function(){
		   ts.css("transition","none");
		},10);
		$a.eq(num2).find("span").css("transform","rotate3d(0,0,1,0deg)");
		},function(){
		var ts=$(this);
		$a.find("span").css("transform","rotate3d(0,0,1,90deg)");
		$box.removeClass("kf-pop-active");
		setTimeout(function(){
		  ts.css("transition","all .2s ease 0s");
		  $box.css("display","none");
		},10);		
	});
	/*自选*/
	/*当列表为空时，显示暂无产品*/
    var $zxlist=$zxbox.find(".list li").length;
    if($zxlist==0){
       $zxbox.find(".nofund").show();
       $zxbox.find(".zxbtn").hide();	
      }else{
       $zxbox.find(".nofund").hide();
       $zxbox.find(".zxbtn").show();	
    };
    /*删除自选*/
    var $zxremove=$zxbox.find(".ico-remove");
    $zxremove.click(function(){
      $(this).parent("li").remove();
      var zxnum=$zxbox.find(".list li").length;
      if(zxnum==0){
         $zxbox.find(".nofund").show();
         $zxbox.find(".zxbtn").hide();	
      }	
    });
    /*ie9以下*/
	$li.on('mouseover', function() {
	  $li.find("span").removeClass("on");	
	  $(this).find("span").addClass("on");
	  }).on('mouseout', function() {
	  $li.find("span").removeClass("on");	
	});
	/*自选动画*/
	var $addzz=$(".addzx-js"),
        $delzz=$(".delzx-js"),
		$icozz=$("#btn-zx"),
		a=0,
		b=0;
		
	$addzz.click(function(){
	  var obj=$(this);
		  a=a+1;
		  $("#test").text(a);
	  if(a==1)
	  {
		$icozz.after("<div class='inIcon'> </div>");
	    $(".inIcon").css({"top":-80}).animate
	    ({
		    "top":-50,
		    "opacity":1
	      },100,function()
		  {
		    $(".inIcon").animate({
		    "top":6,
		    "width":15,
		    "height":37,
		    "opacity":.5
	      },500,function()
		  {
			$(".inIcon").remove();
			obj.hide();
	        obj.next(".delzx-js").show();
			a=0;	
	      })
	    });  
	  } 
	  
	});	
	$delzz.click(function(){
	  var obj=$(this);
	      b=b+1;
	  if(b==1)
	  {
		$icozz.after("<div class='outIcon'> </div>");
	  $(".outIcon").css({"top":6,"width":15,"height":37}).animate
	  ({
	     "width":30,
		 "height":73,
		 "top":0,
		 "opacity":1
	    },500,function()
		  {
		    $(".outIcon").animate({
		    "top":-120,
		    "opacity":0
	      },200,function()
		  {
			$(".outIcon").remove();
			obj.hide();
	        obj.prev(".addzx-js").show();
			b=0;
	      })
	  });  
	  }
	  
	});	
})