$('.carousel').carousel({
  interval: 2000
});
//$(".cdsc>img").click(function{
//	var .".cdsc"=$(data).('cds');
//	$(".cdn").fadeIn.();
//	$(".cdo").children.hide.();
//				  });
//$("href").click(function{
//	var ."href"=$(data).('cds');
//	$(".cdn").fadeIn.();
//	$(".cdo").children.hide.();
//				  });
//$(".cdm").click(function(){
//	$(".cdn").fadeOut();
//});
//$(Document).keydown(function(){
//	$(".cdn").fadeOut();
//});
//$(Document).keydown(function(e){
//	if(e.keyCode===27){
//	   $(".cdn").fadeOut();
//	   }
//});

//$(document).ready(function(){
//
//    //Check to see if the window is top if not then display button
//    $(window).scroll(function(){
//        if ($(this).scrollTop() > 100) {
//            $('.scrollToTop').fadeIn();
//        } else {
//            $('.scrollToTop').fadeOut();
//        }
//    });
//
//    //Click event to scroll to top
//    $('.scrollToTop').click(function(){
//        $('html, body').animate({scrollTop : 0},800);
//        return false;
//    });
//
//});

$('.ST').click(function(){
	$('html, body').animate({screenTop:0});
});