# tetris tutorials 01

html5에 추가된 canvas요소를 이용하여 tetris 게임을 간단히 만들어보며 javascript를 공부하던중 이해가 안가는  
부분이 많아 하나하나 오목조목 이해를 하고 넘어가고자 이 포스팅을 하게 되었다.  

일단 최상단 경로에 `index.html`을 만들고 기본 셋팅을 하겠다.
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Tetris</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

    <canvas id="tetris" width="240" height="480"></canvas>
<script src="tetris.js"></script>
</body>
</html>
```   

그리고 `tetris.js` 파일을 생성 후 아래와 같이 소스코드를 입력한다.
```javascript
const canvas = document.getElementById('tetris');
const context = canvas.getContext('2d');

context.fillStyle = '#000';
context.fillRect(0, 0, canvas.width, canvas.height);
``` 
위의 소스코드는 
  


