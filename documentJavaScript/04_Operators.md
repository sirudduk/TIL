### prototype

 - 모든 객체속에는 **프로토타입**이 있다.  
 - 프로토타입을 통해 객체들은 **상속**을 받을수 있다.  
 - 자바스크립트의 모든 객체는 자신의 프로토타입을 가르키는 `[[Prototype]]`라는 숨겨진 프로퍼티를 가진다.  
 - 크롬 브라우저에서는 `__proto__`가 바로 이 숨겨진 `[[Prototype]]` 프로퍼티를 의미한다.


---
### 동등(==)연산자와 일치(===)연산자

 - 자바스크립트에서는 두값이 동일한지를 확인할때, 두 연산자를 모두 사용할 수 있다.
 - 두 연산자의 차이는 아래와 같다.
```javascript
console.log( 1 == '1' );    // true  동등(==)연산자는 비교하려는 피연산자의 타입이 다를 경우에 타입을 변환 후 비교
console.log( 1 === '1' );	// false  일치(===)연산자는 타입을 변경하지 않고 비교
```
**동등(==)연산자**는 타입변환에 따른 **잘못된 결과**를 얻을 수 있으므로 사용하지 않는게 좋다.

---

### !!연산자

!!연산자는 피연산자를 **불린값으로 변환**하는 것이다.
```javascript
console.log(!!0);			// false
console.log(!!1);			// true
console.log(!!'');			// false
console.log(!!'string');	// true
console.log(!!null);		// false
console.log(!!undefined);	// false
console.log(!!true);		// true	
console.log(!!false);		// false
console.log(!!{});			// true   객체는 빈 객체라도 true로 변환되는 것에 주의.
console.log(!![1,2,3]);		// true
```

 