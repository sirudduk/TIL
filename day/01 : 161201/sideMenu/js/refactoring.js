var doc = document;
var slideBtn = doc.getElementById('slideBtn');
var menuBox = doc.getElementById('box');
var num = -176;
var slide =null;
var play = false;

	slideBtn.addEventListener("click",function(){
 		if(play === false){
 		numsum();
 		}else {
 		numminu();	
 		}
	})

	function numsum(){
		clearInterval(slide)
	      slide= setInterval(function(){
		 	num++;
		 	stop()
		  	boxCss()		  		
		 },1) 
	      play = true 
	}

	function numminu(){
		clearInterval(slide)
	      slide = setInterval(function(){
		 	num--;
		 	stop2()
		  	boxCss()		
		 },1)
	      play = false
	  }

	function stop(){
			if(num>=0){
				clearInterval(slide)
			}
	}	

	function stop2(){
			if(num<=-176){
				clearInterval(slide)
			}
	}	

	  function boxCss(){
		 menuBox.style.left = num + "px";
 	}