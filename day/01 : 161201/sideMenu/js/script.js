var doc = document;
var slideBtn = doc.getElementById('slideBtn');
var menuBox = doc.getElementById('box');
var num = -176;
var flag = false;

function open(){

	slideBtn.addEventListener("click",function(){

		if ( num == -176){

		flag = true

	}

		var m = setInterval(function(){

			if ( flag == false ) {

				clearInterval(m);

			}

			flag == true;
			// console.log(flag);
			if( num > -1 ){

				clearInterval(m);
				flag = false;
				return
				
			}
			
			num++;
			
			menuBox.style.left = num + "px";


			if ( num == 0 ) {

				flag = true

				console.log(flag);

				slideBtn.addEventListener("click",function(){

					var k = setInterval(function(){

						flag = true;

						if ( num == -176 ) {

							clearInterval(k);
							flag = false;
							return
						}
						console.log(flag);

						num--;

						menuBox.style.left = num + "px";

						console.log(num);
					

					},1)


				})

				

			} else {
				return
			}
			

		},1)

	})


}



open();


