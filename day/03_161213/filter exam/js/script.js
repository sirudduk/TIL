
function Poster(){

	this.init = function(){

		var posterList = $('.show');
		var count = 10;
		// 포스터 자리배치
		for(var i=0;i<posterList.length;i++){

			var x = (i%count)* 120;
			var y = parseInt(i/count)* 165;


			posterList[i].style.left = x +'px';
			posterList[i].style.top = y +'px';
		}
	},

	this.btnState = function(option,postertype){
		var option = $(option);
		var postertype = $(postertype);

		for(var i=0; i<postertype.length;i++){

			postertype[i].classList.remove('hide');

		}		

		option.on('change',function(){

			if(option.checked == true){

				for(var i=0; i<postertype.length;i++){

					postertype[i].style.display = 'block';
					option.checked = !option.checked;
					postertype[i].classList.remove('hide');
					postertype[i].classList.add('show');

				}
			} else {

				for(var i=0; i<postertype.length;i++){

					postertype[i].style.display = 'none';
					option.checked = !option.checked;
					postertype[i].classList.remove('show');
					postertype[i].classList.add('hide');

				}
			}

			poster.init();
		});
	}
}



var poster = new Poster();


$(document).ready(function(){

	poster.init();
	poster.btnState('.action_op','.action');
	poster.btnState('.fear_op','.fear');
	poster.btnState('.romance_op','.romance');
	poster.btnState('.drama_op','.drama');
	


});

