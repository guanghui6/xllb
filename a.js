$(function(){
	var  a=$("li:gt(5):not(:last-child)");
	a.hide();
	
	$(".xs>a>span").click(function(){
		
	if(a.is(":hidden")) {			
	 $("ul>li:hidden").show();		
	 $("ul>li>a:contains('索尼'),:contains('松下'),:contains('爱国者')").css("color","red");
	$(this).html("精简显示品牌")
	
	
	} else{
	 			 $("ul>li:gt(5):not(:last-child)").hide();	
				 $("ul>li>a:contains('索尼'),:contains('松下'),:contains('爱国者')").css("color","black");
	 		$(this).html("显示所有品牌")
		
		}
		})
})