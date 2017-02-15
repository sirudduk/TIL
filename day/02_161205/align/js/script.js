// 프로토타입

var a = {
    
    num : 10
}

a.num;

function Name(){
    
    this.me = 100;
}

Name.prototype.number = 10;

Name.prototype.plus = function(){};

var open = new Name(); 

open.me = 50;

var close = new Name();


// 이미지 정렬 기능

// 절차지향 프로그래밍

$(document).ready(function(){
    
    // Dom 컨트롤 편하기때문에 제이쿼리를 사용한다.
    $('#horizontal').on('click',function(){
        
        horizontal(); // 호출
    });
    
    $('#vertical').on('click',function(){
       
        vertical();
    });
    
    $('#random').on('click',function(){
        
        random();
    });
    
    $('#grid').on('click',function(){
        
        grid();
    });
            
});

// 전역변수
var doc = document;
var imgtag = doc.getElementsByTagName('img'); // 7개
// 배열로써 선택된 img 태그들을 가지고 온다.

// 전역함수
function horizontal(){
    
    /*
    imgtag[0].style.left = '0px';
    imgtag[0].style.top = '0px';
    
    imgtag[1].style.left = '200px';
    imgtag[1].style.top = '0px';
    
    imgtag[2].style.left = '400px';
    imgtag[2].style.top = '0px';*/
    
    for ( var i = 0; i < imgtag.length; i++ ) {
        
        var x = i * 200;
        
        imgtag[i].style.left = x + 'px';
        imgtag[i].style.top = '0px';
    }
}

function vertical(){
    
    for ( var i = 0; i < imgtag.length; i++ ) {
        
        var y = i * 270;
        
        imgtag[i].style.left = '0px';
        imgtag[i].style.top = y + 'px';
    }
}

function random(){
    
    // Math.random(); 0~1
    
    // x축 0 200
    // y축 0 270
    
    for ( var i = 0; i < imgtag.length; i++ ) {
        
        var x = Math.random() * 200; 
        var y = Math.random() * 270;
        
        imgtag[i].style.left = x + 'px';
        imgtag[i].style.top = y + 'px';
    }
}

/* 

    (0)0 * 0       (1)200 * 0       (2)400 * 0
    (3->0)0 * 200     (4->1)200 * 200     (5->2)400 * 200
    (6->0)0 * 400     (7->1)200 * 400     (8->2)400 * 400
            
*/

function grid(){
    
    var count = 3;
    
    for ( var i = 0; i < imgtag.length; i++ ) {
     
        var x = (i % count) * 200;
        var y = parseInt(i / count) * 270; // 소수를 정수화 시킴
        
        imgtag[i].style.left = x + 'px';
        imgtag[i].style.top = y + 'px';
    }
}































