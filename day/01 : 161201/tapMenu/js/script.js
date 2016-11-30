var doc = document;
var tap1 = doc.getElementById("tapMenu1");
var tap2 = doc.getElementById("tapMenu2");
var tap3 = doc.getElementById("tapMenu3");
var tapBtn1 = doc.getElementById("btn1");
var tapBtn2 = doc.getElementById("btn2");
var tapBtn3 = doc.getElementById("btn3");


tapBtn2.addEventListener("click",function(){

	
	tap1.style.display = "none";

	tap2.style.display = "block";

	tap3.style.display = "none";


})

tapBtn3.addEventListener("click",function(){

	
	tap1.style.display = "none";

	tap2.style.display = "none";

	tap3.style.display = "block";


})

tapBtn1.addEventListener("click",function(){

	
	tap1.style.display = "block";

	tap2.style.display = "none";

	tap3.style.display = "none";


})