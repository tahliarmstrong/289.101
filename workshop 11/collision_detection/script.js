/*

Begin by following the steps in the workshop notes.

Next, add the following features:
- the gap goes red when the puck is over it
- the puck 'teleports' to the opposite boundary when it crosses one (think asteroids/snake)
- create an item that makes the puck bigger
- create an item that makes the puck smaller

*/

//declaring variables for path
var puck_x = 210;
var puck_y = 210;

var puck = document.getElementById('puck');

document.getElementById('puck').style.top = puck_y + 'px';
document.getElementById('puck').style.left = puck_x + 'px';

function checkCollision(){
    if (puck_x >= 250 && puck_x <= 350 && puck_y >= 150 && puck_y <= 250){
    gap.style.backgroundColor = 'red';
    }
    else {
    gap.style.backgroundColor = 'white';
    }
}

function teleport(){
    if (puck_x >= 590){
        puck.style.left = 0 + 'px';
    }
    else if (puck_x <= 0){
        puck.style.left = 590 + 'px';
    }
    else if (puck_y <= 0){
        puck.style.top = 390 + 'px';
    }
    else if (puck_y >= 390){
        puck.style.top = 0 + 'px';
    }
}

//move left
document.getElementById('left').addEventListener('click', function () {
    puck_x -= 50;
    document.getElementById('puck').style.left = puck_x + 'px'
    console.log('x=' + puck_x + 'y=' + puck_y)
    checkCollision();
    teleport();
});
//move right
document.getElementById('right').addEventListener('click', function(){
    puck_x += 50;
    document.getElementById('puck').style.left = puck_x + 'px'
    console.log('x=' + puck_x + 'y=' + puck_y)
    checkCollision();
    teleport();
});
//move up
document.getElementById('up').addEventListener('click', function(){
    puck_y -= 50;
    document.getElementById('puck').style.top = puck_y + 'px'
    console.log('x=' + puck_x + 'y=' + puck_y)
    checkCollision();
    teleport();
});
//move down
document.getElementById('down').addEventListener('click', function() {
    puck_y += 50;
    document.getElementById('puck').style.top = puck_y + 'px'
    console.log('x=' + puck_x + 'y=' + puck_y)
    checkCollision();
    teleport();
});