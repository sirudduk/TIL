## widdow 객체와 BOM , DOM


### window
> **window**는 모든 객체의 조상(**전역객체**)이다. 때문에 모든 객체를 다 포함하고 있으므로 생략가능하다.

> - 대표적인 메소드와 속성  
 - `window.close(),window.open(),window.encodeURI(),window.decodeURI()`
> `window.`는 안적어도 동작은 가능하나, 속도이슈와 이름충돌 이슈가 있으니 가능한 명시적으로 적어 사용하는 것이 좋다.


----------------

### BOM(Browser Object Model) 

> 브라우저에 대한 정보를 가지고 있다.

-------

### DOM(Document Object Model)

> - 노드의 집합이다.
> - 루트노드 = html (노드의 시작)
