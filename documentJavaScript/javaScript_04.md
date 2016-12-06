## 자바스크립트 데이터타입

### 1. 기본 타입

  - 숫자, 문자열, 불린값, null, undefined 는 기본타입이다.
  - 자바스크립트는 느슨한 타입 체크 언어이다.
  - undefined는 값이 할당되지 않은 상태이며 **undefined 타입의 변수는 변수 자체의 값 또한 undefined**이다.
  - null은 개발자가 명시적으로 값이 비어있음을 나타내는데 사용한다.
 
 ---
 
 ### 2. 참조 타입(객체 타입)
 
  - 숫자,문자열,불린값,null,undefined 같은 기본타입을 제외한 모든값은 **객체**다.
  - 객체의 모든 연산은 실제 값이 아닌 참조값으로 처리된다.
> ```javascript
> var objA = { var : 40 }; //  여기서 objA 변수는 객체 자체를 저장하고 있는 것이 
>                          //  아니라 생성된 객체를 가리키는 참조값을 저장하고 있다.
> var objB = objA;
> console.log(objA.val); //  40
> console.log(objB.val); //  40
> 
>objB.val = 50;         //  변수 objB가 가리키는 객체의 val 값을 40에서 50으로 갱신, 
>                       //  이때 변수 objA도 변수 objB와 동일한 객체를 참조하고 있으므로 objA.val 값이 50으로 변경됨.
>console.log(objA.val); //  50
>console.log(objB.val); //  50
>```

##### 2-1 객체 비교

동등 연산자(==)를 사용하여 두 객체를 비교할 때도 객체의 프로퍼티값이 아닌 참조값을 비교한다는 것에 주의해야 한다.

> ```javascript
> var a = 100;
> var b = 100;
>
> var objA = { value : 100 };
> var objB = { value : 100 };
> var objC = objB;
> 
> console.log( a == b ); // true
> console.log( objA == objB ); // false    objA와 objB는 같은 형태의 프로퍼티값을 가지고 있다. 
>                         //          하지만 객체와 같은 참조 타입의 경우는 참조값이 같아야 true가 된다.
> console.log( objB == objC ); // true     objB와 objC는 같은 객체를 참조하므로 동등 연산자(==)값이 true가 된다.
> ``` 
