// 객체지향 프로그래밍

$(document).ready(function(){
    
    var gallery = new Gallery('img');
//    var gallery1 = new Gallery('div');
//    var gallery2 = new Gallery('a');
    
    $('#horizontal').on('click',function(){
        
//        gallery.horizontal();
//        horizontal.align()
        gallery.show(horizontal);
    });

    $('#vertical').on('click',function(){

        gallery.show(vertical);
    });

    $('#random').on('click',function(){

        gallery.show(random);
    });

    $('#grid').on('click',function(){

        gallery.show(grid);
    });


});

// 1. 추상화

/*
    
    이미지 정렬 클래스
    
    대상태그 - 프로퍼티
    
    기능 ============
    가로정렬();
    세로정렬();
    랜덤정렬();
    바둑판정렬();

*/

// 2. 캡슐화

function TagList(){ // 태그들을 배열로 넣을수 있겠끔 해주는 클래스
    
    this._tag = null; 
}

function Gallery(select){
    
    this.init(select);
}

Gallery.prototype = new TagList(); // 상속

Gallery.prototype.init = function(selector){
    
    this._tag = document.getElementsByTagName(selector);
}

Gallery.prototype.show = function(alignable){
    
    alignable.align(this._tag);
}

// 다형성
var horizontal = {
    
    align : function(tag){
        
        for ( var i = 0; i < tag.length; i++ ) {
        
            var x = i * 200;

            tag[i].style.left = x + 'px';
            tag[i].style.top = '0px';
        }
    }
}

var vertical = {

    align : function(tag){

        for (var i=0;i<tag.length;i++){

            var y = i * 270;

            tag[i].style.left = '0px';
            tag[i].style.top = y + 'px';
        }

    }
}

var random = {

    align : function(tag){

        for (var i=0;i<tag.length;i++){

        var x = Math.random()*200;
        var y = Math.random()*270;

        tag[i].style.left = x + '0px';
        tag[i].style.top = y + 'px';
        }

    }

}

var grid = {

    align : function(tag){

        var count = 3;
    
        for ( var i = 0; i < tag.length; i++ ) {
     
        var x = (i % count) * 200;
        var y = parseInt(i / count) * 270; // 소수를 정수화 시킴
        
        tag[i].style.left = x + 'px';
        tag[i].style.top = y + 'px';
    }

    }
}





















