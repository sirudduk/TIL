// 객체와 배열

// 객체 : 하나의 정보 덩어리
// JSON 형태 자료 

// var card = new Object();

var item_count = card.count;
var item_1 = card.item[1].id;
var item_1_content = card.item[1].content;

var complete = '전체 ' + item_count + '개 의 카드중에 2번째 카드의 아이디는 ' + item_1 + '이고 내용은 ' + item_1_content + ' 라는 내용을 가지고 있다.';


$(document).ready(function(){
    
    // document.getElementById('card2').innerHTML = complete;
    
    // var card2 = document.createElement('p');
    
    // card2.innerHTML = complete;
    
    // document.getElementById('card2').appendChild(card2);
    
    // 카드 기능 만들기
    
    start();
    
    // change 해당 태그에 상태 변화 일어나는 이벤트
    $('.filter input').on('change',function(){
        filter();
    });
    
//    $('.content button').on('click',card_delete);
    // 동적으로 추가된 태그에는 이벤트가 들어 가지 않기 때문에 해당 방법으로 구현해야 한다.
    $(document).on('click','.content button',card_delete);
    
    $(document).on('click','.content div',function(){
        
        card_select_ux(this);
    });
    
    $('.select_btn').on('click',function(){
        
        card_select_delete();
    });
    
    $('.invert_btn').on('click',function(){
        
        card_select_invert();
    });
    
    // 버그 1 - 체크상자를 클릭할때 기능이 안된다.
    $('.content div input').on('click',function(e){
        
        e.stopPropagation();
    });
    
    $('.card_add').on('click',function(){
        
        card_make();
    });
    
    $('.input_option').on('click',function(){
        
        input_content(this);
    });
        
});

function input_content(selector){
    
    var content = selector.value; // type(n)
    var content_input = document.getElementById('cardContent');
    
    var content_convert = content.replace('type','');
    
    var span_tag = document.createElement('span');
    span_tag.innerHTML = ',';
    
    content_input.innerHTML += content_convert;
    content_input.appendChild(span_tag);
    
    // content_input.value += content_convert; 
    
    // content_input.value = content_input.value + content;
}

// 새카드 만들기
function card_make(){
    
    var new_card = document.createElement('div');
    var new_card_btn = document.createElement('button');
    var new_card_input = document.createElement('input');
        
    var content = document.querySelector('.content');
    
    new_card.classList.add('show');
    new_card.classList.add('type');
    
    // 4개의 체크박스를 체크해서 선택된 체크박스의 값을 가지고 와서 내가 만들 카드(DIV)에 클래스로 추가를 시켜 줘야 한다. .vaule
    var filter_add = document.querySelectorAll('.input_option');
    var all_check = true;
    
    for ( var i = 0 ; i < filter_add.length; i++ ) {
        
        var check = filter_add[i].checked;
        
        if ( check ) { 
            
            var value = filter_add[i].value;
            new_card.classList.add(value);
            all_check = false;
        }
    }
    
    if ( all_check ) { 
        
        alert('하나이상의 타입선택이 필요 합니다.');
        return;
    }
    
    new_card_input.type = "checkbox";
    new_card_btn.innerHTML = 'x';
    new_card.appendChild(new_card_btn);
    new_card.appendChild(new_card_input);
    content.appendChild(new_card);
    
    setTimeout(function(){
        
        move();
    },100);
}

// 카드선택반전 기능
function card_select_invert(){
    
    var select_card = document.querySelectorAll('.show');
    
    for ( var i = 0; i < select_card.length; i++ ) {
        
        var input_check = select_card[i].getElementsByTagName('input');
        
        if ( input_check[0].checked ) {
            
            input_check[0].checked = false;
        } else {
            
            input_check[0].checked = true;
        }
    }
}

// 카드를 선택하여 삭제 하는 기능
function card_select_delete(){
    
    // 전체 카드의 상태를 체크(인풋)해서 온오프 봐서 체크온인 상태에 카드들을 삭제(remove) 시킨다.
    
    var select_card = document.querySelectorAll('.show'); // 배열
    
    for ( var i = 0; i < select_card.length; i++ ) {
        
        var check_input = select_card[i].getElementsByTagName('input');
        
        if ( check_input[0].checked ) {
            
            select_card[i].remove();
        }
    }
 
    move(); // 재배치 되는 기능 ( 함수 재활용 )
}

function card_select_ux(selector){
    
    // this
    // selector -> <div><input /></div>
    
    var input_tag = selector.getElementsByTagName('input');
    
    // input_tag[0].checked  // true/ false
    
    if ( input_tag[0].checked ) {
        
        input_tag[0].checked = false;
    } else {
        
        input_tag[0].checked = true;
    }
    
    //input_tag[0].checked = true;
}

// 카드 개별 삭제 기능
function card_delete(){
    
    this.parentNode.remove();
    move();
}

// 필터기능 구현
function filter(){
    
    var option = document.querySelectorAll('.option');
    var option_length = option.length // 배열 갯수
    
    var card_show = document.querySelectorAll('.type');
    
    for ( var k = 0; k < card_show.length; k++ ) {
        
        card_show[k].style.display = "block";  
        card_show[k].classList.remove('hide');
        card_show[k].classList.add('show');
    }
    
    for ( var i = 0; i < option_length; i++ ) {
        
        if ( !option[i].checked ) {
            
            var value = option[i].value
            var item_hide = document.querySelectorAll('.' + value);
            
            for ( var j = 0; j < item_hide.length; j++ ) {
                
                item_hide[j].style.display = "none";
                item_hide[j].classList.remove('show');
                item_hide[j].classList.add('hide');
            }
        }
    }
    
    move();
}

function start(){ // 서비스 될 카드들의 정보를 가지고와서 태그를 만들어 준다.

    var content = document.querySelector('.content');
    
    for ( var i = 0; i < card.count; i++ ) {
        
        var item = document.createElement('div');
        var btn = document.createElement('button');
        var sel = document.createElement('input');
        
        // input 타입을 설정할때
        sel.type = "checkbox";
        
        var item_content = 'id : ' + card.item[i].id + ' content : ' + card.item[i].content;

        item.innerHTML = item_content;
        item.classList.add('type');
        item.classList.add('show');
      
        for ( var j = 0; j < card.item[i].type.length; j++ ) {
          
          item.classList.add(card.item[i].type[j]);
        }
        
        btn.innerHTML = 'x';
        item.appendChild(btn);
        item.appendChild(sel);
        content.appendChild(item);
    }
        
    setTimeout(function(){
        
        move();
    },100);
}

function move(){
    
    var item = document.querySelectorAll('.show'); // 배열구성
    var item_length = item.length; // 배열의 갯수
    var count = 5; // 한줄에 들어갈 카드 갯수
    
    for ( var i = 0; i < item_length; i++ ) {
        
        var x = (i % count) * 210;
        var y = parseInt(i / count) * 110;
        
        item[i].style.left = x + 'px'; // 210, 420, 640
        item[i].style.top = y + 'px'; // 110, 220, 330
    }
}












