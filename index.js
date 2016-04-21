// $(function(){
// 	$("#goToTop").hide();
// 	$(window).scroll(function(event) {
// 		if($(this).scrollTop()>1){
// 			$("#goToTop").fadeIn();
// 		}else{
// 			$("#goToTop").fadeOut();
// 		}
// 	});
// 	$("#goToTop").click(function(event) {
// 		$("html,body").animate({scrollTop:0},"slow");
// 		return false;
// 	});
// })


$.extend({
	goToTop:function(id){
		if($(window).scrollTop()<1){
			$(id).hide();
		}
		$(window).scroll(function(){
			if($(this).scrollTop()>1){
				$(id).fadeIn();
			}else{
				$(id).fadeOut();
			}
		});
		$(id).click(function() {
			$("html,body").animate({scrollTop:0},"slow");
			return false
		});
	}

});
$(function(){
	$.goToTop("#goToTop");
})



