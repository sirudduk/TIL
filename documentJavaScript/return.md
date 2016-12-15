## 함수 리턴

자바스립트 함수는 **항상 리턴값을 반환**한다.
리턴값을 지정하지 않았을 경우, `undefined` 값이 리턴된다.

```javascript
function Person(name,age) {
	this.name = name;
	this.age = age;

	return {name: 'sirudduk', age: '25'};
}

var foo = new Person('foo',30);
console.dir(foo);
```
생성자 함수에서 별도의 리턴값을 지정하지 않을 경우 `this`로 바인딩된 **새로 생성된 객체가 리턴**된다.  
객체나 배열이 아닌 `boolean`,`number`,`string`을 리턴값으로 지정하면 이를 **무시**하고 `this`에 **바인딩된 객체가 리턴**된다.  
이 예제를 보면 알수 있듯이 객체 리터럴 방식의 특정 객체로 리턴값을 지정한 경우 `new` 연산자로 `Person()`생상자 함수를  
호출해서 새로운 객체를 생성하더라도, 리턴값에서 명시적으로 넘긴 객체나 배열이 리턴된다.

```javascript
function Person(name,age) {
	this.name = name;
	this.age = age;

	return 100;
}

var foo = new Person('foo',30);
console.log(foo);  // 출력값 Person {name: 'foo', age: 30}
```