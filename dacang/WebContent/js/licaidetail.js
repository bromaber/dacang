$(function(){
var	$tabul=$("#tabTime"),
	$tabli=$tabul.find(".tabli-js"),
	i=0,
	n=-1,
	$linum=$tabli.length,
	$maxleft=-($linum-4)*151;
	/*tab*/
   $('#tabTime .tabli-js a').click(function (e) {
   e.preventDefault()
   $(this).tab('show')
   })
	//li小于3时不显示 
   if($linum<4)
   {
	$(".tab-next").hide();
	$(".tab-prev").hide();
	  }
	//next
	$(".tab-tool").on('click', '.tab-next', function() { 
	  var $tabL=$tabul.css("left"),
		  $tabnum=parseInt($tabL);
		if($tabnum<0){
			var $tabLnow=$tabnum+151;
			$tabul.animate({"left":+$tabLnow},100);
		}
		if($tabnum==-151){
		$(".tab-next").replaceWith("<b class='ico tab-next'></b>");
		$(".tab-prev").replaceWith("<a class='ico tab-prev'></a>");	
		}
		if($tabnum==$maxleft-151){
			$(".tab-prev").replaceWith("<a class='ico tab-prev'></a>");
		}
    });
	//prev
    $(".tab-tool").on('click', '.tab-prev', function() { 
		var $tabL=$tabul.css("left"),
		    $tabnum=parseInt($tabL);
		if($tabnum>=$maxleft){
			var $tabLnow=$tabnum-151;
			$tabul.animate({"left":$tabLnow},100);
		}
		if($tabnum==0){
		$(".tab-next").replaceWith("<a class='ico tab-next'></a>");	
		}
		if($tabnum==$maxleft){
			$(".tab-prev").replaceWith("<b class='ico tab-prev'></b>");
		}
    });
   //动画
   var $prog1 = $(".pb-bg").eq(0).data("per"),
       $progNum1 = parseInt($prog1); 
       $(".pb-bg").eq(0).delay(120).animate({"width":$progNum1+"%"},1500);
   
   $tabli.click(function(){
       $(".pb-bg").css("width",0);
	   $(".pb-bg").stop();
	   var $linum = $(this).index(),
	       $lijs = $linum/2,
	       $prog2 = $(".pb-bg").eq($lijs).data("per"),
		   $progNum2 = parseInt($prog2);
       $(".pb-bg").eq($lijs).delay(120).animate({"width":$progNum2+"%"},1500);
   });
   
})