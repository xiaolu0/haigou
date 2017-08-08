//头部
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

 $(function(){
// 	if(!$aLl.children("h3")){
		 	$.ajax({
		 		type:"get",
		 		url:"json/nav1.json",
		 		async:true,
		 		success:function(data){	 			
             for(let j=1;j<$aLl.length;j++){
             	 console.log($aLl.length)
             	 //可以简写成用jq对象直接添加事件，不需要遍历；
          	       $aLl.eq(j).hover(function(){ 
//        	        if(!$aLl.eq(j).children("h3")){
          	       	    	
          	       	    
          	       	  $(".baby").fadeIn(500);
          	         var data1=data[j-1].content;
          	       	  console.log(data1);    
          	       for(let i=0;i<data1.length;i++){
		 		 var oH=document.createElement("h3")
		 			 oH.innerHTML=data1[i].title;
		 			fragment.appendChild(oH);
		 			
		 		 for(let k=0;k<data1[i].txt.length;k++){
		 		    var oA=document.createElement("a")
		 		 	 oA.innerHTML=data1[i].txt[k].text;
		 		 	  fragment.appendChild(oA);
		 		 	if(data1[i].txt[k].add){
		 		 	    var oSpan=document.createElement("span")
		 		 	      oSpan.innerHTML="|";
//		 		 	     console.log(oA);
		 		 	     oA.appendChild(oSpan);
		 		 	     oA.style.color="red";
		 		 	     oSpan.style.color="#333"
		 		 	}
		 		
		 		 var oDiv=document.createElement("div");
		 		 oDiv.setAttribute("class","baby1");
		 		 oDiv.appendChild(fragment);
		 		 $(".baby").eq(j-1).find("li").get()[i].appendChild(oDiv);
//		 		 aLi[i].appendChild(oDiv);
		 		
		 		 }
		 		}
          	     
		 		   $(this).children(".baby").fadeIn(500).end().siblings().children(".baby").hide();
          	       },function(){
          	       	$(this).children(".baby").fadeOut(500).end().siblings().children(".baby").hide();
          	       })
		 		 
		 		}
              } 
		 	});
//		 	}
		 })

//滑动滚动条改变购物车的定位；
//$(window).scroll(function(){
//	var scrollTop = $(window).scrollTop();
//	scrollTop >$("#inMaker").offset().top ? $("#car").attr("class","fixed") : $("#car").attr("class","absolute");
//	$("#car .top").click(function(){
//	$("body,html").stop().animate({"scrollTop":0},500);
// //  $("html,body").stop().animate({"scrollTOP":0},500);	
//
//})
//
//})
//
$(window).scroll(function(){
	var scrollTop = $(window).scrollTop();
	if(scrollTop>160){
		$(".Logo").css("display","block");
		$("#bon").css({"position":"fixed","left":"155px","top":"-23px"})
	}else{
		$(".Logo").css("display","none");
		$("#bon").css({"position":"relative","left":"0","top":0})
	}
})
})