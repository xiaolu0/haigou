$(function(){
	$(".h-r li").eq(2).hover(function(){
	$(this).children("ul").show();
//	console.log($(this).children("i"));
	$(this).children("i").removeClass("i").addClass("down")
},function(){
	$(this).children("ul").hide();
$(this).children("i").removeClass("down").addClass("i")
});

$(".h-r li").eq(8).hover(function(){
	$(this).children("ul").show();
	$(this).children("i").eq(0).removeClass("i").addClass("down")
},function(){
	$(this).children("ul").hide();
	$(this).children("i").eq(0).removeClass("down").addClass("i")
});

$(".h-r li").eq(14).hover(function(){
	$(this).children("ul").show();
	$(this).children("i").removeClass("i").addClass("down");
},function(){
	$(this).children("ul").hide();
	$(this).children("i").removeClass("down").addClass("i");
})

//
var oArticle=document.getElementsByClassName("baby");
$(".baby").get();

var $aLl=$("#bon").children("li");

//var aLi=oArticle.getElementsByTagName("li");

//利用创建文档碎片的方式；将元素添加
var fragment=document.createDocumentFragment();

//// $(function(){
//// 	if(!$aLl.children("h3")){
//		 			
//           	 //可以简写成用jq对象直接添加事件，不需要遍历；
////        	       $aLl.eq(j).hover(function(){ 
//	            var html1="";
//	              $aLl.eq(1).click(function(){
//	              	/*alert(5);*/
//	              	/*alert(this);
//	              	 alert($aLl[1].indextTwo);
//	              	alert($(this).indextTwo+"two");*/
//      	        if($(this).children("span")){
//      	        	/*console.log(!$(this).children("h3"))*/
//        	     $.ajax({
//		 		      type:"get",
//		 		      url:"json/nav1.json",
//		 		     async:false,
//		 		     success:function(data){
//		 		     		/*alert(data);*/
//		 		    
//        	         var data1=data[1].content;
//        	       	  console.log(data1);    
///*          	       for(let i=0;i<data1.length;i++){*/
//	                var sum="";
//        	       	$.each(data1, function(index,values) {
//		 		/* var oH=document.createElement("h3")*/
//		 		  var h3="<h3>"+values.title+"</h3>"
//		 		 
//		 		/*	 oH.innerHTML=values.title*/
//		 		/*	fragment.appendChild(oH);*/
//		 			var dataTwo=values.txt;
//		 		/* for(let k=0;k<values.txt.length;k++){*/
//		 			var a="";
//		 			$.each(dataTwo, function(indexs,valuess) {
//		 		    var oA=document.createElement("a")
//		 		     a+="<a>"+valuess.text+"</a>";
//		 		 	 /*oA.innerHTML=valuess.text;*/
//		 		 	 /*alert(valuess.text+"text");*/
///*		 		 	  fragment.appendChild(oA);*/
//		 		 	if(valuess.add){
//		 		 	    var oSpan=document.createElement("span")
//		 		 	      oSpan.innerHTML="|";
////		 		 	     console.log(oA);
//		 		 	     oA.appendChild(oSpan);
//		 		 	     oA.style.color="red";
//		 		 	     oSpan.style.color="#333"
//		 		 	}
//		 		
//		 		 /*var oDiv=document.createElement("div");*/
//		 		 var div="<div class='baby1'></div>";
//		 		 /*oDiv.setAttribute("class","baby1");*/
//		 		/* oDiv.appendChild(fragment);*/
//		 	/*alert(oDiv);*/
//		 		/* $(".baby").eq(1).find("li").appendChild(oDiv);*/
////		 		 aLi[i].appendChild(oDiv);
//		 		
//		 		 })
//		 			
//						sum+="<li>"+
//						     h3+
//						     "<div class='baby1'>"+
//						     a+
//						     "</div></li>";		     
//						  
//		 		  	});
//		 		  	alert(sum);
//		 	       var sun1="<ul>"+sum+"</ul>"
//		 		   /*$(this).children(".baby").fadeIn(500).end().siblings().children(".baby").hide();*/
//		 		  $(".baby0").eq(0).append(sum1);
//        	       
//		 		}
//           });
//           }
//      	 })

var oBanner=document.getElementById("inbanner");
var oUl=document.getElementById("ul-t");

var aL=oUl.getElementsByTagName("li");
  var timer=setInterval(function(){
   	move();
   },2000)

 var i=0;
aL[0].className="zoom";
function move(){
	i++;
	for(var k=0;k<aL.length;k++){
		
		 aL[k].className="zoom1";
	}
	 if(i==aL.length){
	 	 i=0;
	 }
	aL[i].className="zoom" ;
    
}
oBanner.onmouseenter = function() {
				clearInterval(timer);
	};
oBanner.onmouseleave = function() {
			clearInterval(timer);
       timer=setInterval(function(){
       	   move();
       },3000);
	};
$("#inbanner").hover(function(){
    $("#ul-b").show();
    
    $("#ul-b").find("li").each(function(i){
    	
    	 $(this).hover(function(){
    	 	
    	 	$("#ul-t").children("li").eq($(this).index()).addClass("zoom").removeClass("zoom1").siblings().addClass("zoom1").removeClass("zoom");
    	 	$(this).children("i").css("display","none").siblings().css("display","block");
    	 },function(){
    	 	
    	 	$(this).children("i").css("display","block")
    	 	
    	 })   	
    })
},function(){
	$("#ul-b").hide();
})

//console.log($("#inMaker").find("span"))
$("#inMaker").find("span").hover(function(){
	 $(this).find("a").addClass("color")
	
	 $(this).find("i").css({"background-position-y":"-30px"})
	
	 
},function(){
	 $(this).find("a").removeClass("color")
	 $(this).find("i").css("background-position-y","0")
})
$("#inMaker").children("a").hover(function(){
	$(this).css("text-decoration","underline")
	
},function(){
	$(this).css("text-decoration","none")
})


	  
$("#inMaker").find("li").eq(1).hover(function(){
	$(".none").css("display","block")
},function(){
	$(".none").css("display","none")
})
//滑动滚动条改变购物车的定位；
$(window).scroll(function(){
	var scrollTop = $(window).scrollTop();
	scrollTop >$("#inMaker").offset().top ? $("#car").attr("class","fixed") : $("#car").attr("class","absolute");
	$("#car .top").click(function(){
	$("body,html").stop().animate({"scrollTop":0},500);
 //  $("html,body").stop().animate({"scrollTOP":0},500);	

})

})
$(".c-l").find("a").hover(function(){
	$(this).children("i").css("display","block");

},function(){
	$(this).children("i").css("display","none")
})

$(".yuan").find("span").hover(function(){

	$(".c-r").find("ul").eq($(this).index()).show().siblings("ul").hide();
})
console.log($("#bon").offset().top);

$(window).scroll(function(){
	var scrollTop = $(window).scrollTop();
	if(scrollTop>160){
		$(".Logo").css("display","block");
		$("#bon").css({"position":"fixed","left":"155px","top":"-23px"})
	}else{
		$(".Logo").css("display","none");
		$("#bon").css({"position":"relative","left":"0","top":0})
	}
});





























})
