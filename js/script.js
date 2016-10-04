(function(){
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 220) {
    $(".headerNavBar").css({"margin-left":"-65px","background":"#DC3248"});
	$(".headerNavBar a").css('color','white !important');
  } else {
    $(".headerNavBar").css({"margin-left":"0px","background":"white"});	
	$(".headerNavBar a").css('color','black !important');
  }
});
})();

$(document).ready(function(){
	$(".headerNavBar").on("mouseover",function(){
	$(".headerNavBar").css("margin-left","0px");
}).on("mouseout",function(){
	$(".headerNavBar").css("margin-left","-65px");
});

});