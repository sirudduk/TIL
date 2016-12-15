## 강제로 인스턴스 생성하기

생성자 함수를 사용하여 객체를 생성할때 `new`키워드를 사용해서 호출해야 하는데 그렇지 않을 경우에는 에러를 발생시킨다.
그런 위험성을 피하려고 사용되는 패턴이다.  
```javascript
function Person(arg) {
	if(!(this instanceof Person))
		return new Person(arg);
	this.value = arg ? arg : 0;
}

var a = new Person(100);
var b = Person(200);

console.log(a.value);	   // 100
console.log(b.value);	   // 200
console.log(window.value); // undefined
```
## call과 apply 메서드를 이용한 명시적 this 바인딩

이 메서드들은 모둔 함수의 부모 객체인 `Function.prototype`객체의 메서드이므로 모든함수에서 호출가능하다.
```javascript
// apply() 사용법
// function.apply(thisArg,argArray);

function Person(name, age, gender){
	this.name = name;
	this.age = age;
	this.gender = gender;
}
// foo 빈 객체 생성
var foo = {};

// apply() 메서드 호출
Person.apply(foo,['foo',30,'man']);
console.dir(foo);

// call() 메서드 호출
// Person.call(foo,'foo',30,'man');
// console.dir(foo);
```
`thisArg`는 apply() 메서드를 호출한 함수내부에서 사용한 `this`에 바인딩할 객체를 가리킨다.  
`argArray`는 배열을 자신을 호출한 함수의 인자로 사용하되, 이 함수 내부에서 사용된 `this`는 첫 번째 인자인 `thisArg` 객체로  
바인딩해서 함수를 호출하는 기능이다.    
`call()`메서드는 두번째 인자값을 배열 형태로 넘기지 않고 각각 하나의 인자로 넘긴다.  
> `apply()`는 메서드를 호출하는 주체가 함수고, `apply()` 메서드도 `this`를 특정 객체에 바인딩할 뿐 본질적인 기능은  
> **함수 호출**이다.

