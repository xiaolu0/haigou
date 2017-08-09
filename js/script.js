//$(document).ready(function(){
//	console.log($("div"))
//})

$(".btn1 input:text").focusout(function(){
//	console.log($(".btn1 input:text").val())
	var value=$(".btn1 input:text").val()
	
	$.ajax({
	type:"get",
	url:"json/dl.json",
	async:true,
	success:function(data){
		 var flag=false;
		for(let i=0;i<data.length;i++){	
			console.log(value,data[i].user);
			  if(value==data[i].user){
			  	 flag=true;
			  }
			 
		}
		if(flag==false){
			alert("用户不存在");
		}
	}
     
 });	
 })
  

 $(".dl").click(function(){
// 	console.log("aaaaa")
// var passValue=$(":password").val();
// var value=$(".btn1 input:text").val();
//  $.ajax({
//	type:"get",
//	url:"json/dl.json",
//	async:true,
//	success:function(data){
//		 var flag=false;
//		for(let i=0;i<data.length;i++){	
//			console.log(value,data[i].user);
//			  if(value==data[i].user&&passValue==data[i].password){
//			  	 flag=true;
//			  }
//			 
//		}
//		if(!flag){
//			alert("用户不存在");
//		}else{
//			location.href="index.html";
//		}
//	}
//   
// });
 var str=document.cookie;
 var arr=str.split("; ");
  for(var i in arr){
  	var arr1=arr[i].split("=");
  	
  	if(arr1[0]=="user"){
  		var arr2=arr1[1].split(",")
  		var userName=arr2[0];
  		var passWord=arr2[1];
  		
  	}
  }
  if($(".user1").val()==userName&&$(".pass1").val()==passWord){
  	    location.href="index.html";
  }else{
  	     alert("用户不存在");
  }
 });
  $(".btn1 .i3").click(function(){
  	$(this).toggleClass("checked");
  })
//注册页 的js;

  var oDiv=document.getElementById("main");
  var oInput=oDiv.getElementsByTagName("input");
  var oP=oDiv.getElementsByTagName("p");
  var oSpan=oDiv.getElementsByTagName("span");
  //随机数
var verNUm=function(){
  	var code="";
  	var str="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIGKMLNOPQRSTUVWXYZ";
  	for(var i=0;i<4;i++){
  		var randNum=parseInt(Math.random()*str.length);
  		var s=str[randNum];
  		console.log(str[randNum])
  	   code+=s;
  	}
    $(".en").html(code);
   }
 verNUm();
 //点击a调用函数；
    $(".refresh").click(function(){
          verNUm();
    	
    })
var flag=0;


function Input1(){

	 if(oInput[0].value.length<=3 && oInput[0].value!=""){
  	  oSpan[0].style.display="block";
  	  oP[0].style.display="";
  	}
	else if(oInput[0].value==""){
		oP[0].style.display="block";
  		oSpan[0].style.display="";
  			
  	}
	else{
		oSpan[0].style.display="";
  	    oP[0].style.display="";
	}
}
function Input2(){
	var reg2=/\w{6,20}$/;
	if(!reg2.test(oInput[1].value)||oInput[1].value==""){
		oP[1].style.display="block";
	}
	else{
		oP[1].style.display="";
	}
}
function Input3(){
	if(oInput[2].value==""){
		oSpan[1].style.display="";
		oP[2].style.display="block";
	}
	else if(oInput[2].value!=oInput[1].value){
		oSpan[1].style.display="block";
		oP[2].style.display="";
	}
	else{
		oSpan[1].style.display="";
		oP[2].style.display="";
	}
}
function Input4(){
	var reg3=/\w{11}\@.com$/
	if(!reg3.test(oInput[3].value)&&oInput[3].value!=""){
		oSpan[2].style.display="block";
		oP[3].style.display="";
	}
	else if(oInput[3].value==""){
		oSpan[2].style.display="";
		oP[3].style.display="block";
	}
	else{
		oSpan[2].style.display="";
		oP[3].style.display="";
	}
}
$(".last").click(function(){
	var reg3=/\w{11}\@.com$/;
	var reg2=/\w{6,20}$/;
	var flag=true;
	if(oInput[0].value.length<=3|| oInput[0].value==""){
		flag=false;
	}
	if(!reg2.test(oInput[1].value)||oInput[1].value==""){
		flag=false;
	}
	if(oInput[2].value!=oInput[1].value||oInput[2].value==""){
		flag=false;
	}
	if(!reg3.test(oInput[3].value)||oInput[3].value==""){
		flag=false;
	}
	if(flag&&$(".box").is(':checked')){
		$("#user").submit();
	}
	else{
		alert("请输入正确的用户名和密码");
	}
	document.cookie="user"+"="+$(".username").val()+","+$(".pass").val()+";";
})









