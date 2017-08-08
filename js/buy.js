$(function(){
	
	var id =location.href.split("?")[1].split('=')[1];
	console.log(id);
	$.ajax({
		type:"get",
		url:"json/index.json",
		async:true,
		success:function(data){
			console.log(data);
			for(var i=0;i<data.length;i++){
				if(id==data[i].id){
					$(".oldImg img").attr("src",data[i].imageURL);
					$(".buyDateil dt").eq(0).text(data[i].content);
					$(".price strong").text(data[i].oldPrice);
					$(".bigImg img").attr("src",data[i].imageURL);
					$(".car").attr("data-id",data[i].id)
				}
			}
		}
	});
	//加入购物车
	function addToCart(num){
        //获取购物车cookie信息
        var cartStr = $.cookie("numId");
   
        var cartObj = cartStr ? JSON.parse(cartStr) : {};
   
        cartObj[id] = cartObj[id] ? cartObj[id]+=num : num;    
		console.log(cartObj);
        //存cookie
        var cart = JSON.stringify(cartObj);
        $.cookie("numId",cart,{"expires":7,"path":"/"});
    }

	
	
	
	//var numId=[];//用来保存每个详情页点击的商品的id;
//	//点击加入购物车；
  $(".car").click(function(){
  	var num = $(".buyNum").html();
  	num = parseFloat(num);
  	addToCart(num);
  	
  	
  	
	});
	//点击小图改变大图；放大镜
	$(".smarImg img").click(function(){
	  var $a= $(this).attr("src");
	   $(".oldImg img").attr("src",$a);
	   $(".bigImg img").attr("src",$a);
      $(this).addClass("active").parent().siblings().find("img").removeClass("active");
	})
	//给原图添加移入事件。移入让放大镜出现；
	$(".oldImg").mousemove(function(eve){
		$("#zoom").show();
		$(".bigImg").show();
		//让放大镜跟随鼠标走；
		var x=eve.pageX-$("#img").offset().left-$("#zoom").width()/2;
		var y=eve.pageY-$("#img").offset().top-$("#zoom").height()/2;
//		console.log(x,y);
		//处理边界为题
		if(x<=0){
			x=0;
		}
		if(y<=0){
			y=0;
		}
		if(x>=$(".oldImg").width()-$("#zoom").width()){
			x=$(".oldImg").width()-$("#zoom").width();
		}
		if(y>=$(".oldImg").height()-$("#zoom").height()){
			y=$(".oldImg").height()-$("#zoom").height();
		}
		
			$("#zoom").css("left",x+'px')
	        $("#zoom").css("top",y+'px')
	      //要用相对窗口的距离。不能用相对页面的距离；
	      var $l= $("#zoom").position().left/($(".oldImg").width()-$("#zoom").width())*($(".bigImg").width()-$('.bigImg img').width());
	      var $t= $("#zoom").position().top/($(".oldImg").height()-$("#zoom").height())*($(".bigImg").height()-$('.bigImg img').height());
	    
	   
	    $(".bigImg img").css({"left":$l+'px',"top":$t+'px'});


	})

$(".oldImg").mouseout(function(){
	$("#zoom").hide();
    $(".bigImg").hide();
})
//添加购物车；
var count=1;
$(".add").click(function(){

	count++;
	$(".buyNum").text(count)
	$(".price strong").text("￥"+count*189)


});
$(".minus").click(function(){
//	alert("aaaa");
 if(count>1){
	count--
    $(".buyNum").text(count);
	$(".price strong").text("￥"+count*189)
}else{
 	alert("最少购买一件商品")
 	$(".buyNum").text(1)
 }
});
//遮罩层；
$(".car").click(function(){
	$("#cover").show();
	$(".settle a").click(function(){
		$("#cover").hide();		
	})
	$(".settle span").eq(1).click(function(){
			location.href="balance.html"
		}) 
})

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
