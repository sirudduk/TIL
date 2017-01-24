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
    <link rel="stylesheet" href="../../Resources/common.css">
    <link rel="stylesheet" href="../../Resources/effects/button-effects.css">
</head>
<body>

    <div class="container clearfix">
        <h1>Tetris</h1>
        <div class="menu">
            <button class="shadow grow-skew button" id="start_btn">start / restart</button>
            <button class="shadow button grow-spin" id="right_btn">right turn</button>
            <button class="shadow button grow-spin-ccw" id="left_btn">left turn</button>
        </div>
        <div id="wrap">
            <div class="score_wrap">
                <span id="score_text"></span>
                <span id="score"></span>
            </div>
            <canvas id="tetris" width="240" height="480"></canvas>
        </div>
    </div>
            <script src="js/script.js"></script>
</body>
</html>
```  
  


