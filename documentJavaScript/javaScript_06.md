## javaScript this 바인딩

자바스크립트에서 **this**란 매우 중요한 키워드이다.
> this란 함수 내에서 함수 호출 맥락을 의미한다. 즉 함수를 어떻게 호출하느냐에 따라서
> **this가 바인딩 되는 대상**이 달라진다.

### 1. 객체 리터럴방식 this 바인딩

```javascript
var value = 100;

var myObject = {
	value: 1,
	func1: function(){
		this.value += 1;
		console.log(this.value);	// 2
		
		func2 = function(){
			this.value += 1;
			console.log(this.value);	// 101

			func3 = function(){
				this.value += 1;
				console.log(this.value);	// 102
			}
		func3();
		}
	func2();
	}
};

myObject.func1();
```

위와 같이 출력되는 이유는 자바스크립트에서는 **내부 함수 호출 패턴을 정의해 놓지 않기 때문**이라고 한다.

이런 내부 함수가 this를 참조하는 자바스크립트의 한계를 극복하려면 부모 함수의 this를 내부 함수가  
접근 가능한 다른 변수에 저장하는 방법을 사용한다.

```javascript
var value = 100;

var myObject = {
	value: 1,
	func1: function(){
		var that = this;	// this를 변수에 저장.
		this.value += 1;
		console.log(this.value);	// 2
		
		func2 = function(){
			that.value += 1;
			console.log(that.value);	// 3

			func3 = function(){
				that.value += 1;
				console.log(that.value);	// 4
			}
		func3();
		}
	func2();
	}
};

myObject.func1();
```

위와 같이 this 바인딩의 한계를 극복할수 있다.

### 2. 생성자 함수를 호출할때 this 바인딩

자바스크립트에서는 생성자 함수 호출할 때, 생성자 함수 코드 내부에서 this는 리터럴 객체생성 방식의 this 바인딩과는 다르게 동작한다.

```javascript
// Person() 생성자 함수
var Person = function(){
	// 함수 코드 실행전
	this.name = name;
	// 함수 리턴
};

// foo 객체 생성
var foo = new Person('foo');
console.log(foo.name);	// 출력값 : foo
```
> **작동순서**
> 1. Person() 함수가 생성자로 호출되면, 함수 코드가 실행되기 전에 **빈 객체 생성**.
> 2. 빈 객체는 Person.prototype을 **링크로 연결해서 자신의 프로토타입으로 설정**.
> 3. this가 가리키는 빈 객체에 name이라는 동적 프로퍼티 생성.
> 4. 리턴값이 없으므로 this로 바인딩한 객체가 생성자 함수의 리턴값으로 반환되서, foo 변수에 저장. 

### 3. 객체 리터럴 방식과 생성자 함수를 통한 객체 생성방식의 차이

객체 리터럴 방식은 자신의 프로토타입 객체가 **Object**(Object.prototype)이고 생성자 함수 방식의  
경우는 **생성자함수명.prototype**로 서로 다르다.

