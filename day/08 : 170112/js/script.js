const doc = document;
const canvas = doc.getElementById('tetris');
const context = canvas.getContext('2d');

context.scale(20,20);

const matrix = [
    [0, 0, 0],
    [1, 1, 1],
    [0, 1, 0]
];

function collide(arena, player) {
    const [m, o] = [player.matrix, player.pos];
    for (let y = 0; y < m.length; ++y){
        for (let x = 0; x < m[y].length; ++x) {
            if (m[y][x] !== 0 &&
                (arena[y +o.y] && 
                arena[y + o.y][x + o.x]) !== 0) {
                return true;
            }
        }
    }
    return false;
}

function createMatrix(w,h) {
    const matrix = [];
    while( h-- ) {
        matrix.push(new Array(w).fill(0));
    }
    return matrix;
}

function draw() {
    // draw the canvas frame
    context.fillStyle = '#000';
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    drawMatrix(player.matrix,player.pos);   

}

function drawMatrix(matrix, offset){
    matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value != 0) {
                context.fillStyle = 'red';
                // x,y 값
                // (0,0)(1,0)(2,0) / (0,1)(1,1)(2,1) / (0,2)(1,2)(2,2)
                context.fillRect(x + offset.x,
                                 y + offset.y,
                                 1,1);
            }
        });
    });
}

function merge(arena, player) {
    player.matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== 0) {
                arena[y + player.pos.y][x + player.pos.x] = value;
            }
        });
    });
}

function playerDrop() {
    player.pos.y++;
    if (collide(arena, player)) {
        player.pos.y--;
        merge(arena, player);
        player.pos.y = 0;
    }
    dropCounter = 0;
}
let dropCounter = 0;
let dropInterval = 1000;

let lastTime = 0;
function update(time = 0) {
    const deltaTime = time - lastTime;
    lastTime = time;
    // console.log(deltaTime);

    dropCounter += deltaTime;
    if (dropCounter > dropInterval) {
        playerDrop();
    }
    draw();
    requestAnimationFrame(update);
}

const arena = createMatrix(12,20);
// console.log(arena); console.table(arena);

const player = {
    matrix: matrix,
    pos: {x: 5, y: 5}
}
// console.log(player.matrix);
    
    // keyCode값으로 방향키 setting 
document.addEventListener('keydown',event => {
    if(event.keyCode == 37) {
        player.pos.x--;
    } else if (event.keyCode == 39) {
        player.pos.x++;
    } else if (event.keyCode == 40) {

        // down키 누르고 다시 1초 시작
        playerDrop();        
    }
    
})

update();