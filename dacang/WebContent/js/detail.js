$(function(){
/*pop box*/
$("#jsqID").click(function(){
  $("#JSQCont").modal("show");
})
$(".ico-popclose").click(function(){
  $(".modal").modal("hide");
});
/*tab*/
$('#relFundTab a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})
$('#detMainTab a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})
$('#caiBaoTab a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})
$('#gonggaoTab a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})
$('#shouyiTab a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})
$('#zhangfuTab a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})
$('#zhongcangTab a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})
$('#zichanTab a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})
$('#jingziTab a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})
$('#qxjjTab a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})
/*展开 收起*/
    var azhangkai=$(".fw-zhankai");
    azhangkai.click(function(){
    var aclass=$(this).attr("class");
    if(aclass=="fw-zhankai"){
       $(this).html("- 收起");
       $(this).addClass("fw-shouqi");
       var fw_h=$(".fanwei-txt").css("height");
       $(".fanwei-cont").animate({height:fw_h},500);
    }else{
       $(this).text("+ 展开");
       $(this).removeClass("fw-shouqi");
       $(".fanwei-cont").animate({height:100},500);
     }
   });
/*相关基金*/
   var $lij=$(".addon").find("li");
   $lij.hover(function(){
       $lij.removeClass("on");
	   $(this).addClass("on");	 
   },function(){
	   $(this).removeClass("on");		 
   });
});



