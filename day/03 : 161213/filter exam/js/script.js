var doc = document;
var posterList = doc.querySelectorAll('.poster');
var actionBtn = doc.querySelector('.action_btn')

var action = doc.querySelectorAll('.action')

// console.log(actionBtn.checked);
$(document).ready(function(){

	init();
	move();


})

function init(){
	//한줄에 들어갈 갯수
	var count = 10;
	// 포스터 자리배치
	for(var i=0;i<posterList.length;i++){

		var x = (i%count)* 120;
		var y = parseInt(i/count)* 165;


		posterList[i].style.left = x +'px';
		posterList[i].style.top = y +'px';


	}
} 

function move(){

	for(var i=0;i<action.length;i++){

		if(actionBtn.checked===false){

			action[i].style.display = "none";

		}

	}

}