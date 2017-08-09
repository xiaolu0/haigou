$(function(){
//banner轮播图；	
	var i=0;
var timer1=null;
var i=0;
detailMove();
//运动过程的函数
function detailMove(){
	clearInterval(timer1);
	if(i==$("#detailBanner li").size()){
		i=0;
	}
	$("#detailBanner li").eq(i).stop().fadeIn(500).siblings().stop().fadeOut(500);
	$(".super i").eq(i).addClass("cur").siblings().removeClass("cur");	
	timer1=setInterval(function(){
	 console.log("aaaa")
	 i++;
		detailMove()
	},2000);	
}
//控制左右按键的；
$("#detailBanner").hover(function(){
	$(".r").show();
	$(".l").show();
},function(){
	$(".r").hide();
	$(".l").hide();
})
$(".r").click(function(){
	i++;
	detailMove()
})

//控制左键
$(".l").click(function(){
    i--;
if(i==-1){
	i=$("#detailBanner li").size()-1;
    }
	detailMove();	
})

//
$(".super i").hover(function(){
	i=$(this).index()
	detailMove();
//	clearInterval(timer1);	 
})

//利用ajax生成数据；
//var oDiv=document.getElementById("dady");
//var oUl=oDiv.get
var html="";
$.ajax({
	type:"get",
	url:"json/index.json",
	async:true,
	success:function(data){
		console.log(data);
		for(var i=0;i<data.length;i++){
			var oLi="<li><a href='buy.html?id="+data[i].id+"'><img src="+data[i].imageURL+"><h4></a>"+data[i].title+"</h4><p>"+data[i].content+"</p><span>"+data[i].oldPrice+"</span><i>"+data[i].newPrice+"</i><a>"+data[i].titleImg+"</a><span class='buy' data-id='"+data[i].id+"'>立即购买</span></li>";
			html+=oLi;
		}
		$(".num").append(html);
	$(".buy").click(function(){
	location.href="buy.html?id=" + $(this).attr("data-id");
})
	}
});
	
//购物车cookie;
//点击立即购买。获取当前商品的id；
//$(".buy").click(function(){
//	var numID=$(this).attr("data-id")//获取属性就是每个id；
//	var str=getCookie("numId")
//	var obj=str?Josn.parse(str):{};//判断cookie是否存在；如果不存在；就放回一个空的对象；如果存在就景他转化成对象；。cookie是字符串的形式；
//	if(obj[numID]==undefined){
//		obj[numID]=1;
//	}else{
//		obj[numID]+=obj[numID];
//	}
//	var obj1=Json.stringify(obj);//将对象转换成字符串，存cookie;
//	setCookie("numId",obj1,7);
//	
//})

	
	
	
	
	
	
	
	
	
	
	
	
})
