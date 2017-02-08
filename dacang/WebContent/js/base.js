$(function(){

//dropdown
var dropmenu=$(".dropdown-menu li");
dropmenu.click(function(){
var txt1=$(this).text()
$(this).parents(".dropdown").find(".dropdown-text").text(txt1);	
});
var minput=$(".stxt-js");
var sdata=$("#searchData");

/*top search*/
minput.focus(function(){
    var txt=$(this).val();
    if(txt=='请输入基金代码／简称／拼音'){
        $(this).val('');
    }
    sdata.show();
})
minput.blur(function(){
    var txt=$(this).val();
    if(txt==''){
        $(this).val('请输入基金代码／简称／拼音');
    }
    sdata.hide();
});
})

