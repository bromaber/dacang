/*
* Date: 2015-06-10
* 
*/
(function($){
/*input Placeholder*/
$.fn.inputPlaceholder = function(options){
this.css({
        color: "#999"
    }).focus(function() {
        if (!this.initValue) {
            this.initValue = this.value;
        }
        if (this.value === this.initValue) {
            this.value ="";
        }
    }).blur(function() {
        if (this.value === "" || this.value === null) {
            this.value = this.initValue;
            $(this).css({
                color: "#999"
            });
        }
        if (this.value == this.initValue) {
            $(this).css({
                color: "#999"
            });
        }
    }).keydown(function() {
        $(this).css({
            color: "#000"
        });
        if (this.value === this.initValue) {
            this.value = "";
        }
    })
};
/*input hover*/
$.fn.inputFocus = function(options){
this.focus(function(){$(this).addClass("focus_input");$(this).removeClass("error_input");}).blur(function(){$(this).removeClass("focus_input");})
};

})(jQuery);