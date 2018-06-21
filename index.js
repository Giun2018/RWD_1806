$(".menu").click(function(){
	$(".navouter").fadeIn(1000);
});

$(".fa-times .navouter").click(function(){
	$(".navouter").fadeOut();
						  });
$(".othereles").click(function(){$(".n1").css("right","0")})

$(".news li").click(function(){
	//把滑鼠游標點擊的這一個li,一個叫做nn自訂屬性的值取出來,放在一個叫做news的變數裡面暫時存放
	$(".newscontent li").css("right","-100%");
	var nn=$(this).data("nn");
	$(nn).css("right","5%");
});

//$(".newscontent .close").click(function(){
//	var close=$(this).data("close");
//	$(close).css("right","-100%");
//});

$(".newscontent .close").click(function(){
	$(this).parent().css("right","-100%");
});

$(".nav>li").click(function(){
	$(this).find("ul").slideToggle();
	//指定children內容的原因是因為標題文字也是li的子元素,所以為了不影響標題文字,就要指定children對象
	//children("ul")也可以寫成 find("ul")
});

    $('.fullBackground').fullClip({
      images: ['1.jpg', '2.jpg', 'BGjpg'],
      transitionTime: 2000,
      wait: 5000
    });