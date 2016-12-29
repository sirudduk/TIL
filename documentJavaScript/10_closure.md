# Closure 

## 1. Closure의 의미  
#### 보통 자바스크립트내에서는 함수의 생명주기는 끝이났지만 함수내의 변수를 내부함수가  참조하고 있기 때문에 유지되어 접근할수 있는 함수를 **클로저**라고 한다.   

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
`outFunc`함수를 살펴보면 변수 `x`가 생성되고 `innerFunc`함수가 생성되는데 이 함수는 x값을 콘솔창에 보여주는 함수다.  
그리고 `innerFunc`함수가 끝나고 `outFunc`함수는 `innerFunc`를 반환한다. 이제 `outFunc()`의 결과 값을 변수  
`inner`가 참조하게 했다. 이때 이미 생명주기가 끝난 `outFunc`함수의 변수를 참조하는 함수 `innerFunc`를 **클로저**이다.  
클로저를 사용한 코드는 사용하지 않은 코드보다 메모리 부담이 많아진다. 그렇다고 클로저를 쓰지 않는 것은 자바스크립트의 강력한 기능  
하나를 안쓰게 되는것이다. 그러므로 클로저를 적재적소로 잘 사용해야하는데 그러기 위해 많은 프로그래밍 연습이 필요한 부분이다.  

## 2. Closure의 활용

클로저는 자바스크립트의 강력한 기능이지만 너무 남발하여 사용하면 안된다.  
이 예제는 클로저에서 사용자가 쉽게 간과할 수 있는 예제이다.  

```javascript
function outFunc(argNum) {
	var num = argNum;
	return function(x) {
		num += x;
		console.log('num : ' + num);
	}
}
var exam = outFunc(40);
exam(5);   // 45
exam(-10); // 35
```
`exam` 값을 호출할 때마다, 자유변수 `num`의 값은 **계속해서 변하므로 주의**해야 한다.  
이 예제는 아마 이해하기 쉬운 클로저의 아주 기본적인 예제이다.  
  
다음 예제를 보자.  

```javascript
function func(){
	var x = 1;
	return {
		func1 : function(){console.log(++x);},
		func2 : function(){console.log(-x);}
	};
};

var exam = func();
exam.func1();  //  2
exam.func2();  // -2
exam.func1();  //  3
exam.func2();  // -3
```
위 예제는 **하나의 클로저가 여러 함수 객체의 스코프 체인에 들어가 있는 경우**이다. 리턴값으로 반환되는 객체에 두개의 함수가  
정의되어 있는데, 두 함수 모두 자유변수 `x`를 참조한다.   

```javascript
function Counter(sec) {
	for(var i = 1; i <= sec; i++) {
		setTimeout(function(){
			console.log(i);
		},i * 1000);
	}
};
Counter(3);
```
`Counter`라는 함수에 매개변수로 `3`이라는 값을 주고 실행시켰다. 아마 클로저의 개념을 잘 이해하고 있지 못하다면 값이 이상하다고  
생각할것이다. 나도 처음엔 위의 예제가 너무 이해가 안가 골치가 아팠다. 다시 코드로 돌아가보면 `Counter`함수를 실행시키면 `for`문이  
실행된다. `for`문 안에는 `setTimeout()`이라는 `window` 기본 메서드가 있다. `setTimeout()` 메서드는 매개변수로 함수와  
시간(delay)을 받는다. 자, 여기서 `Counter(3)`함수를 실행시키면 `for`문이 실행되고 `for`문 `i`의 초기설정값은 `1`이다.  
`Counter`함수의 인자값으로 `3`을 전달 하므로 루프는 3번 실행된다. 이때 `for`문 안에 `setTimeout`메서드는 `for`문이 끝난후  
실행되는데 `setTimeout()`이 실행할때 참조하는 `i`의 값은 `for`문이 종료될때의 값인 `4`를 가진다.  
즉 `for`문 내부의 코드는 즉시실행되는 반면 `setTimeout()`은 비동기 실행문이라 `setTimeout()`의 실행시점과 `for`문의  
실행시점은 다르다. 그리하여 `console.log(i)`의 출력값은 4가 1초에 한번씩 세번 출력된다.  
  
그럼 원하는 값을 얻기위해 코드를 수정해보자.  
`setTimeout()` 메서드를 즉시실행함수로 감싸 `for`문과 실행시점을 맞추는 코드이다.  
  
```javascript
function Counter(sec) {
	for(var i = 1; i <= sec; i++) {
		(function (innerSec) {
			setTimeout(function(){
				console.log(innerSec);
			},innerSec * 1000);
		}(i));
	}
};

Counter(3);
```




