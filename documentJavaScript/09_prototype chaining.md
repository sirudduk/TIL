## prototype chaining

#### 1. 프로토타입의 의미  
  
자바와 같은 객체지향 프로그래밍에서는 클래스를 정의하고 이를 통해 객체를 생성하지만, 자바스크립트에서는  
이러한 클래스 개념이 없다. 대신 객체 리터럴이나 생성자 함수를 통해 객체를 생성하고 이때 생성된 부모 객체가  
바로 **프로토타입**객체 이다. 이 **프로토타입** 객체를 통해 다른 언어처럼 상속을 구현할수 있다.  
자바스크립트의 모든 객체는 부모인 프로토타입 객체를 가리키는 참조 링크 형태의 숨겨진 프로퍼티가 있다.  
**ECMAScript**에서는 이러한 링크를 **암묵적 프로토타입 링크**(implicit prototype link)라고 부르며 이러한 링크는  
모든 객체의 **[[Prototype]]**프로퍼티에 저장된다.
```javascript
// Person 생성자 함수
function Person(name) {
	this.name = name;
}

// foo 객체 생성
var foo = new Person('foo');

console.dir(Person);
console.dir(foo);
```
> 위 예제의 출력 결과를 확인해보면 `Person`생성자 함수의 `prototype` 프로퍼티로 `Person.prototype`객체를 가르키고  
> `Person.prototype`객체의 `constructor`는 `Person`생성자 함수를 가르킨다. 그리고 새로 생성된 `foo`객체의  
> `__proto__`,즉 **[[Prototype]]**은 `Person.prototype`객체를 가리킨다.(`__proto__`는 크롬이나 파이어폭스에서 명시적으로  
> 제공하는 프로퍼티이고 **ECMAScript**에서는 **[[Prototype]]**프로퍼티라 칭한다. 따라서 서로 같다고 간주하면 된다.)  
> 다시말해 `__proto__`프로퍼티는 모든 객체에 존재하는 숨겨진 프로퍼티로 객체 자신의 프로토타입 객체를 가리키는 참조 링크 정보다.  

#### 2. 프로토타입 체이닝  

##### 2-1 객체 리터럴 방식으로 생성된 객체의 프로토타입 체이닝  

**프로토타입 체이닝**이란 자바스크립트에서 특정 객체의 프로퍼티나 메서드에 접근하려고 할 때, 해당 객체에 접근하려는 프로퍼티 또는 메서드가  
없다면 **[[Prototype]]**링크를 따라 자신의 부모 역할을 하는 프로토타입 객체의 프로퍼티를 차례대로 검색하는 것을 **프로토타입 체이닝**이라고 한다.  
```javascript
var Obj = {
	name: 'foo',
	sayName: function(){
		console.log('My name is' + this.name);
	}
};

Obj.sayName();	// My name is foo
console.log(Obj.hasOwnproperty('name')); // true
console.log(Obj.hasOwnproperty('age'));  // false
```
> 위 예제를 살펴보면 `Obj.hasOwnproperty()`메서드가 `Obj`객체의 메서드가 아닌데 정상동작 하였다. 앞에서 객체를 리터럴방식으로  
> 생성하였을때는 `Object()`생성자 함수를 통해 생성된다고 했다. 이때 프로토타입 체이닝으로 인해 `Obj`객체의 **[[Prototype]]**  
> 링크를 따라 `Object.prototype`프로토타입 객체 내에 `hasOwnProperty()`메서드가 있는지 검색하여 실행한다.  
> `hasOwnProperty()`메서드는 자바스크립트 표준 API로 `Obeject.prototype`에 포함되어 있다. 따라서 `Obj`객체내에  
> `hasOwnProperty()`메서드가 없어도 에러가 나지 않고 정상적으로 코드가 수행된다.

