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

$(document).ready(function(){

    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

});

//$('.ST').click(function(){
//	$('html, body').animate({screenTop:0});
//});
//$().(function(){
//	if ($('.totop').fadeIn((this).()>100))
//	else ($('totop').fadeOut(this.()<100));
//});
//$(function(){ //文字提示
//  $(".tooltip").tooltip(options)
//  });
//$(".nav-link").click(function(){
//	var navlink=$(this).attr("href");
//	$("html").stop().animat({scrollTop:$(navlink).offset().top-150});
//});
var options = {
   animationDuration: 0.5, // in seconds
   filter: 'all', // Initial filter
   callbacks: { 
      onFilteringStart: function() { },
      onFilteringEnd: function() { },
      onShufflingStart: function() { },
      onShufflingEnd: function() { },
      onSortingStart: function() { },
      onSortingEnd: function() { }
   },
   controlsSelector: '', // Selector for custom controls
   delay: 100, // Transition delay in ms
   delayMode: 'alternate', // 'progressive' or 'alternate'
   easing: 'ease-out',
   filterOutCss: { // Filtering out animation
      opacity: 0,
      transform: 'scale(0.5)'
   },
   filterInCss: { // Filtering in animation
      opacity: 0,
      transform: 'scale(1)'
   },
   layout: 'sameSize', // See layouts
   multifilterLogicalOperator: 'or',
   selector: '.filtr-container',
   setupControls: true // Should be false if controlsSelector is set 
} 
// You can override any of these options and then call...
var filterizd = $('.filtr-container').filterizr(options);


//圖片演示
$('.parent-container').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image'
  // other options
});
//影片與崁入演示
$('.video').magnificPopup({
  type: 'iframe',
iframe: {
  markup: '<div class="mfp-iframe-scaler">'+
            '<div class="mfp-close"></div>'+
            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
          '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

  patterns: {
    youtube: {
      index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

      id: 'v=', // String that splits URL in a two parts, second part should be %id%
      // Or null - full URL will be returned
      // Or a function that should return %id%, for example:
      // id: function(url) { return 'parsed id'; }

      src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
    },
    vimeo: {
      index: 'vimeo.com/',
      id: '/',
      src: '//player.vimeo.com/video/%id%?autoplay=1'
    },
    gmaps: {
      index: '//maps.google.',
      src: '%id%&output=embed'
    }

    // you may add here more sources

  },

  srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
}
    });