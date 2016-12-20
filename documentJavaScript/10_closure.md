# Closure 

## 1.closure의 의미  
**보통 자바스크립트내에서는 함수의 생명주기는 끝이났지만 함수내의 변수를 내부함수가 참조하고 있기 때문에 유지되어 접근할수 있는 함수를 클로저라고 한다.**   
예제를 보자.  
```javascript
function outFunc(){
	
	var x = 10;
	var innerFunc = function(){
		console.log(x);
	}
	return innerFunc;
}
var inner = outFunc();
inner(); // 10
```
이 예제는 자바스크립트로 클로저를 구현하는 전형적인 패턴이다.  
`outFunc`함수를 살펴보면 변수 `x`가 생성되고 `innerFunc`함수가 생성되는데 이 함수는 x값을 콘솔창에 보여주는 함수다. 그리고 `innerFunc`함수가 끝나고 `outFunc`함수는 `innerFunc`를 반환한다.  
이제 `outFunc()`의 결과 값을 변수 `inner`가 참조하게 했다.  
이때 이미 생명주기가 끝난 `outFunc`함수의 변수를 참조하는 함수 `innerFunc`를 **클로저**이다.  

