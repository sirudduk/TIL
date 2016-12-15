
# javaScript core 

--------------------------------------------------

#### 코어 : 자바스크립트 언어의 기초이자, 프로그래밍 언어의 기본

>**변수(Variables)** : 

> - 데이터를 담아 필요할때 쓸수있는 공간.
> - 원시 데이터 유형 ( 숫자, 문자, 논리, undefined, null )
> - 원시 데이터 유형은 값이 복제가 된다.
> - 자료형 데이터 유형 ( 객체, 배열, 함수 )
> - 자료형 데이터 유형은 데이터가 참조가 된다.
> - 변수는 띄어쓰기로 만들 수 없다.
> - 변수명은 a,b와 같은 뜻이 없는 것보단 직관적으로 만들어야 한다.
> - 변수명은 숫자로 시작하면 안된다.
> - 변수명은 예약어(ex: for,if,do,function 등등)로 만들수 없다.


---

>**객체(Object):**

> - 객체는 자바스크립트를 강력하게 만들어준다.


> -  `var sirudduk = {
  firstName: 'jungkyoon',
  lastName: 'kwak'
};`

> - sirudduk 이라는 변수를 {}로 감싼 덩어리를 넣었다.
여기서 `firstName: 'jungkyoon'` 과 `lastName: 'kwak'`을 **속성(Property)**이라고 한다.
> - 속성끼리는 쉼표로 구분 짓는다.
 속성에서 `firstName`과 `lastName`을 **키(key)**라고 한다.
> - 키 뒤에 오는 `'jungkyoon'`과 `'kwak'`을  **값(Value)**라고 한다.
> - 이렇게 객체 안에는 **속성(Property)**들이 들어있고 속성은 **키(Key)**와 **값(Value)**로 이루어져 있다.
> - 객체안에 속성에 접근할때는 `sirudduk.firstName = 'jungkyoon';`
> - 속성은 객체도 들어갈 수 있다.
```javascript
var sirudduk = {  
	body: {  height: 177,weight: 70  }  
};  
sirudduk.body.height; // 177
```  
> - { }를 사용해서 만든 객체를 객체 리터럴(literal)이라고 부른다.

--------------------------

>**함수(Function) :**

> - 함수 선언 방법은 **세가지**이다.
> - **함수 표현식** 
```javascript
var add = function(x){
	var result = x + 1;
	return result;
};
```

>>ㄴ위의 표현식은 아무곳에나 정의하면 오류 발생

> - **함수 선언식**
```javascript
function add (x) {
	var result = x + 1; 
	return result; 
}
```

>>ㄴ위와 같은 선언식은 영역상단에 정의하는 것을 권장

>  - **함수 객체 생성**
```javascript
var x = new function(){
	console.log(){""};
}
```

>> ㄴ위와 같이 함수코드를 넣는경우 **보안에 취약**하다.

> - 함수 호출은 add(x);
> - 함수명 뒤에 소괄호를 붙여 호출할수 있습니다.
> - 함수를 선언할때 괄호안 값을 **매개변수(Parameter)**라고 하고 함수를 호출할때 괄호 안 값을 **인자(Argument)**라고 합니다. 
> - 매개변수가 많아지면 객체를 사용할 수 있다.
> - 함수는 **매개변수**와 **인자값**으로도 사용될 수 있는데 값으로 사용되는 함수를 **1급함수**라고 부른다.